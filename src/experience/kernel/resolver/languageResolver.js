/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Language Resolver
 *
 * Aggregates all resolved
 * language primitives into
 * a unified language object.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import createResolutionResult from "./createResolutionResult";

import emotionResolver from "./emotionResolver";
import moodResolver from "./moodResolver";
import energyResolver from "./energyResolver";

export default function languageResolver(scene) {

    return createResolutionResult({

        source: "language",

        data: {

            emotion:
                emotionResolver(scene).data,

            mood:
                moodResolver(scene).data,

            energy:
                energyResolver(scene).data,

            tone:
                scene?.language?.tone ?? null,

            purpose:
                scene?.language?.purpose ?? null,

            pace:
                scene?.language?.pace ?? null,

            trust:
                scene?.language?.trust ?? null,

            attention:
                scene?.language?.attention ?? null,

            sensory:
                scene?.language?.sensory ?? null,

        },

    });

}