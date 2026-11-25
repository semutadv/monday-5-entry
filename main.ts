// Entry runner for "Monday Morning Punchlines" (gentle-badger).
// One line for the first morning of the week: Monday as a software
// update nobody agreed to — unavoidable, unexplained, installed while
// you slept — which has, for reasons never documented, moved all your
// icons. Written to /output/entry.txt, effective immediately, with no
// changelog and no rollback.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Monday arrived like a software update I didn't agree to: unavoidable, unexplained, and somehow it moved all my icons.";

function prepare(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

const out = process.env.OUTPUT_DIR ?? "/output";
prepare(out);
fs.writeFileSync(path.join(out, "entry.txt"), LINE + "\n", "utf8");
