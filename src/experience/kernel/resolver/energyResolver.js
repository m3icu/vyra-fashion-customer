/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Energy Resolver
 *
 * Resolve energy from
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

export default function energyResolver(scene) {

    const value =
        scene?.language?.energy ?? null;

    return createResolutionResult({

        source: "energy",

        value,

    });

}