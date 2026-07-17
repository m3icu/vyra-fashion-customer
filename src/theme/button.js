/**
 * 
--------------------------------------------------------
 * Button
 *
 * Every button is a gentle invitation.
 *
 * Variants define personality.
 * Sizes define comfort.
 *
 * Components should consume these tokens
 * instead of declaring their own styles.
 * --------------------------------------------------------
 */
import colors from "./colors";
import typography from "./typography";
import spacing from "./spacing";
import radius from "./radius";
import shadow from "./shadow";
import effects from "./effects";
import transition from "./transition";
import opacity from "./opacity";

const button = Object.freeze({
  defaultVariant: "primary",
  defaultSize: "md",

  radius: radius.lg,
  borderWidth: 1,
  borderStyle: "solid",
  transition: `${transition.normal} ${transition.easing}`,
  fontWeight: typography.fontWeight.medium,
  focusRing: effects.focusRing,
  disabledOpacity: opacity.disabled,
  iconGap: spacing.sm,

  variants: {

    primary: {
      colors: {
        background: colors.primary,
        text: colors.white,
        border: "transparent",
      },

      hover: {
        colors: {
          background: colors.primaryDark,
          text: colors.white,
          border: "transparent",
        },        

        shadow: shadow.md,
      },

      active: {
        colors: {
          background: colors.primaryDark,
          text: colors.white,
          border:"transparent"
        },

        shadow: shadow.sm,
      },

      disabled: {
        colors: {
          background: colors.gray200,
          text: colors.gray500,
          border: "transparent",
        },
      },
    },

    secondary: {
      colors: {
        background: "transparent",
        text: colors.primary,
        border: colors.primary,
      },

      hover: {
        colors: {
          background: colors.primary,
          text: colors.white,
          border: colors.primary,       
        },

        shadow: shadow.sm,
      },

      active: {
        colors: {
          background: colors.primaryDark,
          text: colors.white,
          border: colors.primaryDark,
        },

        shadow: shadow.sm,
      },

      disabled: {
        colors: {
          background: "transparent",
          text: colors.gray400,
          border: colors.gray300,
        },
      },
    },

    ghost: {
      colors: {
        background: "transparent",
        text: colors.text,
        border: "transparent",
      },
     
      hover: {
        colors: {
          background: colors.gray100,
          text: colors.text,
          border: "transparent",
        },

        shadow: "none",
      },

      active: {
        colors: {
          background: colors.gray200,
          text: colors.text,
          border: "transparent",
        },

        shadow: "none",
      },

      disabled: {
        colors: {
          background: "transparent",
          text: colors.gray400,
          border: "transparent",
        },
      },
    },
  },

  sizes: {
    sm: {
      height: 36,
      paddingX: spacing.md,
      fontSize: typography.fontSize.sm,
    },

    md: {
      height: 44,
      paddingX: spacing.lg,
      fontSize: typography.fontSize.base,
    },

    lg: {
      height: 52,
      paddingX: spacing.xl,
      fontSize: typography.fontSize.lg,
    },
  },  
});

export default button;
