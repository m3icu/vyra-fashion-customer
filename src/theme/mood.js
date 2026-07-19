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
    
    // Identity
    label: "Soft Morning",
    
    // Background
    gradient: [
      "#F8F5F2",
      "#F3ECE4",
      "#E9EFE8",
    ],
    overlay: "linear-gradient(180deg, transparent 0%, rgba(248,245,242,.08) 100%)",

    // Atmosphere
    accent: "#A8B8A3",
    glow: {
      color: "#FFF4DE",
      opacity: 0.18,
      blur: 160,
      x: "30%",
      y: "25%",
    },

    texture: "linen",

    // Elevation
    shadow: "0 18px 40px rgba(111, 78, 55, 0.08)",

    // Motion
    motion: {
      duration: 450,
      scale: 1.015,
      lift: 6,
    },

    // Metadata
    atmosphere: {
      light: "warm",
      season: "spring",
      energy: "slow",
    },
  },

  urbanRhythm: {    

    // Identity
    label: "Urban Rhythm",
    
    // Background
    gradient: [
      "#F6F5F3",
      "#ECE9E4",
      "#E2E7EC",
    ],
    overlay: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,.05) 100%)",

    // Atmosphere
    accent: "#8E9CA8",
    glow: {
      color: "#EDF4FB",
      opacity:0.12,
      blur: 120,
      x: "50%",
      y: "50%",
    },

    texture: "concrete",

    // Elevation
    shadow: "0 18px 40px rgba(58,49,44,.10)",

    // Motion
    motion: {
      duration: 220,
      scale: 1.01,
      list: 4,
    },

    // Metadata
    atmosphere: {
      light: "soft",
      season: "all",
      energy: "balanced",
    },
  },
  
  quietLuxury: {
     
    // Identity
    label: "Quiet Luxury",
    
    // Background
    gradient: [
      "#FCFAF8",
      "#F4EFE8",
      "#F2E7D4",
    ],
    overlay: "linear-gradient(180deg, transparent 0%, rgba(255,248,238,.10) 100%)",

    // Atmosphere
    accent: "#C6A46B",
    glow: {
      color: "#F9E8C4",
      opacity: 0.18,
      blur: 180,
      x: "75%",
      y: "75%",
    },
    texture: "silk",

    // Elevation
    shadow: "0 22px 48px rgba(111,78,55,.08)",

    // Motion
    motion: {
      duration: 380,
      scale: 1.012,
      lift: 5,
    },

    // Metadata
    atmosphere: {
      light: "golden",
      season: "autumn",
      energy: "calm",
    },
  },
});

export default mood;