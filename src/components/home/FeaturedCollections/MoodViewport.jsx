/**
 * --------------------------------------------------------
 * VYRA Fashion
 * MoodViewport
 * --------------------------------------------------------
 *
 * The emotional canvas
 * before photography.
 *
 * Mood lives here.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import theme from "../../../theme";

export default function MoodViewport({ preset }) {
  return (
    <div
      className="
        relative
        aspect-[4/5]
        overflow-hidden
      "
    >
      <div
        className="
          relative
          h-full
          w-full
          transition-transform
          ease-out
          group-hover:scale-[1.02]
        "
        style={{
          transitionDuration: `${preset.motion.duration}ms`,
          background: `linear-gradient(
            135deg,
            ${preset.gradient[0]},
            ${preset.gradient[1]},
            ${preset.gradient[2]}
          )`,
        }}
      >
      
        {/* Soft Accent */}
        <div
          className="
            absolute
            -right-10
            -top-10
            h-40
            w-40
            rounded-full
          "
          style={{
            background: preset.accent,
            opacity: 0.08,
          }}
        />

        <div
          className="
            absolute
            inset-0
            pointer-events-none
          "
          style={{
            background: `
              radial-gradient(
                circle at ${preset.glow.x} ${preset.glow.y},
                ${preset.glow.color},
                transparent 65%
              )`,
            opacity: preset.glow.opacity,
            filter: `blur(${preset.glow.blur}px)`,
           }}
         />

         <div
           className="
             absolute
             inset-0
             pointer-events-none
           "
           style={{
             background: preset.overlay,
           }}
         />

         <div
           className="
             absolute
             inset-0
             pointer-events-none
           "
           style={{
             opacity: 0.04,
             backgroundImage: `
               linear-gradient(
                 rgba(255,255,255,.5) 1px,
                 transparent 1px
               )
             `,
             backgroundSize: "4px 4px",
           }}
         />

         <div
           className="
             absolute
             left-5
             bottom-5
           "
         >

             <span
               style={{
                 color:"#fff",
                 fontSize:"12px",
                 letterSpacing:"0.12em",
                 textTransform:"uppercase",
                 opacity:.8
               }}
             >

               {preset.label}

             </span>

        </div>


        {/* Future Photography */}

        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: 1,
            background: theme.colors.border,
          }}
        />
      </div>
    </div>
  );
}