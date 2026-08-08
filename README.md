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

The bare repo reference loads [`default.json`](./default.json). It is a single, self-contained preset taken as a set, so a tag on that reference pins all of it. Granularity lives in [`apps/`](./apps).

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

A tag applies only to the reference it is written on, and Renovate has no
relative preset syntax: a preset that referenced another file could never pass
its tag along. `default.json` holds its rules directly, so one tag covers all of
them, but an `apps/` preset needs its own tag or it floats on the default
branch:

```jsonc
"extends": [
  "github>home-operations/renovate-presets#1.0.0",
  "github>home-operations/renovate-presets//apps/cnpg.json5#1.0.0",
]
```

## Layout

- [`default.json`](./default.json) — the defaults: stock Renovate presets, custom managers, package overrides and commit-message and zer0ver policy. Edit it directly; every rule carries a `description` explaining itself.
- [`apps/`](./apps) — per-application presets (CNPG, Grafana dashboards, Talos factory, llama.cpp, Phanpy, SearXNG): custom managers and versioning schemes that only matter if you run the app. **Opt-in, not part of `default.json`.**

Both are flat and self-contained. No preset here references another file in this
repo, which is what lets a single tag pin whatever you extend.
