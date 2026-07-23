/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Resolver
 *
 * Resolves an Experience Blueprint
 * into a runtime-friendly object.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import createResolutionResult from "./createResolutionResult";
import languageResolver from "./languageResolver";

export default function experienceResolver(scene) {

    return createResolutionResult({

        source: "experience",

        data: {

            id:
                scene?.id ?? null,

            mission:
                scene?.mission ?? null,

            profile:
                scene?.profile ?? null,

            language:
                languageResolver(scene).data,

            narrative:
                scene?.narrative ?? null,

            editorial:
                scene?.editorial ?? null,

            interaction:
                scene?.interaction ?? null,

            memory:
                scene?.memory ?? null,

            curation:
                scene?.curation ?? null,

            commerce:
                scene?.commerce ?? null,

        },

    });

}