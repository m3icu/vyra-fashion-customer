import interaction from "./interaction";

const glossary = Object.freeze({

    [interaction.SUBTLE]: {
        id: interaction.SUBTLE,
        title: "Subtle",
        description:
            "Interactions are quiet and almost invisible.",
        intent:
            "Support the content without demanding attention.",
        notes:
            "Motion should whisper."
    },

    [interaction.GUIDED]: {
        id: interaction.GUIDED,
        title: "Guided",
        description:
            "Lead visitors naturally through the experience.",
        intent:
            "Reduce uncertainty.",
        notes:
            "Guide without controlling."
    },

    [interaction.RESPONSIVE]: {
        id: interaction.RESPONSIVE,
        title: "Responsive",
        description:
            "Every interaction provides immediate and meaningful feedback.",
        intent:
            "Increase confidence.",
        notes:
            "Feedback builds trust."
    },

    [interaction.FOCUSED]: {
        id: interaction.FOCUSED,
        title: "Focused",
        description:
            "Interactions support one clear objective.",
        intent:
            "Prevent distraction.",
        notes:
            "One action at a time."
    },

    [interaction.GENTLE]: {
        id: interaction.GENTLE,
        title: "Gentle",
        description:
            "Interactions feel soft and emotionally safe.",
        intent:
            "Create comfort.",
        notes:
            "Gentle never feels slow."
    },

    [interaction.CONFIDENT]: {
        id: interaction.CONFIDENT,
        title: "Confident",
        description:
            "Interactions communicate certainty and stability.",
        intent:
            "Encourage decisive action.",
        notes:
            "Confidence comes from clarity."
    }

});

export default glossary;