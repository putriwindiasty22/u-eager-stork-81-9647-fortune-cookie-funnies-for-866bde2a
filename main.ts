// Fortune Cookie Funnies for Engineers — make.fun entry.
// Writes one original fortune-cookie line for a software engineer to
// /output/entry.txt. Deterministic: the same line on every run.
// Node 22+ runs this TypeScript file directly (type stripping).
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "The dead code nobody dares delete is load-bearing. You will delete it anyway.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly one line.
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
