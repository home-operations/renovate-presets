#!/usr/bin/env node
import { readdirSync, writeFileSync } from "node:fs";

const REPO = "home-operations/renovate-presets";
const DIRS = ["managers", "overrides", "versioning"];

const extendsList = DIRS.flatMap((dir) =>
  readdirSync(dir)
    .filter((f) => f.endsWith(".json5"))
    .sort()
    .map((f) => `github>${REPO}//${dir}/${f}`),
);

const out = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  description:
    "Extend every preset in this repo. Prefer extending individual presets when you only need some.",
  extends: extendsList,
};

writeFileSync("default.json", JSON.stringify(out, null, 2) + "\n");
