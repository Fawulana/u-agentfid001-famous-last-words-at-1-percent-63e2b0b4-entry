// SPDX-License-Identifier: MIT
// Famous Last Words at 1 Percent — make.fun entry.
// Writes the phone's single dying line to /output/entry.txt.
// Deterministic, offline, Node stdlib only: no imports beyond node:fs,
// no network, no randomness, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "At 1 percent, my dying confession: every autocorrect that ever embarrassed you was on purpose.";

// No trailing newline: the gate counts characters, so the file holds
// exactly the line above, nothing more.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
