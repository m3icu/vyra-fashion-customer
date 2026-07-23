/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Language
 * Emotion Glossary
 *
 * Explain every emotion consistently
 * across the entire Experience OS.
 *
 * This file is intended for:
 * - Documentation
 * - Developer Experience
 * - AI Assistant
 * - Design Review
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import emotion from "./emotion";
import mood from "../mood/mood";

const glossary = Object.freeze({

    [emotion.CALM]: {
        id: emotion.CALM,
        title: "Calm",
        description:
            "Create emotional safety through simplicity, generous spacing, and gentle pacing.",
        intent:
            "Help visitors feel relaxed and confident before making decisions.",

        usage: [
            "Homepage",
            "Brand Story",
            "Checkout",
            "Empty State"
        ],

        avoid: [
            "Aggressive animation",
            "Visual clutter",
            "Urgent messaging",
            "Flashy colors"
        ],

        relatedMood: [
            mood.SOFT_MORNING,
            mood.EDITORIAL_CALM
        ],

        notes:
            "Calm is the foundation emotion of VYRA."

    },

    [emotion.WARM]: {
        id: emotion.WARM,
        title: "Warm",
        description:
            "Express kindness, hospitality, and genuine human connection.",
        intent:
            "Make visitors feel welcomed and personally valued.",

        usage: [
            "Welcome Banner",
            "About VYRA",
            "Customer Stories"
        ],

        avoid: [
            "Corporate tone",
            "Cold copywriting",
            "Mechanical interaction"
        ],

        relatedMood: [
            mood.WARM_ATELIER,
            mood.COZY_WEEKEND
        ],

        notes:
            "Warm should always feel sincere, never exaggerated."
    },

    [emotion.TRUST]: {
        id: emotion.TRUST,
        title: "Trust",
        description:
            "Build confidence through clarity, consistency, and transparency.",
        intent:
            "Reduce uncertainty before visitors take action.",

        usage: [
            "Checkout",
            "Payment",
            "Shipping Information",
            "Return Policy"
        ],

        avoid: [
            "Hidden information",
            "Confusing layout",
            "Misleading promotion"
        ],

        relatedMood: [
            mood.QUIET_LUXURY
        ],

        notes:
            "Trust grows from consistency, not persuasion."

    },

    [emotion.BELONGING]: {
        id: emotion.BELONGING,
        title: "Belonging",
        description:
            "Help visitors feel that VYRA understands their lifestyle.",
        intent:
            "Strengthen emotional connection with the brand.",

        usage: [
            "Community",
            "Brand Story",
            "Lifestyle Content"
        ],

        avoid: [
            "Exclusive language",
            "Judgmental messaging"
        ],

        relatedMood: [
            mood.COZY_WEEKEND
        ],

        notes:
            "Belonging is earned through empathy."
    },

    [emotion.CONFIDENCE]: {
        id: emotion.CONFIDENCE,
        title: "Confidence",
        description:
            "Encourage visitors to move forward without hesitation.",
        intent:
            "Support decision-making with clarity.",

        usage: [
            "Product Detail",
            "Size Guide",
            "Add to Cart"
        ],

        avoid: [
            "Information overload",
            "Complicated choices"
        ],

        relatedMood: [
            mood.QUIET_LUXURY
        ],

        notes:
            "Confidence comes from reducing doubt."
    },

    [emotion.DISCOVERY]: {
        id: emotion.DISCOVERY,
        title: "Discovery",
        description:
            "Invite visitors to explore naturally without pressure.",
        intent:
            "Encourage curiosity while maintaining calm.",

        usage: [
            "Collections",
            "Lookbook",
            "Recommendations"
        ],

        avoid: [
            "Infinite distractions",
            "Forced navigation"
        ],

        relatedMood: [
            mood.SOFT_MORNING
        ],

        notes:
            "Discovery should feel effortless."
    },

    [emotion.CURIOSITY]: {
        id: emotion.CURIOSITY,
        title: "Curiosity",
        description:
            "Spark interest through thoughtful storytelling and visual hints.",
        intent:
            "Encourage visitors to continue exploring.",

        usage: [
            "Editorial Content",
            "Featured Collections"
        ],

        avoid: [
            "Clickbait",
            "False urgency"
        ],

        relatedMood: [
            mood.EDITORIAL_CALM
        ],

        notes:
            "Curiosity should inspire, never manipulate."
    },

    [emotion.JOY]: {
        id: emotion.JOY,
        title: "Joy",
description:
            "Celebrate meaningful moments with subtle delight.",
        intent:
            "Create positive emotional memories.",

        usage: [
            "Order Success",
            "Gift Collections",
            "Seasonal Campaign"
        ],

        avoid: [
            "Overly playful visuals",
            "Noisy celebrations"
        ],

        relatedMood: [
            mood.GOLDEN_HOUR
        ],

        notes:
            "Joy in VYRA is elegant, not loud."
    },

    [emotion.DELIGHT]: {

        id: emotion.DELIGHT,

        title: "Delight",

        description:
            "Reward attention through refined details and thoughtful interactions.",

        intent:
            "Leave a memorable impression beyond expectations.",

        usage: [
            "Micro Interactions",
            "Packaging",
            "Thank You Page"
        ],

        avoid: [
            "Gimmicks",
            "Over-animation"
        ],

        relatedMood: [
            mood.GOLDEN_HOUR
        ],

        notes:
            "Delight is discovered, not announced."

    },

    [emotion.COMFORT]: {
        id: emotion.COMFORT,
        title: "Comfort",
        description:
            "Create an environment that feels familiar, soft, and reassuring.",
        intent:
            "Reduce cognitive load and emotional tension.",
        usage: [
            "Browsing",
            "Reading",
            "Customer Support"
        ],

        avoid: [
            "Visual pressure",
            "Complex interaction"
        ],

        relatedMood: [
            mood.COZY_WEEKEND
        ],

        notes:
            "Comfort encourages visitors to stay longer."

    },

    [emotion.FOCUS]: {
        id: emotion.FOCUS,
        title: "Focus",
        description:
            "Guide attention toward what matters most.",
        intent:
            "Remove distractions during important decisions.",
        usage: [
            "Checkout",
            "Product Detail",
            "Forms"
        ],

        avoid: [
            "Competing CTA",
            "Excessive decoration"
        ],

        relatedMood: [
            mood.MINIMAL_FOCUS
        ],

        notes:
            "Focus is achieved by removing, not adding."

    },

    [emotion.INSPIRATION]: {

        id: emotion.INSPIRATION,

        title: "Inspiration",

        description:
            "Encourage visitors to imagine meaningful moments with VYRA.",

        intent:
            "Transform products into stories and possibilities.",

        usage: [
            "Lookbook",
            "Campaign",
            "Editorial"
        ],

        avoid: [
            "Generic stock presentation",
            "Product-only communication"
        ],

        relatedMood: [
            mood.GOLDEN_HOUR,
            mood.EDITORIAL_CALM
        ],

        notes:
            "Inspiration begins with storytelling."

    }

});

export default glossary;