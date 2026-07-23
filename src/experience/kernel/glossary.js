/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Kernel Glossary
 *
 * Defines the meaning of every
 * Experience Kernel primitive.
 *
 * The Kernel provides the
 * fundamental building blocks
 * used throughout Experience OS.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

const glossary = Object.freeze({

    primitive:
        "The smallest immutable building block of the Experience OS.",

    profile:
        "A reusable combination of experience characteristics representing a distinct experience identity.",

    language:
        "A collection of experience intentions used to describe the desired visitor experience.",

    blueprint:
        "A declarative description of an experience before runtime interpretation.",

    contract:
        "A structural agreement defining how experience data should be organized and exchanged.",

    resolver:
        "A runtime component responsible for normalizing and resolving blueprint data into a consistent runtime structure.",

    engine:
        "A runtime component responsible for interpreting experience intentions into behavioral decisions.",

    translator:
        "A component responsible for translating runtime decisions into visual design tokens.",

    theme:
        "A collection of visual tokens expressing the translated experience.",

    runtime:
        "The resolved experience object ready to be interpreted by the Experience Engine.",

});

export default glossary;