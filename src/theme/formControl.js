/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Form Control
 *
 * Every field should feel clear and effortless.
 *
 * Form controls should guide the visitor quietly,
 * without creating unnecessary hesitation.
 *
 * Input.
 * Textarea.
 * Select.
 *
 * Different forms.
 * One visual language.
 *
 * Build with Heart.
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

const formControl = Object.freeze({

  /**
   * --------------------------------------------------------
   * Defaults
   * --------------------------------------------------------
   */

  defaultSize: "md",

  /**
   * --------------------------------------------------------
   * Shared Shape
   * --------------------------------------------------------
   */

  radius: radius.md,
  transition: `${transition.normal} ${transition.easing}`,
  fontFamily: typography.fontFamily,
  fontWeight: typography.fontWeight.regular,

  /**
   * --------------------------------------------------------
   * Base Colors
   * --------------------------------------------------------
   */

  colors: {
    background: colors.surface,
    text: colors.text,
    placeholder: colors.textMuted,
    border: colors.border,
  },

  /**
   * --------------------------------------------------------
   * Focus State
   * --------------------------------------------------------
   */

  focus: {
    border: colors.primary,
    ring: effects.focusRing,
  },

  /**
   * --------------------------------------------------------
   * Disabled State
   * --------------------------------------------------------
   */

  disabled: {
    background: colors.gray100,
    text: colors.textMuted,
    border: colors.gray300,
    opacity: opacity.disabled,
  },

  /**
   * --------------------------------------------------------
   * Error State
   * --------------------------------------------------------
   */

  error: {
    border: colors.danger,
    text: colors.danger,
    ring: effects.focusRing,
  },

  /**
   * --------------------------------------------------------
   * Success State
   * --------------------------------------------------------
   */

  success: {
    border: colors.success,
    text: colors.success,
    ring: effects.focusRing,
  },

  /**
   * --------------------------------------------------------
   * Sizes
   * --------------------------------------------------------
   */

  sizes: {
    sm: {
      height: "40px",
      paddingX: spacing.md,
      fontSize: typography.fontSize.sm,
    },
    md: {
      height: "48px",
      paddingX: spacing.lg,
      fontSize: typography.fontSize.base,
    },
    lg: {
      height: "56px",
      paddingX: spacing.xl,
      fontSize: typography.fontSize.lg,
    },
  },
});

export default formControl;