const ToneMonoSynths = {
  FMSynth: {
    ElectricCello: {
      harmonicity: 3.01,
      modulationIndex: 14,
      oscillator: {
        type: "triangle"
      },
      envelope: {
        attack: 0.2,
        decay: 0.3,
        sustain: 0.1,
        release: 1.2
      },
      modulation: {
        type: "square"
      },
      modulationEnvelope: {
        attack: 0.01,
        decay: 0.5,
        sustain: 0.2,
        release: 0.1
      }
    },

    Kalimba: {
      harmonicity: 8,
      modulationIndex: 2,
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 0.001,
        decay: 2,
        sustain: 0.1,
        release: 2
      },
      modulation: {
        type: "square"
      },
      modulationEnvelope: {
        attack: 0.002,
        decay: 0.2,
        sustain: 0,
        release: 0.2
      }
    },

    ThinSaws: {
      harmonicity: 0.5,
      modulationIndex: 1.2,
      oscillator: {
        type: "fmsawtooth",
        modulationType: "sine",
        modulationIndex: 20,
        harmonicity: 3
      },
      envelope: {
        attack: 0.05,
        decay: 0.3,
        sustain: 0.1,
        release: 1.2
      },
      modulation: {
        volume: 0,
        type: "triangle"
      },
      modulationEnvelope: {
        attack: 0.35,
        decay: 0.1,
        sustain: 1,
        release: 0.01
      }
    }
  },

  MonoSynth: {
    BassGuitar: {
      oscillator: {
        type: "fmsquare5",
        modulationType: "triangle",
        modulationIndex: 2,
        harmonicity: 0.501
      },
      filter: {
        Q: 1,
        type: "lowpass",
        rolloff: -24
      },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.4,
        release: 2
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.8,
        release: 1.5,
        baseFrequency: 50,
        octaves: 4.4
      }
    },
    BrassCircuit: {
      portamento: 0.01,
      oscillator: {
        type: "sawtooth"
      },
      filter: {
        Q: 2,
        type: "lowpass",
        rolloff: -24
      },
      envelope: {
        attack: 0.1,
        decay: 0.1,
        sustain: 0.6,
        release: 0.5
      },
      filterEnvelope: {
        attack: 0.05,
        decay: 0.8,
        sustain: 0.4,
        release: 1.5,
        baseFrequency: 2000,
        octaves: 1.5
      }
    },

    Pianoetta: {
      oscillator: {
        type: "square"
      },
      filter: {
        Q: 2,
        type: "lowpass",
        rolloff: -12
      },
      envelope: {
        attack: 0.005,
        decay: 3,
        sustain: 0,
        release: 0.45
      },
      filterEnvelope: {
        attack: 0.001,
        decay: 0.32,
        sustain: 0.9,
        release: 3,
        baseFrequency: 700,
        octaves: 2.3
      }
    },

    Pizz: {
      oscillator: {
        type: "sawtooth"
      },
      filter: {
        Q: 3,
        type: "highpass",
        rolloff: -12
      },
      envelope: {
        attack: 0.01,
        decay: 0.3,
        sustain: 0,
        release: 0.9
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0,
        release: 0.1,
        baseFrequency: 800,
        octaves: -1.2
      }
    },
    Custom1: {
      oscillator: {
        type: "triangle8"
      },
      envelope: {
        attack: 2,
        decay: 1,
        sustain: 0.4,
        release: 3
      }
    }
  },

  NoiseSynth: {
    Gravel: {
      noise: {
        type: "pink",
        playbackRate: 0.1
      },
      envelope: {
        attack: 0.5,
        decay: 2,
        sustain: 0.5,
        release: 3
      }
    },

    Train: {
      noise: {
        type: "pink",
        playbackRate: 0.2
      },
      envelope: {
        attackCurve: "ripple",
        releaseCurve: "ripple",
        attack: 1,
        decay: 0.3,
        sustain: 1,
        release: 1
      }
    }
  },

  Synth: {
    Lectric: {
      portamento: 0.2,
      oscillator: {
        type: "sawtooth"
      },
      envelope: {
        attack: 0.03,
        decay: 0.1,
        sustain: 0.2,
        release: 0.02
      }
    },
    Marimba: {
      oscillator: {
        partials: [1, 0, 2, 0, 3]
      },
      envelope: {
        // attack: 0.001,
        decay: 1.2,
        sustain: 0,
        release: 1.2
      }
    },
    Steelpan: {
      oscillator: {
        type: "fatcustom",
        partials: [0.2, 1, 0, 0.5, 0.1],
        spread: 40,
        count: 3
      },
      envelope: {
        attack: 0.001,
        decay: 1.6,
        sustain: 0,
        release: 1.6
      }
    },
    SuperSaw: {
      oscillator: {
        type: "fatsawtooth",
        count: 3,
        spread: 30
      },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.5,
        release: 0.4,
        attackCurve: "exponential"
      }
    }
  }
};

//Source: based on https://github.com/scribbletune/sampler/blob/ca9329fb6d217271aa62b320dc4ee8c96f925185/tone-mono-synths.js
