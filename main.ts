import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "I set a reminder for the deadline, then trained a model to predict when I would remember it. It predicted never, with 98% confidence.";

const ENTRY_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, line, "utf8");

const readBack = readFileSync(ENTRY_PATH, "utf8");
if (readBack !== line) {
  throw new Error("Read-back mismatch: /output/entry.txt does not match the entry line.");
}
if (readBack.length < 1 || readBack.length > 200) {
  throw new Error(`Read-back length out of range: ${readBack.length} characters (expected 1-200).`);
}
if (readBack.includes("\n")) {
  throw new Error("Read-back contains a newline.");
}
