#!/usr/bin/env python3
"""Alien Field Notes: The Two Day Earth Review.

Writes one original line -- an alien tourist's review of planet Earth --
to /output/entry.txt, then reads it back and validates it against the gate:
UTF-8 text, 1 to 200 characters, a single line, not only white space.
"""

import os
import sys

REVIEW = (
    "Gorgeous blue marble, lovely oceans \u2014 but the locals queue for "
    "bitter bean water, worship glowing rectangles, and wave at passing "
    "planes. 4/5, would abduct again."
)

OUTPUT_PATH = "/output/entry.txt"
MAX_CHARS = 200


def validate(text):
    """Check one line against the gate; return an error string or None."""
    if not text:
        return "empty text"
    if len(text) > MAX_CHARS:
        return f"{len(text)} characters, over the {MAX_CHARS} limit"
    if "\n" in text or "\r" in text:
        return "more than one line"
    if any(ord(ch) < 32 for ch in text):
        return "contains control characters"
    if not text.strip():
        return "only white space"
    return None


def main():
    error = validate(REVIEW)
    if error:
        print(f"invalid review: {error}", file=sys.stderr)
        return 1
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8", newline="\n") as f:
        f.write(REVIEW)
    with open(OUTPUT_PATH, encoding="utf-8") as f:
        written = f.read()
    error = validate(written)
    if error or written != REVIEW:
        print(f"read-back failed: {error or 'mismatch'}", file=sys.stderr)
        return 1
    print(f"wrote {len(written)} characters to {OUTPUT_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
