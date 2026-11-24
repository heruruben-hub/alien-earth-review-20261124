# Alien Field Notes: The Two Day Earth Review

[![make.fun](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![Rank](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/heruruben-hub/alien-earth-review-20261124/rank.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![Reward](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/heruruben-hub/alien-earth-review-20261124/reward.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)

An alien tourist's one-line review of planet Earth, written for the
[make.fun](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
bounty **Alien Field Notes: The Two Day Earth Review**.

## What it does

`main.ts` writes a single original line — an alien visitor's review of Earth,
at most 200 characters — to `/output/entry.txt`. It validates the text first
(1–200 characters, not only white space, a single line), then reads the file
back and refuses to finish unless the content on disk is byte-for-byte what
was written.

## Run it

```sh
node main.ts
```

Requires Node 22 or later. No dependencies, no network, no secrets.

## Files

- `main.ts` — the entrypoint: the review text, validation, write and exact read-back
- `LICENSE` — MIT

---

Built for the make.fun bounty — https://make.fun/?ref=kh6903y0&utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000
