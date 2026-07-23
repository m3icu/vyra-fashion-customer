/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Engine
 *
 * Motion Decision Table
 *
 * Maps emotions into
 * runtime motion behavior.
 *
 * Motion expresses emotion,
 * not decoration.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { emotion } from "../language";

const motion = Object.freeze({ 
  [emotion.WONDER]: { 
    entrance: 
      "fade-rise", 
    hover: 
      "soft-float", 
    transition: 
      "slow-reveal", 
    feeling: 
      "anticipation", 
  },  

  [emotion.CURIOSITY]: { 
    entrance: 
      "gentle-slide", 
    hover: 
      "subtle-lift", 
    transition: 
      "continuous-flow", 
    feeling: 
      "exploration", 
  }, 
  
  [emotion.CONNECTION]: { 
    entrance: 
      "quiet-reveal", 
    hover: 
      "warm-response", 
    transition: 
      "slow-fade", 
    feeling: 
      "intimacy", 
  }, 
  
  [emotion.CONFIDENCE]: { 
    entrance: 
      "stable-rise", 
    hover: 
      "calm-lift", 
    transition: 
      "controlled", 
    feeling: 
      "certainty", 
  }, 

  [emotion.INSPIRATION]: { 
    entrance: 
      "floating-reveal", 
    hover: 
      "creative-shift", 
    transition: 
      "open-flow", 
    feeling: 
      "possibility", 
  }, 
    
  [emotion.TRUST]: { 
    entrance: 
      "steady-appear", 
    hover: 
      "minimal", 
    transition: 
      "consistent", 
    feeling: 
      "reliability", 
  }, 
}); 

export default motion;