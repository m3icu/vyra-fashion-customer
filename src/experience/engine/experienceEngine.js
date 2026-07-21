/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Experience Engine
 *
 * The brain of Experience OS.
 *
 * Translates blueprint intention
 * into experience guidance.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import readingPace from "./readingPace";
import narrative from "./narrative";
import motion from "./motion";
import experienceRegistry from "../registry/registry";

function createExperience(blueprint) {
  if (!blueprint) {
    throw new Error(
      "Experience blueprint is required."
    );
  }
  const {
    emotion,
    readingPace: pace,
    narrative: story,
    interaction,
    editorial,
    commerce,
  } = blueprint;

  return Object.freeze({
    id:
      blueprint.id,
    emotion,
    purpose:
      blueprint.purpose,

    pace:
      readingPace[pace],

    narrative:
      narrative[emotion],

    motion:
      motion[emotion],

    editorial,

    interaction,

    commerce,
  });
}

function getExperience(id) {
  const blueprint =
    experienceRegistry[id];

  if (!blueprint) {
    throw new Error(
      `Experience "${id}" not found.`
    );
  }

  return createExperience(
    blueprint
  );
}

export {
  createExperience,
  getExperience,
};