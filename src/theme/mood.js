/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Mood Presets
 * --------------------------------------------------------
 *
 * Mood translates emotion into visuals.
 *
 * Content chooses the mood.
 *
 * Theme defines how the mood looks.
 *
 * Components simply render it.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

const mood = Object.freeze({
  softMorning: {
    name: "Soft Morning",

    gradient: [
      "#F8F5F2",
      "#F3ECE4",
      "#E9EFE8",
    ],

    glow: {
      color: "#FFF4DE",
      opacity: 0.22,
      blur: 160,
      position: "top-left",
    },

    atmosphere: {
      light: "warm",
      season: "spring",
      energy: "slow",
    },

    texture: "linen",

    accent: "#A8B8A3",

    shadow: "0 18px 40px rgba(111, 78, 55, 0.08)",

    overlay: "linear-gradient(180deg, transparent 0%, rgba(248,245,242,.08) 100%)",

    motion: {
      duration: 450,
      scale: 1.015,
      translateY: -6,
    },
  },

  urbanRhythm: {
    name: "Urban Rhythm",

    gradient: [
      "#F6F5F3",
      "#ECE9E4",
      "#E2E7EC",
    ],

    glow: {
      color: "#EDF4FB",
      opacity: 0.14,
      blur: 120,
      position: "center",
    },

    atmosphere: {
      light: "warm",
      season: "spring",
      energy: "slow",
    },

    texture: "concrete",

    accent: "#8E9CA8",

    shadow: "0 18px 40px rgba(58,49,44,.10)",

    overlay: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,.05) 100%)",

    motion: {
      duration: 220,
      scale: 1.01,
      translateY: -4,
    },
  },

  quietLuxury: {
    name: "Quiet Luxury",

    gradient: [
      "#FCFAF8",
      "#F4EFE8",
      "#F2E7D4",
    ],

    glow: {
      color: "#F9E8C4",
      opacity: 0.18,
      blur: 180,
      position: "bottom-right",
    },

    atmosphere: {
      light: "warm",
      season: "spring",
      energy: "slow",
    },

    texture: "silk",

    accent: "#C6A46B",

    shadow: "0 22px 48px rgba(111,78,55,.08)",

    overlay: "linear-gradient(180deg, transparent 0%, rgba(255,248,238,.10) 100%)",

    motion: {
      duration: 380,
      scale: 1.012,
      translateY: -5,
    },
  },
});

export default mood;