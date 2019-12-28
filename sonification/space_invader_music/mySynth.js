class MonoSynth {
  constructor(note, synthChoice) {
    this.synth = new Tone.FMSynth(synthChoice).toDestination();
    this.notes = note;
  }

  play() {
    console.log(ToneMonoSynths["MonoSynth"]["BassGuitar"]);
    this.synth.triggerAttackRelease(this.notes, "8n");
  }
}

class PolySynth {
  constructor(note) {
    this.synth = new Tone.PolySynth({
      oscillator: {
        type: "triangle8"
      },
      envelope: {
        attack: 2,
        decay: 0.5,
        sustain: 0.4,
        release: 2
      }
    }).toDestination();
    this.notes = note;
  }

  play() {
    this.synth.triggerAttackRelease(this.notes, "8n");
  }
}
