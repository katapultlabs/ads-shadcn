// Eval harness + regression gate for the ADS Light agentic loop.
//
//   npm run eval
//
// Runs eval/golden.json against the live MCP server (spawned over stdio) and
// scores recommend_component, review_ui, fix_ui, and scaffold_screen. This is the
// credibility layer: it proves the loop actually chooses the right component,
// catches the right violations, fixes what it can, and scaffolds the right
// pattern — and fails CI when any of that regresses.
//
// review/fix/scaffold render, so a build (dist/) or the explorer must be present.

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const golden = JSON.parse(await readFile(resolve(root, "eval/golden.json"), "utf8"));

const transport = new StdioClientTransport({ command: "node", args: ["mcp-server/index.js"], cwd: root });
const client = new Client({ name: "ads-eval", version: "1.0.0" });
await client.connect(transport);

const call = async (name, args) => {
  const r = await client.callTool({ name, arguments: args });
  return JSON.parse(r.content.find((c) => c.type === "text")?.text ?? "{}");
};

const results = [];
const record = (section, name, pass, detail) => {
  results.push({ section, name, pass, detail });
  console.log(`  ${pass ? "✓" : "✗"} [${section}] ${name}${pass ? "" : `  — ${detail}`}`);
};

// --- recommend_component: an expected component must appear in the top 3. ---
console.log("\nrecommend_component (top-3 recall)");
for (const t of golden.recommend) {
  const r = await call("recommend_component", { task: t.task, limit: 3 });
  const names = Array.isArray(r.recommendations) ? r.recommendations.map((x) => x.name) : [];
  const hit = t.expectTop3.some((e) => names.includes(e));
  record("recommend", t.task, hit, `got [${names.join(", ")}], wanted one of [${t.expectTop3.join(", ")}]`);
}

// --- review_ui: verdict + the expected rules must fire (single-mode for speed). ---
console.log("\nreview_ui (verdict + rules)");
for (const t of golden.review) {
  const r = await call("review_ui", { code: t.code, single: true });
  const rules = (r.findings ?? []).map((f) => f.rule);
  const verdictOk = r.verdict === t.expectVerdict;
  const rulesOk = (t.expectRules ?? []).every((rule) => rules.some((x) => x === rule || x.startsWith(rule)));
  record("review", t.name, verdictOk && rulesOk, `verdict ${r.verdict} (want ${t.expectVerdict}), rules [${rules.join(", ")}]`);
}

// --- fix_ui: mechanical fixes must take the code to the expected verdict. ---
console.log("\nfix_ui (auto-correction)");
for (const t of golden.fix) {
  const r = await call("fix_ui", { code: t.code });
  const ok = r.verdict === t.expectVerdictAfter;
  record("fix", t.name, ok, `after-fix verdict ${r.verdict} (want ${t.expectVerdictAfter}); changes ${r.fixedCount ?? 0}`);
}

// --- scaffold_screen: the recommended starting pattern must be an expected one. ---
console.log("\nscaffold_screen (pattern match)");
for (const t of golden.scaffold) {
  const r = await call("scaffold_screen", { brief: t.brief });
  const names = (r.patterns ?? []).map((p) => p.name);
  const start = r.recommendedStart?.name;
  const ok = t.expectStartIn.includes(start) || t.expectStartIn.some((e) => names.slice(0, 2).includes(e));
  record("scaffold", t.brief, ok, `start ${start}, candidates [${names.join(", ")}]`);
}

await client.close();

const passed = results.filter((r) => r.pass).length;
const total = results.length;
const failed = total - passed;
console.log(`\neval — ${passed}/${total} passed, ${failed} failed.`);
process.exit(failed ? 1 : 0);
