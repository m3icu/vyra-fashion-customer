import energy from "./energy";

const glossary = Object.freeze({

    [energy.VERY_LOW]: {
        title: "Very Low",
        description:
            "Minimal stimulation. Encourage calm reflection."
    },

    [energy.LOW]: {
        title: "Low",
        description:
            "Relaxed pace with gentle interaction."
    },

    [energy.MEDIUM]: {
        title: "Medium",
        description:
            "Balanced energy for exploration."
    },

    [energy.HIGH]: {
        title: "High",
        description:
            "Strong attention and active engagement."
    }

});

export default glossary;