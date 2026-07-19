const typography = Object.freeze({
  fontFamily: "'Outfit', sans-serif",

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",

    // Display
    "5xl": "48px",
    "6xl": "60px",
  },

  lineHeight: {
    tight: 1.3,
    normal: 1.5,
    relaxed: 1.7,
  },

  responsive: {
    hero: {
      mobile: "36px",
      tablet: "42px",
      desktop: "48px",
    },
  },
});

export default typography;