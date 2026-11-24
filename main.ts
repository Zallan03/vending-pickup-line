// One Line, One Minute: The Vending Machine Pickup Line Contest — entry
// program (Node 22). Writes one pickup line spoken by a vending machine.
//
// The joke: the machine has hummed the same single note for six years,
// and the passing human just turned it into a song. It is spoken by
// the machine itself, it draws on the machine's own world (its hum),
// the turn arrives in the last few words, and it is charming rather
// than creepy. It avoids the flooded tropes: no "press my buttons",
// no "stuck on you", no exact change, no coil crush, no B7.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I've been humming the same note for six years. You just made it a song.";

const MAX_CHARS = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} chars, gate allows 1–${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
