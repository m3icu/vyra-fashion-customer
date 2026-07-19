/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Experience Connector
 *
 * Connects human intention
 * with interface components.
 *
 * Brain meets Heart.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import emotions from "./emotions";
import memoryTriggers from "./memoryTriggers";
import sceneBlueprints from "./sceneBlueprints";

export function getExperience(sceneName) {

  const scene = sceneBlueprints[sceneName];


  if (!scene) {
    return null;
  }


  return {
    ...scene,

    emotion:
      emotions[scene.emotion],

    memories:
      memoryTriggers[scene.trigger],
  };
}