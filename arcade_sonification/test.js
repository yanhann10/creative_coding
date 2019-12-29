import { clip } from "scribbletune";
const clip = scribble.clip({
  notes: scribble.scale("c4 major"),
  pattern: "x".repeat(8)
});
clip.start();

Tone.Transport.start();
