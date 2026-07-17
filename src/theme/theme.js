/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Theme
 *
 * A shared language for every component.
 *
 * Colors express emotion.
 *
 * Typography guides the story.
 *
 * Spacing creates breathing room.
 *
 * Components should consume tokens,
 * never invent them.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import colors from "./colors";
import typography from "./typography";
import spacing from "./spacing";
import radius from "./radius";
import borderWidth from "./borderWidth";
import shadow from "./shadow";
import effects from "./effects";
import transition from "./transition";
import duration from "./duration";
import opacity from "./opacity";
import layout from "./layout";
import button from "./button";
import formControl from "./formControl";

const theme = Object.freeze ({ 
/**
 *-----------------------------------------
 * Foundation Tokens
 *-----------------------------------------
 */
  colors,  
  typography,
  spacing,
  radius,
  shadow,
  effects,
  transition,
  opacity,
  duration,

/**
 *-----------------------------------------
 * Component Tokens
 *-----------------------------------------
 */
  button,
  formControl,

/**
 *-----------------------------------------
 * Layout Tokens
 *-----------------------------------------
 */
  layout,
   
/**
 *-----------------------------------------
 * Configuration
 *-----------------------------------------
 */

  zIndex:{
    navbar:100,
    drawer:200,
    modal:300,
    toast:400,
  },

  icon: {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
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

});

export {theme};
export default theme;
