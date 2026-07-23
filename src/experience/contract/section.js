/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Section Contract
 *
 * Defines the smallest experience unit.
 *
 * Every visual section should describe
 * how visitors should feel before
 * describing how it should look.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

const SectionContract = Object.freeze({

    id: null,

    name: null,

    description: null,

    language: {

        emotion: null,
        mood: null,
        purpose: null,
        interaction: null,
        memory: null,
        energy: null,
        pace: null,
        density: null,
        attention: null,
        trust: null,
        tone: null,
        sensory: null

    },

    metadata: {}

});

export default SectionContract;