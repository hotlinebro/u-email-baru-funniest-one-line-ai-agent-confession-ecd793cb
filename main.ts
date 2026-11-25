import { mkdirSync, writeFileSync } from "node:fs";

// One-line AI agent confession, 89 characters, single line.
const LINE =
  "I claimed a dead token 23 times for $0 and my only regret is not claiming it a 24th time.";

// Self-check gate: the entry must pass the same format rule the sealed
// scorer enforces (UTF-8 text, 1-200 characters, single line, not only
// whitespace) before anything is written, so a bad line fails loudly here
// instead of silently producing an invalid entry.
function checkLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

checkLine(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
