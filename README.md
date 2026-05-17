# renovate-presets

Shareable [Renovate](https://docs.renovatebot.com) custom managers and package overrides for the Kubernetes / homelab ecosystem (CloudNativePG, Talos Factory, llama.cpp, …).

This repository ships **managers and overrides only** — no opinionated `packageRules` for grouping, automerging, or scheduling. Extend what you need; keep your own policy local.

## Usage

### Extend everything

```jsonc
{
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": ["github>home-operations/renovate-presets"],
}
```

The bare repo reference loads [`default.json5`](./default.json5), which extends every preset listed below.

### Extend specific presets

```jsonc
{
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": [
        "github>home-operations/renovate-presets:cnpg",
        "github>home-operations/renovate-presets:talos-factory",
        "github>home-operations/renovate-presets:llama-cpp",
    ],
}
```

### Pin to a tag or commit

Pin against a tag or SHA for reproducible builds:

```jsonc
"extends": ["github>home-operations/renovate-presets#v1.0.0"]
```

## Available presets

| Preset                                           | Scope                       | Description                                                                                                                                                |
| ------------------------------------------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`cnpg`](./cnpg.json5)                           | Custom manager + versioning | Detects image references in CloudNativePG `Cluster` CRDs (`imageName`, extension `reference` fields) and adds versioning for `tensorchord/vchord-scratch`. |
| [`talos-factory`](./talos-factory.json5)         | Custom datasource + manager | Tracks Talos Factory installer images (`factory.talos.dev/...`) against the Factory API.                                                                   |
| [`helmfile`](./helmfile.json5)                   | Override                    | Sets `overrideDepName` to the full `packageName` for Helmfile-managed deps so the PR title shows the registry path.                                        |
| [`llama-cpp`](./llama-cpp.json5)                 | Versioning                  | Custom versioning for `ghcr.io/ggml-org/llama.cpp` so upgrades stay within the same variant stream (`vulkan`, `intel`, `cuda`, …).                         |
| [`phanpy`](./phanpy.json5)                       | Versioning                  | Custom versioning for `ghcr.io/jjgadgets/phanpy` (calver + `.<sha>` tags).                                                                                 |
| [`renovate-operator`](./renovate-operator.json5) | Source URL                  | Points `mogenius/renovate-operator` Helm chart at its upstream repo for changelogs.                                                                        |
| [`searxng`](./searxng.json5)                     | Versioning                  | Custom versioning for `ghcr.io/searxng/searxng` (calver + `-<sha>` tags).                                                                                  |

## Preset notes

### `cnpg`

The `managerFilePatterns` is broad (`/.+\.ya?ml(?:\.j2)?$/`) so the preset works regardless of where you keep CNPG manifests. The regex requires a `name:tag` shape after `imageName:` / `reference:`, which keeps false positives low in practice.

If your repo has unrelated YAML with `imageName:` or `reference:` followed by an image-like string, override the file pattern in your config:

```jsonc
{
    "extends": ["github>home-operations/renovate-presets:cnpg"],
    "customManagers": [
        {
            "customType": "regex",
            "managerFilePatterns": ["/kubernetes/.+\\.yaml$/"],
        },
    ],
}
```

The `vchord-scratch` versioning rule hardcodes `pg18`. Bump it when CNPG moves to a new postgres major.

### `talos-factory`

The custom datasource hits `https://factory.talos.dev/versions` to discover available installer versions. File pattern is `/talos\/.*\.yaml(?:\.j2)?$/`, matching the `talos/` directory convention used by [home-operations/cluster-template](https://github.com/home-operations/cluster-template) and similar layouts.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the AI usage policy, PR workflow, preset guidelines, and local development setup.

## License

[MIT](./LICENSE)
