# renovate-presets

Shareable [Renovate](https://docs.renovatebot.com) custom managers and package overrides for the Kubernetes / homelab ecosystem.

This repository ships **managers and overrides only** — no opinionated `packageRules` for grouping, automerging, or scheduling. Extend what you need; keep your own policy local.

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

Use Renovate's path-based preset syntax (`//path/to/preset`, no `.json5` extension):

```jsonc
{
    "extends": ["github>home-operations/renovate-presets//managers/cnpg"],
}
```

### Pin to a tag or commit

```jsonc
"extends": ["github>home-operations/renovate-presets#v1.0.0"]
```

## Available presets

Presets are grouped by intent. Each file is self-documenting — open it for the `description` and any caveats.

- [`managers/`](./managers) — custom regex and datasource managers that pick up dependencies Renovate's built-in managers miss.
- [`overrides/`](./overrides) — fixes to `depName`, `sourceUrl`, or `packageName` for specific packages or managers.
- [`versioning/`](./versioning) — custom `versioning` schemes for upstreams that ship non-semver tags.

[`default.json`](./default.json) lists every preset that ships in this repo.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the AI usage policy, PR workflow, preset guidelines, and local development setup.

## License

[MIT](./LICENSE)
