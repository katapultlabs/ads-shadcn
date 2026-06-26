export const richComponentMeta = [
  {
    "name": "Box",
    "category": "Foundations",
    "description": "Box is a foundations primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Unstyled div wrapper; style via Tailwind."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Unstyled div wrapper; style via Tailwind.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Box",
      "slots": [],
      "requiredParts": [
        "Box"
      ],
      "optionalParts": [],
      "composition": "Box is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Box",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Box when the foundation's box module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.821Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Box when the foundation's box module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Padded surface",
        "jsx": "<Box className=\"rounded-lg border border-border bg-card p-4 text-foreground\">Content</Box>"
      }
    ],
    "relatedComponents": [
      "Flex",
      "Stack",
      "Container"
    ]
  },
  {
    "name": "Center",
    "category": "Foundations",
    "description": "Center is a foundations primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Base: flex items-center justify-center."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Base: flex items-center justify-center.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Center",
      "slots": [],
      "requiredParts": [
        "Center"
      ],
      "optionalParts": [],
      "composition": "Center is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Center",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Center when the foundation's center module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.822Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Center when the foundation's center module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Centered",
        "jsx": "<Center className=\"size-32 rounded-lg bg-muted text-foreground\">Centered</Center>"
      }
    ],
    "relatedComponents": [
      "AbsoluteCenter",
      "Flex",
      "Circle"
    ]
  },
  {
    "name": "Checkmark",
    "category": "Foundations",
    "description": "Checkmark is a foundations primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "checked",
      "unchecked"
    ],
    "controls": [
      {
        "name": "checked",
        "label": "Checked",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "checked",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Filled primary box with check when true."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "checked",
          "unchecked"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "checked": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Filled primary box with check when true.",
        "control": "checked"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "checked",
          "unchecked"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "checked",
        "kind": "base",
        "visualIntent": "Checked appearance for verifying Checkmark before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "checked"
      },
      {
        "name": "unchecked",
        "kind": "base",
        "visualIntent": "Unchecked appearance for verifying Checkmark before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "unchecked"
      }
    ],
    "anatomy": {
      "root": "Checkmark",
      "slots": [],
      "requiredParts": [
        "Checkmark"
      ],
      "optionalParts": [],
      "composition": "Checkmark is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Checkmark",
        "Foundations",
        "default",
        "checked",
        "unchecked"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Checkmark when the foundation's checkmark module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "checked",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.822Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Checkmark when the foundation's checkmark module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "States",
        "jsx": "<div className=\"flex gap-2\"><Checkmark checked /><Checkmark checked={false} /></div>"
      }
    ],
    "relatedComponents": [
      "Radiomark",
      "Checkbox"
    ]
  },
  {
    "name": "Circle",
    "category": "Foundations",
    "description": "Circle is a foundations primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Base: flex items-center justify-center rounded-full; set size via size-*."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Base: flex items-center justify-center rounded-full; set size via size-*.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Circle",
      "slots": [],
      "requiredParts": [
        "Circle"
      ],
      "optionalParts": [],
      "composition": "Circle is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Circle",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Circle when the foundation's circle module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Circle when the foundation's circle module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Avatar dot",
        "jsx": "<Circle className=\"size-12 bg-primary text-primary-foreground\">A</Circle>"
      }
    ],
    "relatedComponents": [
      "Square",
      "Center"
    ]
  },
  {
    "name": "ClientOnly",
    "category": "Foundations",
    "description": "ClientOnly is a foundations primitive.",
    "importFrom": "react",
    "utility": true,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "ClientOnly",
      "slots": [],
      "requiredParts": [
        "ClientOnly"
      ],
      "optionalParts": [],
      "composition": "ClientOnly is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "ClientOnly",
        "Foundations",
        "default"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use ClientOnly when the foundation's client-only module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 1,
        "names": [
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use ClientOnly when the foundation's client-only module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Note",
        "jsx": "<div className=\"rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground\">ClientOnly is a render-gating helper, not a visual component. Mount children only after hydration with a useEffect/useState gate.</div>"
      }
    ],
    "relatedComponents": [
      "Show"
    ]
  },
  {
    "name": "Code",
    "category": "Foundations",
    "description": "Code is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Inline <code> with muted background, mono font."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Inline <code> with muted background, mono font.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Code",
      "slots": [],
      "requiredParts": [
        "Code"
      ],
      "optionalParts": [],
      "composition": "Code is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Code",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Code when the foundation's code module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Code when the foundation's code module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Inline",
        "jsx": "<Text>Run <Code>git status</Code> to check changes.</Text>"
      }
    ],
    "relatedComponents": [
      "Kbd",
      "CodeBlock"
    ]
  },
  {
    "name": "CodeBlock",
    "category": "Foundations",
    "description": "CodeBlock is a foundations primitive.",
    "importFrom": "@/components/ads/misc",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "copied"
    ],
    "controls": [
      {
        "name": "code",
        "label": "Code",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "code",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Source rendered in the block."
      },
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "title",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Header label; falls back to language."
      },
      {
        "name": "language",
        "label": "Language",
        "type": "text",
        "options": [],
        "default": "tsx",
        "urlParam": "language",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Shown when no title."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "copied"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "code": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Source rendered in the block.",
        "control": "code"
      },
      "title": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Header label; falls back to language.",
        "control": "title"
      },
      "language": {
        "type": "string",
        "default": "tsx",
        "values": [],
        "required": false,
        "description": "Shown when no title.",
        "control": "language"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "copied"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "copied",
        "kind": "base",
        "visualIntent": "Copied appearance for verifying CodeBlock before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "copied"
      }
    ],
    "anatomy": {
      "root": "CodeBlock",
      "slots": [],
      "requiredParts": [
        "CodeBlock"
      ],
      "optionalParts": [],
      "composition": "CodeBlock is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "CodeBlock",
        "Foundations",
        "default",
        "copied",
        "code",
        "title",
        "language"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use CodeBlock when the foundation's code-block module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "code",
          "title",
          "language",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use CodeBlock when the foundation's code-block module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "With title",
        "jsx": "<CodeBlock title=\"button.tsx\" code={\"export const Button = () => <button>Click</button>;\"} className=\"w-96\" />"
      }
    ],
    "relatedComponents": [
      "Code",
      "Clipboard"
    ]
  },
  {
    "name": "ColorPicker",
    "category": "Foundations",
    "description": "ColorPicker is a foundations primitive.",
    "importFrom": "@/components/ads/misc",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "#145fc4",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Initial hex color (literal color value)."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "label",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Optional label."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "Preview value",
        "urlParam": "value",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls the value prop for ColorPicker."
      }
    ],
    "propMetadata": {
      "defaultValue": {
        "type": "string",
        "default": "#145fc4",
        "values": [],
        "required": false,
        "description": "Initial hex color (literal color value).",
        "control": "defaultValue"
      },
      "label": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Optional label.",
        "control": "label"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "value": {
        "type": "text",
        "default": "Preview value",
        "values": [],
        "required": false,
        "description": "Controls the value prop for ColorPicker.",
        "control": "value"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "ColorPicker",
      "slots": [],
      "requiredParts": [
        "ColorPicker"
      ],
      "optionalParts": [],
      "composition": "ColorPicker is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "ColorPicker",
        "Foundations",
        "default",
        "defaultValue",
        "label"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use ColorPicker when the foundation's color-picker module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "defaultValue",
          "label",
          "state",
          "value"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use ColorPicker when the foundation's color-picker module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<ColorPicker defaultValue=\"#145fc4\" label=\"Brand color\" className=\"w-64\" />"
      }
    ],
    "relatedComponents": [
      "ColorSwatch"
    ]
  },
  {
    "name": "ColorSwatch",
    "category": "Foundations",
    "description": "ColorSwatch is a foundations primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "value",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "CSS color; prefer a token reference like var(--primary)."
      },
      {
        "name": "size",
        "label": "Size",
        "type": "number",
        "options": [],
        "default": 32,
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Width/height in pixels."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "value": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "CSS color; prefer a token reference like var(--primary).",
        "control": "value"
      },
      "size": {
        "type": "number",
        "default": 32,
        "values": [],
        "required": false,
        "description": "Width/height in pixels.",
        "control": "size"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "ColorSwatch",
      "slots": [],
      "requiredParts": [
        "ColorSwatch"
      ],
      "optionalParts": [],
      "composition": "ColorSwatch is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "ColorSwatch",
        "Foundations",
        "default",
        "value",
        "size"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use ColorSwatch when the foundation's color-swatch module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "value",
          "size",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use ColorSwatch when the foundation's color-swatch module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Token swatch",
        "jsx": "<div className=\"flex gap-2\"><ColorSwatch value=\"var(--primary)\" size={32} /><ColorSwatch value=\"var(--secondary)\" size={32} /><ColorSwatch value=\"var(--destructive)\" size={32} /></div>"
      }
    ],
    "relatedComponents": [
      "Square",
      "Box"
    ]
  },
  {
    "name": "DatePicker",
    "category": "Foundations",
    "description": "DatePicker is a foundations primitive.",
    "importFrom": "@/components/ui/calendar",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "focus",
      "open",
      "hover",
      "focus-visible",
      "disabled",
      "invalid"
    ],
    "controls": [
      {
        "name": "defaultOpen",
        "label": "Default Open",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "defaultOpen",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "On Popover; opens the calendar."
      },
      {
        "name": "mode",
        "label": "Mode",
        "type": "select",
        "options": [
          "single",
          "multiple",
          "range"
        ],
        "default": "single",
        "urlParam": "mode",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "On Calendar; selection mode."
      },
      {
        "name": "captionLayout",
        "label": "Caption Layout",
        "type": "select",
        "options": [
          "label",
          "dropdown"
        ],
        "default": "label",
        "urlParam": "captionLayout",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "On Calendar; header layout."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "focus",
          "open",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "defaultOpen": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "On Popover; opens the calendar.",
        "control": "defaultOpen"
      },
      "mode": {
        "type": "string",
        "default": "single",
        "values": [
          "single",
          "multiple",
          "range"
        ],
        "required": false,
        "description": "On Calendar; selection mode.",
        "control": "mode"
      },
      "captionLayout": {
        "type": "string",
        "default": "label",
        "values": [
          "label",
          "dropdown"
        ],
        "required": false,
        "description": "On Calendar; header layout.",
        "control": "captionLayout"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "focus",
          "open",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying DatePicker before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying DatePicker before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying DatePicker before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying DatePicker before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying DatePicker before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying DatePicker before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "DatePicker",
      "slots": [
        "popovertrigger",
        "popovercontent",
        "calendar"
      ],
      "requiredParts": [
        "DatePicker"
      ],
      "optionalParts": [
        "popovertrigger",
        "popovercontent",
        "calendar"
      ],
      "composition": "Compose DatePicker with its documented slot parts: popovertrigger, popovercontent, calendar."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "DatePicker",
        "Foundations",
        "default",
        "focus",
        "open",
        "hover",
        "focus-visible",
        "disabled",
        "invalid",
        "defaultOpen",
        "mode",
        "captionLayout"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use DatePicker when the foundation's date-picker module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "defaultOpen",
          "mode",
          "captionLayout",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use DatePicker when the foundation's date-picker module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<Popover defaultOpen><PopoverTrigger asChild><Button variant=\"outline\" className=\"w-56 justify-start text-left font-normal\"><Calendar />Pick a date</Button></PopoverTrigger><PopoverContent className=\"w-auto p-0\"><Calendar mode=\"single\" /></PopoverContent></Popover>"
      }
    ],
    "relatedComponents": [
      "Calendar",
      "Popover",
      "Input"
    ]
  },
  {
    "name": "DesignTokens",
    "category": "Foundations",
    "description": "A visual summary of the active primitive, semantic, and component token layers.",
    "importFrom": "@/components",
    "utility": true,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "DesignTokens",
      "slots": [],
      "requiredParts": [
        "DesignTokens"
      ],
      "optionalParts": [],
      "composition": "DesignTokens is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "DesignTokens",
        "Foundations",
        "default"
      ],
      "selectionCriteria": {
        "chooseWhen": "Auditing brand coverage Checking theme values before design work Documenting client-level visual decisions",
        "avoidWhen": "End-user application UI Replacing component-specific usage examples",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 1,
        "names": [
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Auditing brand coverage",
      "Checking theme values before design work",
      "Documenting client-level visual decisions"
    ],
    "neverUseFor": [
      "End-user application UI",
      "Replacing component-specific usage examples"
    ],
    "examples": [
      {
        "name": "Token reference",
        "jsx": "<div className=\"rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground\">Open the <span className=\"font-medium text-foreground\">Tokens</span> view in the explorer header to browse the live theme variables.</div>"
      }
    ],
    "relatedComponents": [
      "ColorSwatch"
    ]
  },
  {
    "name": "Em",
    "category": "Foundations",
    "description": "Em is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Renders <em>, italic."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Renders <em>, italic.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Em",
      "slots": [],
      "requiredParts": [
        "Em"
      ],
      "optionalParts": [],
      "composition": "Em is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Em",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Em when the foundation's em module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Em when the foundation's em module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Inline",
        "jsx": "<Text>This is <Em>really</Em> the last step.</Text>"
      }
    ],
    "relatedComponents": [
      "Strong",
      "Span",
      "Text"
    ]
  },
  {
    "name": "For",
    "category": "Foundations",
    "description": "For is a foundations primitive.",
    "importFrom": "react",
    "utility": true,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "For",
      "slots": [],
      "requiredParts": [
        "For"
      ],
      "optionalParts": [],
      "composition": "For is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "For",
        "Foundations",
        "default"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use For when the foundation's for module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 1,
        "names": [
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use For when the foundation's for module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Array map",
        "jsx": "<div className=\"flex gap-2\">{[\"Spec\",\"Render\",\"Verify\"].map((item) => (<span key={item} className=\"rounded-md bg-secondary px-2 py-1 text-sm text-secondary-foreground\">{item}</span>))}</div>"
      }
    ],
    "relatedComponents": [
      "Show"
    ]
  },
  {
    "name": "Format",
    "category": "Foundations",
    "description": "Format is a foundations primitive.",
    "importFrom": "react",
    "utility": true,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Format",
      "slots": [],
      "requiredParts": [
        "Format"
      ],
      "optionalParts": [],
      "composition": "Format is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Format",
        "Foundations",
        "default"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Format when the foundation's format module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 1,
        "names": [
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Format when the foundation's format module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Intl format",
        "jsx": "<div className=\"flex gap-4 text-sm text-foreground\"><span>{new Intl.NumberFormat(\"en-US\", { style: \"currency\", currency: \"USD\" }).format(1234.56)}</span><span>{new Intl.NumberFormat(\"en-US\").format(2048000)}</span></div>"
      }
    ],
    "relatedComponents": []
  },
  {
    "name": "Heading",
    "category": "Foundations",
    "description": "Heading is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl"
    ],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "size",
        "label": "Size",
        "type": "select",
        "options": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl"
        ],
        "default": "lg",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Adjusts density, scale, and touch target size for Heading."
      },
      {
        "name": "as",
        "label": "As",
        "type": "select",
        "options": [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6"
        ],
        "default": "h2",
        "urlParam": "as",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Heading tag; controls semantics."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "as": {
        "type": "string",
        "default": "h2",
        "values": [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6"
        ],
        "required": false,
        "description": "Heading tag; controls semantics.",
        "control": "as"
      },
      "size": {
        "type": "string",
        "default": "lg",
        "values": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl"
        ],
        "required": false,
        "description": "Visual type scale.",
        "control": "size"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Heading",
      "slots": [],
      "requiredParts": [
        "Heading"
      ],
      "optionalParts": [],
      "composition": "Heading is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Heading",
        "Foundations",
        "default",
        "as",
        "size"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Heading when the foundation's heading module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "size",
          "as",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Heading when the foundation's heading module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Heading>Section title</Heading>"
      },
      {
        "name": "Page title",
        "jsx": "<Heading as=\"h1\" size=\"2xl\">Dashboard</Heading>"
      }
    ],
    "relatedComponents": [
      "Text",
      "Span"
    ]
  },
  {
    "name": "Highlight",
    "category": "Foundations",
    "description": "Highlight is a foundations primitive.",
    "importFrom": "@/components/ads/misc",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "text",
        "label": "Text",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "text",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Full text; matches wrapped in <mark>."
      },
      {
        "name": "query",
        "label": "Query",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "query",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Term(s) to highlight; string or string[]."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "text": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Full text; matches wrapped in <mark>.",
        "control": "text"
      },
      "query": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Term(s) to highlight; string or string[].",
        "control": "query"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Highlight",
      "slots": [],
      "requiredParts": [
        "Highlight"
      ],
      "optionalParts": [],
      "composition": "Highlight is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Highlight",
        "Foundations",
        "default",
        "text",
        "query"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Highlight when the foundation's highlight module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "text",
          "query",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Highlight when the foundation's highlight module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Multi query",
        "jsx": "<Highlight text=\"The quick brown fox jumps\" query={[\"quick\",\"fox\"]} />"
      }
    ],
    "relatedComponents": [
      "Mark",
      "CodeBlock"
    ]
  },
  {
    "name": "Icon",
    "category": "Foundations",
    "description": "Icon is a foundations primitive.",
    "importFrom": "lucide-react",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "size",
        "label": "Size",
        "type": "number",
        "options": [],
        "default": "",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Pixel size of the lucide icon."
      },
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Color/size via Tailwind (h-/w-/text-)."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "size": {
        "type": "number",
        "default": null,
        "values": [],
        "required": false,
        "description": "Pixel size of the lucide icon.",
        "control": "size"
      },
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Color/size via Tailwind (h-/w-/text-).",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Icon",
      "slots": [],
      "requiredParts": [
        "Icon"
      ],
      "optionalParts": [],
      "composition": "Icon is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Icon",
        "Foundations",
        "default",
        "size",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Icon when the foundation's icon module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "size",
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Icon when the foundation's icon module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Icon row",
        "jsx": "<Span className=\"inline-flex items-center gap-2 text-foreground\"><Search className=\"h-4 w-4 text-muted-foreground\" /><Check className=\"h-4 w-4 text-primary\" /><ArrowRight className=\"h-4 w-4\" /></Span>"
      }
    ],
    "relatedComponents": [
      "Image",
      "Span"
    ]
  },
  {
    "name": "Image",
    "category": "Foundations",
    "description": "Image is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "src",
        "label": "Src",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "src",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Image source URL."
      },
      {
        "name": "alt",
        "label": "Alt",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "alt",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Accessible alternative text."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "src": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Image source URL.",
        "control": "src"
      },
      "alt": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Accessible alternative text.",
        "control": "alt"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Image",
      "slots": [],
      "requiredParts": [
        "Image"
      ],
      "optionalParts": [],
      "composition": "Image is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Image",
        "Foundations",
        "default",
        "src",
        "alt"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Image when the foundation's image module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "src",
          "alt",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Image when the foundation's image module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Rounded",
        "jsx": "<Image src=\"https://github.com/shadcn.png\" alt=\"Avatar\" className=\"size-16 rounded-full\" />"
      }
    ],
    "relatedComponents": [
      "Icon",
      "Avatar"
    ]
  },
  {
    "name": "Kbd",
    "category": "Foundations",
    "description": "Kbd is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Renders <kbd> as a keycap."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Renders <kbd> as a keycap.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Kbd",
      "slots": [],
      "requiredParts": [
        "Kbd"
      ],
      "optionalParts": [],
      "composition": "Kbd is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Kbd",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Kbd when the foundation's kbd module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Kbd when the foundation's kbd module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Shortcut",
        "jsx": "<Text>Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to search.</Text>"
      }
    ],
    "relatedComponents": [
      "Code",
      "Span"
    ]
  },
  {
    "name": "Link",
    "category": "Foundations",
    "description": "Link is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "hover",
      "focus-visible",
      "disabled",
      "active"
    ],
    "controls": [
      {
        "name": "href",
        "label": "Href",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "href",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Anchor target."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "active"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "href": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Anchor target.",
        "control": "href"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "active"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Link before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Link before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Link before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "active",
        "kind": "interaction",
        "visualIntent": "Active appearance for verifying Link before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "active"
      }
    ],
    "anatomy": {
      "root": "Link",
      "slots": [],
      "requiredParts": [
        "Link"
      ],
      "optionalParts": [],
      "composition": "Link is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "interactive",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "button/link action",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Link",
        "Foundations",
        "default",
        "hover",
        "focus-visible",
        "disabled",
        "active",
        "href"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Link when the foundation's link module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "href",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Link when the foundation's link module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Link href=\"#\">Read the docs</Link>"
      }
    ],
    "relatedComponents": [
      "Text",
      "SkipNav"
    ]
  },
  {
    "name": "Locale",
    "category": "Foundations",
    "description": "Locale is a foundations primitive.",
    "importFrom": "react",
    "utility": true,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Locale",
      "slots": [],
      "requiredParts": [
        "Locale"
      ],
      "optionalParts": [],
      "composition": "Locale is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Locale",
        "Foundations",
        "default"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Locale when the foundation's locale module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 1,
        "names": [
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Locale when the foundation's locale module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Note",
        "jsx": "<div className=\"rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground\">Locale is a context helper for i18n formatting, not a visual component. Provide a locale via React context and read it where you format dates/numbers.</div>"
      }
    ],
    "relatedComponents": [
      "Format"
    ]
  },
  {
    "name": "Mark",
    "category": "Foundations",
    "description": "Mark is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Renders <mark> with accent highlight."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Renders <mark> with accent highlight.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Mark",
      "slots": [],
      "requiredParts": [
        "Mark"
      ],
      "optionalParts": [],
      "composition": "Mark is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Mark",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Mark when the foundation's mark module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.823Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Mark when the foundation's mark module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Search hit",
        "jsx": "<Text>Found in <Mark>invoice</Mark> records.</Text>"
      }
    ],
    "relatedComponents": [
      "Span",
      "Strong",
      "Highlight"
    ]
  },
  {
    "name": "Quote",
    "category": "Foundations",
    "description": "Quote is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Inline <q>, italic."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Inline <q>, italic.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Quote",
      "slots": [],
      "requiredParts": [
        "Quote"
      ],
      "optionalParts": [],
      "composition": "Quote is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Quote",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Quote when the foundation's quote module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Quote when the foundation's quote module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Inline",
        "jsx": "<Text>She said <Quote>ship it today</Quote> and left.</Text>"
      }
    ],
    "relatedComponents": [
      "Blockquote",
      "Em"
    ]
  },
  {
    "name": "Radiomark",
    "category": "Foundations",
    "description": "Radiomark is a foundations primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "checked",
      "unchecked"
    ],
    "controls": [
      {
        "name": "checked",
        "label": "Checked",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "checked",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Filled dot inside a ring when true."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "checked",
          "unchecked"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "checked": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Filled dot inside a ring when true.",
        "control": "checked"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "checked",
          "unchecked"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "checked",
        "kind": "base",
        "visualIntent": "Checked appearance for verifying Radiomark before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "checked"
      },
      {
        "name": "unchecked",
        "kind": "base",
        "visualIntent": "Unchecked appearance for verifying Radiomark before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "unchecked"
      }
    ],
    "anatomy": {
      "root": "Radiomark",
      "slots": [],
      "requiredParts": [
        "Radiomark"
      ],
      "optionalParts": [],
      "composition": "Radiomark is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Radiomark",
        "Foundations",
        "default",
        "checked",
        "unchecked"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Radiomark when the foundation's radiomark module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "checked",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Radiomark when the foundation's radiomark module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "States",
        "jsx": "<div className=\"flex gap-2\"><Radiomark checked /><Radiomark checked={false} /></div>"
      }
    ],
    "relatedComponents": [
      "Checkmark",
      "RadioGroup"
    ]
  },
  {
    "name": "SegmentGroup",
    "category": "Foundations",
    "description": "SegmentGroup is a foundations primitive.",
    "importFrom": "@/components/ui/toggle-group",
    "utility": false,
    "variants": [
      "default",
      "outline"
    ],
    "sizes": [
      "default",
      "sm",
      "lg"
    ],
    "states": [
      "default",
      "hover",
      "focus",
      "checked",
      "disabled",
      "focus-visible",
      "invalid"
    ],
    "controls": [
      {
        "name": "variant",
        "label": "Variant",
        "type": "select",
        "options": [
          "default",
          "outline"
        ],
        "default": "default",
        "urlParam": "variant",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Selects the visual treatment for SegmentGroup."
      },
      {
        "name": "size",
        "label": "Size",
        "type": "select",
        "options": [
          "default",
          "sm",
          "lg"
        ],
        "default": "default",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Adjusts density, scale, and touch target size for SegmentGroup."
      },
      {
        "name": "type",
        "label": "Type",
        "type": "select",
        "options": [
          "single",
          "multiple"
        ],
        "default": "",
        "urlParam": "type",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Use single for a segmented control."
      },
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled initial selected value."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus",
          "checked",
          "disabled",
          "focus-visible",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "type": {
        "type": "string",
        "default": null,
        "values": [
          "single",
          "multiple"
        ],
        "required": false,
        "description": "Use single for a segmented control.",
        "control": "type"
      },
      "variant": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "outline"
        ],
        "required": false,
        "description": "Shared visual style via context.",
        "control": "variant"
      },
      "size": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "sm",
          "lg"
        ],
        "required": false,
        "description": "Shared item size via context.",
        "control": "size"
      },
      "defaultValue": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled initial selected value.",
        "control": "defaultValue"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus",
          "checked",
          "disabled",
          "focus-visible",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [
      {
        "name": "default",
        "default": true,
        "visualIntent": "Base rendering when no visual recipe is exposed.",
        "whenToUse": "Use for the strongest emphasis or primary action.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "outline",
        "default": false,
        "visualIntent": "Outline visual treatment for SegmentGroup.",
        "whenToUse": "Use for secondary actions or bordered surfaces.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      }
    ],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying SegmentGroup before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying SegmentGroup before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "checked",
        "kind": "base",
        "visualIntent": "Checked appearance for verifying SegmentGroup before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "checked"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying SegmentGroup before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying SegmentGroup before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying SegmentGroup before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "SegmentGroup",
      "slots": [
        "togglegroupitem"
      ],
      "requiredParts": [
        "SegmentGroup"
      ],
      "optionalParts": [
        "togglegroupitem"
      ],
      "composition": "Compose SegmentGroup with its documented slot parts: togglegroupitem."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "SegmentGroup",
        "Foundations",
        "default",
        "outline",
        "hover",
        "focus",
        "checked",
        "disabled",
        "focus-visible",
        "invalid",
        "type",
        "variant",
        "size",
        "defaultValue"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use SegmentGroup when the foundation's segment-group module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 5,
        "names": [
          "variant",
          "size",
          "type",
          "defaultValue",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use SegmentGroup when the foundation's segment-group module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Single",
        "jsx": "<ToggleGroup type=\"single\" defaultValue=\"center\" variant=\"outline\"><ToggleGroupItem value=\"left\" aria-label=\"Left\"><AlignLeft /></ToggleGroupItem><ToggleGroupItem value=\"center\" aria-label=\"Center\"><AlignCenter /></ToggleGroupItem><ToggleGroupItem value=\"right\" aria-label=\"Right\"><AlignRight /></ToggleGroupItem></ToggleGroup>"
      },
      {
        "name": "Text",
        "jsx": "<ToggleGroup type=\"single\" defaultValue=\"day\"><ToggleGroupItem value=\"day\">Day</ToggleGroupItem><ToggleGroupItem value=\"week\">Week</ToggleGroupItem><ToggleGroupItem value=\"month\">Month</ToggleGroupItem></ToggleGroup>"
      }
    ],
    "relatedComponents": [
      "Toggle",
      "RadioGroup",
      "Tabs"
    ]
  },
  {
    "name": "Span",
    "category": "Foundations",
    "description": "Span is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Inline span; style via Tailwind."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Inline span; style via Tailwind.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Span",
      "slots": [],
      "requiredParts": [
        "Span"
      ],
      "optionalParts": [],
      "composition": "Span is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Span",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Span when the foundation's span module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Span when the foundation's span module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Inline",
        "jsx": "<Text>Status: <Span className=\"font-medium text-primary\">Active</Span></Text>"
      }
    ],
    "relatedComponents": [
      "Text",
      "Strong",
      "Em"
    ]
  },
  {
    "name": "Square",
    "category": "Foundations",
    "description": "Square is a foundations primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Base: aspect-square; width drives height."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Base: aspect-square; width drives height.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Square",
      "slots": [],
      "requiredParts": [
        "Square"
      ],
      "optionalParts": [],
      "composition": "Square is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Square",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Square when the foundation's square module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Square when the foundation's square module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Icon tile",
        "jsx": "<Square className=\"w-12 rounded-md bg-secondary text-secondary-foreground\"><Star /></Square>"
      }
    ],
    "relatedComponents": [
      "Circle",
      "Center"
    ]
  },
  {
    "name": "Strong",
    "category": "Foundations",
    "description": "Strong is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Renders <strong>, semibold."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Renders <strong>, semibold.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Strong",
      "slots": [],
      "requiredParts": [
        "Strong"
      ],
      "optionalParts": [],
      "composition": "Strong is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Strong",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Strong when the foundation's strong module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Strong when the foundation's strong module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Inline emphasis",
        "jsx": "<Text>Save your work, <Strong>this cannot be undone</Strong>.</Text>"
      }
    ],
    "relatedComponents": [
      "Em",
      "Span",
      "Text"
    ]
  },
  {
    "name": "Text",
    "category": "Foundations",
    "description": "Text is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Renders a <p> with relaxed leading."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Renders a <p> with relaxed leading.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Text",
      "slots": [],
      "requiredParts": [
        "Text"
      ],
      "optionalParts": [],
      "composition": "Text is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Text",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Text when the foundation's text module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Text when the foundation's text module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Text>Body copy that explains the section in plain language.</Text>"
      },
      {
        "name": "Muted",
        "jsx": "<Text className=\"text-muted-foreground\">Secondary supporting copy.</Text>"
      }
    ],
    "relatedComponents": [
      "Heading",
      "Span",
      "Strong"
    ]
  },
  {
    "name": "VisuallyHidden",
    "category": "Foundations",
    "description": "VisuallyHidden is a foundations primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "sr-only span for screen-reader-only text."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "sr-only span for screen-reader-only text.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "VisuallyHidden",
      "slots": [],
      "requiredParts": [
        "VisuallyHidden"
      ],
      "optionalParts": [],
      "composition": "VisuallyHidden is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "VisuallyHidden",
        "Foundations",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use VisuallyHidden when the foundation's visually-hidden module matches the intended foundations pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use VisuallyHidden when the foundation's visually-hidden module matches the intended foundations pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Icon label",
        "jsx": "<Span className=\"inline-flex items-center gap-1\"><Search size={16} /><VisuallyHidden>Search</VisuallyHidden></Span>"
      }
    ],
    "relatedComponents": [
      "SkipNav",
      "Span"
    ]
  },
  {
    "name": "Button",
    "category": "Inputs",
    "description": "Triggers a user action such as saving, submitting, previewing, or starting a workflow.",
    "importFrom": "@/components/ui/button",
    "utility": false,
    "variants": [
      "default",
      "destructive",
      "success",
      "warning",
      "info",
      "outline",
      "secondary",
      "ghost",
      "link"
    ],
    "sizes": [
      "default",
      "xs",
      "sm",
      "lg",
      "icon",
      "icon-xs",
      "icon-sm",
      "icon-lg"
    ],
    "states": [
      "default",
      "hover",
      "focus",
      "disabled",
      "focus-visible",
      "active",
      "loading"
    ],
    "controls": [
      {
        "name": "variant",
        "label": "Variant",
        "type": "select",
        "options": [
          "default",
          "destructive",
          "success",
          "warning",
          "info",
          "outline",
          "secondary",
          "ghost",
          "link"
        ],
        "default": "default",
        "urlParam": "variant",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Selects the visual treatment for Button."
      },
      {
        "name": "size",
        "label": "Size",
        "type": "select",
        "options": [
          "default",
          "xs",
          "sm",
          "lg",
          "icon",
          "icon-xs",
          "icon-sm",
          "icon-lg"
        ],
        "default": "default",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Adjusts density, scale, and touch target size for Button."
      },
      {
        "name": "asChild",
        "label": "As Child",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "asChild",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Render as the child element via Radix Slot."
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "disabled",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Native disabled; reduces opacity."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus",
          "disabled",
          "focus-visible",
          "active",
          "loading"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Button",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      },
      {
        "name": "icon",
        "label": "Icon",
        "type": "select",
        "options": [
          "Search",
          "Check",
          "X",
          "ChevronRight",
          "ChevronDown",
          "ChevronLeft",
          "ChevronUp",
          "Plus",
          "Minus",
          "ArrowRight",
          "ArrowLeft",
          "Settings",
          "User",
          "Mail",
          "Bell",
          "Trash2",
          "Pencil",
          "Copy",
          "Download",
          "Upload",
          "Star",
          "Heart",
          "Calendar",
          "Clock",
          "Eye",
          "EyeOff",
          "Filter",
          "MoreHorizontal",
          "MoreVertical",
          "Menu",
          "Home",
          "LogOut",
          "Info",
          "TriangleAlert",
          "CircleCheck",
          "CircleAlert",
          "Loader2"
        ],
        "default": "Search",
        "urlParam": "icon",
        "bindsTo": "slot",
        "source": "ads-rich-metadata",
        "description": "Selects a lucide icon preloaded in the sandbox scope."
      },
      {
        "name": "iconLeft",
        "label": "Icon Left",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "iconLeft",
        "bindsTo": "slot",
        "source": "ads-rich-metadata",
        "description": "Shows or hides the leading icon slot."
      },
      {
        "name": "leftIcon",
        "label": "Left Icon",
        "type": "select",
        "options": [
          "Search",
          "Check",
          "X",
          "ChevronRight",
          "ChevronDown",
          "ChevronLeft",
          "ChevronUp",
          "Plus",
          "Minus",
          "ArrowRight",
          "ArrowLeft",
          "Settings",
          "User",
          "Mail",
          "Bell",
          "Trash2",
          "Pencil",
          "Copy",
          "Download",
          "Upload",
          "Star",
          "Heart",
          "Calendar",
          "Clock",
          "Eye",
          "EyeOff",
          "Filter",
          "MoreHorizontal",
          "MoreVertical",
          "Menu",
          "Home",
          "LogOut",
          "Info",
          "TriangleAlert",
          "CircleCheck",
          "CircleAlert",
          "Loader2"
        ],
        "default": "Search",
        "urlParam": "leftIcon",
        "bindsTo": "slot",
        "source": "ads-rich-metadata",
        "description": "Selects the lucide icon used in the leading icon slot."
      },
      {
        "name": "iconRight",
        "label": "Icon Right",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "iconRight",
        "bindsTo": "slot",
        "source": "ads-rich-metadata",
        "description": "Shows or hides the trailing icon slot."
      },
      {
        "name": "rightIcon",
        "label": "Right Icon",
        "type": "select",
        "options": [
          "Search",
          "Check",
          "X",
          "ChevronRight",
          "ChevronDown",
          "ChevronLeft",
          "ChevronUp",
          "Plus",
          "Minus",
          "ArrowRight",
          "ArrowLeft",
          "Settings",
          "User",
          "Mail",
          "Bell",
          "Trash2",
          "Pencil",
          "Copy",
          "Download",
          "Upload",
          "Star",
          "Heart",
          "Calendar",
          "Clock",
          "Eye",
          "EyeOff",
          "Filter",
          "MoreHorizontal",
          "MoreVertical",
          "Menu",
          "Home",
          "LogOut",
          "Info",
          "TriangleAlert",
          "CircleCheck",
          "CircleAlert",
          "Loader2"
        ],
        "default": "ChevronRight",
        "urlParam": "rightIcon",
        "bindsTo": "slot",
        "source": "ads-rich-metadata",
        "description": "Selects the lucide icon used in the trailing icon slot."
      }
    ],
    "propMetadata": {
      "variant": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "destructive",
          "success",
          "warning",
          "info",
          "outline",
          "secondary",
          "ghost",
          "link"
        ],
        "required": false,
        "description": "Visual style from cva variants.",
        "control": "variant"
      },
      "size": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "xs",
          "sm",
          "lg",
          "icon",
          "icon-xs",
          "icon-sm",
          "icon-lg"
        ],
        "required": false,
        "description": "Height/padding; icon sizes are square.",
        "control": "size"
      },
      "asChild": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Render as the child element via Radix Slot.",
        "control": "asChild"
      },
      "disabled": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Native disabled; reduces opacity.",
        "control": "disabled"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus",
          "disabled",
          "focus-visible",
          "active",
          "loading"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Button",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      },
      "icon": {
        "type": "select",
        "default": "Search",
        "values": [
          "Search",
          "Check",
          "X",
          "ChevronRight",
          "ChevronDown",
          "ChevronLeft",
          "ChevronUp",
          "Plus",
          "Minus",
          "ArrowRight",
          "ArrowLeft",
          "Settings",
          "User",
          "Mail",
          "Bell",
          "Trash2",
          "Pencil",
          "Copy",
          "Download",
          "Upload",
          "Star",
          "Heart",
          "Calendar",
          "Clock",
          "Eye",
          "EyeOff",
          "Filter",
          "MoreHorizontal",
          "MoreVertical",
          "Menu",
          "Home",
          "LogOut",
          "Info",
          "TriangleAlert",
          "CircleCheck",
          "CircleAlert",
          "Loader2"
        ],
        "required": false,
        "description": "Selects a lucide icon preloaded in the sandbox scope.",
        "control": "icon"
      },
      "iconLeft": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Shows or hides the leading icon slot.",
        "control": "iconLeft"
      },
      "leftIcon": {
        "type": "select",
        "default": "Search",
        "values": [
          "Search",
          "Check",
          "X",
          "ChevronRight",
          "ChevronDown",
          "ChevronLeft",
          "ChevronUp",
          "Plus",
          "Minus",
          "ArrowRight",
          "ArrowLeft",
          "Settings",
          "User",
          "Mail",
          "Bell",
          "Trash2",
          "Pencil",
          "Copy",
          "Download",
          "Upload",
          "Star",
          "Heart",
          "Calendar",
          "Clock",
          "Eye",
          "EyeOff",
          "Filter",
          "MoreHorizontal",
          "MoreVertical",
          "Menu",
          "Home",
          "LogOut",
          "Info",
          "TriangleAlert",
          "CircleCheck",
          "CircleAlert",
          "Loader2"
        ],
        "required": false,
        "description": "Selects the lucide icon used in the leading icon slot.",
        "control": "leftIcon"
      },
      "iconRight": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Shows or hides the trailing icon slot.",
        "control": "iconRight"
      },
      "rightIcon": {
        "type": "select",
        "default": "ChevronRight",
        "values": [
          "Search",
          "Check",
          "X",
          "ChevronRight",
          "ChevronDown",
          "ChevronLeft",
          "ChevronUp",
          "Plus",
          "Minus",
          "ArrowRight",
          "ArrowLeft",
          "Settings",
          "User",
          "Mail",
          "Bell",
          "Trash2",
          "Pencil",
          "Copy",
          "Download",
          "Upload",
          "Star",
          "Heart",
          "Calendar",
          "Clock",
          "Eye",
          "EyeOff",
          "Filter",
          "MoreHorizontal",
          "MoreVertical",
          "Menu",
          "Home",
          "LogOut",
          "Info",
          "TriangleAlert",
          "CircleCheck",
          "CircleAlert",
          "Loader2"
        ],
        "required": false,
        "description": "Selects the lucide icon used in the trailing icon slot.",
        "control": "rightIcon"
      }
    },
    "variantMetadata": [
      {
        "name": "default",
        "default": true,
        "visualIntent": "Base rendering when no visual recipe is exposed.",
        "whenToUse": "Use for the strongest emphasis or primary action.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "destructive",
        "default": false,
        "visualIntent": "Destructive visual treatment for Button.",
        "whenToUse": "Use for irreversible or dangerous actions; pair with explicit copy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "success",
        "default": false,
        "visualIntent": "Success visual treatment for Button.",
        "whenToUse": "Use when success best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "warning",
        "default": false,
        "visualIntent": "Warning visual treatment for Button.",
        "whenToUse": "Use when warning best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "info",
        "default": false,
        "visualIntent": "Info visual treatment for Button.",
        "whenToUse": "Use when info best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "outline",
        "default": false,
        "visualIntent": "Outline visual treatment for Button.",
        "whenToUse": "Use for secondary actions or bordered surfaces.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "secondary",
        "default": false,
        "visualIntent": "Secondary visual treatment for Button.",
        "whenToUse": "Use for supporting actions that stay visible.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "ghost",
        "default": false,
        "visualIntent": "Ghost visual treatment for Button.",
        "whenToUse": "Use for low-emphasis actions in dense or inline contexts.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "link",
        "default": false,
        "visualIntent": "Link visual treatment for Button.",
        "whenToUse": "Use for low-emphasis actions in dense or inline contexts.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      }
    ],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Button before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying Button before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Button before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Button before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "active",
        "kind": "interaction",
        "visualIntent": "Active appearance for verifying Button before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "active"
      },
      {
        "name": "loading",
        "kind": "status",
        "visualIntent": "Loading appearance for verifying Button before delivery.",
        "behavior": "Shows pending async work while preserving context.",
        "simulation": "loading"
      }
    ],
    "anatomy": {
      "root": "Button",
      "slots": [],
      "requiredParts": [
        "Button"
      ],
      "optionalParts": [],
      "composition": "Button is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "interactive",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": true,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Button text must name the action",
        "Icon-only actions must use IconButton with aria-label",
        "Loading state should preserve context",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "button/link action",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "high",
      "queryTerms": [
        "Button",
        "Inputs",
        "default",
        "destructive",
        "success",
        "warning",
        "info",
        "outline",
        "secondary",
        "ghost",
        "link",
        "hover",
        "focus",
        "disabled",
        "focus-visible",
        "active",
        "loading",
        "variant",
        "size",
        "asChild"
      ],
      "selectionCriteria": {
        "chooseWhen": "Primary actions Form submission Toolbar commands Short imperative actions",
        "avoidWhen": "Page navigation when Link is semantic Long descriptive text Passive status labels",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 11,
        "names": [
          "variant",
          "size",
          "asChild",
          "disabled",
          "state",
          "label",
          "icon",
          "iconLeft",
          "leftIcon",
          "iconRight",
          "rightIcon"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Primary actions",
      "Form submission",
      "Toolbar commands",
      "Short imperative actions"
    ],
    "neverUseFor": [
      "Page navigation when Link is semantic",
      "Long descriptive text",
      "Passive status labels"
    ],
    "examples": [
      {
        "name": "Variants",
        "jsx": "<div className=\"flex flex-wrap gap-2\"><Button>Default</Button><Button variant=\"secondary\">Secondary</Button><Button variant=\"outline\">Outline</Button><Button variant=\"destructive\">Destructive</Button><Button variant=\"ghost\">Ghost</Button><Button variant=\"link\">Link</Button></div>"
      },
      {
        "name": "Sizes",
        "jsx": "<div className=\"flex items-center gap-2\"><Button size=\"sm\">Small</Button><Button>Default</Button><Button size=\"lg\">Large</Button></div>"
      },
      {
        "name": "With icon",
        "jsx": "<Button><Search />Search</Button>"
      },
      {
        "name": "Status actions",
        "jsx": "<div className=\"flex flex-wrap gap-2\"><Button variant=\"success\">Approve</Button><Button variant=\"warning\">Review</Button><Button variant=\"info\">Details</Button><Button variant=\"destructive\">Delete</Button></div>"
      }
    ],
    "relatedComponents": [
      "IconButton",
      "Toggle"
    ]
  },
  {
    "name": "Checkbox",
    "category": "Inputs",
    "description": "A binary or multi-select control where each choice can be independently selected.",
    "importFrom": "@/components/ui/checkbox",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "checked",
      "focus",
      "disabled",
      "hover",
      "focus-visible",
      "invalid"
    ],
    "controls": [
      {
        "name": "checked",
        "label": "Checked",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "checked",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Controlled checked state."
      },
      {
        "name": "defaultChecked",
        "label": "Default Checked",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "defaultChecked",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled initial checked state."
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "disabled",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Disables and dims the control."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "checked",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Checkbox",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      }
    ],
    "propMetadata": {
      "checked": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Controlled checked state.",
        "control": "checked"
      },
      "defaultChecked": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled initial checked state.",
        "control": "defaultChecked"
      },
      "disabled": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Disables and dims the control.",
        "control": "disabled"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "checked",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Checkbox",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "checked",
        "kind": "base",
        "visualIntent": "Checked appearance for verifying Checkbox before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "checked"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying Checkbox before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Checkbox before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Checkbox before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Checkbox before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying Checkbox before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "Checkbox",
      "slots": [],
      "requiredParts": [
        "Checkbox"
      ],
      "optionalParts": [],
      "composition": "Checkbox is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Label each checkbox with visible text",
        "Group related choices with Fieldset",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Checkbox",
        "Inputs",
        "default",
        "checked",
        "focus",
        "disabled",
        "hover",
        "focus-visible",
        "invalid",
        "defaultChecked"
      ],
      "selectionCriteria": {
        "chooseWhen": "Independent binary choices Multi-select lists Agreement confirmations",
        "avoidWhen": "Mutually exclusive choices Immediate settings toggles where Switch is clearer",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 5,
        "names": [
          "checked",
          "defaultChecked",
          "disabled",
          "state",
          "label"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Independent binary choices",
      "Multi-select lists",
      "Agreement confirmations"
    ],
    "neverUseFor": [
      "Mutually exclusive choices",
      "Immediate settings toggles where Switch is clearer"
    ],
    "examples": [
      {
        "name": "With label",
        "jsx": "<div className=\"flex items-center gap-2\"><Checkbox id=\"terms\" defaultChecked /><Label htmlFor=\"terms\">Accept terms and conditions</Label></div>"
      },
      {
        "name": "States",
        "jsx": "<div className=\"flex items-center gap-4\"><Checkbox /><Checkbox defaultChecked /><Checkbox disabled /></div>"
      }
    ],
    "relatedComponents": [
      "RadioGroup",
      "Switch",
      "Label"
    ]
  },
  {
    "name": "CheckboxCard",
    "category": "Inputs",
    "description": "CheckboxCard is a inputs primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "checked",
      "hover",
      "focus-visible",
      "disabled",
      "invalid"
    ],
    "controls": [
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "label",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Bold primary line."
      },
      {
        "name": "description",
        "label": "Description",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "description",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Secondary muted line."
      },
      {
        "name": "defaultChecked",
        "label": "Default Checked",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "defaultChecked",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Initial checked state."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "checked",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "label": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Bold primary line.",
        "control": "label"
      },
      "description": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Secondary muted line.",
        "control": "description"
      },
      "defaultChecked": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Initial checked state.",
        "control": "defaultChecked"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "checked",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "checked",
        "kind": "base",
        "visualIntent": "Checked appearance for verifying CheckboxCard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "checked"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying CheckboxCard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying CheckboxCard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying CheckboxCard before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying CheckboxCard before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "CheckboxCard",
      "slots": [],
      "requiredParts": [
        "CheckboxCard"
      ],
      "optionalParts": [],
      "composition": "CheckboxCard is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "CheckboxCard",
        "Inputs",
        "default",
        "checked",
        "hover",
        "focus-visible",
        "disabled",
        "invalid",
        "label",
        "description",
        "defaultChecked"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use CheckboxCard when the foundation's checkbox-card module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "label",
          "description",
          "defaultChecked",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use CheckboxCard when the foundation's checkbox-card module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<CheckboxCard label=\"Email notifications\" description=\"Get notified about account activity\" defaultChecked className=\"w-72\" />"
      }
    ],
    "relatedComponents": [
      "RadioCard",
      "Checkbox"
    ]
  },
  {
    "name": "Combobox",
    "category": "Inputs",
    "description": "Searchable selection control for picking from a list or entering values.",
    "importFrom": "@/components/ui/command",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "focus",
      "open",
      "hover",
      "focus-visible",
      "disabled",
      "invalid"
    ],
    "controls": [
      {
        "name": "defaultOpen",
        "label": "Default Open",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "defaultOpen",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "On Popover; opens the dropdown."
      },
      {
        "name": "placeholder",
        "label": "Placeholder",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "placeholder",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "On CommandInput; search placeholder."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "focus",
          "open",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "defaultOpen": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "On Popover; opens the dropdown.",
        "control": "defaultOpen"
      },
      "placeholder": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "On CommandInput; search placeholder.",
        "control": "placeholder"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "focus",
          "open",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying Combobox before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying Combobox before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Combobox before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Combobox before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Combobox before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying Combobox before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "Combobox",
      "slots": [
        "popovertrigger",
        "popovercontent",
        "command",
        "commandinput",
        "commandlist",
        "commandempty",
        "commandgroup",
        "commanditem"
      ],
      "requiredParts": [
        "Combobox"
      ],
      "optionalParts": [
        "popovertrigger",
        "popovercontent",
        "command",
        "commandinput",
        "commandlist",
        "commandempty",
        "commandgroup",
        "commanditem"
      ],
      "composition": "Compose Combobox with its documented slot parts: popovertrigger, popovercontent, command, commandinput, commandlist, commandempty, commandgroup, commanditem."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Combobox",
        "Inputs",
        "default",
        "focus",
        "open",
        "hover",
        "focus-visible",
        "disabled",
        "invalid",
        "defaultOpen",
        "placeholder"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Combobox when the foundation's combobox module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "defaultOpen",
          "placeholder",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Combobox when the foundation's combobox module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<Popover defaultOpen><PopoverTrigger asChild><Button variant=\"outline\" className=\"w-56 justify-between\">Select framework<ChevronsUpDown className=\"opacity-50\" /></Button></PopoverTrigger><PopoverContent className=\"w-56 p-0\"><Command><CommandInput placeholder=\"Search framework...\" /><CommandList><CommandEmpty>No framework found.</CommandEmpty><CommandGroup><CommandItem value=\"next\"><Check />Next.js</CommandItem><CommandItem value=\"remix\">Remix</CommandItem><CommandItem value=\"astro\">Astro</CommandItem></CommandGroup></CommandList></Command></PopoverContent></Popover>"
      }
    ],
    "relatedComponents": [
      "Select",
      "Popover"
    ]
  },
  {
    "name": "Editable",
    "category": "Inputs",
    "description": "Editable is a inputs primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "editing",
      "hover",
      "focus-visible",
      "disabled",
      "invalid"
    ],
    "controls": [
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Initial text; click toggles to an Input."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "editing",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "defaultValue": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Initial text; click toggles to an Input.",
        "control": "defaultValue"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "editing",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "editing",
        "kind": "base",
        "visualIntent": "Editing appearance for verifying Editable before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "editing"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Editable before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Editable before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Editable before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying Editable before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "Editable",
      "slots": [],
      "requiredParts": [
        "Editable"
      ],
      "optionalParts": [],
      "composition": "Editable is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Editable",
        "Inputs",
        "default",
        "editing",
        "hover",
        "focus-visible",
        "disabled",
        "invalid",
        "defaultValue"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Editable when the foundation's editable module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "defaultValue",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Editable when the foundation's editable module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Editable defaultValue=\"Click to edit\" />"
      }
    ],
    "relatedComponents": [
      "Input"
    ]
  },
  {
    "name": "Field",
    "category": "Inputs",
    "description": "Field is a inputs primitive.",
    "importFrom": "@/components/ui/label",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "focus",
      "disabled",
      "hover",
      "focus-visible",
      "invalid"
    ],
    "controls": [
      {
        "name": "htmlFor",
        "label": "Html For",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "htmlFor",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "On Label; must match the input id."
      },
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "id",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "On Input; ties label and helper text to the control."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "htmlFor": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "On Label; must match the input id.",
        "control": "htmlFor"
      },
      "id": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "On Input; ties label and helper text to the control.",
        "control": "id"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying Field before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Field before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Field before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Field before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying Field before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "Field",
      "slots": [
        "label",
        "input",
        "description"
      ],
      "requiredParts": [
        "Field"
      ],
      "optionalParts": [
        "label",
        "input",
        "description"
      ],
      "composition": "Compose Field with its documented slot parts: label, input, description."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Field",
        "Inputs",
        "default",
        "focus",
        "disabled",
        "hover",
        "focus-visible",
        "invalid",
        "htmlFor",
        "id"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Field when the foundation's field module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "htmlFor",
          "id",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Field when the foundation's field module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Input field",
        "jsx": "<div className=\"grid gap-2 w-72\"><Label htmlFor=\"email\">Email</Label><Input id=\"email\" type=\"email\" placeholder=\"you@example.com\" /><p className=\"text-sm text-muted-foreground\">We'll never share your email.</p></div>"
      }
    ],
    "relatedComponents": [
      "Input",
      "Textarea",
      "Label"
    ]
  },
  {
    "name": "Fieldset",
    "category": "Inputs",
    "description": "Fieldset is a inputs primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "hover",
      "focus-visible",
      "disabled",
      "invalid"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "<fieldset> with border, padding, spacing."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "<fieldset> with border, padding, spacing.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Fieldset before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Fieldset before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Fieldset before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying Fieldset before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "Fieldset",
      "slots": [],
      "requiredParts": [
        "Fieldset"
      ],
      "optionalParts": [],
      "composition": "Fieldset is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Fieldset",
        "Inputs",
        "default",
        "hover",
        "focus-visible",
        "disabled",
        "invalid",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Fieldset when the foundation's fieldset module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Fieldset when the foundation's fieldset module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Fieldset><Text className=\"font-medium\">Contact preferences</Text><Text className=\"text-muted-foreground\">Choose how we reach you.</Text></Fieldset>"
      }
    ],
    "relatedComponents": [
      "NativeSelect",
      "Field"
    ]
  },
  {
    "name": "FileUpload",
    "category": "Inputs",
    "description": "FileUpload is a inputs primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "hover",
      "focus-visible",
      "disabled",
      "invalid"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Dropzone content is fixed."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Dropzone content is fixed.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying FileUpload before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying FileUpload before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying FileUpload before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying FileUpload before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "FileUpload",
      "slots": [],
      "requiredParts": [
        "FileUpload"
      ],
      "optionalParts": [],
      "composition": "FileUpload is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "FileUpload",
        "Inputs",
        "default",
        "hover",
        "focus-visible",
        "disabled",
        "invalid",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use FileUpload when the foundation's file-upload module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use FileUpload when the foundation's file-upload module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<FileUpload className=\"w-72\" />"
      }
    ],
    "relatedComponents": [
      "DownloadTrigger"
    ]
  },
  {
    "name": "IconButton",
    "category": "Inputs",
    "description": "A compact icon-only action for dense toolbars and repeated controls.",
    "importFrom": "@/components/ui/button",
    "utility": false,
    "variants": [
      "default",
      "destructive",
      "outline",
      "secondary",
      "ghost",
      "link"
    ],
    "sizes": [
      "icon",
      "icon-xs",
      "icon-sm",
      "icon-lg"
    ],
    "states": [
      "default",
      "hover",
      "focus",
      "disabled",
      "focus-visible",
      "active",
      "loading"
    ],
    "controls": [
      {
        "name": "variant",
        "label": "Variant",
        "type": "select",
        "options": [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link"
        ],
        "default": "default",
        "urlParam": "variant",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Selects the visual treatment for IconButton."
      },
      {
        "name": "size",
        "label": "Size",
        "type": "select",
        "options": [
          "icon",
          "icon-xs",
          "icon-sm",
          "icon-lg"
        ],
        "default": "icon",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Adjusts density, scale, and touch target size for IconButton."
      },
      {
        "name": "aria-label",
        "label": "Aria Label",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "aria-label",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Required since there is no text."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus",
          "disabled",
          "focus-visible",
          "active",
          "loading"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "IconButton",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      },
      {
        "name": "icon",
        "label": "Icon",
        "type": "select",
        "options": [
          "Search",
          "Check",
          "X",
          "ChevronRight",
          "ChevronDown",
          "ChevronLeft",
          "ChevronUp",
          "Plus",
          "Minus",
          "ArrowRight",
          "ArrowLeft",
          "Settings",
          "User",
          "Mail",
          "Bell",
          "Trash2",
          "Pencil",
          "Copy",
          "Download",
          "Upload",
          "Star",
          "Heart",
          "Calendar",
          "Clock",
          "Eye",
          "EyeOff",
          "Filter",
          "MoreHorizontal",
          "MoreVertical",
          "Menu",
          "Home",
          "LogOut",
          "Info",
          "TriangleAlert",
          "CircleCheck",
          "CircleAlert",
          "Loader2"
        ],
        "default": "Search",
        "urlParam": "icon",
        "bindsTo": "slot",
        "source": "ads-rich-metadata",
        "description": "Selects a lucide icon preloaded in the sandbox scope."
      }
    ],
    "propMetadata": {
      "variant": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link"
        ],
        "required": false,
        "description": "Same cva variants as Button.",
        "control": "variant"
      },
      "size": {
        "type": "string",
        "default": "icon",
        "values": [
          "icon",
          "icon-xs",
          "icon-sm",
          "icon-lg"
        ],
        "required": false,
        "description": "Square icon size; needs aria-label.",
        "control": "size"
      },
      "aria-label": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Required since there is no text.",
        "control": "aria-label"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus",
          "disabled",
          "focus-visible",
          "active",
          "loading"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "IconButton",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      },
      "icon": {
        "type": "select",
        "default": "Search",
        "values": [
          "Search",
          "Check",
          "X",
          "ChevronRight",
          "ChevronDown",
          "ChevronLeft",
          "ChevronUp",
          "Plus",
          "Minus",
          "ArrowRight",
          "ArrowLeft",
          "Settings",
          "User",
          "Mail",
          "Bell",
          "Trash2",
          "Pencil",
          "Copy",
          "Download",
          "Upload",
          "Star",
          "Heart",
          "Calendar",
          "Clock",
          "Eye",
          "EyeOff",
          "Filter",
          "MoreHorizontal",
          "MoreVertical",
          "Menu",
          "Home",
          "LogOut",
          "Info",
          "TriangleAlert",
          "CircleCheck",
          "CircleAlert",
          "Loader2"
        ],
        "required": false,
        "description": "Selects a lucide icon preloaded in the sandbox scope.",
        "control": "icon"
      }
    },
    "variantMetadata": [
      {
        "name": "default",
        "default": true,
        "visualIntent": "Base rendering when no visual recipe is exposed.",
        "whenToUse": "Use for the strongest emphasis or primary action.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "destructive",
        "default": false,
        "visualIntent": "Destructive visual treatment for IconButton.",
        "whenToUse": "Use for irreversible or dangerous actions; pair with explicit copy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "outline",
        "default": false,
        "visualIntent": "Outline visual treatment for IconButton.",
        "whenToUse": "Use for secondary actions or bordered surfaces.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "secondary",
        "default": false,
        "visualIntent": "Secondary visual treatment for IconButton.",
        "whenToUse": "Use for supporting actions that stay visible.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "ghost",
        "default": false,
        "visualIntent": "Ghost visual treatment for IconButton.",
        "whenToUse": "Use for low-emphasis actions in dense or inline contexts.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "link",
        "default": false,
        "visualIntent": "Link visual treatment for IconButton.",
        "whenToUse": "Use for low-emphasis actions in dense or inline contexts.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      }
    ],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying IconButton before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying IconButton before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying IconButton before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying IconButton before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "active",
        "kind": "interaction",
        "visualIntent": "Active appearance for verifying IconButton before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "active"
      },
      {
        "name": "loading",
        "kind": "status",
        "visualIntent": "Loading appearance for verifying IconButton before delivery.",
        "behavior": "Shows pending async work while preserving context.",
        "simulation": "loading"
      }
    ],
    "anatomy": {
      "root": "IconButton",
      "slots": [],
      "requiredParts": [
        "IconButton"
      ],
      "optionalParts": [],
      "composition": "IconButton is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "interactive",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": true,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "aria-label is required",
        "Add Tooltip for unfamiliar commands",
        "Touch target must remain at least 44px where practical",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "button/link action",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "IconButton",
        "Inputs",
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
        "hover",
        "focus",
        "disabled",
        "focus-visible",
        "active",
        "loading",
        "variant",
        "size",
        "aria-label"
      ],
      "selectionCriteria": {
        "chooseWhen": "Compact toolbar actions Repeated row actions Universally recognizable icons",
        "avoidWhen": "Unfamiliar actions without tooltip Primary conversion CTAs Actions that require visible explanation",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 6,
        "names": [
          "variant",
          "size",
          "aria-label",
          "state",
          "label",
          "icon"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Compact toolbar actions",
      "Repeated row actions",
      "Universally recognizable icons"
    ],
    "neverUseFor": [
      "Unfamiliar actions without tooltip",
      "Primary conversion CTAs",
      "Actions that require visible explanation"
    ],
    "examples": [
      {
        "name": "Icon button",
        "jsx": "<Button size=\"icon\" aria-label=\"Search\"><Search /></Button>"
      },
      {
        "name": "Sizes",
        "jsx": "<div className=\"flex items-center gap-2\"><Button size=\"icon-sm\" variant=\"outline\" aria-label=\"Settings\"><Settings /></Button><Button size=\"icon\" variant=\"outline\" aria-label=\"Settings\"><Settings /></Button><Button size=\"icon-lg\" variant=\"outline\" aria-label=\"Settings\"><Settings /></Button></div>"
      }
    ],
    "relatedComponents": [
      "Button",
      "Toggle"
    ]
  },
  {
    "name": "Input",
    "category": "Inputs",
    "description": "Single-line text entry for forms, filters, search, email, URLs, and short numeric values.",
    "importFrom": "@/components/ui/input",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "focus",
      "disabled",
      "hover",
      "focus-visible",
      "invalid"
    ],
    "controls": [
      {
        "name": "type",
        "label": "Type",
        "type": "select",
        "options": [
          "text",
          "email",
          "password",
          "number",
          "search",
          "tel",
          "url",
          "file"
        ],
        "default": "text",
        "urlParam": "type",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Native input type."
      },
      {
        "name": "placeholder",
        "label": "Placeholder",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "placeholder",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Placeholder text when empty."
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "disabled",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Disables and dims the field."
      },
      {
        "name": "aria-invalid",
        "label": "Aria Invalid",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "aria-invalid",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Switches border/ring to destructive."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Input",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      },
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "Preview value",
        "urlParam": "value",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls the value prop for Input."
      }
    ],
    "propMetadata": {
      "type": {
        "type": "string",
        "default": "text",
        "values": [
          "text",
          "email",
          "password",
          "number",
          "search",
          "tel",
          "url",
          "file"
        ],
        "required": false,
        "description": "Native input type.",
        "control": "type"
      },
      "placeholder": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Placeholder text when empty.",
        "control": "placeholder"
      },
      "disabled": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Disables and dims the field.",
        "control": "disabled"
      },
      "aria-invalid": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Switches border/ring to destructive.",
        "control": "aria-invalid"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Input",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      },
      "value": {
        "type": "text",
        "default": "Preview value",
        "values": [],
        "required": false,
        "description": "Controls the value prop for Input.",
        "control": "value"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying Input before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Input before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Input before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Input before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying Input before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "Input",
      "slots": [],
      "requiredParts": [
        "Input"
      ],
      "optionalParts": [],
      "composition": "Input is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Pair with Field.Root and Field.Label",
        "Error copy should live in Field.ErrorText",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "high",
      "queryTerms": [
        "Input",
        "Inputs",
        "default",
        "focus",
        "disabled",
        "hover",
        "focus-visible",
        "invalid",
        "type",
        "placeholder",
        "aria-invalid"
      ],
      "selectionCriteria": {
        "chooseWhen": "Single-line text entry Search fields Short numeric or email input",
        "avoidWhen": "Multi-line prose Choosing from finite options Secret values without type=password",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 7,
        "names": [
          "type",
          "placeholder",
          "disabled",
          "aria-invalid",
          "state",
          "label",
          "value"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Single-line text entry",
      "Search fields",
      "Short numeric or email input"
    ],
    "neverUseFor": [
      "Multi-line prose",
      "Choosing from finite options",
      "Secret values without type=password"
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<Input placeholder=\"Email\" type=\"email\" className=\"w-64\" />"
      },
      {
        "name": "Disabled",
        "jsx": "<Input placeholder=\"Disabled\" disabled className=\"w-64\" />"
      }
    ],
    "relatedComponents": [
      "Textarea",
      "Label",
      "Field"
    ]
  },
  {
    "name": "InputAddon",
    "category": "Inputs",
    "description": "InputAddon is a inputs primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "addon",
        "label": "Addon",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "addon",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Content in the bordered addon box."
      },
      {
        "name": "placement",
        "label": "Placement",
        "type": "select",
        "options": [
          "start",
          "end"
        ],
        "default": "start",
        "urlParam": "placement",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Side the addon sits on."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "addon": {
        "type": "node",
        "default": null,
        "values": [],
        "required": false,
        "description": "Content in the bordered addon box.",
        "control": "addon"
      },
      "placement": {
        "type": "string",
        "default": "start",
        "values": [
          "start",
          "end"
        ],
        "required": false,
        "description": "Side the addon sits on.",
        "control": "placement"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "InputAddon",
      "slots": [
        "addon"
      ],
      "requiredParts": [
        "InputAddon"
      ],
      "optionalParts": [
        "addon"
      ],
      "composition": "Compose InputAddon with its documented slot parts: addon."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "InputAddon",
        "Inputs",
        "default",
        "addon",
        "placement"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use InputAddon when the foundation's input-addon module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "addon",
          "placement",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use InputAddon when the foundation's input-addon module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Start addon",
        "jsx": "<InputAddon addon=\"https://\" placement=\"start\"><Input aria-label=\"Website\" placeholder=\"example.com\" /></InputAddon>"
      }
    ],
    "relatedComponents": [
      "InputGroup",
      "InputElement"
    ]
  },
  {
    "name": "InputElement",
    "category": "Inputs",
    "description": "InputElement is a inputs primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "startElement",
        "label": "Start Element",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "startElement",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Start adornment (alias of InputGroup)."
      },
      {
        "name": "endElement",
        "label": "End Element",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "endElement",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "End adornment."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "startElement": {
        "type": "node",
        "default": null,
        "values": [],
        "required": false,
        "description": "Start adornment (alias of InputGroup).",
        "control": "startElement"
      },
      "endElement": {
        "type": "node",
        "default": null,
        "values": [],
        "required": false,
        "description": "End adornment.",
        "control": "endElement"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "InputElement",
      "slots": [
        "startElement",
        "endElement"
      ],
      "requiredParts": [
        "InputElement"
      ],
      "optionalParts": [
        "startElement",
        "endElement"
      ],
      "composition": "Compose InputElement with its documented slot parts: startElement, endElement."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "InputElement",
        "Inputs",
        "default",
        "startElement",
        "endElement"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use InputElement when the foundation's input-element module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "startElement",
          "endElement",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use InputElement when the foundation's input-element module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "End icon",
        "jsx": "<InputElement endElement={<Check size={16} />}><Input aria-label=\"Email\" defaultValue=\"valid@site.com\" className=\"w-64\" /></InputElement>"
      }
    ],
    "relatedComponents": [
      "InputGroup",
      "InputAddon"
    ]
  },
  {
    "name": "InputGroup",
    "category": "Inputs",
    "description": "InputGroup is a inputs primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "startElement",
        "label": "Start Element",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "startElement",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Leading element (e.g. icon)."
      },
      {
        "name": "endElement",
        "label": "End Element",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "endElement",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Trailing element."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "startElement": {
        "type": "node",
        "default": null,
        "values": [],
        "required": false,
        "description": "Leading element (e.g. icon).",
        "control": "startElement"
      },
      "endElement": {
        "type": "node",
        "default": null,
        "values": [],
        "required": false,
        "description": "Trailing element.",
        "control": "endElement"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "InputGroup",
      "slots": [
        "startElement",
        "endElement"
      ],
      "requiredParts": [
        "InputGroup"
      ],
      "optionalParts": [
        "startElement",
        "endElement"
      ],
      "composition": "Compose InputGroup with its documented slot parts: startElement, endElement."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "InputGroup",
        "Inputs",
        "default",
        "startElement",
        "endElement"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use InputGroup when the foundation's input-group module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "startElement",
          "endElement",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use InputGroup when the foundation's input-group module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Start icon",
        "jsx": "<InputGroup startElement={<Search size={16} />}><Input placeholder=\"Search\" className=\"w-64\" /></InputGroup>"
      }
    ],
    "relatedComponents": [
      "InputElement",
      "InputAddon"
    ]
  },
  {
    "name": "NativeSelect",
    "category": "Inputs",
    "description": "NativeSelect is a inputs primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "focus",
      "disabled",
      "hover",
      "focus-visible",
      "invalid"
    ],
    "controls": [
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "value",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Controlled selected value."
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "disabled",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Disables the select."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "value": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Controlled selected value.",
        "control": "value"
      },
      "disabled": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Disables the select.",
        "control": "disabled"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying NativeSelect before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying NativeSelect before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying NativeSelect before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying NativeSelect before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying NativeSelect before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "NativeSelect",
      "slots": [],
      "requiredParts": [
        "NativeSelect"
      ],
      "optionalParts": [],
      "composition": "NativeSelect is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "NativeSelect",
        "Inputs",
        "default",
        "focus",
        "disabled",
        "hover",
        "focus-visible",
        "invalid",
        "value"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use NativeSelect when the foundation's native-select module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "value",
          "disabled",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use NativeSelect when the foundation's native-select module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<NativeSelect defaultValue=\"us\" aria-label=\"Country\" className=\"w-48\"><option value=\"us\">United States</option><option value=\"ca\">Canada</option></NativeSelect>"
      }
    ],
    "relatedComponents": [
      "Select",
      "Fieldset"
    ]
  },
  {
    "name": "NumberInput",
    "category": "Inputs",
    "description": "NumberInput is a inputs primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "hover",
      "focus-visible",
      "disabled",
      "invalid"
    ],
    "controls": [
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "number",
        "options": [],
        "default": 0,
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Initial value."
      },
      {
        "name": "min",
        "label": "Min",
        "type": "number",
        "options": [],
        "default": "",
        "urlParam": "min",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Lower clamp."
      },
      {
        "name": "max",
        "label": "Max",
        "type": "number",
        "options": [],
        "default": "",
        "urlParam": "max",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Upper clamp."
      },
      {
        "name": "step",
        "label": "Step",
        "type": "number",
        "options": [],
        "default": 1,
        "urlParam": "step",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Increment per click."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "Preview value",
        "urlParam": "value",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls the value prop for NumberInput."
      }
    ],
    "propMetadata": {
      "defaultValue": {
        "type": "number",
        "default": 0,
        "values": [],
        "required": false,
        "description": "Initial value.",
        "control": "defaultValue"
      },
      "min": {
        "type": "number",
        "default": null,
        "values": [],
        "required": false,
        "description": "Lower clamp.",
        "control": "min"
      },
      "max": {
        "type": "number",
        "default": null,
        "values": [],
        "required": false,
        "description": "Upper clamp.",
        "control": "max"
      },
      "step": {
        "type": "number",
        "default": 1,
        "values": [],
        "required": false,
        "description": "Increment per click.",
        "control": "step"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "value": {
        "type": "text",
        "default": "Preview value",
        "values": [],
        "required": false,
        "description": "Controls the value prop for NumberInput.",
        "control": "value"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying NumberInput before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying NumberInput before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying NumberInput before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying NumberInput before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "NumberInput",
      "slots": [],
      "requiredParts": [
        "NumberInput"
      ],
      "optionalParts": [],
      "composition": "NumberInput is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "NumberInput",
        "Inputs",
        "default",
        "hover",
        "focus-visible",
        "disabled",
        "invalid",
        "defaultValue",
        "min",
        "max",
        "step"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use NumberInput when the foundation's number-input module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 6,
        "names": [
          "defaultValue",
          "min",
          "max",
          "step",
          "state",
          "value"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.824Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use NumberInput when the foundation's number-input module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Bounded",
        "jsx": "<NumberInput defaultValue={5} min={0} max={10} step={1} />"
      }
    ],
    "relatedComponents": [
      "Input",
      "Slider"
    ]
  },
  {
    "name": "PinInput",
    "category": "Inputs",
    "description": "PinInput is a inputs primitive.",
    "importFrom": "@/components/ui/input-otp",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "focus",
      "disabled",
      "hover",
      "focus-visible",
      "invalid"
    ],
    "controls": [
      {
        "name": "maxLength",
        "label": "Max Length",
        "type": "number",
        "options": [],
        "default": "",
        "urlParam": "maxLength",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Total number of slots; required on InputOTP."
      },
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "value",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Controlled entered value."
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "disabled",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Disables and dims."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "maxLength": {
        "type": "number",
        "default": null,
        "values": [],
        "required": false,
        "description": "Total number of slots; required on InputOTP.",
        "control": "maxLength"
      },
      "value": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Controlled entered value.",
        "control": "value"
      },
      "disabled": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Disables and dims.",
        "control": "disabled"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying PinInput before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying PinInput before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying PinInput before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying PinInput before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying PinInput before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "PinInput",
      "slots": [
        "inputotpgroup",
        "inputotpslot",
        "inputotpseparator"
      ],
      "requiredParts": [
        "PinInput"
      ],
      "optionalParts": [
        "inputotpgroup",
        "inputotpslot",
        "inputotpseparator"
      ],
      "composition": "Compose PinInput with its documented slot parts: inputotpgroup, inputotpslot, inputotpseparator."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "PinInput",
        "Inputs",
        "default",
        "focus",
        "disabled",
        "hover",
        "focus-visible",
        "invalid",
        "maxLength",
        "value"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use PinInput when the foundation's pin-input module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "maxLength",
          "value",
          "disabled",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use PinInput when the foundation's pin-input module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Six digit",
        "jsx": "<InputOTP maxLength={6} aria-label=\"One-time passcode\"><InputOTPGroup><InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} /></InputOTPGroup><InputOTPSeparator /><InputOTPGroup><InputOTPSlot index={3} /><InputOTPSlot index={4} /><InputOTPSlot index={5} /></InputOTPGroup></InputOTP>"
      }
    ],
    "relatedComponents": [
      "Input",
      "Field"
    ]
  },
  {
    "name": "RadioCard",
    "category": "Inputs",
    "description": "RadioCard is a inputs primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "selected",
      "hover",
      "focus-visible",
      "disabled",
      "invalid"
    ],
    "controls": [
      {
        "name": "options",
        "label": "Options",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "options",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Array of { value, label, description }."
      },
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Initially selected value."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "selected",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "options": {
        "type": "array",
        "default": null,
        "values": [],
        "required": false,
        "description": "Array of { value, label, description }.",
        "control": "options"
      },
      "defaultValue": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Initially selected value.",
        "control": "defaultValue"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "selected",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "selected",
        "kind": "base",
        "visualIntent": "Selected appearance for verifying RadioCard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "selected"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying RadioCard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying RadioCard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying RadioCard before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying RadioCard before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "RadioCard",
      "slots": [],
      "requiredParts": [
        "RadioCard"
      ],
      "optionalParts": [],
      "composition": "RadioCard is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "RadioCard",
        "Inputs",
        "default",
        "selected",
        "hover",
        "focus-visible",
        "disabled",
        "invalid",
        "options",
        "defaultValue"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use RadioCard when the foundation's radio-card module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "options",
          "defaultValue",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use RadioCard when the foundation's radio-card module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Plans",
        "jsx": "<RadioCard options={[{value:\"a\",label:\"Starter\",description:\"For individuals\"},{value:\"b\",label:\"Pro\",description:\"For teams\"}]} defaultValue=\"a\" className=\"w-72\" />"
      }
    ],
    "relatedComponents": [
      "CheckboxCard",
      "RadioGroup"
    ]
  },
  {
    "name": "RadioGroup",
    "category": "Inputs",
    "description": "A group of mutually exclusive choices shown together for fast comparison.",
    "importFrom": "@/components/ui/radio-group",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "checked",
      "focus",
      "disabled",
      "hover",
      "focus-visible",
      "invalid"
    ],
    "controls": [
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "value",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Controlled selected item value."
      },
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled initial value."
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "disabled",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Disables the whole group."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "checked",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "RadioGroup",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      }
    ],
    "propMetadata": {
      "value": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Controlled selected item value.",
        "control": "value"
      },
      "defaultValue": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled initial value.",
        "control": "defaultValue"
      },
      "disabled": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Disables the whole group.",
        "control": "disabled"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "checked",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "RadioGroup",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "checked",
        "kind": "base",
        "visualIntent": "Checked appearance for verifying RadioGroup before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "checked"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying RadioGroup before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying RadioGroup before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying RadioGroup before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying RadioGroup before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying RadioGroup before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "RadioGroup",
      "slots": [
        "radiogroupitem"
      ],
      "requiredParts": [
        "RadioGroup"
      ],
      "optionalParts": [
        "radiogroupitem"
      ],
      "composition": "Compose RadioGroup with its documented slot parts: radiogroupitem."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Use a group label",
        "Each item needs readable label text",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "RadioGroup",
        "Inputs",
        "default",
        "checked",
        "focus",
        "disabled",
        "hover",
        "focus-visible",
        "invalid",
        "value",
        "defaultValue"
      ],
      "selectionCriteria": {
        "chooseWhen": "Choosing exactly one option Small option sets Options that benefit from being visible",
        "avoidWhen": "Large lists Freeform values Independent binary choices",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 5,
        "names": [
          "value",
          "defaultValue",
          "disabled",
          "state",
          "label"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Choosing exactly one option",
      "Small option sets",
      "Options that benefit from being visible"
    ],
    "neverUseFor": [
      "Large lists",
      "Freeform values",
      "Independent binary choices"
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<RadioGroup defaultValue=\"comfortable\"><div className=\"flex items-center gap-2\"><RadioGroupItem value=\"default\" id=\"r1\" /><Label htmlFor=\"r1\">Default</Label></div><div className=\"flex items-center gap-2\"><RadioGroupItem value=\"comfortable\" id=\"r2\" /><Label htmlFor=\"r2\">Comfortable</Label></div><div className=\"flex items-center gap-2\"><RadioGroupItem value=\"compact\" id=\"r3\" /><Label htmlFor=\"r3\">Compact</Label></div></RadioGroup>"
      }
    ],
    "relatedComponents": [
      "Checkbox",
      "SegmentGroup",
      "Select"
    ]
  },
  {
    "name": "RatingGroup",
    "category": "Inputs",
    "description": "RatingGroup is a inputs primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "hover",
      "focus-visible",
      "disabled",
      "invalid"
    ],
    "controls": [
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "number",
        "options": [],
        "default": 0,
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Initial filled stars."
      },
      {
        "name": "count",
        "label": "Count",
        "type": "number",
        "options": [],
        "default": 5,
        "urlParam": "count",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Total stars."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "Preview value",
        "urlParam": "value",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls the value prop for RatingGroup."
      }
    ],
    "propMetadata": {
      "defaultValue": {
        "type": "number",
        "default": 0,
        "values": [],
        "required": false,
        "description": "Initial filled stars.",
        "control": "defaultValue"
      },
      "count": {
        "type": "number",
        "default": 5,
        "values": [],
        "required": false,
        "description": "Total stars.",
        "control": "count"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "value": {
        "type": "text",
        "default": "Preview value",
        "values": [],
        "required": false,
        "description": "Controls the value prop for RatingGroup.",
        "control": "value"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying RatingGroup before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying RatingGroup before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying RatingGroup before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying RatingGroup before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "RatingGroup",
      "slots": [],
      "requiredParts": [
        "RatingGroup"
      ],
      "optionalParts": [],
      "composition": "RatingGroup is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "RatingGroup",
        "Inputs",
        "default",
        "hover",
        "focus-visible",
        "disabled",
        "invalid",
        "defaultValue",
        "count"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use RatingGroup when the foundation's rating-group module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "defaultValue",
          "count",
          "state",
          "value"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use RatingGroup when the foundation's rating-group module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<RatingGroup defaultValue={3} />"
      }
    ],
    "relatedComponents": [
      "Slider"
    ]
  },
  {
    "name": "Select",
    "category": "Inputs",
    "description": "A compact choice control for selecting one or more options from a known collection.",
    "importFrom": "@/components/ui/select",
    "utility": false,
    "variants": [],
    "sizes": [
      "sm",
      "default"
    ],
    "states": [
      "default",
      "focus",
      "disabled",
      "open",
      "hover",
      "focus-visible",
      "invalid"
    ],
    "controls": [
      {
        "name": "size",
        "label": "Size",
        "type": "select",
        "options": [
          "sm",
          "default"
        ],
        "default": "default",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Adjusts density, scale, and touch target size for Select."
      },
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "value",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Controlled selected value."
      },
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled initial value."
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "disabled",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Disables the trigger."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "focus",
          "disabled",
          "open",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "value": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Controlled selected value.",
        "control": "value"
      },
      "defaultValue": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled initial value.",
        "control": "defaultValue"
      },
      "size": {
        "type": "string",
        "default": "default",
        "values": [
          "sm",
          "default"
        ],
        "required": false,
        "description": "Trigger height; set on SelectTrigger.",
        "control": "size"
      },
      "disabled": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Disables the trigger.",
        "control": "disabled"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "focus",
          "disabled",
          "open",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying Select before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Select before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying Select before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Select before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Select before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying Select before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "Select",
      "slots": [
        "selecttrigger",
        "selectvalue",
        "selectcontent",
        "selectgroup",
        "selectlabel",
        "selectitem",
        "selectseparator"
      ],
      "requiredParts": [
        "Select"
      ],
      "optionalParts": [
        "selecttrigger",
        "selectvalue",
        "selectcontent",
        "selectgroup",
        "selectlabel",
        "selectitem",
        "selectseparator"
      ],
      "composition": "Compose Select with its documented slot parts: selecttrigger, selectvalue, selectcontent, selectgroup, selectlabel, selectitem, selectseparator."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Use Select.Label or a Field.Label",
        "Keep option labels concise",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Select",
        "Inputs",
        "default",
        "focus",
        "disabled",
        "open",
        "hover",
        "focus-visible",
        "invalid",
        "value",
        "defaultValue",
        "size"
      ],
      "selectionCriteria": {
        "chooseWhen": "Choosing one item from a known list Compact settings controls Longer option sets",
        "avoidWhen": "Few binary choices where RadioGroup scans faster Freeform entry",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 5,
        "names": [
          "size",
          "value",
          "defaultValue",
          "disabled",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Choosing one item from a known list",
      "Compact settings controls",
      "Longer option sets"
    ],
    "neverUseFor": [
      "Few binary choices where RadioGroup scans faster",
      "Freeform entry"
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<Select defaultValue=\"apple\"><SelectTrigger className=\"w-48\" aria-label=\"Fruit\"><SelectValue placeholder=\"Select a fruit\" /></SelectTrigger><SelectContent><SelectGroup><SelectLabel>Fruits</SelectLabel><SelectItem value=\"apple\">Apple</SelectItem><SelectItem value=\"banana\">Banana</SelectItem><SelectItem value=\"orange\">Orange</SelectItem></SelectGroup></SelectContent></Select>"
      }
    ],
    "relatedComponents": [
      "Combobox",
      "RadioGroup",
      "Menu"
    ]
  },
  {
    "name": "Slider",
    "category": "Inputs",
    "description": "A range input for selecting an approximate numeric value by dragging.",
    "importFrom": "@/components/ui/slider",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "focus",
      "disabled",
      "hover",
      "focus-visible",
      "invalid"
    ],
    "controls": [
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "number",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled initial value array."
      },
      {
        "name": "min",
        "label": "Min",
        "type": "number",
        "options": [],
        "default": 0,
        "urlParam": "min",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Minimum value."
      },
      {
        "name": "max",
        "label": "Max",
        "type": "number",
        "options": [],
        "default": 100,
        "urlParam": "max",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Maximum value."
      },
      {
        "name": "step",
        "label": "Step",
        "type": "number",
        "options": [],
        "default": 1,
        "urlParam": "step",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Step increment."
      },
      {
        "name": "orientation",
        "label": "Orientation",
        "type": "select",
        "options": [
          "horizontal",
          "vertical"
        ],
        "default": "horizontal",
        "urlParam": "orientation",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Layout axis."
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "disabled",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Disables and dims."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "Preview value",
        "urlParam": "value",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls the value prop for Slider."
      }
    ],
    "propMetadata": {
      "defaultValue": {
        "type": "number",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled initial value array.",
        "control": "defaultValue"
      },
      "min": {
        "type": "number",
        "default": 0,
        "values": [],
        "required": false,
        "description": "Minimum value.",
        "control": "min"
      },
      "max": {
        "type": "number",
        "default": 100,
        "values": [],
        "required": false,
        "description": "Maximum value.",
        "control": "max"
      },
      "step": {
        "type": "number",
        "default": 1,
        "values": [],
        "required": false,
        "description": "Step increment.",
        "control": "step"
      },
      "orientation": {
        "type": "string",
        "default": "horizontal",
        "values": [
          "horizontal",
          "vertical"
        ],
        "required": false,
        "description": "Layout axis.",
        "control": "orientation"
      },
      "disabled": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Disables and dims.",
        "control": "disabled"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "value": {
        "type": "text",
        "default": "Preview value",
        "values": [],
        "required": false,
        "description": "Controls the value prop for Slider.",
        "control": "value"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying Slider before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Slider before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Slider before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Slider before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying Slider before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "Slider",
      "slots": [],
      "requiredParts": [
        "Slider"
      ],
      "optionalParts": [],
      "composition": "Slider is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Provide a label and visible value when precision matters",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Slider",
        "Inputs",
        "default",
        "focus",
        "disabled",
        "hover",
        "focus-visible",
        "invalid",
        "defaultValue",
        "min",
        "max",
        "step",
        "orientation"
      ],
      "selectionCriteria": {
        "chooseWhen": "Approximate numeric settings Volume/intensity controls Ranges where direct text entry is too slow",
        "avoidWhen": "Exact financial or legal values Small finite choices Hidden thresholds",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 8,
        "names": [
          "defaultValue",
          "min",
          "max",
          "step",
          "orientation",
          "disabled",
          "state",
          "value"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Approximate numeric settings",
      "Volume/intensity controls",
      "Ranges where direct text entry is too slow"
    ],
    "neverUseFor": [
      "Exact financial or legal values",
      "Small finite choices",
      "Hidden thresholds"
    ],
    "examples": [
      {
        "name": "Single",
        "jsx": "<Slider defaultValue={[50]} max={100} step={1} className=\"w-64\" aria-label=\"Volume\" />"
      },
      {
        "name": "Range",
        "jsx": "<Slider defaultValue={[25, 75]} max={100} step={1} className=\"w-64\" aria-label=\"Price range\" />"
      }
    ],
    "relatedComponents": [
      "Input",
      "Switch"
    ]
  },
  {
    "name": "Switch",
    "category": "Inputs",
    "description": "A binary setting that applies immediately or represents a persistent on/off preference.",
    "importFrom": "@/components/ui/switch",
    "utility": false,
    "variants": [],
    "sizes": [
      "sm",
      "default"
    ],
    "states": [
      "default",
      "checked",
      "focus",
      "disabled",
      "hover",
      "focus-visible",
      "invalid"
    ],
    "controls": [
      {
        "name": "size",
        "label": "Size",
        "type": "select",
        "options": [
          "sm",
          "default"
        ],
        "default": "default",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Adjusts density, scale, and touch target size for Switch."
      },
      {
        "name": "checked",
        "label": "Checked",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "checked",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Controlled on/off state."
      },
      {
        "name": "defaultChecked",
        "label": "Default Checked",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "defaultChecked",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled initial state."
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "disabled",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Disables and dims."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "checked",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Switch",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      }
    ],
    "propMetadata": {
      "checked": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Controlled on/off state.",
        "control": "checked"
      },
      "defaultChecked": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled initial state.",
        "control": "defaultChecked"
      },
      "size": {
        "type": "string",
        "default": "default",
        "values": [
          "sm",
          "default"
        ],
        "required": false,
        "description": "Track/thumb dimensions.",
        "control": "size"
      },
      "disabled": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Disables and dims.",
        "control": "disabled"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "checked",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Switch",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "checked",
        "kind": "base",
        "visualIntent": "Checked appearance for verifying Switch before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "checked"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying Switch before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Switch before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Switch before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Switch before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying Switch before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "Switch",
      "slots": [],
      "requiredParts": [
        "Switch"
      ],
      "optionalParts": [],
      "composition": "Switch is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Use a clear label that describes the setting",
        "Avoid ambiguous labels like Enable",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Switch",
        "Inputs",
        "default",
        "checked",
        "focus",
        "disabled",
        "hover",
        "focus-visible",
        "invalid",
        "defaultChecked",
        "size"
      ],
      "selectionCriteria": {
        "chooseWhen": "Immediate on/off settings Feature toggles Persistent preferences",
        "avoidWhen": "Submitting deferred form choices Destructive confirmations Multi-select lists",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 6,
        "names": [
          "size",
          "checked",
          "defaultChecked",
          "disabled",
          "state",
          "label"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Immediate on/off settings",
      "Feature toggles",
      "Persistent preferences"
    ],
    "neverUseFor": [
      "Submitting deferred form choices",
      "Destructive confirmations",
      "Multi-select lists"
    ],
    "examples": [
      {
        "name": "With label",
        "jsx": "<div className=\"flex items-center gap-2\"><Switch id=\"airplane\" defaultChecked /><Label htmlFor=\"airplane\">Airplane mode</Label></div>"
      },
      {
        "name": "Sizes",
        "jsx": "<div className=\"flex items-center gap-3\"><Switch size=\"sm\" /><Switch /></div>"
      }
    ],
    "relatedComponents": [
      "Checkbox",
      "Toggle"
    ]
  },
  {
    "name": "TagsInput",
    "category": "Inputs",
    "description": "TagsInput is a inputs primitive.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "focus",
      "hover",
      "focus-visible",
      "disabled",
      "invalid"
    ],
    "controls": [
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Initial tags."
      },
      {
        "name": "placeholder",
        "label": "Placeholder",
        "type": "text",
        "options": [],
        "default": "Add tag",
        "urlParam": "placeholder",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Entry placeholder; Enter commits."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "focus",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "defaultValue": {
        "type": "array",
        "default": null,
        "values": [],
        "required": false,
        "description": "Initial tags.",
        "control": "defaultValue"
      },
      "placeholder": {
        "type": "string",
        "default": "Add tag",
        "values": [],
        "required": false,
        "description": "Entry placeholder; Enter commits.",
        "control": "placeholder"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "focus",
          "hover",
          "focus-visible",
          "disabled",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying TagsInput before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying TagsInput before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying TagsInput before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying TagsInput before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying TagsInput before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "TagsInput",
      "slots": [],
      "requiredParts": [
        "TagsInput"
      ],
      "optionalParts": [],
      "composition": "TagsInput is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "TagsInput",
        "Inputs",
        "default",
        "focus",
        "hover",
        "focus-visible",
        "disabled",
        "invalid",
        "defaultValue",
        "placeholder"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use TagsInput when the foundation's tags-input module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "defaultValue",
          "placeholder",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use TagsInput when the foundation's tags-input module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<TagsInput defaultValue={[\"design\",\"react\"]} placeholder=\"Add tag\" className=\"w-72\" />"
      }
    ],
    "relatedComponents": [
      "Tag",
      "Combobox"
    ]
  },
  {
    "name": "Textarea",
    "category": "Inputs",
    "description": "Multi-line plain text entry for notes, descriptions, comments, and longer messages.",
    "importFrom": "@/components/ui/textarea",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "focus",
      "disabled",
      "hover",
      "focus-visible",
      "invalid"
    ],
    "controls": [
      {
        "name": "placeholder",
        "label": "Placeholder",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "placeholder",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Placeholder text when empty."
      },
      {
        "name": "rows",
        "label": "Rows",
        "type": "number",
        "options": [],
        "default": "",
        "urlParam": "rows",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Visible text rows."
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "disabled",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Disables and dims."
      },
      {
        "name": "aria-invalid",
        "label": "Aria Invalid",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "aria-invalid",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Switches border/ring to destructive."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Textarea",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      },
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "Preview value",
        "urlParam": "value",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls the value prop for Textarea."
      }
    ],
    "propMetadata": {
      "placeholder": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Placeholder text when empty.",
        "control": "placeholder"
      },
      "rows": {
        "type": "number",
        "default": null,
        "values": [],
        "required": false,
        "description": "Visible text rows.",
        "control": "rows"
      },
      "disabled": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Disables and dims.",
        "control": "disabled"
      },
      "aria-invalid": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Switches border/ring to destructive.",
        "control": "aria-invalid"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "focus",
          "disabled",
          "hover",
          "focus-visible",
          "invalid"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Textarea",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      },
      "value": {
        "type": "text",
        "default": "Preview value",
        "values": [],
        "required": false,
        "description": "Controls the value prop for Textarea.",
        "control": "value"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying Textarea before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Textarea before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Textarea before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Textarea before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "invalid",
        "kind": "status",
        "visualIntent": "Invalid appearance for verifying Textarea before delivery.",
        "behavior": "Communicates validation or error state.",
        "simulation": "invalid"
      }
    ],
    "anatomy": {
      "root": "Textarea",
      "slots": [],
      "requiredParts": [
        "Textarea"
      ],
      "optionalParts": [],
      "composition": "Textarea is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "input",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": true,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Use a visible label",
        "Provide helper text when expected format is not obvious",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "form/control",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Textarea",
        "Inputs",
        "default",
        "focus",
        "disabled",
        "hover",
        "focus-visible",
        "invalid",
        "placeholder",
        "rows",
        "aria-invalid"
      ],
      "selectionCriteria": {
        "chooseWhen": "Multi-line notes Comments Longer freeform input",
        "avoidWhen": "Single short values Rich text editing Code editing",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 7,
        "names": [
          "placeholder",
          "rows",
          "disabled",
          "aria-invalid",
          "state",
          "label",
          "value"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Multi-line notes",
      "Comments",
      "Longer freeform input"
    ],
    "neverUseFor": [
      "Single short values",
      "Rich text editing",
      "Code editing"
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<Textarea placeholder=\"Type your message here.\" className=\"w-72\" />"
      }
    ],
    "relatedComponents": [
      "Input",
      "Label",
      "Field"
    ]
  },
  {
    "name": "Toggle",
    "category": "Inputs",
    "description": "Toggle is a inputs primitive.",
    "importFrom": "@/components/ui/toggle",
    "utility": false,
    "variants": [
      "default",
      "outline"
    ],
    "sizes": [
      "default",
      "sm",
      "lg"
    ],
    "states": [
      "default",
      "hover",
      "focus",
      "checked",
      "disabled",
      "focus-visible",
      "active"
    ],
    "controls": [
      {
        "name": "variant",
        "label": "Variant",
        "type": "select",
        "options": [
          "default",
          "outline"
        ],
        "default": "default",
        "urlParam": "variant",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Selects the visual treatment for Toggle."
      },
      {
        "name": "size",
        "label": "Size",
        "type": "select",
        "options": [
          "default",
          "sm",
          "lg"
        ],
        "default": "default",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Adjusts density, scale, and touch target size for Toggle."
      },
      {
        "name": "pressed",
        "label": "Pressed",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "pressed",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Controlled on (pressed) state."
      },
      {
        "name": "defaultPressed",
        "label": "Default Pressed",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "defaultPressed",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled initial pressed state."
      },
      {
        "name": "disabled",
        "label": "Disabled",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "disabled",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Disables and dims."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus",
          "checked",
          "disabled",
          "focus-visible",
          "active"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Toggle",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      },
      {
        "name": "icon",
        "label": "Icon",
        "type": "select",
        "options": [
          "Search",
          "Check",
          "X",
          "ChevronRight",
          "ChevronDown",
          "ChevronLeft",
          "ChevronUp",
          "Plus",
          "Minus",
          "ArrowRight",
          "ArrowLeft",
          "Settings",
          "User",
          "Mail",
          "Bell",
          "Trash2",
          "Pencil",
          "Copy",
          "Download",
          "Upload",
          "Star",
          "Heart",
          "Calendar",
          "Clock",
          "Eye",
          "EyeOff",
          "Filter",
          "MoreHorizontal",
          "MoreVertical",
          "Menu",
          "Home",
          "LogOut",
          "Info",
          "TriangleAlert",
          "CircleCheck",
          "CircleAlert",
          "Loader2"
        ],
        "default": "Search",
        "urlParam": "icon",
        "bindsTo": "slot",
        "source": "ads-rich-metadata",
        "description": "Selects a lucide icon preloaded in the sandbox scope."
      }
    ],
    "propMetadata": {
      "variant": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "outline"
        ],
        "required": false,
        "description": "Visual style.",
        "control": "variant"
      },
      "size": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "sm",
          "lg"
        ],
        "required": false,
        "description": "Height/padding.",
        "control": "size"
      },
      "pressed": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Controlled on (pressed) state.",
        "control": "pressed"
      },
      "defaultPressed": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled initial pressed state.",
        "control": "defaultPressed"
      },
      "disabled": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Disables and dims.",
        "control": "disabled"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus",
          "checked",
          "disabled",
          "focus-visible",
          "active"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Toggle",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      },
      "icon": {
        "type": "select",
        "default": "Search",
        "values": [
          "Search",
          "Check",
          "X",
          "ChevronRight",
          "ChevronDown",
          "ChevronLeft",
          "ChevronUp",
          "Plus",
          "Minus",
          "ArrowRight",
          "ArrowLeft",
          "Settings",
          "User",
          "Mail",
          "Bell",
          "Trash2",
          "Pencil",
          "Copy",
          "Download",
          "Upload",
          "Star",
          "Heart",
          "Calendar",
          "Clock",
          "Eye",
          "EyeOff",
          "Filter",
          "MoreHorizontal",
          "MoreVertical",
          "Menu",
          "Home",
          "LogOut",
          "Info",
          "TriangleAlert",
          "CircleCheck",
          "CircleAlert",
          "Loader2"
        ],
        "required": false,
        "description": "Selects a lucide icon preloaded in the sandbox scope.",
        "control": "icon"
      }
    },
    "variantMetadata": [
      {
        "name": "default",
        "default": true,
        "visualIntent": "Base rendering when no visual recipe is exposed.",
        "whenToUse": "Use for the strongest emphasis or primary action.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "outline",
        "default": false,
        "visualIntent": "Outline visual treatment for Toggle.",
        "whenToUse": "Use for secondary actions or bordered surfaces.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      }
    ],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Toggle before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying Toggle before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      },
      {
        "name": "checked",
        "kind": "base",
        "visualIntent": "Checked appearance for verifying Toggle before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "checked"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Toggle before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Toggle before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "active",
        "kind": "interaction",
        "visualIntent": "Active appearance for verifying Toggle before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "active"
      }
    ],
    "anatomy": {
      "root": "Toggle",
      "slots": [],
      "requiredParts": [
        "Toggle"
      ],
      "optionalParts": [],
      "composition": "Toggle is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "interactive",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "button/link action",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Toggle",
        "Inputs",
        "default",
        "outline",
        "hover",
        "focus",
        "checked",
        "disabled",
        "focus-visible",
        "active",
        "variant",
        "size",
        "pressed",
        "defaultPressed"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Toggle when the foundation's toggle module matches the intended inputs pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 8,
        "names": [
          "variant",
          "size",
          "pressed",
          "defaultPressed",
          "disabled",
          "state",
          "label",
          "icon"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Toggle when the foundation's toggle module matches the intended inputs pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<Toggle aria-label=\"Toggle bold\"><Bold /></Toggle>"
      },
      {
        "name": "Outline",
        "jsx": "<Toggle variant=\"outline\" defaultPressed><Italic />Italic</Toggle>"
      }
    ],
    "relatedComponents": [
      "SegmentGroup",
      "Button",
      "Switch"
    ]
  },
  {
    "name": "Avatar",
    "category": "Data display",
    "description": "Represents a person, team, or entity with image, initials, or fallback.",
    "importFrom": "@/components/ui/avatar",
    "utility": false,
    "variants": [],
    "sizes": [
      "default",
      "sm",
      "lg"
    ],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "size",
        "label": "Size",
        "type": "select",
        "options": [
          "default",
          "sm",
          "lg"
        ],
        "default": "default",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Adjusts density, scale, and touch target size for Avatar."
      },
      {
        "name": "src",
        "label": "Src",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "src",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "AvatarImage source URL."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "size": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "sm",
          "lg"
        ],
        "required": false,
        "description": "Avatar root size.",
        "control": "size"
      },
      "src": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "AvatarImage source URL.",
        "control": "src"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "image",
        "fallback",
        "group"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "image",
        "fallback",
        "group"
      ],
      "composition": "Compose Avatar with its documented slot parts: root, image, fallback, group."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Provide name for fallback and alt text",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Avatar",
        "Data display",
        "default",
        "size",
        "src"
      ],
      "selectionCriteria": {
        "chooseWhen": "User identity Assignee lists Team representation",
        "avoidWhen": "Decorative icons Status by itself",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "size",
          "src",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "User identity",
      "Assignee lists",
      "Team representation"
    ],
    "neverUseFor": [
      "Decorative icons",
      "Status by itself"
    ],
    "examples": [
      {
        "name": "With fallback",
        "jsx": "<Avatar><AvatarImage src=\"https://github.com/shadcn.png\" alt=\"shadcn avatar\" /><AvatarFallback>CN</AvatarFallback></Avatar>"
      },
      {
        "name": "Group",
        "jsx": "<AvatarGroup><Avatar><AvatarFallback>AB</AvatarFallback></Avatar><Avatar><AvatarFallback>CD</AvatarFallback></Avatar><AvatarGroupCount>+3</AvatarGroupCount></AvatarGroup>"
      }
    ],
    "relatedComponents": [
      "Badge",
      "Skeleton"
    ]
  },
  {
    "name": "Badge",
    "category": "Data display",
    "description": "A compact label for status, category, count, or classification.",
    "importFrom": "@/components/ui/badge",
    "utility": false,
    "variants": [
      "default",
      "secondary",
      "success",
      "warning",
      "info",
      "destructive",
      "outline",
      "ghost",
      "link"
    ],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "variant",
        "label": "Variant",
        "type": "select",
        "options": [
          "default",
          "secondary",
          "success",
          "warning",
          "info",
          "destructive",
          "outline",
          "ghost",
          "link"
        ],
        "default": "default",
        "urlParam": "variant",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Selects the visual treatment for Badge."
      },
      {
        "name": "asChild",
        "label": "As Child",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "asChild",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Render as a child element (e.g. an anchor)."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Badge",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      }
    ],
    "propMetadata": {
      "variant": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "secondary",
          "success",
          "warning",
          "info",
          "destructive",
          "outline",
          "ghost",
          "link"
        ],
        "required": false,
        "description": "Badge visual variant.",
        "control": "variant"
      },
      "asChild": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "Render as a child element (e.g. an anchor).",
        "control": "asChild"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Badge",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      }
    },
    "variantMetadata": [
      {
        "name": "default",
        "default": true,
        "visualIntent": "Base rendering when no visual recipe is exposed.",
        "whenToUse": "Use for the strongest emphasis or primary action.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "secondary",
        "default": false,
        "visualIntent": "Secondary visual treatment for Badge.",
        "whenToUse": "Use for supporting actions that stay visible.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "success",
        "default": false,
        "visualIntent": "Success visual treatment for Badge.",
        "whenToUse": "Use when success best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "warning",
        "default": false,
        "visualIntent": "Warning visual treatment for Badge.",
        "whenToUse": "Use when warning best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "info",
        "default": false,
        "visualIntent": "Info visual treatment for Badge.",
        "whenToUse": "Use when info best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "destructive",
        "default": false,
        "visualIntent": "Destructive visual treatment for Badge.",
        "whenToUse": "Use for irreversible or dangerous actions; pair with explicit copy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "outline",
        "default": false,
        "visualIntent": "Outline visual treatment for Badge.",
        "whenToUse": "Use for secondary actions or bordered surfaces.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "ghost",
        "default": false,
        "visualIntent": "Ghost visual treatment for Badge.",
        "whenToUse": "Use for low-emphasis actions in dense or inline contexts.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "link",
        "default": false,
        "visualIntent": "Link visual treatment for Badge.",
        "whenToUse": "Use for low-emphasis actions in dense or inline contexts.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      }
    ],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Badge",
      "slots": [],
      "requiredParts": [
        "Badge"
      ],
      "optionalParts": [],
      "composition": "Badge is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Do not rely on color alone for critical state",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Badge",
        "Data display",
        "default",
        "secondary",
        "success",
        "warning",
        "info",
        "destructive",
        "outline",
        "ghost",
        "link",
        "variant",
        "asChild"
      ],
      "selectionCriteria": {
        "chooseWhen": "Short statuses Counts Tags Classification labels",
        "avoidWhen": "Clickable actions Long phrases Primary navigation",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "variant",
          "asChild",
          "state",
          "label"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Short statuses",
      "Counts",
      "Tags",
      "Classification labels"
    ],
    "neverUseFor": [
      "Clickable actions",
      "Long phrases",
      "Primary navigation"
    ],
    "examples": [
      {
        "name": "Variants",
        "jsx": "<div className=\"flex flex-wrap gap-2\"><Badge>Default</Badge><Badge variant=\"secondary\">Secondary</Badge><Badge variant=\"success\">Success</Badge><Badge variant=\"warning\">Warning</Badge><Badge variant=\"info\">Info</Badge><Badge variant=\"destructive\">Destructive</Badge><Badge variant=\"outline\">Outline</Badge></div>"
      }
    ],
    "relatedComponents": [
      "Avatar",
      "Alert",
      "Tag"
    ]
  },
  {
    "name": "DataList",
    "category": "Data display",
    "description": "A compact key-value list for object attributes and details.",
    "importFrom": "@/components/ads/data",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "items",
        "label": "Items",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "items",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Array of { label, value } pairs."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "items": {
        "type": "array",
        "default": null,
        "values": [],
        "required": false,
        "description": "Array of { label, value } pairs.",
        "control": "items"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "DataList",
      "slots": [],
      "requiredParts": [
        "DataList"
      ],
      "optionalParts": [],
      "composition": "DataList is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Use clear labels and concise values",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "DataList",
        "Data display",
        "default",
        "items"
      ],
      "selectionCriteria": {
        "chooseWhen": "Object attributes Read-only metadata Details panels",
        "avoidWhen": "Editable forms Large tabular datasets",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "items",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Object attributes",
      "Read-only metadata",
      "Details panels"
    ],
    "neverUseFor": [
      "Editable forms",
      "Large tabular datasets"
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<DataList items={[{label:\"Status\",value:\"Active\"},{label:\"Plan\",value:\"Pro\"},{label:\"Region\",value:\"US-East\"}]} />"
      }
    ],
    "relatedComponents": [
      "Stat",
      "Timeline"
    ]
  },
  {
    "name": "List",
    "category": "Data display",
    "description": "List is a data display primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "ordered",
        "label": "Ordered",
        "type": "boolean",
        "options": [],
        "default": false,
        "urlParam": "ordered",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "true renders <ol>, otherwise <ul>."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "ordered": {
        "type": "boolean",
        "default": false,
        "values": [],
        "required": false,
        "description": "true renders <ol>, otherwise <ul>.",
        "control": "ordered"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "List",
      "slots": [
        "listitem"
      ],
      "requiredParts": [
        "List"
      ],
      "optionalParts": [
        "listitem"
      ],
      "composition": "Compose List with its documented slot parts: listitem."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "List",
        "Data display",
        "default",
        "ordered"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use List when the foundation's list module matches the intended data display pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "ordered",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use List when the foundation's list module matches the intended data display pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Unordered",
        "jsx": "<List><ListItem>First</ListItem><ListItem>Second</ListItem></List>"
      },
      {
        "name": "Ordered",
        "jsx": "<List ordered><ListItem>Step one</ListItem><ListItem>Step two</ListItem></List>"
      }
    ],
    "relatedComponents": [
      "Text"
    ]
  },
  {
    "name": "Listbox",
    "category": "Data display",
    "description": "Listbox is a data display primitive.",
    "importFrom": "@/components/ads/data",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "selected"
    ],
    "controls": [
      {
        "name": "items",
        "label": "Items",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "items",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Array of option label strings."
      },
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Initially selected item."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "selected"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "items": {
        "type": "array",
        "default": null,
        "values": [],
        "required": false,
        "description": "Array of option label strings.",
        "control": "items"
      },
      "defaultValue": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Initially selected item.",
        "control": "defaultValue"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "selected"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "selected",
        "kind": "base",
        "visualIntent": "Selected appearance for verifying Listbox before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "selected"
      }
    ],
    "anatomy": {
      "root": "Listbox",
      "slots": [],
      "requiredParts": [
        "Listbox"
      ],
      "optionalParts": [],
      "composition": "Listbox is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Listbox",
        "Data display",
        "default",
        "selected",
        "items",
        "defaultValue"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Listbox when the foundation's listbox module matches the intended data display pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "items",
          "defaultValue",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Listbox when the foundation's listbox module matches the intended data display pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Listbox items={[\"Apple\",\"Banana\",\"Cherry\"]} defaultValue=\"Banana\" className=\"w-48\" />"
      }
    ],
    "relatedComponents": [
      "TreeView",
      "Select"
    ]
  },
  {
    "name": "QRCode",
    "category": "Data display",
    "description": "QRCode is a data display primitive.",
    "importFrom": "@/components/ads/misc",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "value",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Data encoded into the QR code."
      },
      {
        "name": "size",
        "label": "Size",
        "type": "number",
        "options": [],
        "default": 160,
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Pixel dimensions."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "value": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Data encoded into the QR code.",
        "control": "value"
      },
      "size": {
        "type": "number",
        "default": 160,
        "values": [],
        "required": false,
        "description": "Pixel dimensions.",
        "control": "size"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "QRCode",
      "slots": [],
      "requiredParts": [
        "QRCode"
      ],
      "optionalParts": [],
      "composition": "QRCode is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "QRCode",
        "Data display",
        "default",
        "value",
        "size"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use QRCode when the foundation's qr-code module matches the intended data display pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "value",
          "size",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use QRCode when the foundation's qr-code module matches the intended data display pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<QRCode value=\"https://example.com\" />"
      }
    ],
    "relatedComponents": []
  },
  {
    "name": "Stat",
    "category": "Data display",
    "description": "Stat is a data display primitive.",
    "importFrom": "@/components/ads/data",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "label",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Caption above the value."
      },
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "value",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Large metric value."
      },
      {
        "name": "delta",
        "label": "Delta",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "delta",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "{ value, direction: up|down } change indicator."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "label": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Caption above the value.",
        "control": "label"
      },
      "value": {
        "type": "node",
        "default": null,
        "values": [],
        "required": false,
        "description": "Large metric value.",
        "control": "value"
      },
      "delta": {
        "type": "object",
        "default": null,
        "values": [],
        "required": false,
        "description": "{ value, direction: up|down } change indicator.",
        "control": "delta"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Stat",
      "slots": [],
      "requiredParts": [
        "Stat"
      ],
      "optionalParts": [],
      "composition": "Stat is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Stat",
        "Data display",
        "default",
        "label",
        "value",
        "delta"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Stat when the foundation's stat module matches the intended data display pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "label",
          "value",
          "delta",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Stat when the foundation's stat module matches the intended data display pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Up",
        "jsx": "<Stat label=\"Revenue\" value=\"$48.2k\" delta={{value:\"12%\",direction:\"up\"}} />"
      },
      {
        "name": "Down",
        "jsx": "<Stat label=\"Churn\" value=\"3.1%\" delta={{value:\"0.4%\",direction:\"down\"}} />"
      }
    ],
    "relatedComponents": [
      "DataList",
      "Status"
    ]
  },
  {
    "name": "Status",
    "category": "Data display",
    "description": "Status is a data display primitive.",
    "importFrom": "@/components/ads/data",
    "utility": false,
    "variants": [
      "success",
      "warning",
      "danger",
      "info",
      "neutral"
    ],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "variant",
        "label": "Variant",
        "type": "select",
        "options": [
          "success",
          "warning",
          "danger",
          "info",
          "neutral"
        ],
        "default": "success",
        "urlParam": "variant",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Selects the visual treatment for Status."
      },
      {
        "name": "tone",
        "label": "Tone",
        "type": "select",
        "options": [
          "success",
          "warning",
          "danger",
          "info",
          "neutral"
        ],
        "default": "neutral",
        "urlParam": "tone",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Dot color."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "tone": {
        "type": "string",
        "default": "neutral",
        "values": [
          "success",
          "warning",
          "danger",
          "info",
          "neutral"
        ],
        "required": false,
        "description": "Dot color.",
        "control": "tone"
      },
      "variant": {
        "type": "select",
        "default": "success",
        "values": [
          "success",
          "warning",
          "danger",
          "info",
          "neutral"
        ],
        "required": false,
        "description": "Selects the visual treatment for Status.",
        "control": "variant"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [
      {
        "name": "success",
        "default": true,
        "visualIntent": "Success visual treatment for Status.",
        "whenToUse": "Use when success best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "warning",
        "default": false,
        "visualIntent": "Warning visual treatment for Status.",
        "whenToUse": "Use when warning best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "danger",
        "default": false,
        "visualIntent": "Danger visual treatment for Status.",
        "whenToUse": "Use when danger best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "info",
        "default": false,
        "visualIntent": "Info visual treatment for Status.",
        "whenToUse": "Use when info best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "neutral",
        "default": false,
        "visualIntent": "Neutral visual treatment for Status.",
        "whenToUse": "Use when neutral best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      }
    ],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Status",
      "slots": [],
      "requiredParts": [
        "Status"
      ],
      "optionalParts": [],
      "composition": "Status is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Status",
        "Data display",
        "success",
        "warning",
        "danger",
        "info",
        "neutral",
        "default",
        "tone"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Status when the foundation's status module matches the intended data display pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "variant",
          "tone",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Status when the foundation's status module matches the intended data display pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Tones",
        "jsx": "<div className=\"flex flex-col gap-2\"><Status tone=\"success\">Active</Status><Status tone=\"warning\">Pending</Status><Status tone=\"danger\">Failed</Status></div>"
      }
    ],
    "relatedComponents": [
      "Tag",
      "Badge"
    ]
  },
  {
    "name": "Table",
    "category": "Data display",
    "description": "A structured grid for comparing dense rows and columns of related data.",
    "importFrom": "@/components/ui/table",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "selected"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Root wraps the table in an overflow-x-auto container."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "selected"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Root wraps the table in an overflow-x-auto container.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "selected"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "selected",
        "kind": "base",
        "visualIntent": "Selected appearance for verifying Table before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "selected"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "header",
        "body",
        "footer",
        "head",
        "row",
        "cell",
        "caption"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "header",
        "body",
        "footer",
        "head",
        "row",
        "cell",
        "caption"
      ],
      "composition": "Compose Table with its documented slot parts: root, header, body, footer, head, row, cell, caption."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Use column headers",
        "Keep cell content concise",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "high",
      "queryTerms": [
        "Table",
        "Data display",
        "default",
        "selected",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Structured comparison Dense rows of related data Spec summaries",
        "avoidWhen": "Card galleries Unrelated content groups Mobile-only summaries without responsive plan",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Structured comparison",
      "Dense rows of related data",
      "Spec summaries"
    ],
    "neverUseFor": [
      "Card galleries",
      "Unrelated content groups",
      "Mobile-only summaries without responsive plan"
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<Table className=\"w-96\"><TableCaption>Recent invoices.</TableCaption><TableHeader><TableRow><TableHead>Invoice</TableHead><TableHead>Status</TableHead><TableHead className=\"text-right\">Amount</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell className=\"font-medium\">INV001</TableCell><TableCell><Badge variant=\"secondary\">Paid</Badge></TableCell><TableCell className=\"text-right\">$250.00</TableCell></TableRow><TableRow><TableCell className=\"font-medium\">INV002</TableCell><TableCell><Badge variant=\"outline\">Pending</Badge></TableCell><TableCell className=\"text-right\">$150.00</TableCell></TableRow></TableBody></Table>"
      }
    ],
    "relatedComponents": [
      "Card",
      "Pagination",
      "Badge"
    ]
  },
  {
    "name": "Tag",
    "category": "Data display",
    "description": "Tag is a data display primitive.",
    "importFrom": "@/components/ads/data",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "removable"
    ],
    "controls": [
      {
        "name": "children",
        "label": "Children",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "children",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Tag label."
      },
      {
        "name": "onClose",
        "label": "On Close",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "onClose",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "When set, renders an X remove button."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "removable"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Tag",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      }
    ],
    "propMetadata": {
      "children": {
        "type": "node",
        "default": null,
        "values": [],
        "required": false,
        "description": "Tag label.",
        "control": "children"
      },
      "onClose": {
        "type": "function",
        "default": null,
        "values": [],
        "required": false,
        "description": "When set, renders an X remove button.",
        "control": "onClose"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "removable"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Tag",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "removable",
        "kind": "base",
        "visualIntent": "Removable appearance for verifying Tag before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "removable"
      }
    ],
    "anatomy": {
      "root": "Tag",
      "slots": [],
      "requiredParts": [
        "Tag"
      ],
      "optionalParts": [],
      "composition": "Tag is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Tag",
        "Data display",
        "default",
        "removable",
        "children",
        "onClose"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Tag when the foundation's tag module matches the intended data display pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "children",
          "onClose",
          "state",
          "label"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Tag when the foundation's tag module matches the intended data display pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<div className=\"flex gap-2\"><Tag>Design</Tag><Tag onClose={() => {}}>Frontend</Tag></div>"
      }
    ],
    "relatedComponents": [
      "Badge",
      "Status"
    ]
  },
  {
    "name": "Timeline",
    "category": "Data display",
    "description": "Timeline is a data display primitive.",
    "importFrom": "@/components/ads/data",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "items",
        "label": "Items",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "items",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Array of { title, description } events."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "items": {
        "type": "array",
        "default": null,
        "values": [],
        "required": false,
        "description": "Array of { title, description } events.",
        "control": "items"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Timeline",
      "slots": [],
      "requiredParts": [
        "Timeline"
      ],
      "optionalParts": [],
      "composition": "Timeline is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Timeline",
        "Data display",
        "default",
        "items"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Timeline when the foundation's timeline module matches the intended data display pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "items",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Timeline when the foundation's timeline module matches the intended data display pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Timeline items={[{title:\"Created\",description:\"Project initialized\"},{title:\"Deployed\",description:\"Live in production\"}]} />"
      }
    ],
    "relatedComponents": [
      "DataList",
      "Steps"
    ]
  },
  {
    "name": "TreeView",
    "category": "Data display",
    "description": "TreeView is a data display primitive.",
    "importFrom": "@/components/ads/data",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "expanded",
      "collapsed"
    ],
    "controls": [
      {
        "name": "data",
        "label": "Data",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "data",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Recursive array of { label, children }."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "expanded",
          "collapsed"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "data": {
        "type": "array",
        "default": null,
        "values": [],
        "required": false,
        "description": "Recursive array of { label, children }.",
        "control": "data"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "expanded",
          "collapsed"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "expanded",
        "kind": "base",
        "visualIntent": "Expanded appearance for verifying TreeView before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "expanded"
      },
      {
        "name": "collapsed",
        "kind": "base",
        "visualIntent": "Collapsed appearance for verifying TreeView before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "collapsed"
      }
    ],
    "anatomy": {
      "root": "TreeView",
      "slots": [],
      "requiredParts": [
        "TreeView"
      ],
      "optionalParts": [],
      "composition": "TreeView is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "TreeView",
        "Data display",
        "default",
        "expanded",
        "collapsed",
        "data"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use TreeView when the foundation's tree-view module matches the intended data display pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "data",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.825Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use TreeView when the foundation's tree-view module matches the intended data display pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<TreeView data={[{label:\"src\",children:[{label:\"components\",children:[{label:\"Button.tsx\"}]},{label:\"index.ts\"}]}]} />"
      }
    ],
    "relatedComponents": [
      "Timeline",
      "Listbox"
    ]
  },
  {
    "name": "Alert",
    "category": "Feedback",
    "description": "A persistent inline message for status, validation summaries, warnings, and contextual system feedback.",
    "importFrom": "@/components/ui/alert",
    "utility": false,
    "variants": [
      "default",
      "destructive",
      "success",
      "warning",
      "info"
    ],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "variant",
        "label": "Variant",
        "type": "select",
        "options": [
          "default",
          "destructive",
          "success",
          "warning",
          "info"
        ],
        "default": "default",
        "urlParam": "variant",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Selects the visual treatment for Alert."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Alert",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      },
      {
        "name": "description",
        "label": "Description",
        "type": "text",
        "options": [],
        "default": "Rendered in the active ADS Light brand.",
        "urlParam": "description",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls supporting copy for multi-line previews."
      }
    ],
    "propMetadata": {
      "variant": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "destructive",
          "success",
          "warning",
          "info"
        ],
        "required": false,
        "description": "Alert visual variant.",
        "control": "variant"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Alert",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      },
      "description": {
        "type": "text",
        "default": "Rendered in the active ADS Light brand.",
        "values": [],
        "required": false,
        "description": "Controls supporting copy for multi-line previews.",
        "control": "description"
      }
    },
    "variantMetadata": [
      {
        "name": "default",
        "default": true,
        "visualIntent": "Base rendering when no visual recipe is exposed.",
        "whenToUse": "Use for the strongest emphasis or primary action.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "destructive",
        "default": false,
        "visualIntent": "Destructive visual treatment for Alert.",
        "whenToUse": "Use for irreversible or dangerous actions; pair with explicit copy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "success",
        "default": false,
        "visualIntent": "Success visual treatment for Alert.",
        "whenToUse": "Use when success best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "warning",
        "default": false,
        "visualIntent": "Warning visual treatment for Alert.",
        "whenToUse": "Use when warning best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "info",
        "default": false,
        "visualIntent": "Info visual treatment for Alert.",
        "whenToUse": "Use when info best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      }
    ],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "title",
        "description"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "title",
        "description"
      ],
      "composition": "Compose Alert with its documented slot parts: root, title, description."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Use status that matches severity",
        "Keep alert copy actionable",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "high",
      "queryTerms": [
        "Alert",
        "Feedback",
        "default",
        "destructive",
        "success",
        "warning",
        "info",
        "variant"
      ],
      "selectionCriteria": {
        "chooseWhen": "System feedback Validation summaries Important contextual messages",
        "avoidWhen": "Decorative callouts Repeated list items Transient notifications",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "variant",
          "state",
          "label",
          "description"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "System feedback",
      "Validation summaries",
      "Important contextual messages"
    ],
    "neverUseFor": [
      "Decorative callouts",
      "Repeated list items",
      "Transient notifications"
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Alert className=\"w-96\"><Terminal /><AlertTitle>Heads up!</AlertTitle><AlertDescription>You can add components to your app using the CLI.</AlertDescription></Alert>"
      },
      {
        "name": "Status variants",
        "jsx": "<div className=\"flex w-96 flex-col gap-2\"><Alert variant=\"success\"><CircleCheck /><AlertTitle>Saved</AlertTitle><AlertDescription>Your changes are synced.</AlertDescription></Alert><Alert variant=\"warning\"><TriangleAlert /><AlertTitle>Heads up</AlertTitle><AlertDescription>Your trial ends in 3 days.</AlertDescription></Alert><Alert variant=\"info\"><Info /><AlertTitle>Note</AlertTitle><AlertDescription>A new version is available.</AlertDescription></Alert><Alert variant=\"destructive\"><CircleAlert /><AlertTitle>Error</AlertTitle><AlertDescription>Your session expired.</AlertDescription></Alert></div>"
      }
    ],
    "relatedComponents": [
      "Toast",
      "Card"
    ]
  },
  {
    "name": "Clipboard",
    "category": "Feedback",
    "description": "Clipboard is a feedback primitive.",
    "importFrom": "@/components/ads/feedback",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "copied",
      "hover",
      "focus-visible",
      "disabled",
      "active"
    ],
    "controls": [
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "value",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Required. String copied and shown in the field."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "label",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Optional label above the field."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "copied",
          "hover",
          "focus-visible",
          "disabled",
          "active"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "value": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Required. String copied and shown in the field.",
        "control": "value"
      },
      "label": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Optional label above the field.",
        "control": "label"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "copied",
          "hover",
          "focus-visible",
          "disabled",
          "active"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "copied",
        "kind": "base",
        "visualIntent": "Copied appearance for verifying Clipboard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "copied"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Clipboard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Clipboard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying Clipboard before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "active",
        "kind": "interaction",
        "visualIntent": "Active appearance for verifying Clipboard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "active"
      }
    ],
    "anatomy": {
      "root": "Clipboard",
      "slots": [],
      "requiredParts": [
        "Clipboard"
      ],
      "optionalParts": [],
      "composition": "Clipboard is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "interactive",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "button/link action",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Clipboard",
        "Feedback",
        "default",
        "copied",
        "hover",
        "focus-visible",
        "disabled",
        "active",
        "value",
        "label"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Clipboard when the foundation's clipboard module matches the intended feedback pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "value",
          "label",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Clipboard when the foundation's clipboard module matches the intended feedback pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Clipboard value=\"npm install ads-light\" className=\"w-72\" />"
      },
      {
        "name": "With label",
        "jsx": "<Clipboard label=\"API key\" value=\"sk_live_abc123\" className=\"w-72\" />"
      }
    ],
    "relatedComponents": [
      "CodeBlock"
    ]
  },
  {
    "name": "EmptyState",
    "category": "Feedback",
    "description": "EmptyState is a feedback primitive.",
    "importFrom": "@/components/ads/feedback",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "options": [],
        "default": "No results",
        "urlParam": "title",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Primary heading."
      },
      {
        "name": "description",
        "label": "Description",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "description",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Supporting copy."
      },
      {
        "name": "icon",
        "label": "Icon",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "icon",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Optional icon; defaults to Search."
      },
      {
        "name": "action",
        "label": "Action",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "action",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Optional action element."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "title": {
        "type": "string",
        "default": "No results",
        "values": [],
        "required": false,
        "description": "Primary heading.",
        "control": "title"
      },
      "description": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Supporting copy.",
        "control": "description"
      },
      "icon": {
        "type": "node",
        "default": null,
        "values": [],
        "required": false,
        "description": "Optional icon; defaults to Search.",
        "control": "icon"
      },
      "action": {
        "type": "node",
        "default": null,
        "values": [],
        "required": false,
        "description": "Optional action element.",
        "control": "action"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "EmptyState",
      "slots": [
        "icon",
        "action"
      ],
      "requiredParts": [
        "EmptyState"
      ],
      "optionalParts": [
        "icon",
        "action"
      ],
      "composition": "Compose EmptyState with its documented slot parts: icon, action."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "EmptyState",
        "Feedback",
        "default",
        "title",
        "description",
        "icon",
        "action"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use EmptyState when the foundation's empty-state module matches the intended feedback pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 5,
        "names": [
          "title",
          "description",
          "icon",
          "action",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use EmptyState when the foundation's empty-state module matches the intended feedback pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<EmptyState title=\"No results\" description=\"Try adjusting your filters.\" />"
      },
      {
        "name": "With action",
        "jsx": "<EmptyState icon={<Search size={28} />} title=\"Nothing found\" description=\"No matching records.\" action={<Button size=\"sm\">Clear filters</Button>} />"
      }
    ],
    "relatedComponents": [
      "Spinner",
      "Loader"
    ]
  },
  {
    "name": "Loader",
    "category": "Feedback",
    "description": "Loader is a feedback primitive.",
    "importFrom": "@/components/ads/feedback",
    "utility": false,
    "variants": [],
    "sizes": [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "size",
        "label": "Size",
        "type": "select",
        "options": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl"
        ],
        "default": "md",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Adjusts density, scale, and touch target size for Loader."
      },
      {
        "name": "text",
        "label": "Text",
        "type": "text",
        "options": [],
        "default": "Loading",
        "urlParam": "text",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Label next to spinner; empty to hide."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "text": {
        "type": "string",
        "default": "Loading",
        "values": [],
        "required": false,
        "description": "Label next to spinner; empty to hide.",
        "control": "text"
      },
      "size": {
        "type": "string",
        "default": "md",
        "values": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl"
        ],
        "required": false,
        "description": "Forwarded to the inner Spinner.",
        "control": "size"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Loader",
      "slots": [],
      "requiredParts": [
        "Loader"
      ],
      "optionalParts": [],
      "composition": "Loader is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Loader",
        "Feedback",
        "default",
        "text",
        "size"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Loader when the foundation's loader module matches the intended feedback pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "size",
          "text",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Loader when the foundation's loader module matches the intended feedback pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Loader />"
      },
      {
        "name": "Custom text",
        "jsx": "<Loader text=\"Fetching results\" size=\"sm\" />"
      }
    ],
    "relatedComponents": [
      "Spinner",
      "ProgressCircle"
    ]
  },
  {
    "name": "Presence",
    "category": "Feedback",
    "description": "Presence is a feedback primitive.",
    "importFrom": "react",
    "utility": true,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Presence",
      "slots": [],
      "requiredParts": [
        "Presence"
      ],
      "optionalParts": [],
      "composition": "Presence is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Presence",
        "Feedback",
        "default"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Presence when the foundation's presence module matches the intended feedback pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 1,
        "names": [
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Presence when the foundation's presence module matches the intended feedback pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Note",
        "jsx": "<div className=\"rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground\">Presence is a mount/unmount animation helper. In this stack use tw-animate-css classes or Radix data-state transitions instead.</div>"
      }
    ],
    "relatedComponents": []
  },
  {
    "name": "Progress",
    "category": "Feedback",
    "description": "Shows determinate or indeterminate completion for a task or process.",
    "importFrom": "@/components/ui/progress",
    "utility": false,
    "variants": [
      "default",
      "success",
      "warning",
      "destructive",
      "info"
    ],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "variant",
        "label": "Variant",
        "type": "select",
        "options": [
          "default",
          "success",
          "warning",
          "destructive",
          "info"
        ],
        "default": "default",
        "urlParam": "variant",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Selects the visual treatment for Progress."
      },
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "value",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Current progress percentage (0-100)."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "variant": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "success",
          "warning",
          "destructive",
          "info"
        ],
        "required": false,
        "description": "Status intent for the bar color.",
        "control": "variant"
      },
      "value": {
        "type": "number",
        "default": null,
        "values": [],
        "required": false,
        "description": "Current progress percentage (0-100).",
        "control": "value"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [
      {
        "name": "default",
        "default": true,
        "visualIntent": "Base rendering when no visual recipe is exposed.",
        "whenToUse": "Use for the strongest emphasis or primary action.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "success",
        "default": false,
        "visualIntent": "Success visual treatment for Progress.",
        "whenToUse": "Use when success best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "warning",
        "default": false,
        "visualIntent": "Warning visual treatment for Progress.",
        "whenToUse": "Use when warning best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "destructive",
        "default": false,
        "visualIntent": "Destructive visual treatment for Progress.",
        "whenToUse": "Use for irreversible or dangerous actions; pair with explicit copy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "info",
        "default": false,
        "visualIntent": "Info visual treatment for Progress.",
        "whenToUse": "Use when info best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      }
    ],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Progress",
      "slots": [],
      "requiredParts": [
        "Progress"
      ],
      "optionalParts": [],
      "composition": "Progress is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Expose value text when progress matters",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Progress",
        "Feedback",
        "default",
        "success",
        "warning",
        "destructive",
        "info",
        "variant",
        "value"
      ],
      "selectionCriteria": {
        "chooseWhen": "Known progress Upload/download status Multi-step completion",
        "avoidWhen": "Unknown wait time Decorative bars",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "variant",
          "value",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Known progress",
      "Upload/download status",
      "Multi-step completion"
    ],
    "neverUseFor": [
      "Unknown wait time",
      "Decorative bars"
    ],
    "examples": [
      {
        "name": "At 60%",
        "jsx": "<Progress value={60} aria-label=\"Upload progress\" className=\"w-80\" />"
      },
      {
        "name": "Status bars",
        "jsx": "<div className=\"flex w-80 flex-col gap-3\"><Progress value={90} variant=\"success\" aria-label=\"Healthy\" /><Progress value={75} variant=\"warning\" aria-label=\"Nearing limit\" /><Progress value={96} variant=\"destructive\" aria-label=\"Over limit\" /></div>"
      }
    ],
    "relatedComponents": [
      "Skeleton",
      "ProgressCircle"
    ]
  },
  {
    "name": "ProgressCircle",
    "category": "Feedback",
    "description": "ProgressCircle is a feedback primitive.",
    "importFrom": "@/components/ads/feedback",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "value",
        "label": "Value",
        "type": "text",
        "options": [],
        "default": 0,
        "urlParam": "value",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Percent 0-100; shown in center."
      },
      {
        "name": "size",
        "label": "Size",
        "type": "number",
        "options": [],
        "default": 56,
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Ring diameter in pixels."
      },
      {
        "name": "thickness",
        "label": "Thickness",
        "type": "number",
        "options": [],
        "default": 6,
        "urlParam": "thickness",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Stroke width."
      },
      {
        "name": "tone",
        "label": "Tone",
        "type": "select",
        "options": [
          "primary",
          "success",
          "warning",
          "danger",
          "info"
        ],
        "default": "primary",
        "urlParam": "tone",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Status intent for the ring color."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "value": {
        "type": "number",
        "default": 0,
        "values": [],
        "required": false,
        "description": "Percent 0-100; shown in center.",
        "control": "value"
      },
      "size": {
        "type": "number",
        "default": 56,
        "values": [],
        "required": false,
        "description": "Ring diameter in pixels.",
        "control": "size"
      },
      "thickness": {
        "type": "number",
        "default": 6,
        "values": [],
        "required": false,
        "description": "Stroke width.",
        "control": "thickness"
      },
      "tone": {
        "type": "string",
        "default": "primary",
        "values": [
          "primary",
          "success",
          "warning",
          "danger",
          "info"
        ],
        "required": false,
        "description": "Status intent for the ring color.",
        "control": "tone"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "ProgressCircle",
      "slots": [],
      "requiredParts": [
        "ProgressCircle"
      ],
      "optionalParts": [],
      "composition": "ProgressCircle is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "ProgressCircle",
        "Feedback",
        "default",
        "value",
        "size",
        "thickness",
        "tone"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use ProgressCircle when the foundation's progress-circle module matches the intended feedback pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 5,
        "names": [
          "value",
          "size",
          "thickness",
          "tone",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use ProgressCircle when the foundation's progress-circle module matches the intended feedback pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<ProgressCircle value={72} />"
      },
      {
        "name": "Large thin",
        "jsx": "<ProgressCircle value={40} size={80} thickness={4} />"
      },
      {
        "name": "Status tones",
        "jsx": "<div className=\"flex gap-4\"><ProgressCircle value={90} tone=\"success\" /><ProgressCircle value={60} tone=\"warning\" /><ProgressCircle value={30} tone=\"danger\" /></div>"
      }
    ],
    "relatedComponents": [
      "Spinner",
      "Progress"
    ]
  },
  {
    "name": "Skeleton",
    "category": "Feedback",
    "description": "Placeholder shape that reserves layout while content loads.",
    "importFrom": "@/components/ui/skeleton",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Size/shape via Tailwind utilities (h-4 w-32 rounded-full)."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Size/shape via Tailwind utilities (h-4 w-32 rounded-full).",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Skeleton",
      "slots": [],
      "requiredParts": [
        "Skeleton"
      ],
      "optionalParts": [],
      "composition": "Skeleton is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Do not announce decorative skeletons as content",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Skeleton",
        "Feedback",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Content loading where shape is known Preventing layout shift Cards and lists with async data",
        "avoidWhen": "One-off button loading Unknown layout Errors",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Content loading where shape is known",
      "Preventing layout shift",
      "Cards and lists with async data"
    ],
    "neverUseFor": [
      "One-off button loading",
      "Unknown layout",
      "Errors"
    ],
    "examples": [
      {
        "name": "Card skeleton",
        "jsx": "<div className=\"flex items-center gap-4\"><Skeleton className=\"size-12 rounded-full\" /><div className=\"space-y-2\"><Skeleton className=\"h-4 w-48\" /><Skeleton className=\"h-4 w-32\" /></div></div>"
      }
    ],
    "relatedComponents": [
      "Progress",
      "Avatar"
    ]
  },
  {
    "name": "Spinner",
    "category": "Feedback",
    "description": "Indicates indeterminate loading when exact progress cannot be measured.",
    "importFrom": "@/components/ads/feedback",
    "utility": false,
    "variants": [],
    "sizes": [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "size",
        "label": "Size",
        "type": "select",
        "options": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl"
        ],
        "default": "md",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Adjusts density, scale, and touch target size for Spinner."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "size": {
        "type": "string",
        "default": "md",
        "values": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl"
        ],
        "required": false,
        "description": "Maps to pixel dimensions.",
        "control": "size"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Spinner",
      "slots": [],
      "requiredParts": [
        "Spinner"
      ],
      "optionalParts": [],
      "composition": "Spinner is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Use aria-label or nearby status text",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Spinner",
        "Feedback",
        "default",
        "size"
      ],
      "selectionCriteria": {
        "chooseWhen": "Indeterminate loading Short async waits Inline loading beside text",
        "avoidWhen": "Known progress values Long skeleton-friendly content loads",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "size",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Indeterminate loading",
      "Short async waits",
      "Inline loading beside text"
    ],
    "neverUseFor": [
      "Known progress values",
      "Long skeleton-friendly content loads"
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Spinner />"
      },
      {
        "name": "Large",
        "jsx": "<Spinner size=\"lg\" />"
      }
    ],
    "relatedComponents": [
      "Loader",
      "ProgressCircle"
    ]
  },
  {
    "name": "Toast",
    "category": "Feedback",
    "description": "A transient notification for non-blocking success, progress, warning, or error feedback.",
    "importFrom": "@/components/ui/sonner",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "toast()",
        "label": "Toast()",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "toast()",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "sonner is imperative: call toast()/toast.success()/toast.error(). No JSX Toast element; the example is an inline Alert stand-in."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "description",
        "label": "Description",
        "type": "text",
        "options": [],
        "default": "Rendered in the active ADS Light brand.",
        "urlParam": "description",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls supporting copy for multi-line previews."
      }
    ],
    "propMetadata": {
      "toast()": {
        "type": "function",
        "default": null,
        "values": [],
        "required": false,
        "description": "sonner is imperative: call toast()/toast.success()/toast.error(). No JSX Toast element; the example is an inline Alert stand-in.",
        "control": "toast()"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "description": {
        "type": "text",
        "default": "Rendered in the active ADS Light brand.",
        "values": [],
        "required": false,
        "description": "Controls supporting copy for multi-line previews.",
        "control": "description"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Toast",
      "slots": [],
      "requiredParts": [
        "Toast"
      ],
      "optionalParts": [],
      "composition": "Toast is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Avoid stacking too many toasts",
        "Use Alert for persistent feedback",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Toast",
        "Feedback",
        "default",
        "toast()"
      ],
      "selectionCriteria": {
        "chooseWhen": "Non-blocking confirmation Background save feedback Async status updates",
        "avoidWhen": "Critical decisions Inline validation Messages users must compare",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "toast()",
          "state",
          "description"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Non-blocking confirmation",
      "Background save feedback",
      "Async status updates"
    ],
    "neverUseFor": [
      "Critical decisions",
      "Inline validation",
      "Messages users must compare"
    ],
    "examples": [
      {
        "name": "Inline stand-in",
        "jsx": "<Alert className=\"w-80 shadow-md\"><CircleCheck /><AlertTitle>Event created</AlertTitle><AlertDescription>Sunday, December 03 at 9:00 AM</AlertDescription></Alert>"
      }
    ],
    "relatedComponents": [
      "Toaster",
      "Alert"
    ]
  },
  {
    "name": "Accordion",
    "category": "Navigation",
    "description": "Disclosure set for showing and hiding sections of related content.",
    "importFrom": "@/components/ui/accordion",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "open",
      "closed"
    ],
    "controls": [
      {
        "name": "type",
        "label": "Type",
        "type": "select",
        "options": [
          "single",
          "multiple"
        ],
        "default": "",
        "urlParam": "type",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "single allows one open item, multiple allows many."
      },
      {
        "name": "collapsible",
        "label": "Collapsible",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "collapsible",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "When type=single, allows closing the open item."
      },
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled open item value(s)."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "open",
          "closed"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "type": {
        "type": "string",
        "default": null,
        "values": [
          "single",
          "multiple"
        ],
        "required": false,
        "description": "single allows one open item, multiple allows many.",
        "control": "type"
      },
      "collapsible": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "When type=single, allows closing the open item.",
        "control": "collapsible"
      },
      "defaultValue": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled open item value(s).",
        "control": "defaultValue"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "open",
          "closed"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying Accordion before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "closed",
        "kind": "base",
        "visualIntent": "Closed appearance for verifying Accordion before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "closed"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "item",
        "trigger",
        "content"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "item",
        "trigger",
        "content"
      ],
      "composition": "Compose Accordion with its documented slot parts: root, item, trigger, content."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "navigation",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Accordion",
        "Navigation",
        "default",
        "open",
        "closed",
        "type",
        "collapsible",
        "defaultValue"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Accordion when the foundation's accordion module matches the intended navigation pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "type",
          "collapsible",
          "defaultValue",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Accordion when the foundation's accordion module matches the intended navigation pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Single collapsible",
        "jsx": "<Accordion type=\"single\" collapsible defaultValue=\"item-1\" className=\"w-80\"><AccordionItem value=\"item-1\"><AccordionTrigger>Is it accessible?</AccordionTrigger><AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent></AccordionItem><AccordionItem value=\"item-2\"><AccordionTrigger>Is it styled?</AccordionTrigger><AccordionContent>Yes, with default styles.</AccordionContent></AccordionItem></Accordion>"
      }
    ],
    "relatedComponents": [
      "Collapsible",
      "Tabs"
    ]
  },
  {
    "name": "Breadcrumb",
    "category": "Navigation",
    "description": "Shows the current page location in a hierarchy and supports moving to ancestors.",
    "importFrom": "@/components/ui/breadcrumb",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "asChild",
        "label": "As Child",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "asChild",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "BreadcrumbLink renders a custom anchor."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "asChild": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "BreadcrumbLink renders a custom anchor.",
        "control": "asChild"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "list",
        "item",
        "link",
        "page",
        "separator",
        "ellipsis"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "list",
        "item",
        "link",
        "page",
        "separator",
        "ellipsis"
      ],
      "composition": "Compose Breadcrumb with its documented slot parts: root, list, item, link, page, separator, ellipsis."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "navigation",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Wrap in nav with aria-label when used in app pages",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Breadcrumb",
        "Navigation",
        "default",
        "asChild"
      ],
      "selectionCriteria": {
        "chooseWhen": "Hierarchical page context Deep admin navigation Ancestor navigation",
        "avoidWhen": "Primary navigation Flat apps Process steps",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "asChild",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Hierarchical page context",
      "Deep admin navigation",
      "Ancestor navigation"
    ],
    "neverUseFor": [
      "Primary navigation",
      "Flat apps",
      "Process steps"
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href=\"#\">Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink href=\"#\">Components</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>"
      }
    ],
    "relatedComponents": [
      "Pagination",
      "Tabs"
    ]
  },
  {
    "name": "Carousel",
    "category": "Navigation",
    "description": "Carousel is a navigation primitive.",
    "importFrom": "@/components/ui/carousel",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "orientation",
        "label": "Orientation",
        "type": "select",
        "options": [
          "horizontal",
          "vertical"
        ],
        "default": "horizontal",
        "urlParam": "orientation",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Scroll axis."
      },
      {
        "name": "opts",
        "label": "Opts",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "opts",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Embla options passed to the root."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "orientation": {
        "type": "string",
        "default": "horizontal",
        "values": [
          "horizontal",
          "vertical"
        ],
        "required": false,
        "description": "Scroll axis.",
        "control": "orientation"
      },
      "opts": {
        "type": "object",
        "default": null,
        "values": [],
        "required": false,
        "description": "Embla options passed to the root.",
        "control": "opts"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "content",
        "item",
        "previous",
        "next"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "content",
        "item",
        "previous",
        "next"
      ],
      "composition": "Compose Carousel with its documented slot parts: root, content, item, previous, next."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "navigation",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Carousel",
        "Navigation",
        "default",
        "orientation",
        "opts"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Carousel when the foundation's carousel module matches the intended navigation pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "orientation",
          "opts",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Carousel when the foundation's carousel module matches the intended navigation pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<Carousel className=\"mx-12 w-60\"><CarouselContent>{[1, 2, 3].map((n) => (<CarouselItem key={n}><div className=\"flex aspect-square items-center justify-center rounded-md border bg-card text-4xl font-semibold\">{n}</div></CarouselItem>))}</CarouselContent><CarouselPrevious /><CarouselNext /></Carousel>"
      }
    ],
    "relatedComponents": [
      "ScrollArea",
      "AspectRatio"
    ]
  },
  {
    "name": "Collapsible",
    "category": "Navigation",
    "description": "Collapsible is a navigation primitive.",
    "importFrom": "@/components/ui/collapsible",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "open",
      "closed"
    ],
    "controls": [
      {
        "name": "defaultOpen",
        "label": "Default Open",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "defaultOpen",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled open state."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "open",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Controlled open state."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "open",
          "closed"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "defaultOpen": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled open state.",
        "control": "defaultOpen"
      },
      "open": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Controlled open state.",
        "control": "open"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "open",
          "closed"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying Collapsible before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "closed",
        "kind": "base",
        "visualIntent": "Closed appearance for verifying Collapsible before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "closed"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "trigger",
        "content"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "trigger",
        "content"
      ],
      "composition": "Compose Collapsible with its documented slot parts: root, trigger, content."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "navigation",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Collapsible",
        "Navigation",
        "default",
        "open",
        "closed",
        "defaultOpen"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Collapsible when the foundation's collapsible module matches the intended navigation pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "defaultOpen",
          "open",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Collapsible when the foundation's collapsible module matches the intended navigation pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Open",
        "jsx": "<Collapsible defaultOpen className=\"w-72 space-y-2\"><div className=\"flex items-center justify-between\"><span className=\"text-sm font-semibold\">Starred repos</span><CollapsibleTrigger asChild><Button variant=\"ghost\" size=\"icon\" aria-label=\"Toggle repos\"><ChevronsUpDown /></Button></CollapsibleTrigger></div><CollapsibleContent className=\"space-y-2\"><div className=\"rounded-md border px-3 py-2 text-sm\">@radix-ui/primitives</div><div className=\"rounded-md border px-3 py-2 text-sm\">@stitches/react</div></CollapsibleContent></Collapsible>"
      }
    ],
    "relatedComponents": [
      "Accordion"
    ]
  },
  {
    "name": "Menu",
    "category": "Navigation",
    "description": "A popover list of commands or options opened from a button.",
    "importFrom": "@/components/ui/dropdown-menu",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "open",
      "closed",
      "hover",
      "focus-visible"
    ],
    "controls": [
      {
        "name": "defaultOpen",
        "label": "Default Open",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "defaultOpen",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled open state."
      },
      {
        "name": "variant",
        "label": "Variant",
        "type": "select",
        "options": [
          "default",
          "destructive"
        ],
        "default": "default",
        "urlParam": "variant",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "DropdownMenuItem visual variant."
      },
      {
        "name": "inset",
        "label": "Inset",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "inset",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Item/Label left padding to align with checkbox items."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Menu",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "open",
        "bindsTo": "disclosure-state",
        "source": "ads-rich-metadata",
        "description": "Controls the open prop for Menu."
      }
    ],
    "propMetadata": {
      "defaultOpen": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled open state.",
        "control": "defaultOpen"
      },
      "variant": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "destructive"
        ],
        "required": false,
        "description": "DropdownMenuItem visual variant.",
        "control": "variant"
      },
      "inset": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Item/Label left padding to align with checkbox items.",
        "control": "inset"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Menu",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      },
      "open": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Controls the open prop for Menu.",
        "control": "open"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying Menu before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "closed",
        "kind": "base",
        "visualIntent": "Closed appearance for verifying Menu before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "closed"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Menu before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Menu before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "trigger",
        "content",
        "group",
        "label",
        "item",
        "checkboxitem",
        "radiogroup",
        "radioitem",
        "separator",
        "shortcut",
        "sub"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "trigger",
        "content",
        "group",
        "label",
        "item",
        "checkboxitem",
        "radiogroup",
        "radioitem",
        "separator",
        "shortcut",
        "sub"
      ],
      "composition": "Compose Menu with its documented slot parts: root, trigger, content, group, label, item, checkboxitem, radiogroup, radioitem, separator, shortcut, sub."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "feedback",
      "interactive": true,
      "hasDisclosure": true,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Menu items should be commands or choices",
        "Use keyboard-friendly labels",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "overlay/disclosure",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Menu",
        "Navigation",
        "default",
        "open",
        "closed",
        "hover",
        "focus-visible",
        "defaultOpen",
        "variant",
        "inset"
      ],
      "selectionCriteria": {
        "chooseWhen": "Overflow actions Command menus Compact option lists",
        "avoidWhen": "Primary navigation with persistent state Forms Long searchable lists",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 6,
        "names": [
          "defaultOpen",
          "variant",
          "inset",
          "state",
          "label",
          "open"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Overflow actions",
      "Command menus",
      "Compact option lists"
    ],
    "neverUseFor": [
      "Primary navigation with persistent state",
      "Forms",
      "Long searchable lists"
    ],
    "examples": [
      {
        "name": "Open menu",
        "jsx": "<DropdownMenu defaultOpen><DropdownMenuTrigger asChild><Button variant=\"outline\">Open</Button></DropdownMenuTrigger><DropdownMenuContent className=\"w-48\"><DropdownMenuLabel>My Account</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem><User />Profile<DropdownMenuShortcut>Shift+P</DropdownMenuShortcut></DropdownMenuItem><DropdownMenuItem><Settings />Settings</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem variant=\"destructive\"><LogOut />Log out</DropdownMenuItem></DropdownMenuContent></DropdownMenu>"
      }
    ],
    "relatedComponents": [
      "Popover",
      "Select",
      "Tooltip"
    ]
  },
  {
    "name": "Pagination",
    "category": "Navigation",
    "description": "Pagination is a navigation primitive.",
    "importFrom": "@/components/ui/pagination",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "active"
    ],
    "controls": [
      {
        "name": "isActive",
        "label": "Is Active",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "isActive",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "PaginationLink active page (outline style)."
      },
      {
        "name": "size",
        "label": "Size",
        "type": "select",
        "options": [
          "default",
          "sm",
          "lg",
          "icon"
        ],
        "default": "icon",
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "PaginationLink button size."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "active"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "isActive": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "PaginationLink active page (outline style).",
        "control": "isActive"
      },
      "size": {
        "type": "string",
        "default": "icon",
        "values": [
          "default",
          "sm",
          "lg",
          "icon"
        ],
        "required": false,
        "description": "PaginationLink button size.",
        "control": "size"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "active"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "active",
        "kind": "interaction",
        "visualIntent": "Active appearance for verifying Pagination before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "active"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "content",
        "item",
        "link",
        "previous",
        "next",
        "ellipsis"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "content",
        "item",
        "link",
        "previous",
        "next",
        "ellipsis"
      ],
      "composition": "Compose Pagination with its documented slot parts: root, content, item, link, previous, next, ellipsis."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "navigation",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Pagination",
        "Navigation",
        "default",
        "active",
        "isActive",
        "size"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Pagination when the foundation's pagination module matches the intended navigation pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "isActive",
          "size",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Pagination when the foundation's pagination module matches the intended navigation pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<Pagination><PaginationContent><PaginationItem><PaginationPrevious href=\"#\" /></PaginationItem><PaginationItem><PaginationLink href=\"#\">1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href=\"#\" isActive>2</PaginationLink></PaginationItem><PaginationItem><PaginationLink href=\"#\">3</PaginationLink></PaginationItem><PaginationItem><PaginationEllipsis /></PaginationItem><PaginationItem><PaginationNext href=\"#\" /></PaginationItem></PaginationContent></Pagination>"
      }
    ],
    "relatedComponents": [
      "Breadcrumb"
    ]
  },
  {
    "name": "Steps",
    "category": "Navigation",
    "description": "Steps is a navigation primitive.",
    "importFrom": "@/components/ads/misc",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "completed",
      "active",
      "upcoming"
    ],
    "controls": [
      {
        "name": "steps",
        "label": "Steps",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "steps",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Ordered step labels."
      },
      {
        "name": "current",
        "label": "Current",
        "type": "number",
        "options": [],
        "default": 0,
        "urlParam": "current",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Active step index; earlier steps show a check."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "completed",
          "active",
          "upcoming"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "steps": {
        "type": "array",
        "default": null,
        "values": [],
        "required": false,
        "description": "Ordered step labels.",
        "control": "steps"
      },
      "current": {
        "type": "number",
        "default": 0,
        "values": [],
        "required": false,
        "description": "Active step index; earlier steps show a check.",
        "control": "current"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "completed",
          "active",
          "upcoming"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "completed",
        "kind": "base",
        "visualIntent": "Completed appearance for verifying Steps before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "completed"
      },
      {
        "name": "active",
        "kind": "interaction",
        "visualIntent": "Active appearance for verifying Steps before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "active"
      },
      {
        "name": "upcoming",
        "kind": "base",
        "visualIntent": "Upcoming appearance for verifying Steps before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "upcoming"
      }
    ],
    "anatomy": {
      "root": "Steps",
      "slots": [],
      "requiredParts": [
        "Steps"
      ],
      "optionalParts": [],
      "composition": "Steps is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "navigation",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Steps",
        "Navigation",
        "default",
        "completed",
        "active",
        "upcoming",
        "steps",
        "current"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Steps when the foundation's steps module matches the intended navigation pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "steps",
          "current",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Steps when the foundation's steps module matches the intended navigation pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Steps steps={[\"Cart\",\"Shipping\",\"Payment\"]} current={1} className=\"w-96\" />"
      }
    ],
    "relatedComponents": [
      "Timeline",
      "Progress"
    ]
  },
  {
    "name": "Tabs",
    "category": "Navigation",
    "description": "Switches between peer panels within the same page context.",
    "importFrom": "@/components/ui/tabs",
    "utility": false,
    "variants": [
      "default",
      "line"
    ],
    "sizes": [],
    "states": [
      "default",
      "active"
    ],
    "controls": [
      {
        "name": "variant",
        "label": "Variant",
        "type": "select",
        "options": [
          "default",
          "line"
        ],
        "default": "default",
        "urlParam": "variant",
        "bindsTo": "prop",
        "source": "shadcn-cva",
        "description": "Selects the visual treatment for Tabs."
      },
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled active tab value."
      },
      {
        "name": "orientation",
        "label": "Orientation",
        "type": "select",
        "options": [
          "horizontal",
          "vertical"
        ],
        "default": "horizontal",
        "urlParam": "orientation",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Layout orientation."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "active"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Tabs",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      }
    ],
    "propMetadata": {
      "defaultValue": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled active tab value.",
        "control": "defaultValue"
      },
      "orientation": {
        "type": "string",
        "default": "horizontal",
        "values": [
          "horizontal",
          "vertical"
        ],
        "required": false,
        "description": "Layout orientation.",
        "control": "orientation"
      },
      "variant": {
        "type": "string",
        "default": "default",
        "values": [
          "default",
          "line"
        ],
        "required": false,
        "description": "TabsList visual variant.",
        "control": "variant"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "active"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Tabs",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      }
    },
    "variantMetadata": [
      {
        "name": "default",
        "default": true,
        "visualIntent": "Base rendering when no visual recipe is exposed.",
        "whenToUse": "Use for the strongest emphasis or primary action.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      },
      {
        "name": "line",
        "default": false,
        "visualIntent": "Line visual treatment for Tabs.",
        "whenToUse": "Use when line best communicates the hierarchy.",
        "tokenIntent": "Must resolve through ADS Light semantic Tailwind tokens, never raw colors."
      }
    ],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "active",
        "kind": "interaction",
        "visualIntent": "Active appearance for verifying Tabs before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "active"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "list",
        "trigger",
        "content"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "list",
        "trigger",
        "content"
      ],
      "composition": "Compose Tabs with its documented slot parts: root, list, trigger, content."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "navigation",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Each trigger should clearly describe its panel",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "high",
      "queryTerms": [
        "Tabs",
        "Navigation",
        "default",
        "line",
        "active",
        "defaultValue",
        "orientation",
        "variant"
      ],
      "selectionCriteria": {
        "chooseWhen": "Switching between peer views Compact dashboards Settings panels",
        "avoidWhen": "Primary site navigation Linear steps Filtering data",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 5,
        "names": [
          "variant",
          "defaultValue",
          "orientation",
          "state",
          "label"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Switching between peer views",
      "Compact dashboards",
      "Settings panels"
    ],
    "neverUseFor": [
      "Primary site navigation",
      "Linear steps",
      "Filtering data"
    ],
    "examples": [
      {
        "name": "Basic",
        "jsx": "<Tabs defaultValue=\"account\" className=\"w-80\"><TabsList><TabsTrigger value=\"account\">Account</TabsTrigger><TabsTrigger value=\"password\">Password</TabsTrigger></TabsList><TabsContent value=\"account\" className=\"text-sm text-muted-foreground\">Make changes to your account.</TabsContent><TabsContent value=\"password\" className=\"text-sm text-muted-foreground\">Change your password here.</TabsContent></Tabs>"
      },
      {
        "name": "Line variant",
        "jsx": "<Tabs defaultValue=\"overview\" className=\"w-80\"><TabsList variant=\"line\"><TabsTrigger value=\"overview\">Overview</TabsTrigger><TabsTrigger value=\"activity\">Activity</TabsTrigger></TabsList><TabsContent value=\"overview\" className=\"text-sm text-muted-foreground\">Overview content.</TabsContent><TabsContent value=\"activity\" className=\"text-sm text-muted-foreground\">Activity content.</TabsContent></Tabs>"
      }
    ],
    "relatedComponents": [
      "Accordion",
      "SegmentGroup"
    ]
  },
  {
    "name": "Tooltip",
    "category": "Navigation",
    "description": "A small contextual label that clarifies an icon or dense control on hover/focus.",
    "importFrom": "@/components/ui/tooltip",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "open",
      "closed",
      "hover",
      "focus-visible"
    ],
    "controls": [
      {
        "name": "defaultOpen",
        "label": "Default Open",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "defaultOpen",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled open state."
      },
      {
        "name": "delayDuration",
        "label": "Delay Duration",
        "type": "number",
        "options": [],
        "default": 0,
        "urlParam": "delayDuration",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Delay before showing."
      },
      {
        "name": "sideOffset",
        "label": "Side Offset",
        "type": "number",
        "options": [],
        "default": 0,
        "urlParam": "sideOffset",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Distance from trigger."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Tooltip",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "open",
        "bindsTo": "disclosure-state",
        "source": "ads-rich-metadata",
        "description": "Controls the open prop for Tooltip."
      }
    ],
    "propMetadata": {
      "defaultOpen": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled open state.",
        "control": "defaultOpen"
      },
      "delayDuration": {
        "type": "number",
        "default": 0,
        "values": [],
        "required": false,
        "description": "Delay before showing.",
        "control": "delayDuration"
      },
      "sideOffset": {
        "type": "number",
        "default": 0,
        "values": [],
        "required": false,
        "description": "Distance from trigger.",
        "control": "sideOffset"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Tooltip",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      },
      "open": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Controls the open prop for Tooltip.",
        "control": "open"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying Tooltip before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "closed",
        "kind": "base",
        "visualIntent": "Closed appearance for verifying Tooltip before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "closed"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Tooltip before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Tooltip before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "provider",
        "root",
        "trigger",
        "content"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "provider",
        "trigger",
        "content"
      ],
      "composition": "Compose Tooltip with its documented slot parts: provider, root, trigger, content."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "feedback",
      "interactive": true,
      "hasDisclosure": true,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Tooltip content should not be essential to completing a task",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "overlay/disclosure",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Tooltip",
        "Navigation",
        "default",
        "open",
        "closed",
        "hover",
        "focus-visible",
        "defaultOpen",
        "delayDuration",
        "sideOffset"
      ],
      "selectionCriteria": {
        "chooseWhen": "Icon button clarification Dense toolbar controls Supplementary hints",
        "avoidWhen": "Required instructions Long help text Mobile-only explanation",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 6,
        "names": [
          "defaultOpen",
          "delayDuration",
          "sideOffset",
          "state",
          "label",
          "open"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Icon button clarification",
      "Dense toolbar controls",
      "Supplementary hints"
    ],
    "neverUseFor": [
      "Required instructions",
      "Long help text",
      "Mobile-only explanation"
    ],
    "examples": [
      {
        "name": "Open tooltip",
        "jsx": "<TooltipProvider><Tooltip defaultOpen><TooltipTrigger asChild><Button variant=\"outline\">Hover</Button></TooltipTrigger><TooltipContent>Add to library</TooltipContent></Tooltip></TooltipProvider>"
      }
    ],
    "relatedComponents": [
      "Popover",
      "HoverCard"
    ]
  },
  {
    "name": "ActionBar",
    "category": "Surfaces",
    "description": "Contextual action surface for selected items or bulk actions.",
    "importFrom": "@/components/ads/misc",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "hover",
      "focus-visible"
    ],
    "controls": [
      {
        "name": "selectedLabel",
        "label": "Selected Label",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "selectedLabel",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Left-side label (e.g. selection count)."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus-visible"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "open",
        "bindsTo": "disclosure-state",
        "source": "ads-rich-metadata",
        "description": "Controls the open prop for ActionBar."
      }
    ],
    "propMetadata": {
      "selectedLabel": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Left-side label (e.g. selection count).",
        "control": "selectedLabel"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus-visible"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "open": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Controls the open prop for ActionBar.",
        "control": "open"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying ActionBar before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying ActionBar before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      }
    ],
    "anatomy": {
      "root": "ActionBar",
      "slots": [
        "children"
      ],
      "requiredParts": [
        "ActionBar"
      ],
      "optionalParts": [
        "children"
      ],
      "composition": "Compose ActionBar with its documented slot parts: children."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "feedback",
      "interactive": true,
      "hasDisclosure": true,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "overlay/disclosure",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "ActionBar",
        "Surfaces",
        "default",
        "hover",
        "focus-visible",
        "selectedLabel"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use ActionBar when the foundation's action-bar module matches the intended surfaces pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "selectedLabel",
          "state",
          "open"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use ActionBar when the foundation's action-bar module matches the intended surfaces pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<ActionBar selectedLabel=\"3 selected\"><Button size=\"sm\" variant=\"outline\">Archive</Button><Button size=\"sm\">Delete</Button></ActionBar>"
      }
    ],
    "relatedComponents": [
      "FloatingPanel",
      "CloseButton"
    ]
  },
  {
    "name": "Blockquote",
    "category": "Surfaces",
    "description": "Blockquote is a surfaces primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Block-level <blockquote> with left border."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "description",
        "label": "Description",
        "type": "text",
        "options": [],
        "default": "Rendered in the active ADS Light brand.",
        "urlParam": "description",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls supporting copy for multi-line previews."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Block-level <blockquote> with left border.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "description": {
        "type": "text",
        "default": "Rendered in the active ADS Light brand.",
        "values": [],
        "required": false,
        "description": "Controls supporting copy for multi-line previews.",
        "control": "description"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Blockquote",
      "slots": [],
      "requiredParts": [
        "Blockquote"
      ],
      "optionalParts": [],
      "composition": "Blockquote is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "container",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Blockquote",
        "Surfaces",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Blockquote when the foundation's blockquote module matches the intended surfaces pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "className",
          "state",
          "description"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Blockquote when the foundation's blockquote module matches the intended surfaces pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Blockquote>Design is not just what it looks like; it is how it works.</Blockquote>"
      }
    ],
    "relatedComponents": [
      "Quote",
      "Text"
    ]
  },
  {
    "name": "Card",
    "category": "Surfaces",
    "description": "A bounded surface for one object, a small tool, or a repeated content unit.",
    "importFrom": "@/components/ui/card",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Tailwind utilities on the root container."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Card",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      },
      {
        "name": "description",
        "label": "Description",
        "type": "text",
        "options": [],
        "default": "Rendered in the active ADS Light brand.",
        "urlParam": "description",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls supporting copy for multi-line previews."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Tailwind utilities on the root container.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Card",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      },
      "description": {
        "type": "text",
        "default": "Rendered in the active ADS Light brand.",
        "values": [],
        "required": false,
        "description": "Controls supporting copy for multi-line previews.",
        "control": "description"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "header",
        "title",
        "description",
        "action",
        "content",
        "footer"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "header",
        "title",
        "description",
        "action",
        "content",
        "footer"
      ],
      "composition": "Compose Card with its documented slot parts: root, header, title, description, action, content, footer."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "container",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Use semantic headings inside cards when they introduce content",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "high",
      "queryTerms": [
        "Card",
        "Surfaces",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "One repeated object in a list A bounded tool panel Grouped related content",
        "avoidWhen": "Wrapping whole page sections Nested cards Pure decoration",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "className",
          "state",
          "label",
          "description"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "One repeated object in a list",
      "A bounded tool panel",
      "Grouped related content"
    ],
    "neverUseFor": [
      "Wrapping whole page sections",
      "Nested cards",
      "Pure decoration"
    ],
    "examples": [
      {
        "name": "Basic card",
        "jsx": "<Card className=\"w-80\"><CardHeader><CardTitle>Account</CardTitle><CardDescription>Manage your profile settings.</CardDescription></CardHeader><CardContent className=\"text-sm text-muted-foreground\">You are signed in as Jane Doe.</CardContent><CardFooter className=\"justify-end\"><Button size=\"sm\">Save</Button></CardFooter></Card>"
      }
    ],
    "relatedComponents": [
      "Dialog",
      "Alert",
      "Table"
    ]
  },
  {
    "name": "Dialog",
    "category": "Surfaces",
    "description": "A modal overlay that interrupts flow for focused decisions, details, or short forms.",
    "importFrom": "@/components/ui/dialog",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "open",
      "closed",
      "hover",
      "focus-visible"
    ],
    "controls": [
      {
        "name": "defaultOpen",
        "label": "Default Open",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "defaultOpen",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled open state on the Dialog root."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "open",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Controlled open state."
      },
      {
        "name": "showCloseButton",
        "label": "Show Close Button",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "showCloseButton",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "DialogContent corner X button."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Dialog",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      }
    ],
    "propMetadata": {
      "defaultOpen": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled open state on the Dialog root.",
        "control": "defaultOpen"
      },
      "open": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Controlled open state.",
        "control": "open"
      },
      "showCloseButton": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "DialogContent corner X button.",
        "control": "showCloseButton"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Dialog",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying Dialog before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "closed",
        "kind": "base",
        "visualIntent": "Closed appearance for verifying Dialog before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "closed"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Dialog before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Dialog before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "trigger",
        "content",
        "header",
        "footer",
        "title",
        "description",
        "close"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "trigger",
        "content",
        "header",
        "footer",
        "title",
        "description",
        "close"
      ],
      "composition": "Compose Dialog with its documented slot parts: root, trigger, content, header, footer, title, description, close."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "feedback",
      "interactive": true,
      "hasDisclosure": true,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Dialog.Title is required",
        "Initial focus should land inside the dialog",
        "Escape should close unless dangerous",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "overlay/disclosure",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "high",
      "queryTerms": [
        "Dialog",
        "Surfaces",
        "default",
        "open",
        "closed",
        "hover",
        "focus-visible",
        "defaultOpen",
        "showCloseButton"
      ],
      "selectionCriteria": {
        "chooseWhen": "Focused confirmation Short interrupting forms Details that require user acknowledgement",
        "avoidWhen": "Primary navigation Long multi-step workflows Non-blocking status messages",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 5,
        "names": [
          "defaultOpen",
          "open",
          "showCloseButton",
          "state",
          "label"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Focused confirmation",
      "Short interrupting forms",
      "Details that require user acknowledgement"
    ],
    "neverUseFor": [
      "Primary navigation",
      "Long multi-step workflows",
      "Non-blocking status messages"
    ],
    "examples": [
      {
        "name": "Open dialog",
        "jsx": "<Dialog defaultOpen><DialogTrigger asChild><Button variant=\"outline\">Edit profile</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Edit profile</DialogTitle><DialogDescription>Make changes to your profile here.</DialogDescription></DialogHeader><DialogFooter><DialogClose asChild><Button variant=\"outline\">Cancel</Button></DialogClose><Button>Save changes</Button></DialogFooter></DialogContent></Dialog>"
      }
    ],
    "relatedComponents": [
      "Drawer",
      "Popover",
      "Card"
    ]
  },
  {
    "name": "Drawer",
    "category": "Surfaces",
    "description": "A side panel for secondary workflows that should preserve page context.",
    "importFrom": "@/components/ui/drawer",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "open",
      "closed",
      "hover",
      "focus-visible"
    ],
    "controls": [
      {
        "name": "defaultOpen",
        "label": "Default Open",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "defaultOpen",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled open state."
      },
      {
        "name": "direction",
        "label": "Direction",
        "type": "select",
        "options": [
          "top",
          "bottom",
          "left",
          "right"
        ],
        "default": "bottom",
        "urlParam": "direction",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Side the drawer slides from."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Drawer",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "open",
        "bindsTo": "disclosure-state",
        "source": "ads-rich-metadata",
        "description": "Controls the open prop for Drawer."
      }
    ],
    "propMetadata": {
      "defaultOpen": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled open state.",
        "control": "defaultOpen"
      },
      "direction": {
        "type": "string",
        "default": "bottom",
        "values": [
          "top",
          "bottom",
          "left",
          "right"
        ],
        "required": false,
        "description": "Side the drawer slides from.",
        "control": "direction"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Drawer",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      },
      "open": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Controls the open prop for Drawer.",
        "control": "open"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying Drawer before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "closed",
        "kind": "base",
        "visualIntent": "Closed appearance for verifying Drawer before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "closed"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Drawer before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Drawer before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "trigger",
        "content",
        "header",
        "footer",
        "title",
        "description",
        "close"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "trigger",
        "content",
        "header",
        "footer",
        "title",
        "description",
        "close"
      ],
      "composition": "Compose Drawer with its documented slot parts: root, trigger, content, header, footer, title, description, close."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "feedback",
      "interactive": true,
      "hasDisclosure": true,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Drawer.Title is required",
        "Return focus to trigger on close",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "overlay/disclosure",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "high",
      "queryTerms": [
        "Drawer",
        "Surfaces",
        "default",
        "open",
        "closed",
        "hover",
        "focus-visible",
        "defaultOpen",
        "direction"
      ],
      "selectionCriteria": {
        "chooseWhen": "Contextual details Settings panels Secondary forms",
        "avoidWhen": "Critical confirmations Tiny tooltips Primary app layout",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 5,
        "names": [
          "defaultOpen",
          "direction",
          "state",
          "label",
          "open"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Contextual details",
      "Settings panels",
      "Secondary forms"
    ],
    "neverUseFor": [
      "Critical confirmations",
      "Tiny tooltips",
      "Primary app layout"
    ],
    "examples": [
      {
        "name": "Open drawer",
        "jsx": "<Drawer defaultOpen><DrawerTrigger asChild><Button variant=\"outline\">Open drawer</Button></DrawerTrigger><DrawerContent><DrawerHeader><DrawerTitle>Notifications</DrawerTitle><DrawerDescription>You have 3 unread messages.</DrawerDescription></DrawerHeader><DrawerFooter><Button>Mark all read</Button><DrawerClose asChild><Button variant=\"outline\">Close</Button></DrawerClose></DrawerFooter></DrawerContent></Drawer>"
      }
    ],
    "relatedComponents": [
      "Dialog",
      "Popover"
    ]
  },
  {
    "name": "FloatingPanel",
    "category": "Surfaces",
    "description": "FloatingPanel is a surfaces primitive.",
    "importFrom": "@/components/ads/misc",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "hover",
      "focus-visible"
    ],
    "controls": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "title",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Header title; defaults to Panel."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus-visible"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "open",
        "bindsTo": "disclosure-state",
        "source": "ads-rich-metadata",
        "description": "Controls the open prop for FloatingPanel."
      }
    ],
    "propMetadata": {
      "title": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Header title; defaults to Panel.",
        "control": "title"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus-visible"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "open": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Controls the open prop for FloatingPanel.",
        "control": "open"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying FloatingPanel before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying FloatingPanel before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      }
    ],
    "anatomy": {
      "root": "FloatingPanel",
      "slots": [
        "children"
      ],
      "requiredParts": [
        "FloatingPanel"
      ],
      "optionalParts": [
        "children"
      ],
      "composition": "Compose FloatingPanel with its documented slot parts: children."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "feedback",
      "interactive": true,
      "hasDisclosure": true,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "overlay/disclosure",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "FloatingPanel",
        "Surfaces",
        "default",
        "hover",
        "focus-visible",
        "title"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use FloatingPanel when the foundation's floating-panel module matches the intended surfaces pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "title",
          "state",
          "open"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use FloatingPanel when the foundation's floating-panel module matches the intended surfaces pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<FloatingPanel title=\"Filters\">Panel body content</FloatingPanel>"
      }
    ],
    "relatedComponents": [
      "ActionBar",
      "Popover"
    ]
  },
  {
    "name": "HoverCard",
    "category": "Surfaces",
    "description": "HoverCard is a surfaces primitive.",
    "importFrom": "@/components/ui/hover-card",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "open",
      "closed",
      "hover",
      "focus-visible"
    ],
    "controls": [
      {
        "name": "defaultOpen",
        "label": "Default Open",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "defaultOpen",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled open state."
      },
      {
        "name": "align",
        "label": "Align",
        "type": "select",
        "options": [
          "start",
          "center",
          "end"
        ],
        "default": "center",
        "urlParam": "align",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Content alignment."
      },
      {
        "name": "sideOffset",
        "label": "Side Offset",
        "type": "number",
        "options": [],
        "default": 4,
        "urlParam": "sideOffset",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Distance from trigger."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "open",
        "bindsTo": "disclosure-state",
        "source": "ads-rich-metadata",
        "description": "Controls the open prop for HoverCard."
      }
    ],
    "propMetadata": {
      "defaultOpen": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled open state.",
        "control": "defaultOpen"
      },
      "align": {
        "type": "string",
        "default": "center",
        "values": [
          "start",
          "center",
          "end"
        ],
        "required": false,
        "description": "Content alignment.",
        "control": "align"
      },
      "sideOffset": {
        "type": "number",
        "default": 4,
        "values": [],
        "required": false,
        "description": "Distance from trigger.",
        "control": "sideOffset"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "open": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Controls the open prop for HoverCard.",
        "control": "open"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying HoverCard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "closed",
        "kind": "base",
        "visualIntent": "Closed appearance for verifying HoverCard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "closed"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying HoverCard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying HoverCard before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "trigger",
        "content"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "trigger",
        "content"
      ],
      "composition": "Compose HoverCard with its documented slot parts: root, trigger, content."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "feedback",
      "interactive": true,
      "hasDisclosure": true,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "overlay/disclosure",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "HoverCard",
        "Surfaces",
        "default",
        "open",
        "closed",
        "hover",
        "focus-visible",
        "defaultOpen",
        "align",
        "sideOffset"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use HoverCard when the foundation's hover-card module matches the intended surfaces pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 5,
        "names": [
          "defaultOpen",
          "align",
          "sideOffset",
          "state",
          "open"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use HoverCard when the foundation's hover-card module matches the intended surfaces pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Open hover card",
        "jsx": "<HoverCard defaultOpen><HoverCardTrigger asChild><Button variant=\"link\">@nextjs</Button></HoverCardTrigger><HoverCardContent><div className=\"flex gap-3\"><Avatar><AvatarFallback>NJ</AvatarFallback></Avatar><div className=\"text-sm\"><p className=\"font-semibold\">@nextjs</p><p className=\"text-muted-foreground\">The React framework.</p></div></div></HoverCardContent></HoverCard>"
      }
    ],
    "relatedComponents": [
      "Popover",
      "Tooltip"
    ]
  },
  {
    "name": "Popover",
    "category": "Surfaces",
    "description": "Floating contextual surface for supplementary controls or details.",
    "importFrom": "@/components/ui/popover",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "open",
      "closed",
      "hover",
      "focus-visible"
    ],
    "controls": [
      {
        "name": "defaultOpen",
        "label": "Default Open",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "defaultOpen",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Uncontrolled open state."
      },
      {
        "name": "align",
        "label": "Align",
        "type": "select",
        "options": [
          "start",
          "center",
          "end"
        ],
        "default": "center",
        "urlParam": "align",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Content alignment."
      },
      {
        "name": "sideOffset",
        "label": "Side Offset",
        "type": "number",
        "options": [],
        "default": 4,
        "urlParam": "sideOffset",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Distance from trigger."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "label",
        "label": "Label",
        "type": "text",
        "options": [],
        "default": "Popover",
        "urlParam": "label",
        "bindsTo": "preview-content",
        "source": "ads-rich-metadata",
        "description": "Controls visible text so agents can verify real copy and truncation."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "open",
        "bindsTo": "disclosure-state",
        "source": "ads-rich-metadata",
        "description": "Controls the open prop for Popover."
      }
    ],
    "propMetadata": {
      "defaultOpen": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "Uncontrolled open state.",
        "control": "defaultOpen"
      },
      "align": {
        "type": "string",
        "default": "center",
        "values": [
          "start",
          "center",
          "end"
        ],
        "required": false,
        "description": "Content alignment.",
        "control": "align"
      },
      "sideOffset": {
        "type": "number",
        "default": 4,
        "values": [],
        "required": false,
        "description": "Distance from trigger.",
        "control": "sideOffset"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "open",
          "closed",
          "hover",
          "focus-visible"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "label": {
        "type": "text",
        "default": "Popover",
        "values": [],
        "required": false,
        "description": "Controls visible text so agents can verify real copy and truncation.",
        "control": "label"
      },
      "open": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Controls the open prop for Popover.",
        "control": "open"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying Popover before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "closed",
        "kind": "base",
        "visualIntent": "Closed appearance for verifying Popover before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "closed"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Popover before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Popover before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "trigger",
        "content",
        "anchor"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "trigger",
        "content",
        "anchor"
      ],
      "composition": "Compose Popover with its documented slot parts: root, trigger, content, anchor."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "feedback",
      "interactive": true,
      "hasDisclosure": true,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "overlay/disclosure",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Popover",
        "Surfaces",
        "default",
        "open",
        "closed",
        "hover",
        "focus-visible",
        "defaultOpen",
        "align",
        "sideOffset"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Popover when the foundation's popover module matches the intended surfaces pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 6,
        "names": [
          "defaultOpen",
          "align",
          "sideOffset",
          "state",
          "label",
          "open"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.827Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Popover when the foundation's popover module matches the intended surfaces pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Open popover",
        "jsx": "<Popover defaultOpen><PopoverTrigger asChild><Button variant=\"outline\">Open</Button></PopoverTrigger><PopoverContent><div className=\"space-y-1\"><p className=\"font-medium\">Dimensions</p><p className=\"text-sm text-muted-foreground\">Set the layout dimensions.</p></div></PopoverContent></Popover>"
      }
    ],
    "relatedComponents": [
      "HoverCard",
      "Tooltip",
      "Menu"
    ]
  },
  {
    "name": "AbsoluteCenter",
    "category": "Layout",
    "description": "AbsoluteCenter is a layout primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Base: absolute inset-0 grid place-items-center; needs relative parent."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Base: absolute inset-0 grid place-items-center; needs relative parent.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "AbsoluteCenter",
      "slots": [],
      "requiredParts": [
        "AbsoluteCenter"
      ],
      "optionalParts": [],
      "composition": "AbsoluteCenter is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "AbsoluteCenter",
        "Layout",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use AbsoluteCenter when the foundation's absolute-center module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use AbsoluteCenter when the foundation's absolute-center module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Overlay center",
        "jsx": "<div className=\"relative h-32 rounded-lg bg-muted\"><AbsoluteCenter><span className=\"text-muted-foreground\">Centered overlay</span></AbsoluteCenter></div>"
      }
    ],
    "relatedComponents": [
      "Center",
      "Float"
    ]
  },
  {
    "name": "AspectRatio",
    "category": "Layout",
    "description": "AspectRatio is a layout primitive.",
    "importFrom": "@/components/ui/aspect-ratio",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "ratio",
        "label": "Ratio",
        "type": "number",
        "options": [],
        "default": 1,
        "urlParam": "ratio",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Width-to-height ratio, e.g. 16 / 9."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "ratio": {
        "type": "number",
        "default": 1,
        "values": [],
        "required": false,
        "description": "Width-to-height ratio, e.g. 16 / 9.",
        "control": "ratio"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "AspectRatio",
      "slots": [],
      "requiredParts": [
        "AspectRatio"
      ],
      "optionalParts": [],
      "composition": "AspectRatio is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "AspectRatio",
        "Layout",
        "default",
        "ratio"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use AspectRatio when the foundation's aspect-ratio module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "ratio",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use AspectRatio when the foundation's aspect-ratio module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "16:9",
        "jsx": "<div className=\"w-80\"><AspectRatio ratio={16 / 9}><div className=\"flex size-full items-center justify-center rounded-md bg-muted text-sm text-foreground\">16 / 9</div></AspectRatio></div>"
      }
    ],
    "relatedComponents": [
      "Carousel",
      "ScrollArea"
    ]
  },
  {
    "name": "Bleed",
    "category": "Layout",
    "description": "Bleed is a layout primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "inline",
        "label": "Inline",
        "type": "number",
        "options": [],
        "default": 4,
        "urlParam": "inline",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Negative horizontal margin multiplier."
      },
      {
        "name": "block",
        "label": "Block",
        "type": "number",
        "options": [],
        "default": 0,
        "urlParam": "block",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Negative vertical margin multiplier."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "inline": {
        "type": "number",
        "default": 4,
        "values": [],
        "required": false,
        "description": "Negative horizontal margin multiplier.",
        "control": "inline"
      },
      "block": {
        "type": "number",
        "default": 0,
        "values": [],
        "required": false,
        "description": "Negative vertical margin multiplier.",
        "control": "block"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Bleed",
      "slots": [],
      "requiredParts": [
        "Bleed"
      ],
      "optionalParts": [],
      "composition": "Bleed is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Bleed",
        "Layout",
        "default",
        "inline",
        "block"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Bleed when the foundation's bleed module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "inline",
          "block",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Bleed when the foundation's bleed module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Full-bleed strip",
        "jsx": "<div className=\"rounded-lg border border-border p-4\"><Bleed inline={4}><div className=\"h-16 bg-muted\" /></Bleed></div>"
      }
    ],
    "relatedComponents": [
      "Container",
      "Box"
    ]
  },
  {
    "name": "Container",
    "category": "Layout",
    "description": "Container is a layout primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Base: mx-auto w-full max-w-5xl px-4."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Base: mx-auto w-full max-w-5xl px-4.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Container",
      "slots": [],
      "requiredParts": [
        "Container"
      ],
      "optionalParts": [],
      "composition": "Container is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Container",
        "Layout",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Container when the foundation's container module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Container when the foundation's container module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Centered width",
        "jsx": "<Container><div className=\"rounded-lg border border-border bg-card p-6 text-foreground\">Page content</div></Container>"
      }
    ],
    "relatedComponents": [
      "Box",
      "Stack"
    ]
  },
  {
    "name": "DownloadTrigger",
    "category": "Layout",
    "description": "DownloadTrigger is a layout primitive.",
    "importFrom": "@/components/ads/misc",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "hover",
      "focus-visible",
      "disabled",
      "active"
    ],
    "controls": [
      {
        "name": "data",
        "label": "Data",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "data",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "String payload encoded into the data URL."
      },
      {
        "name": "fileName",
        "label": "File Name",
        "type": "text",
        "options": [],
        "default": "download.txt",
        "urlParam": "fileName",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Suggested filename."
      },
      {
        "name": "mimeType",
        "label": "Mime Type",
        "type": "text",
        "options": [],
        "default": "text/plain",
        "urlParam": "mimeType",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "MIME type."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "active"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "data": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "String payload encoded into the data URL.",
        "control": "data"
      },
      "fileName": {
        "type": "string",
        "default": "download.txt",
        "values": [],
        "required": false,
        "description": "Suggested filename.",
        "control": "fileName"
      },
      "mimeType": {
        "type": "string",
        "default": "text/plain",
        "values": [],
        "required": false,
        "description": "MIME type.",
        "control": "mimeType"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover",
          "focus-visible",
          "disabled",
          "active"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying DownloadTrigger before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying DownloadTrigger before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      },
      {
        "name": "disabled",
        "kind": "status",
        "visualIntent": "Disabled appearance for verifying DownloadTrigger before delivery.",
        "behavior": "Non-interactive and visually muted.",
        "simulation": "disabled"
      },
      {
        "name": "active",
        "kind": "interaction",
        "visualIntent": "Active appearance for verifying DownloadTrigger before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "active"
      }
    ],
    "anatomy": {
      "root": "DownloadTrigger",
      "slots": [
        "children"
      ],
      "requiredParts": [
        "DownloadTrigger"
      ],
      "optionalParts": [
        "children"
      ],
      "composition": "Compose DownloadTrigger with its documented slot parts: children."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [
        "--ring",
        "--accent",
        "--accent-foreground"
      ],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "interactive",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "button/link action",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "DownloadTrigger",
        "Layout",
        "default",
        "hover",
        "focus-visible",
        "disabled",
        "active",
        "data",
        "fileName",
        "mimeType"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use DownloadTrigger when the foundation's download-trigger module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "data",
          "fileName",
          "mimeType",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use DownloadTrigger when the foundation's download-trigger module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<DownloadTrigger data=\"hello world\" fileName=\"note.txt\">Download note</DownloadTrigger>"
      }
    ],
    "relatedComponents": [
      "FileUpload"
    ]
  },
  {
    "name": "Environment",
    "category": "Layout",
    "description": "Environment is a layout primitive.",
    "importFrom": "react",
    "utility": true,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Environment",
      "slots": [],
      "requiredParts": [
        "Environment"
      ],
      "optionalParts": [],
      "composition": "Environment is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Environment",
        "Layout",
        "default"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Environment when the foundation's environment module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 1,
        "names": [
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Environment when the foundation's environment module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Note",
        "jsx": "<div className=\"rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground\">Environment is a DOM-environment provider (for portals in shadow DOM/iframes), not a visual component.</div>"
      }
    ],
    "relatedComponents": [
      "Portal"
    ]
  },
  {
    "name": "Flex",
    "category": "Layout",
    "description": "Flex is a layout primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Base: flex; control with flex-col, gap-*, items-*."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Base: flex; control with flex-col, gap-*, items-*.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Flex",
      "slots": [],
      "requiredParts": [
        "Flex"
      ],
      "optionalParts": [],
      "composition": "Flex is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Flex",
        "Layout",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Flex when the foundation's flex module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Flex when the foundation's flex module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Row",
        "jsx": "<Flex className=\"gap-3\"><div className=\"size-12 rounded-md bg-primary\" /><div className=\"size-12 rounded-md bg-secondary\" /></Flex>"
      }
    ],
    "relatedComponents": [
      "Stack",
      "Wrap",
      "Group"
    ]
  },
  {
    "name": "Float",
    "category": "Layout",
    "description": "Float is a layout primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "placement",
        "label": "Placement",
        "type": "select",
        "options": [
          "top-end",
          "top-start",
          "bottom-end",
          "bottom-start"
        ],
        "default": "top-end",
        "urlParam": "placement",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Anchors to a corner of the relative parent."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "placement": {
        "type": "string",
        "default": "top-end",
        "values": [
          "top-end",
          "top-start",
          "bottom-end",
          "bottom-start"
        ],
        "required": false,
        "description": "Anchors to a corner of the relative parent.",
        "control": "placement"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Float",
      "slots": [],
      "requiredParts": [
        "Float"
      ],
      "optionalParts": [],
      "composition": "Float is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Float",
        "Layout",
        "default",
        "placement"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Float when the foundation's float module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "placement",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Float when the foundation's float module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Corner badge",
        "jsx": "<div className=\"relative inline-block\"><div className=\"size-12 rounded-md bg-muted\" /><Float placement=\"top-end\"><span className=\"flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground\">3</span></Float></div>"
      }
    ],
    "relatedComponents": [
      "AbsoluteCenter",
      "Box"
    ]
  },
  {
    "name": "FocusTrap",
    "category": "Layout",
    "description": "FocusTrap is a layout primitive.",
    "importFrom": "react",
    "utility": true,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "FocusTrap",
      "slots": [],
      "requiredParts": [
        "FocusTrap"
      ],
      "optionalParts": [],
      "composition": "FocusTrap is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "FocusTrap",
        "Layout",
        "default"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use FocusTrap when the foundation's focus-trap module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 1,
        "names": [
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use FocusTrap when the foundation's focus-trap module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Note",
        "jsx": "<div className=\"rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground\">FocusTrap is a behavior helper. Radix Dialog/Popover trap focus automatically; use those instead of a standalone trap.</div>"
      }
    ],
    "relatedComponents": [
      "Dialog"
    ]
  },
  {
    "name": "Grid",
    "category": "Layout",
    "description": "A two-dimensional layout primitive for responsive columns and rows.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Base: grid; define grid-cols-*, gap-*."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Base: grid; define grid-cols-*, gap-*.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Grid",
      "slots": [],
      "requiredParts": [
        "Grid"
      ],
      "optionalParts": [],
      "composition": "Grid is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Use semantic children for content roles",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Grid",
        "Layout",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Responsive dashboards Card collections Two-dimensional layout",
        "avoidWhen": "Simple vertical stacks Tables of data",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Responsive dashboards",
      "Card collections",
      "Two-dimensional layout"
    ],
    "neverUseFor": [
      "Simple vertical stacks",
      "Tables of data"
    ],
    "examples": [
      {
        "name": "Three columns",
        "jsx": "<Grid className=\"grid-cols-3 gap-4\"><div className=\"h-16 rounded-md bg-muted\" /><div className=\"h-16 rounded-md bg-muted\" /><div className=\"h-16 rounded-md bg-muted\" /></Grid>"
      }
    ],
    "relatedComponents": [
      "SimpleGrid",
      "Flex"
    ]
  },
  {
    "name": "Group",
    "category": "Layout",
    "description": "Group is a layout primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Collapses gaps between adjacent children for attached controls."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Collapses gaps between adjacent children for attached controls.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Group",
      "slots": [],
      "requiredParts": [
        "Group"
      ],
      "optionalParts": [],
      "composition": "Group is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Group",
        "Layout",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Group when the foundation's group module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Group when the foundation's group module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Attached buttons",
        "jsx": "<Group><button className=\"rounded-l-md bg-secondary px-3 py-1 text-secondary-foreground\">One</button><button className=\"rounded-r-md bg-secondary px-3 py-1 text-secondary-foreground\">Two</button></Group>"
      }
    ],
    "relatedComponents": [
      "Flex",
      "Wrap"
    ]
  },
  {
    "name": "Marquee",
    "category": "Layout",
    "description": "Marquee is a layout primitive.",
    "importFrom": "@/components/ads/misc",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "children",
        "label": "Children",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "children",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Content scrolled horizontally on a loop."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "children": {
        "type": "node",
        "default": null,
        "values": [],
        "required": false,
        "description": "Content scrolled horizontally on a loop.",
        "control": "children"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Marquee",
      "slots": [],
      "requiredParts": [
        "Marquee"
      ],
      "optionalParts": [],
      "composition": "Marquee is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Marquee",
        "Layout",
        "default",
        "children"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Marquee when the foundation's marquee module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "children",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Marquee when the foundation's marquee module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<Marquee className=\"w-80\"><span className=\"px-4 text-sm text-muted-foreground\">Breaking news ticker item</span></Marquee>"
      }
    ],
    "relatedComponents": [
      "ScrollArea"
    ]
  },
  {
    "name": "Portal",
    "category": "Layout",
    "description": "Portal is a layout primitive.",
    "importFrom": "react",
    "utility": true,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Portal",
      "slots": [],
      "requiredParts": [
        "Portal"
      ],
      "optionalParts": [],
      "composition": "Portal is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Portal",
        "Layout",
        "default"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Portal when the foundation's portal module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 1,
        "names": [
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Portal when the foundation's portal module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Note",
        "jsx": "<div className=\"rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground\">Portal renders children into another DOM node. Use ReactDOM.createPortal, or rely on Radix portals built into Dialog/Popover/Tooltip.</div>"
      }
    ],
    "relatedComponents": [
      "Environment"
    ]
  },
  {
    "name": "ScrollArea",
    "category": "Layout",
    "description": "ScrollArea is a layout primitive.",
    "importFrom": "@/components/ui/scroll-area",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Set a fixed size so content overflows."
      },
      {
        "name": "orientation",
        "label": "Orientation",
        "type": "select",
        "options": [
          "vertical",
          "horizontal"
        ],
        "default": "vertical",
        "urlParam": "orientation",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "ScrollBar orientation."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Set a fixed size so content overflows.",
        "control": "className"
      },
      "orientation": {
        "type": "string",
        "default": "vertical",
        "values": [
          "vertical",
          "horizontal"
        ],
        "required": false,
        "description": "ScrollBar orientation.",
        "control": "orientation"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "scrollbar"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "scrollbar"
      ],
      "composition": "Compose ScrollArea with its documented slot parts: root, scrollbar."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "ScrollArea",
        "Layout",
        "default",
        "className",
        "orientation"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use ScrollArea when the foundation's scroll-area module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "className",
          "orientation",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use ScrollArea when the foundation's scroll-area module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Vertical",
        "jsx": "<ScrollArea className=\"h-40 w-60 rounded-md border p-4\"><div className=\"space-y-2 text-sm\">{Array.from({ length: 20 }).map((_, i) => (<div key={i}>Item {i + 1}</div>))}</div></ScrollArea>"
      }
    ],
    "relatedComponents": [
      "Carousel",
      "Separator"
    ]
  },
  {
    "name": "Separator",
    "category": "Layout",
    "description": "A visual divider that separates related groups or sections.",
    "importFrom": "@/components/ui/separator",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "orientation",
        "label": "Orientation",
        "type": "select",
        "options": [
          "horizontal",
          "vertical"
        ],
        "default": "horizontal",
        "urlParam": "orientation",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Separator direction."
      },
      {
        "name": "decorative",
        "label": "Decorative",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "decorative",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Hidden from assistive tech when purely visual."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "orientation": {
        "type": "string",
        "default": "horizontal",
        "values": [
          "horizontal",
          "vertical"
        ],
        "required": false,
        "description": "Separator direction.",
        "control": "orientation"
      },
      "decorative": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Hidden from assistive tech when purely visual.",
        "control": "decorative"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Separator",
      "slots": [],
      "requiredParts": [
        "Separator"
      ],
      "optionalParts": [],
      "composition": "Separator is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Decorative separators should not replace headings",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Separator",
        "Layout",
        "default",
        "orientation",
        "decorative"
      ],
      "selectionCriteria": {
        "chooseWhen": "Separating toolbar groups Dividing panel sections Subtle visual grouping",
        "avoidWhen": "Primary hierarchy Decorative stripes",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "orientation",
          "decorative",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Separating toolbar groups",
      "Dividing panel sections",
      "Subtle visual grouping"
    ],
    "neverUseFor": [
      "Primary hierarchy",
      "Decorative stripes"
    ],
    "examples": [
      {
        "name": "Horizontal and vertical",
        "jsx": "<div className=\"w-80\"><div className=\"text-sm font-medium\">Radix Primitives</div><p className=\"text-sm text-muted-foreground\">An open-source UI library.</p><Separator className=\"my-4\" /><div className=\"flex h-5 items-center gap-4 text-sm\"><span>Blog</span><Separator orientation=\"vertical\" /><span>Docs</span><Separator orientation=\"vertical\" /><span>Source</span></div></div>"
      }
    ],
    "relatedComponents": [
      "ScrollArea",
      "Splitter"
    ]
  },
  {
    "name": "Show",
    "category": "Layout",
    "description": "Show is a layout primitive.",
    "importFrom": "react",
    "utility": true,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Show",
      "slots": [],
      "requiredParts": [
        "Show"
      ],
      "optionalParts": [],
      "composition": "Show is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Show",
        "Layout",
        "default"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Show when the foundation's show module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 1,
        "names": [
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Show when the foundation's show module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Conditional",
        "jsx": "<div className=\"text-sm\">{true ? (<span className=\"text-success\">Shown when the condition is true</span>) : (<span className=\"text-muted-foreground\">Fallback</span>)}</div>"
      }
    ],
    "relatedComponents": [
      "For",
      "ClientOnly"
    ]
  },
  {
    "name": "SimpleGrid",
    "category": "Layout",
    "description": "SimpleGrid is a layout primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "columns",
        "label": "Columns",
        "type": "number",
        "options": [],
        "default": 3,
        "urlParam": "columns",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Equal columns via repeat(columns, minmax(0,1fr))."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "columns": {
        "type": "number",
        "default": 3,
        "values": [],
        "required": false,
        "description": "Equal columns via repeat(columns, minmax(0,1fr)).",
        "control": "columns"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "SimpleGrid",
      "slots": [],
      "requiredParts": [
        "SimpleGrid"
      ],
      "optionalParts": [],
      "composition": "SimpleGrid is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "SimpleGrid",
        "Layout",
        "default",
        "columns"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use SimpleGrid when the foundation's simple-grid module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "columns",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use SimpleGrid when the foundation's simple-grid module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Equal columns",
        "jsx": "<SimpleGrid columns={2}><div className=\"h-16 rounded-md bg-muted\" /><div className=\"h-16 rounded-md bg-muted\" /></SimpleGrid>"
      }
    ],
    "relatedComponents": [
      "Grid",
      "Stack"
    ]
  },
  {
    "name": "SkipNav",
    "category": "Layout",
    "description": "SkipNav is a layout primitive.",
    "importFrom": "@/components/typography",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "focus"
    ],
    "controls": [
      {
        "name": "href",
        "label": "Href",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "href",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Target id of the main content region."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "focus"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "href": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Target id of the main content region.",
        "control": "href"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "focus"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "focus",
        "kind": "base",
        "visualIntent": "Focus appearance for verifying SkipNav before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "focus"
      }
    ],
    "anatomy": {
      "root": "SkipNav",
      "slots": [],
      "requiredParts": [
        "SkipNav"
      ],
      "optionalParts": [],
      "composition": "SkipNav is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "SkipNav",
        "Layout",
        "default",
        "focus",
        "href"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use SkipNav when the foundation's skip-nav module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "href",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use SkipNav when the foundation's skip-nav module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<SkipNavLink href=\"#main\">Skip to content</SkipNavLink>"
      }
    ],
    "relatedComponents": [
      "Link",
      "VisuallyHidden"
    ]
  },
  {
    "name": "Spacer",
    "category": "Layout",
    "description": "Spacer is a layout primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Base: flex-1; pushes flex children apart."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Base: flex-1; pushes flex children apart.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Spacer",
      "slots": [],
      "requiredParts": [
        "Spacer"
      ],
      "optionalParts": [],
      "composition": "Spacer is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Spacer",
        "Layout",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Spacer when the foundation's spacer module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Spacer when the foundation's spacer module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Push apart",
        "jsx": "<Flex className=\"items-center\"><span className=\"text-foreground\">Left</span><Spacer /><span className=\"text-foreground\">Right</span></Flex>"
      }
    ],
    "relatedComponents": [
      "Flex",
      "Stack"
    ]
  },
  {
    "name": "Splitter",
    "category": "Layout",
    "description": "Splitter is a layout primitive.",
    "importFrom": "@/components/ui/resizable",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "direction",
        "label": "Direction",
        "type": "select",
        "options": [
          "horizontal",
          "vertical"
        ],
        "default": "",
        "urlParam": "direction",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "ResizablePanelGroup layout direction; required."
      },
      {
        "name": "defaultSize",
        "label": "Default Size",
        "type": "number",
        "options": [],
        "default": "",
        "urlParam": "defaultSize",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "ResizablePanel initial size (percent)."
      },
      {
        "name": "withHandle",
        "label": "With Handle",
        "type": "boolean",
        "options": [],
        "default": "",
        "urlParam": "withHandle",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "ResizableHandle visible grip."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "direction": {
        "type": "string",
        "default": null,
        "values": [
          "horizontal",
          "vertical"
        ],
        "required": false,
        "description": "ResizablePanelGroup layout direction; required.",
        "control": "direction"
      },
      "defaultSize": {
        "type": "number",
        "default": null,
        "values": [],
        "required": false,
        "description": "ResizablePanel initial size (percent).",
        "control": "defaultSize"
      },
      "withHandle": {
        "type": "boolean",
        "default": null,
        "values": [],
        "required": false,
        "description": "ResizableHandle visible grip.",
        "control": "withHandle"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Splitter",
      "slots": [
        "panelgroup",
        "panel",
        "handle"
      ],
      "requiredParts": [
        "Splitter"
      ],
      "optionalParts": [
        "panelgroup",
        "panel",
        "handle"
      ],
      "composition": "Compose Splitter with its documented slot parts: panelgroup, panel, handle."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Splitter",
        "Layout",
        "default",
        "direction",
        "defaultSize",
        "withHandle"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Splitter when the foundation's splitter module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "direction",
          "defaultSize",
          "withHandle",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Splitter when the foundation's splitter module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Horizontal split",
        "jsx": "<ResizablePanelGroup direction=\"horizontal\" className=\"h-40 w-80 rounded-lg border\"><ResizablePanel defaultSize={50}><div className=\"flex h-full items-center justify-center p-4 text-sm\">One</div></ResizablePanel><ResizableHandle withHandle /><ResizablePanel defaultSize={50}><div className=\"flex h-full items-center justify-center p-4 text-sm\">Two</div></ResizablePanel></ResizablePanelGroup>"
      }
    ],
    "relatedComponents": [
      "Separator",
      "ScrollArea"
    ]
  },
  {
    "name": "Stack",
    "category": "Layout",
    "description": "A one-dimensional layout primitive for consistent vertical or horizontal spacing.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "direction",
        "label": "Direction",
        "type": "select",
        "options": [
          "row",
          "column"
        ],
        "default": "column",
        "urlParam": "direction",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "flex-row or flex-col."
      },
      {
        "name": "gap",
        "label": "Gap",
        "type": "number",
        "options": [],
        "default": 4,
        "urlParam": "gap",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Spacing multiplier."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "direction": {
        "type": "string",
        "default": "column",
        "values": [
          "row",
          "column"
        ],
        "required": false,
        "description": "flex-row or flex-col.",
        "control": "direction"
      },
      "gap": {
        "type": "number",
        "default": 4,
        "values": [],
        "required": false,
        "description": "Spacing multiplier.",
        "control": "gap"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Stack",
      "slots": [],
      "requiredParts": [
        "Stack"
      ],
      "optionalParts": [],
      "composition": "Stack is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Layout-only component; semantics come from children",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Stack",
        "Layout",
        "default",
        "direction",
        "gap"
      ],
      "selectionCriteria": {
        "chooseWhen": "Simple vertical spacing Form groups Toolbar rows",
        "avoidWhen": "Complex responsive grids Absolute positioning",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "direction",
          "gap",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Simple vertical spacing",
      "Form groups",
      "Toolbar rows"
    ],
    "neverUseFor": [
      "Complex responsive grids",
      "Absolute positioning"
    ],
    "examples": [
      {
        "name": "Vertical",
        "jsx": "<Stack gap={3}><div className=\"h-10 rounded-md bg-muted\" /><div className=\"h-10 rounded-md bg-muted\" /></Stack>"
      },
      {
        "name": "Horizontal",
        "jsx": "<Stack direction=\"row\" gap={2}><div className=\"size-10 rounded-md bg-primary\" /><div className=\"size-10 rounded-md bg-secondary\" /></Stack>"
      }
    ],
    "relatedComponents": [
      "Flex",
      "SimpleGrid",
      "Wrap"
    ]
  },
  {
    "name": "Sticky",
    "category": "Layout",
    "description": "Sticky is a layout primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Base: sticky top-0."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Base: sticky top-0.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Sticky",
      "slots": [],
      "requiredParts": [
        "Sticky"
      ],
      "optionalParts": [],
      "composition": "Sticky is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Sticky",
        "Layout",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Sticky when the foundation's sticky module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Sticky when the foundation's sticky module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Sticky header",
        "jsx": "<Sticky className=\"z-10 border-b border-border bg-background px-4 py-2 text-foreground\">Sticky header</Sticky>"
      }
    ],
    "relatedComponents": [
      "Box",
      "Container"
    ]
  },
  {
    "name": "Wrap",
    "category": "Layout",
    "description": "Wrap is a layout primitive.",
    "importFrom": "@/components/primitives",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "className",
        "label": "Class Name",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "className",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Base: flex flex-wrap gap-2."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "className": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Base: flex flex-wrap gap-2.",
        "control": "className"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Wrap",
      "slots": [],
      "requiredParts": [
        "Wrap"
      ],
      "optionalParts": [],
      "composition": "Wrap is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "layout",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Verify keyboard behavior and screen reader semantics from the component docs before production use.",
        "Render before delivery and inspect focus, labels, and state.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Wrap",
        "Layout",
        "default",
        "className"
      ],
      "selectionCriteria": {
        "chooseWhen": "Use Wrap when the foundation's wrap module matches the intended layout pattern.",
        "avoidWhen": "Avoid using this component outside its semantic the foundation pattern. Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props.",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "className",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Use Wrap when the foundation's wrap module matches the intended layout pattern."
    ],
    "neverUseFor": [
      "Avoid using this component outside its semantic the foundation pattern.",
      "Do not hardcode raw brand values; use ADS Light tokens or the foundation theme props."
    ],
    "examples": [
      {
        "name": "Wrapping",
        "jsx": "<Wrap><span className=\"rounded-full bg-muted px-3 py-1 text-sm text-foreground\">tag</span><span className=\"rounded-full bg-muted px-3 py-1 text-sm text-foreground\">another</span></Wrap>"
      }
    ],
    "relatedComponents": [
      "Flex",
      "Group"
    ]
  },
  {
    "name": "CloseButton",
    "category": "Inputs",
    "description": "An icon-only button preset for dismissing dialogs, drawers, alerts, popovers, and removable tags.",
    "importFrom": "@/components/ads/inputs",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "hover"
    ],
    "controls": [
      {
        "name": "size",
        "label": "Size",
        "type": "number",
        "options": [],
        "default": 16,
        "urlParam": "size",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Pixel size of the X icon."
      },
      {
        "name": "aria-label",
        "label": "Aria Label",
        "type": "text",
        "options": [],
        "default": "Close",
        "urlParam": "aria-label",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Accessible label."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "hover"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "size": {
        "type": "number",
        "default": 16,
        "values": [],
        "required": false,
        "description": "Pixel size of the X icon.",
        "control": "size"
      },
      "aria-label": {
        "type": "string",
        "default": "Close",
        "values": [],
        "required": false,
        "description": "Accessible label.",
        "control": "aria-label"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "hover"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying CloseButton before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      }
    ],
    "anatomy": {
      "root": "CloseButton",
      "slots": [],
      "requiredParts": [
        "CloseButton"
      ],
      "optionalParts": [],
      "composition": "CloseButton is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": true,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Always provide an aria-label describing what closes, e.g. \"Close dialog\".",
        "Wire to the surface dismiss handler (e.g. Dialog.CloseTrigger asChild).",
        "Keep a 44px touch target on touch surfaces.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "CloseButton",
        "Inputs",
        "default",
        "hover",
        "size",
        "aria-label"
      ],
      "selectionCriteria": {
        "chooseWhen": "Dismiss a dialog, drawer, popover, or alert Remove a chip, tag, or selected item Provide a corner close affordance on a card or banner",
        "avoidWhen": "Primary or confirming actions (use Button) Navigation between pages (use Link) Icon actions that are not a dismiss/close (use IconButton with a labelled icon)",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "size",
          "aria-label",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Dismiss a dialog, drawer, popover, or alert",
      "Remove a chip, tag, or selected item",
      "Provide a corner close affordance on a card or banner"
    ],
    "neverUseFor": [
      "Primary or confirming actions (use Button)",
      "Navigation between pages (use Link)",
      "Icon actions that are not a dismiss/close (use IconButton with a labelled icon)"
    ],
    "examples": [
      {
        "name": "Default",
        "jsx": "<CloseButton />"
      }
    ],
    "relatedComponents": [
      "ActionBar",
      "FloatingPanel"
    ]
  },
  {
    "name": "Toaster",
    "category": "Feedback",
    "description": "The render host that displays queued toasts created with createToaster. Mount once near the app root; trigger toasts imperatively from anywhere.",
    "importFrom": "@/components/ui/sonner",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "theme",
        "label": "Theme",
        "type": "select",
        "options": [
          "light",
          "dark",
          "system"
        ],
        "default": "system",
        "urlParam": "theme",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Mount point rendered once near the app root; fire toasts via toast()."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "theme": {
        "type": "string",
        "default": "system",
        "values": [
          "light",
          "dark",
          "system"
        ],
        "required": false,
        "description": "Mount point rendered once near the app root; fire toasts via toast().",
        "control": "theme"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Toaster",
      "slots": [],
      "requiredParts": [
        "Toaster"
      ],
      "optionalParts": [],
      "composition": "Toaster is rendered as a single component or utility primitive."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "the foundation renders the region with the correct aria-live politeness; do not override it.",
        "Keep messages short; lead with the outcome.",
        "Provide an action or close trigger for anything the user may need to revisit.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Toaster",
        "Feedback",
        "default",
        "theme"
      ],
      "selectionCriteria": {
        "chooseWhen": "Transient, non-blocking confirmation of an async result Background status such as save complete or upload failed Stacked notifications that auto-dismiss",
        "avoidWhen": "Persistent inline validation or page-level messages (use Alert) Blocking decisions that need a response (use Dialog) Critical errors the user must act on before continuing",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 2,
        "names": [
          "theme",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Transient, non-blocking confirmation of an async result",
      "Background status such as save complete or upload failed",
      "Stacked notifications that auto-dismiss"
    ],
    "neverUseFor": [
      "Persistent inline validation or page-level messages (use Alert)",
      "Blocking decisions that need a response (use Dialog)",
      "Critical errors the user must act on before continuing"
    ],
    "examples": [
      {
        "name": "Inline stand-in",
        "jsx": "<Alert className=\"w-80 shadow-md\"><Info /><AlertTitle>Notifications enabled</AlertTitle><AlertDescription>Toaster is mounted; fire toasts with toast().</AlertDescription></Alert>"
      }
    ],
    "relatedComponents": [
      "Toast",
      "Alert"
    ]
  },
  {
    "name": "NavigationMenu",
    "category": "Navigation",
    "description": "A site-level navigation bar with optional dropdown panels.",
    "importFrom": "@/components/ui/navigation-menu",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "open",
      "hover",
      "focus-visible"
    ],
    "controls": [
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Open a menu item on mount (matches NavigationMenuItem value)."
      },
      {
        "name": "viewport",
        "label": "Viewport",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "viewport",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Render content in a shared viewport panel."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "open",
          "hover",
          "focus-visible"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "open",
        "bindsTo": "disclosure-state",
        "source": "ads-rich-metadata",
        "description": "Controls the open prop for NavigationMenu."
      }
    ],
    "propMetadata": {
      "defaultValue": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Open a menu item on mount (matches NavigationMenuItem value).",
        "control": "defaultValue"
      },
      "viewport": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Render content in a shared viewport panel.",
        "control": "viewport"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "open",
          "hover",
          "focus-visible"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "open": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Controls the open prop for NavigationMenu.",
        "control": "open"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying NavigationMenu before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying NavigationMenu before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying NavigationMenu before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "list",
        "item",
        "trigger",
        "content",
        "link",
        "viewport"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "list",
        "item",
        "trigger",
        "content",
        "link",
        "viewport"
      ],
      "composition": "Compose NavigationMenu with its documented slot parts: root, list, item, trigger, content, link, viewport."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "feedback",
      "interactive": true,
      "hasDisclosure": true,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Provide accessible names for interactive triggers; preserve built-in keyboard/ARIA behavior.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "overlay/disclosure",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "NavigationMenu",
        "Navigation",
        "default",
        "open",
        "hover",
        "focus-visible",
        "defaultValue",
        "viewport"
      ],
      "selectionCriteria": {
        "chooseWhen": "Primary site navigation Grouping links under top-level sections Marketing/header navigation",
        "avoidWhen": "In-app command menus (use Menu) Right-click menus (use ContextMenu)",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 4,
        "names": [
          "defaultValue",
          "viewport",
          "state",
          "open"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.828Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Primary site navigation",
      "Grouping links under top-level sections",
      "Marketing/header navigation"
    ],
    "neverUseFor": [
      "In-app command menus (use Menu)",
      "Right-click menus (use ContextMenu)"
    ],
    "examples": [
      {
        "name": "Open menu",
        "jsx": "<NavigationMenu defaultValue=\"start\"><NavigationMenuList><NavigationMenuItem value=\"start\"><NavigationMenuTrigger>Getting started</NavigationMenuTrigger><NavigationMenuContent><div className=\"grid w-56 gap-1 p-2\"><NavigationMenuLink href=\"#\">Introduction</NavigationMenuLink><NavigationMenuLink href=\"#\">Installation</NavigationMenuLink></div></NavigationMenuContent></NavigationMenuItem><NavigationMenuItem><NavigationMenuLink href=\"#\">Docs</NavigationMenuLink></NavigationMenuItem></NavigationMenuList></NavigationMenu>"
      }
    ],
    "relatedComponents": [
      "Menu",
      "Menubar",
      "Breadcrumb"
    ]
  },
  {
    "name": "Menubar",
    "category": "Navigation",
    "description": "A desktop-style menu bar with multiple pull-down menus.",
    "importFrom": "@/components/ui/menubar",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "open",
      "hover",
      "focus-visible"
    ],
    "controls": [
      {
        "name": "defaultValue",
        "label": "Default Value",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "defaultValue",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Open a menu on mount (matches MenubarMenu value)."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "open",
          "hover",
          "focus-visible"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "open",
        "bindsTo": "disclosure-state",
        "source": "ads-rich-metadata",
        "description": "Controls the open prop for Menubar."
      }
    ],
    "propMetadata": {
      "defaultValue": {
        "type": "string",
        "default": null,
        "values": [],
        "required": false,
        "description": "Open a menu on mount (matches MenubarMenu value).",
        "control": "defaultValue"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "open",
          "hover",
          "focus-visible"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "open": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Controls the open prop for Menubar.",
        "control": "open"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying Menubar before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying Menubar before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying Menubar before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "menu",
        "trigger",
        "content",
        "item",
        "separator",
        "label",
        "checkboxitem",
        "radiogroup",
        "radioitem",
        "sub",
        "shortcut"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "menu",
        "trigger",
        "content",
        "item",
        "separator",
        "label",
        "checkboxitem",
        "radiogroup",
        "radioitem",
        "sub",
        "shortcut"
      ],
      "composition": "Compose Menubar with its documented slot parts: root, menu, trigger, content, item, separator, label, checkboxitem, radiogroup, radioitem, sub, shortcut."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "feedback",
      "interactive": true,
      "hasDisclosure": true,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Provide accessible names for interactive triggers; preserve built-in keyboard/ARIA behavior.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "overlay/disclosure",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Menubar",
        "Navigation",
        "default",
        "open",
        "hover",
        "focus-visible",
        "defaultValue"
      ],
      "selectionCriteria": {
        "chooseWhen": "App-style menu bars (File/Edit/View) Dense command surfaces Desktop-like tools",
        "avoidWhen": "Single action menus (use Menu) Primary site nav (use NavigationMenu)",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "defaultValue",
          "state",
          "open"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.830Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "App-style menu bars (File/Edit/View)",
      "Dense command surfaces",
      "Desktop-like tools"
    ],
    "neverUseFor": [
      "Single action menus (use Menu)",
      "Primary site nav (use NavigationMenu)"
    ],
    "examples": [
      {
        "name": "Open menubar",
        "jsx": "<Menubar defaultValue=\"file\"><MenubarMenu value=\"file\"><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New Tab<MenubarShortcut>Ctrl+T</MenubarShortcut></MenubarItem><MenubarItem>New Window</MenubarItem><MenubarSeparator /><MenubarItem>Share</MenubarItem></MenubarContent></MenubarMenu><MenubarMenu value=\"edit\"><MenubarTrigger>Edit</MenubarTrigger></MenubarMenu><MenubarMenu value=\"view\"><MenubarTrigger>View</MenubarTrigger></MenubarMenu></Menubar>"
      }
    ],
    "relatedComponents": [
      "Menu",
      "NavigationMenu"
    ]
  },
  {
    "name": "ContextMenu",
    "category": "Navigation",
    "description": "A menu opened by right-clicking a target region.",
    "importFrom": "@/components/ui/context-menu",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default",
      "open",
      "hover",
      "focus-visible"
    ],
    "controls": [
      {
        "name": "ContextMenuTrigger",
        "label": "Context Menu Trigger",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "ContextMenuTrigger",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Right-click target that opens the menu."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default",
          "open",
          "hover",
          "focus-visible"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      },
      {
        "name": "open",
        "label": "Open",
        "type": "boolean",
        "options": [],
        "default": true,
        "urlParam": "open",
        "bindsTo": "disclosure-state",
        "source": "ads-rich-metadata",
        "description": "Controls the open prop for ContextMenu."
      }
    ],
    "propMetadata": {
      "ContextMenuTrigger": {
        "type": "node",
        "default": null,
        "values": [],
        "required": false,
        "description": "Right-click target that opens the menu.",
        "control": "ContextMenuTrigger"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default",
          "open",
          "hover",
          "focus-visible"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      },
      "open": {
        "type": "boolean",
        "default": true,
        "values": [],
        "required": false,
        "description": "Controls the open prop for ContextMenu.",
        "control": "open"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      },
      {
        "name": "open",
        "kind": "base",
        "visualIntent": "Open appearance for verifying ContextMenu before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "open"
      },
      {
        "name": "hover",
        "kind": "interaction",
        "visualIntent": "Hover appearance for verifying ContextMenu before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-hover"
      },
      {
        "name": "focus-visible",
        "kind": "interaction",
        "visualIntent": "Focus Visible appearance for verifying ContextMenu before delivery.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "data-focus-visible"
      }
    ],
    "anatomy": {
      "root": "Root",
      "slots": [
        "root",
        "trigger",
        "content",
        "item",
        "checkboxitem",
        "radioitem",
        "label",
        "separator",
        "shortcut",
        "sub"
      ],
      "requiredParts": [
        "root"
      ],
      "optionalParts": [
        "trigger",
        "content",
        "item",
        "checkboxitem",
        "radioitem",
        "label",
        "separator",
        "shortcut",
        "sub"
      ],
      "composition": "Compose ContextMenu with its documented slot parts: root, trigger, content, item, checkboxitem, radioitem, label, separator, shortcut, sub."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "feedback",
      "interactive": true,
      "hasDisclosure": true,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Provide accessible names for interactive triggers; preserve built-in keyboard/ARIA behavior.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "overlay/disclosure",
      "keyboard": "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "ContextMenu",
        "Navigation",
        "default",
        "open",
        "hover",
        "focus-visible",
        "ContextMenuTrigger"
      ],
      "selectionCriteria": {
        "chooseWhen": "Right-click actions on an element Contextual commands for an item",
        "avoidWhen": "Always-visible actions (use Button/Menu) Primary navigation",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "ContextMenuTrigger",
          "state",
          "open"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.830Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Right-click actions on an element",
      "Contextual commands for an item"
    ],
    "neverUseFor": [
      "Always-visible actions (use Button/Menu)",
      "Primary navigation"
    ],
    "examples": [
      {
        "name": "Right-click target",
        "jsx": "<ContextMenu><ContextMenuTrigger className=\"flex h-28 w-64 items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground\">Right-click here</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Back</ContextMenuItem><ContextMenuItem>Reload</ContextMenuItem><ContextMenuSeparator /><ContextMenuItem>Inspect</ContextMenuItem></ContextMenuContent></ContextMenu>"
      }
    ],
    "relatedComponents": [
      "Menu",
      "Menubar"
    ]
  },
  {
    "name": "Chart",
    "category": "Data display",
    "description": "Themed recharts wrapper with tooltip/legend and token-driven colors.",
    "importFrom": "@/components/ui/chart",
    "utility": false,
    "variants": [],
    "sizes": [],
    "states": [
      "default"
    ],
    "controls": [
      {
        "name": "config",
        "label": "Config",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "config",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "ChartConfig mapping data keys to label + color (drives --color-* vars)."
      },
      {
        "name": "data",
        "label": "Data",
        "type": "text",
        "options": [],
        "default": "",
        "urlParam": "data",
        "bindsTo": "prop",
        "source": "component-key-prop",
        "description": "Row data passed to the recharts chart."
      },
      {
        "name": "state",
        "label": "State",
        "type": "select",
        "options": [
          "default"
        ],
        "default": "default",
        "urlParam": "state",
        "bindsTo": "state-simulation",
        "source": "ads-rich-metadata",
        "description": "Simulates interaction or data state for visual verification."
      }
    ],
    "propMetadata": {
      "config": {
        "type": "object",
        "default": null,
        "values": [],
        "required": false,
        "description": "ChartConfig mapping data keys to label + color (drives --color-* vars).",
        "control": "config"
      },
      "data": {
        "type": "array",
        "default": null,
        "values": [],
        "required": false,
        "description": "Row data passed to the recharts chart.",
        "control": "data"
      },
      "state": {
        "type": "select",
        "default": "default",
        "values": [
          "default"
        ],
        "required": false,
        "description": "Simulates interaction or data state for visual verification.",
        "control": "state"
      }
    },
    "variantMetadata": [],
    "stateMetadata": [
      {
        "name": "default",
        "kind": "base",
        "visualIntent": "Normal resting appearance.",
        "behavior": "Preserves component semantics while changing visual state.",
        "simulation": "default"
      }
    ],
    "anatomy": {
      "root": "Chart",
      "slots": [
        "container",
        "tooltip",
        "tooltipcontent",
        "legend",
        "legendcontent"
      ],
      "requiredParts": [
        "Chart"
      ],
      "optionalParts": [
        "container",
        "tooltip",
        "tooltipcontent",
        "legend",
        "legendcontent"
      ],
      "composition": "Compose Chart with its documented slot parts: container, tooltip, tooltipcontent, legend, legendcontent."
    },
    "tokenMapping": {
      "color": [
        "--background",
        "--foreground",
        "--card",
        "--muted",
        "--muted-foreground",
        "--border",
        "--primary",
        "--primary-foreground"
      ],
      "spacing": [
        "--spacing",
        "Tailwind p-* / gap-* utilities"
      ],
      "typography": [
        "--font-sans",
        "--font-heading",
        "Tailwind text-* / font-* utilities"
      ],
      "radius": [
        "--radius",
        "--radius-sm",
        "--radius-md",
        "--radius-lg"
      ],
      "elevation": [
        "Tailwind shadow-xs / shadow-sm / shadow-md utilities"
      ],
      "motion": [
        "Tailwind transition-* + tw-animate-css",
        "Radix data-[state] transitions"
      ],
      "interactive": [],
      "statusPalettes": [
        "--destructive",
        "--success",
        "--warning",
        "--info"
      ]
    },
    "behavior": {
      "type": "display",
      "interactive": false,
      "hasDisclosure": false,
      "acceptsUserInput": false,
      "supportsAsync": false,
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "renderVerification": "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually."
    },
    "accessibilityMetadata": {
      "requirements": [
        "Provide accessible names for interactive triggers; preserve built-in keyboard/ARIA behavior.",
        "Visible text or aria-label must identify the component purpose when interactive.",
        "Do not remove built-in keyboard and ARIA behavior."
      ],
      "role": "semantic role depends on rendered element and children",
      "keyboard": "Layout or display primitive; keyboard behavior comes from interactive children.",
      "screenReader": "Use meaningful labels, descriptions, and state announcements where applicable."
    },
    "agentHints": {
      "priority": "medium",
      "queryTerms": [
        "Chart",
        "Data display",
        "default",
        "config",
        "data"
      ],
      "selectionCriteria": {
        "chooseWhen": "Visualizing series/metrics Dashboards Trends over time",
        "avoidWhen": "Single headline numbers (use Stat) Tabular comparison (use Table)",
        "preferOverRawHtml": "Use this component when it matches the intended semantic pattern instead of recreating behavior."
      },
      "generationRules": [
        "Read controls before generating JSX.",
        "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
        "Use label/value controls to verify real copy, overflow, and state.",
        "Render and inspect before delivering UI."
      ],
      "controlCoverage": {
        "count": 3,
        "names": [
          "config",
          "data",
          "state"
        ]
      }
    },
    "metadataStatus": {
      "richness": "rich",
      "generatedBy": "scripts/enrich-component-metadata.mjs",
      "updatedAt": "2026-06-26T03:35:50.830Z",
      "sourceConfidence": "shadcn-source-extracted-plus-ads"
    },
    "whenToUse": [
      "Visualizing series/metrics",
      "Dashboards",
      "Trends over time"
    ],
    "neverUseFor": [
      "Single headline numbers (use Stat)",
      "Tabular comparison (use Table)"
    ],
    "examples": [
      {
        "name": "Bar chart",
        "jsx": "<ChartContainer config={{ desktop: { label: \"Desktop\", color: \"var(--primary)\" } }} className=\"h-48 w-80\"><BarChart data={[{ month: \"Jan\", desktop: 120 }, { month: \"Feb\", desktop: 180 }, { month: \"Mar\", desktop: 90 }, { month: \"Apr\", desktop: 200 }]}><CartesianGrid vertical={false} /><XAxis dataKey=\"month\" tickLine={false} axisLine={false} tickMargin={8} /><Bar dataKey=\"desktop\" fill=\"var(--color-desktop)\" radius={4} /></BarChart></ChartContainer>"
      }
    ],
    "relatedComponents": [
      "Stat",
      "ProgressCircle"
    ]
  }
] as const;

export type RichComponentMeta = (typeof richComponentMeta)[number];
