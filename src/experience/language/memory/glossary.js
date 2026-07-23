import memory from "./memory";

const glossary = Object.freeze({

    [memory.INVITING]: {
        id: memory.INVITING,
        title: "Inviting",
        description:
            "Leave visitors feeling welcomed and comfortable.",
        intent:
            "Encourage exploration.",
        notes:
            "The first impression should feel like an invitation."
    },

    [memory.TIMELESS]: {
        id: memory.TIMELESS,
        title: "Timeless",
        description:
            "Create impressions that remain elegant beyond trends.",
        intent:
            "Build long-term brand identity.",
        notes:
            "Timelessness outlives novelty."
    },

    [memory.PREMIUM]: {
        id: memory.PREMIUM,
        title: "Premium",
        description:
            "Deliver a refined experience through quality and restraint.",
        intent:
            "Communicate craftsmanship.",
        notes:
            "Premium is expressed through care, not excess."
    },

    [memory.PERSONAL]: {
        id: memory.PERSONAL,
        title: "Personal",
        description:
            "Make visitors feel personally understood.",
        intent:
            "Strengthen emotional connection.",
        notes:
            "Personal is thoughtful, not intrusive."
    },

    [memory.TRUSTWORTHY]: {
        id: memory.TRUSTWORTHY,
        title: "Trustworthy",
        description:
            "Leave confidence through consistency and honesty.",
        intent:
            "Encourage visitors to return.",
        notes:
            "Trust is earned every interaction."
    },

    [memory.MEMORABLE]: {
        id: memory.MEMORABLE,
        title: "Memorable",
        description:
            "Create meaningful moments that visitors remember.",
        intent:
            "Build lasting emotional recall.",
        notes:
            "People remember how an experience made them feel."
    }

});

export default glossary;