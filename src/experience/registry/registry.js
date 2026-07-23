/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Registry
 *
 * Central registry for all
 * experience blueprints.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import homepage from "../blueprints/homepage";

const registry = Object.freeze({

    ...homepage,

});

function hasExperience(id) {

    return id in registry;

}

function getBlueprint(id) {

    return registry[id] ?? null;

}

function getAllBlueprints() {

    return Object.values(registry);

}

function getIds() {

    return Object.keys(registry);

}

export {

    getBlueprint,

    getAllBlueprints,

    getIds,

    hasExperience,

};