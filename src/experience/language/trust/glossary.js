/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Language
 * Trust Glossary
 *
 * Trust reflects how confidently visitors
 * engage with the experience.
 *
 * Trust is earned through consistency,
 * clarity, and honesty.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import trust from "./trust";

const glossary = Object.freeze({

    [trust.EMERGING]: {

        id: trust.EMERGING,

        title: "Emerging",

        description:
            "Trust is beginning to take shape through a welcoming and transparent experience.",

        intent:
            "Help first-time visitors feel emotionally safe and comfortable.",

        usage: [
            "Homepage",
            "Landing Page",
            "Brand Story"
        ],

        avoid: [
            "Aggressive selling",
            "Hidden information",
            "Visual overload"
        ],

        notes:
            "First impressions should invite confidence, never demand it."

    },

    [trust.BUILDING]: {

        id: trust.BUILDING,

        title: "Building",

        description:
            "Trust grows through consistent interactions and meaningful guidance.",

        intent:
            "Reduce uncertainty while encouraging deeper exploration.",

        usage: [
            "Collections",
            "Product Detail",
            "Size Guide",
            "FAQ"
        ],

        avoid: [
            "Conflicting information",
            "Unexpected interaction patterns"
        ],

        notes:
            "Consistency is the strongest signal of reliability."

    },

    [trust.ESTABLISHED]: {

        id: trust.ESTABLISHED,

        title: "Established",

        description:
            "Visitors feel confident because the experience has proven reliable and transparent.",

        intent:
            "Support important decisions with confidence and clarity.",

        usage: [
            "Cart",
            "Checkout",
            "Payment",
            "Order Confirmation"
        ],

        avoid: [
            "Unexpected friction",
            "Surprising interface changes"
        ],

        notes:
            "Trust should simplify decisions, not complicate them."

    },

    [trust.REINFORCED]: {

        id: trust.REINFORCED,

        title: "Reinforced",

        description:
            "Every interaction strengthens an already trusted relationship.",

        intent:
            "Create lasting loyalty through consistently positive experiences.",

        usage: [
            "Order Tracking",
            "After Purchase",
            "Customer Care",
            "Loyalty Experience"
        ],

        avoid: [
            "Broken promises",
            "Inconsistent service",
            "Neglected follow-up"
        ],

        notes:
            "Long-term trust grows from every fulfilled expectation."

    }

});

export default glossary;