# Changelog

## [1.3.0](https://github.com/home-operations/renovate-presets/compare/1.2.0...1.3.0) (2026-05-20)


### Features

* add j2 helmfile and kustomize to manager file patterns ([18b9116](https://github.com/home-operations/renovate-presets/commit/18b911654a2df1c1f36b3c380763e2088f499ed0))


### Miscellaneous Chores

* shorten mise tool names and pin to semver ([ced5af0](https://github.com/home-operations/renovate-presets/commit/ced5af0bec42d5f9e9881379a004fcde89c19264))

## [1.2.0](https://github.com/home-operations/renovate-presets/compare/1.1.0...1.2.0) (2026-05-20)


### Features

* add baseConfig ([f3be204](https://github.com/home-operations/renovate-presets/commit/f3be204ef61725e2aa5d9f1c0387c7cd084727ee))


### Miscellaneous Chores

* drop strict lockfile mode to unblock Renovate ([e45aee9](https://github.com/home-operations/renovate-presets/commit/e45aee9cddad0b635be28bd0ea20b5972e803ff0))
* enable strict lockfile mode ([7132740](https://github.com/home-operations/renovate-presets/commit/71327405dac26d1d82a7a59144b31c1f27e1be2c))
* extend lefthook from .github, split editorconfig, mise fmt ([5de51aa](https://github.com/home-operations/renovate-presets/commit/5de51aad4eb78ace0d87e616dc8469b56128985a))
* remove repo-only grouping ([6b3553b](https://github.com/home-operations/renovate-presets/commit/6b3553b7e5c428d518e0325c195dfae90b51cd71))

## [1.1.0](https://github.com/home-operations/renovate-presets/compare/1.0.2...1.1.0) (2026-05-19)


### Features

* add default dependencyDashboardTitle ([e0cc91e](https://github.com/home-operations/renovate-presets/commit/e0cc91e8cb484624e781b483ff00d8e8b346f762))


### Miscellaneous Chores

* add mise lockfile and update hooks ([a23a284](https://github.com/home-operations/renovate-presets/commit/a23a284639c1a93f0624deb77478cf2b7cda942b))

## [1.0.2](https://github.com/home-operations/renovate-presets/compare/1.0.1...1.0.2) (2026-05-19)


### Miscellaneous Chores

* add renovate config semantic commit ([718abcf](https://github.com/home-operations/renovate-presets/commit/718abcf7f1c5d67b5392166a1fb86b8e38b398be))

## [1.0.1](https://github.com/home-operations/renovate-presets/compare/1.0.0...1.0.1) (2026-05-19)


### Bug Fixes

* **deps:** update dependency aqua:evilmartians/lefthook ( 2.1.6 ➔ 2.1.8 ) ([#8](https://github.com/home-operations/renovate-presets/issues/8)) ([a88730d](https://github.com/home-operations/renovate-presets/commit/a88730d64f22f5c722004d3ec24a39b215fcb253))


### Miscellaneous Chores

* dogfood renovate preset ([45c6e41](https://github.com/home-operations/renovate-presets/commit/45c6e41d85568ebdc5da2a984133dd6ff2bc4c31))
* feedback from [@buroa](https://github.com/buroa) ([2e1c2fc](https://github.com/home-operations/renovate-presets/commit/2e1c2fc34a25e056dd7a44f99bbb5c6b1da707b4))
* ignore devcontainers in release-please config ([427889b](https://github.com/home-operations/renovate-presets/commit/427889b366990c1b547d00187cf75557c549442e))
* ignore self config in release-please config ([6d4d23b](https://github.com/home-operations/renovate-presets/commit/6d4d23b80981ff362b5973ad21cd3fbae29d50b5))

## 1.0.0 (2026-05-19)


### Features

* wave 1 of presets ([a8f094e](https://github.com/home-operations/renovate-presets/commit/a8f094edb4345b39797fc4e186d79391512c9fbd))
* wave 2 of amazing overides ([c5c9d87](https://github.com/home-operations/renovate-presets/commit/c5c9d87bbb5157c40e68adf09f689fad4fcf335e))


### Bug Fixes

* also match .yml in talos-factory managerFilePatterns ([c71f9fa](https://github.com/home-operations/renovate-presets/commit/c71f9fac6cabbfed29363e1c63f724aa8dacd338))
* **default:** include .json5 extension in nested preset paths ([82906db](https://github.com/home-operations/renovate-presets/commit/82906db0aaa40eba1e9df12f5f37461a3d1a8132))


### Miscellaneous Chores

* add gen task for default.json ([d231ab1](https://github.com/home-operations/renovate-presets/commit/d231ab1fd7f8863db9e9d57c5027c10653d36a2d))
* add more defaults and update filesnames ([f984f7c](https://github.com/home-operations/renovate-presets/commit/f984f7cf8aa063396549ddac69f151475e91d767))
* add release please config and workflow ([ef85eb5](https://github.com/home-operations/renovate-presets/commit/ef85eb5dc236ab6dbb1367c0955ec6b84cd0de50))
* add shellcheck ([83545a2](https://github.com/home-operations/renovate-presets/commit/83545a2c11996367162b2409c30de26f369ceaa4))
* consolidation and standardization ([44457a2](https://github.com/home-operations/renovate-presets/commit/44457a23e0b72940967e1b349aa5427d50a50785))
* **deps:** update dependency lefthook to v2 ([#1](https://github.com/home-operations/renovate-presets/issues/1)) ([b9a560d](https://github.com/home-operations/renovate-presets/commit/b9a560d97735ea45f3440b7fc20219eef1ee56a9))
* **deps:** update dependency npm:renovate to v43 ([#2](https://github.com/home-operations/renovate-presets/issues/2)) ([d04fac6](https://github.com/home-operations/renovate-presets/commit/d04fac6569224db40ae5bdf72da9e42b328277e6))
* **deps:** update node.js to v24 ([#5](https://github.com/home-operations/renovate-presets/issues/5)) ([e52f784](https://github.com/home-operations/renovate-presets/commit/e52f78499e2ef4098ef0823723b0322bd4dc0aec))
* fix up all the slop ([38da0ec](https://github.com/home-operations/renovate-presets/commit/38da0ecddf6feb1002c46afbc15e2d954a1b11f0))
* glob preset filenames in the validate task ([3e66fe2](https://github.com/home-operations/renovate-presets/commit/3e66fe2edf5313b45ff63d58f63f7452904904f2))
* ignore mise and github deps in release please ([a9aea03](https://github.com/home-operations/renovate-presets/commit/a9aea0358de61366ac197f487c9d2f55177ee03b))
* more slop fixups ([a3f3ed5](https://github.com/home-operations/renovate-presets/commit/a3f3ed58444d0ac97de75a7e5f07ca6470ac8968))
* more standardizing ([33e4687](https://github.com/home-operations/renovate-presets/commit/33e4687500ead0ae1d63340a05ac32a96bdb01d4))
* rename format to lint ([28fd4aa](https://github.com/home-operations/renovate-presets/commit/28fd4aa8c711443a2d78fd0d3903e056cafa8f13))
* update LICENSE ([664e0d4](https://github.com/home-operations/renovate-presets/commit/664e0d4eac78f348c8dd96ba380099d4d3ab9f6b))
* update YAML glob patterns in lefthook config ([d4bf6ce](https://github.com/home-operations/renovate-presets/commit/d4bf6ce3bc5a872ce1d06d90e1ef17df16883f8f))


### Code Refactoring

* group presets by intent and switch default to JSON ([1c09886](https://github.com/home-operations/renovate-presets/commit/1c09886bda5a45976b67db3fbeb9120b2cbc8a45))
