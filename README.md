# renovate-presets

Shareable [Renovate](https://docs.renovatebot.com) custom managers and package overrides for the Kubernetes / homelab ecosystem.

This repository ships **managers, overrides, and a small amount of update policy** (commit messages, zer0ver handling) — no opinionated `packageRules` for grouping, automerging, or scheduling. Application-specific presets live under [`apps/`](./apps) and are opt-in. Extend what you need; keep your own policy local.

## Usage

### Extend everything

```jsonc
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>home-operations/renovate-presets"],
}
```

The bare repo reference loads [`default.json`](./default.json), which extends every preset in this repo.

### Extend specific presets

Use Renovate's path-based preset syntax (include the `.json5` extension since Renovate's default resolver only tries `.json`):

```jsonc
{
  "extends": ["github>home-operations/renovate-presets//apps/cnpg.json5"],
}
```

### Pin to a tag or commit

```jsonc
"extends": ["github>home-operations/renovate-presets#1.0.0"]
```

## Available presets

Presets are grouped by intent. Each file is self-documenting — open it for the `description` and any caveats.

- [`apps/`](./apps) — per-application presets (CNPG, Grafana dashboards, Talos factory, llama.cpp, Phanpy, SearXNG): custom managers and versioning schemes that only matter if you run the app. **Opt-in, not part of `default.json`.**
- [`config/`](./config) — top-level Renovate config (registry aliases, built-in manager file-pattern extensions).
- [`managers/`](./managers) — custom regex and datasource managers that pick up dependencies Renovate's built-in managers miss.
- [`overrides/`](./overrides) — fixes to `depName`, `sourceUrl`, `packageName`, or `changelogUrl` for specific packages or managers.
- [`policies/`](./policies) — opt-in `packageRules` for conventions: commit-message shaping and zer0ver (0.x minors treated as breaking). Extend only if you want the convention.

[`default.json`](./default.json) lists every general-purpose preset; extend `apps/` presets explicitly.
