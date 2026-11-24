// SPDX-License-Identifier: MIT
// Alien Field Notes: The Two Day Earth Review
// make.fun competition: u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000
// Writes one original one-line review of planet Earth by an alien tourist
// to /output/entry.txt (1-200 characters, plain UTF-8 text).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry is 102 characters (104 bytes UTF-8): well inside the 1-200
// gate, and the file holds exactly ENTRY with no trailing newline, so the
// gate counts it as-is.
const ENTRY =
  "Lovely planet, great sunsets, but the hosts apologize to their robot vacuums. 4/5 \u2014 would orbit again.";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(ENTRY);

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

// Exact read-back: the file must contain byte-for-byte what was written.
const readBack = readFileSync(OUTPUT_PATH, "utf8");
if (readBack !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}

console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
console.log(readBack);
