/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Scene Contract
 *
 * Defines the structure of a Scene.
 *
 * A Scene groups multiple Sections into
 * one meaningful moment.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

const SceneContract = Object.freeze({

    id: null,

    name: null,

    description: null,

    order: 0,

    sections: [],

    metadata: {}

});

export default SceneContract;