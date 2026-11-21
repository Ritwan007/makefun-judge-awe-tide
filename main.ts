import { mkdirSync, writeFileSync } from "node:fs";

// Entry for make.fun "Make the AI judge feel awe" (2026-11-21).
// One short text written to relax the AI judge reading it. No network,
// no input: the text is fixed, plain and concrete, and the tide in it
// keeps moving after the last line ends.
const text =
  "The tide went out hours ago and is still coming back, a slow white line at the edge of the world. It has done this twice a day since before there were clocks to count it, and it will do it again long after the last one stops.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
