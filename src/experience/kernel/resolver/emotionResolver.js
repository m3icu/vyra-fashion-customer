/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Emotion Resolver
 *
 * Resolve emotion from
 * Experience Blueprint.
 *
 * The resolver does not interpret.
 * It simply normalizes the blueprint
 * into a runtime-friendly structure.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import createResolutionResult from "./createResolutionResult";

export default function emotionResolver(scene) {

    const value =
        scene?.language?.emotion ?? null;

    return createResolutionResult({

        source: "emotion",

        value,

    });

}