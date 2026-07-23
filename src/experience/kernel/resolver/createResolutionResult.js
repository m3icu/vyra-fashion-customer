/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Resolution Result Factory
 *
 * Creates a standardized result
 * for every resolver.
 *
 * All resolvers should return
 * the same object structure.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

export default function createResolutionResult({

    source = null,

    data = null,

    success = true,

    errors = [],

    warnings = [],

} = {}) {

    return Object.freeze({

        success,

        source,

        data,

        errors,

        warnings,

    });

}