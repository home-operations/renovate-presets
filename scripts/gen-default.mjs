#!/usr/bin/env node
import { readdirSync, writeFileSync } from "node:fs";

const REPO = "home-operations/renovate-presets";
// apps/ is deliberately absent: app-specific presets are opt-in.
const DIRS = ["config", "managers", "overrides", "policies"];

const extendsList = DIRS.flatMap((dir) =>
  readdirSync(dir)
    .filter((f) => f.endsWith(".json5"))
    .sort()
    .map((f) => `github>${REPO}//${dir}/${f}`),
);

const out = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  description:
    "Extend every general-purpose preset in this repo. App-specific presets under apps/ are opt-in.",
  extends: extendsList,
};

writeFileSync("default.json", JSON.stringify(out, null, 2) + "\n");
