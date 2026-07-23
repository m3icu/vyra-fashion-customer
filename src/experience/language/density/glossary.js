import density from "./density";

const glossary = Object.freeze({

    [density.MINIMAL]: {

        id: density.MINIMAL,

        title: "Minimal",

        description:
            "Only essential visual elements are presented.",

        intent:
            "Reduce cognitive load.",

        usage: [
            "Checkout",
            "Success Page"
        ],

        avoid: [
            "Decorative clutter"
        ],

        notes:
            "Minimal does not mean empty."

    },

    [density.AIRY]: {

        id: density.AIRY,

        title: "Airy",

        description:
            "Generous spacing creates breathing room.",

        intent:
            "Encourage calm exploration.",

        usage: [
            "Homepage",
            "Lookbook"
        ],

        avoid: [
            "Tight layouts"
        ],

        notes:
            "Whitespace is part of the experience."

    },

    [density.BALANCED]: {

        id: density.BALANCED,

        title: "Balanced",

        description:
            "Information and spacing are evenly distributed.",

        intent:
            "Support comfortable browsing.",

        usage: [
            "Collection Page",
            "Search Results"
        ],

        avoid: [
            "Visual extremes"
        ],

        notes:
            "Balance supports readability."

    },

    [density.RICH]: {

        id: density.RICH,

        title: "Rich",

        description:
            "Present abundant content while maintaining clarity.",

        intent:
            "Support deeper exploration.",

        usage: [
            "Editorial",
            "Brand Journal"
        ],

        avoid: [
            "Information chaos"
        ],

        notes:
            "Rich experiences still require hierarchy."

    }

});

export default glossary;