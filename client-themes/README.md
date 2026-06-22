# client-themes/

Stored per-client brand layers. Each `<slug>.json` has the same shape as the
root `client-theme.json` (the file the explorer actually imports).

- Create / switch with `npm run new-client` (see [../ONBOARDING.md](../ONBOARDING.md)).
- Activating a client copies its file to `../client-theme.json` and backs up the
  previous active theme to `../client-theme.backup.json`.
- Only the brand layer lives here. Components, tokens scales, and patterns stay
  shared — per CLAUDE.md, a client branch should normally change only the theme.
