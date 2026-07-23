/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Language
 * Purpose Glossary
 * --------------------------------------------------------
 */

import purpose from "./purpose";

const glossary = Object.freeze({

    [purpose.WELCOME]: {

        id: purpose.WELCOME,

        title: "Welcome",

        description:
            "Introduce visitors to the VYRA experience.",

        intent:
            "Create a warm and trustworthy first impression.",

        usage: [
            "Homepage Hero",
            "Landing Page"
        ],

        avoid: [
            "Hard selling",
            "Information overload"
        ],

        notes:
            "Connection comes before conversion."

    },

    [purpose.DISCOVER]: {

        id: purpose.DISCOVER,

        title: "Discover",

        description:
            "Encourage visitors to explore naturally.",

        intent:
            "Promote curiosity without pressure.",

        usage: [
            "Collections",
            "Recommendations"
        ],

        avoid: [
            "Forced navigation"
        ],

        notes:
            "Discovery should feel effortless."

    },

    [purpose.CONNECT]: {

        id: purpose.CONNECT,

        title: "Connect",

        description:
            "Build an emotional relationship with the brand.",

        intent:
            "Strengthen trust and belonging.",

        usage: [
            "Brand Story",
            "Community"
        ],

        avoid: [
            "Corporate messaging"
        ],

        notes:
            "People connect with stories."

    },

    [purpose.EXPLORE]: {

        id: purpose.EXPLORE,

        title: "Explore",

        description:
            "Invite visitors to browse with confidence.",

        intent:
            "Support comfortable navigation.",

        usage: [
            "Product Grid",
            "Lookbook"
        ],

        avoid: [
            "Confusing hierarchy"
        ],

        notes:
            "Exploration should always feel guided."

    },

    [purpose.PURCHASE]: {

        id: purpose.PURCHASE,

        title: "Purchase",

        description:
            "Support confident purchasing decisions.",

        intent:
            "Reduce hesitation at checkout.",

        usage: [
            "Cart",
            "Checkout"
        ],

        avoid: [
            "Distractions",
            "Competing actions"
        ],

        notes:
            "Confidence increases conversion."

    },

    [purpose.RETURN]: {

        id: purpose.RETURN,

        title: "Return",

        description:
            "Encourage visitors to come back.",

        intent:
            "Build long-term loyalty.",

        usage: [
            "After Purchase",
            "Email Experience"
        ],

        avoid: [
            "One-time engagement"
        ],

        notes:
            "A memorable experience invites another visit."

    },

    [purpose.REASSURE]: {

        id: purpose.REASSURE,

        title: "Reassure",

        description:
            "Reduce uncertainty through clarity and transparency.",

        intent:
            "Increase trust before important decisions.",

        usage: [
            "Shipping",
            "Returns",
            "Payment"
        ],

        avoid: [
            "Hidden information"
        ],

        notes:
            "Trust grows from reassurance."

    },

    [purpose.LEARN]: {

        id: purpose.LEARN,

        title: "Learn",

        description:
            "Help visitors understand products and brand values.",

        intent:
            "Educate without overwhelming.",

        usage: [
            "Size Guide",
            "Care Guide",
            "Editorial"
        ],

        avoid: [
            "Technical jargon"
        ],

        notes:
            "Knowledge reduces hesitation."

    },

    [purpose.REMEMBER]: {

        id: purpose.REMEMBER,

        title: "Remember",

        description:
            "Create meaningful experiences worth recalling.",

        intent:
            "Leave a lasting emotional impression.",

        usage: [
            "Packaging",
            "Order Success",
            "Campaign"
        ],

        avoid: [
            "Generic interactions"
        ],

        notes:
            "People remember feelings, not interfaces."

    }

});

export default glossary;