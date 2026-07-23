/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Mood Resolver
 *
 * Resolve mood from
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

export default function moodResolver(scene) {

    const value =
        scene?.language?.mood ?? null;

    return createResolutionResult({

        source: "mood",

        value,

    });

}