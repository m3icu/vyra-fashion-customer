/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Language
 * Attention Glossary
 * --------------------------------------------------------
 */

import attention from "./attention";

const glossary = Object.freeze({

    [attention.STORY]: {
        id: attention.STORY,
        title: "Story",
        description:
            "Guide visitors through narrative before asking them to act.",
        intent:
            "Build emotional connection through storytelling.",
        usage: [
            "Homepage Hero",
            "Brand Story",
            "Editorial"
        ],
        avoid: [
            "Multiple competing CTAs",
            "Product overload"
        ],
        notes:
            "Story comes before selling."
    },

    [attention.PRODUCT]: {
        id: attention.PRODUCT,
        title: "Product",
        description:
            "Direct attention toward product quality and craftsmanship.",
        intent:
            "Help visitors appreciate the product itself.",
        usage: [
            "Product Detail",
            "Collections"
        ],
        avoid: [
            "Distracting decorations"
        ],
        notes:
            "Products should feel curated, never crowded."
    },

    [attention.ACTION]: {
        id: attention.ACTION,
        title: "Action",
        description:
            "Encourage visitors to complete an important task.",
        intent:
            "Reduce hesitation during decision making.",
        usage: [
            "Checkout",
            "Add to Cart"
        ],
        avoid: [
            "Competing actions"
        ],
        notes:
            "Action follows trust."
    },

    [attention.DETAIL]: {
        id: attention.DETAIL,
        title: "Detail",
        description:
            "Highlight meaningful supporting information.",
        intent:
            "Strengthen confidence through clarity.",
        usage: [
            "Materials",
            "Size Guide",
            "Care Instructions"
        ],
        avoid: [
            "Walls of text"
        ],
        notes:
            "Details should reassure, not overwhelm."
    }
});

export default glossary;