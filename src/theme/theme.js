const theme = Object.freeze ({ 
  colors:{
    primary:"#6F4E37",
    secondary:"#B08968",
    background:"#F8F5F2",
    surface:"#FFFFFF",
    surfaceAlt:"#FCFAF8",
    text:"#3A312C",
    textLight:"#6D625A",
    border:"#E9E1D8",
    divider:"#F0E9E2",
    success:"#7FA38A",
    info:"#7DA6C2",
    warning:"#C9A66B",
    danger:"#8F4E4E",
  },

  typography: {
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
    },

    lineHeight: {
      tight: 1.3,
      normal: 1.5,
      relaxed: 1.7,
    },
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "48px",
    "4xl": "64px",
    "5xl": "80px",
    "6xl": "96px",
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "14px",
    xl: "18px",
    xxl: "24px",
    full: "9999px",
  },

  borderWidth: {
    thin: "1px",
    normal: "2px",
  },

  shadow: {
    none: "none",
    sm: "0 1px 2px rgba(0,0,0,.04)",
    md: "0 6px 20px rgba(0,0,0,.06)",
    lg: "0 12px 36px rgba(0,0,0,.08)",
  },

  transition: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",

    easing: "ease-in-out",
  },

  duration: {
    fast: 150,
    normal: 200,
    slow: 300,
  },

  opacity: {
    disabled: 0.4,
    muted: 0.6,
    hover: 0.85,
  },

  zIndex:{
    navbar:100,
    drawer:200,
    modal:300,
    toast:400,
  },

  input: {
    height: "48px",
  },

  icon: {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
  },

  button: {
    sm: "36px",
    md: "44px",
    lg: "52px",
  },

  section: {
    paddingY: "96px",
  },

  container:{
    maxWidth:"1280px",
    padding:"24px",
    mobilePadding: "20px",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  layout: {
    //Width
    maxWidth: "1280px",

    //Spacing
    containerPadding: "px-5 md:px-8 lg:px-10",
    sectionPadding: "py-16 md:py-20 lg:py-28",

    //Component Size
    navbarHeight: "72px",
    footerHeight: "320px",
  },

});
export {theme};
export default theme;
