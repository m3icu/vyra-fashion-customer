import Heading from "../../common/Heading";
import theme from "../../../theme";

export default function BrandStoryContent() {
  return (
    <div className="max-w-3xl mx-auto text-center">

      <Heading
        eyebrow="Our Story"
        size="display"
        title={
          <>
            Fashion
            <br />
            that accompanies
            <br />
            meaningful moments
          </>
        }
      />

      <div
        className="mx-auto max-w-2xl"
        style={{
          width: 72,
          height: 1,
          background: theme.colors.border,
          marginTop: theme.spacing["2xl"],
          marginBottom: theme.spacing["2xl"],
        }}
      />

      <div
        style={{
          display: "grid",
          gap: theme.spacing.xl,
        }}
      >

        <p
          style={{
            fontSize: theme.typography.fontSize.lg,
            fontWeight: theme.typography.fontWeight.medium,
            lineHeight: theme.typography.lineHeight.relaxed,
            color: theme.colors.text,
          }}
        >
          We believe clothing is more than fabric.
          It becomes part of the memories we carry,
          the places we visit,
          and the people we meet.
        </p>

        <p
          style={{
            fontSize: theme.typography.fontSize.base,
            color: theme.colors.textLight,
            lineHeight: theme.typography.lineHeight.relaxed,
            fontWeight: theme.typography.fontWeight.medium,
          }}
        >
          From slow mornings to meaningful gatherings,
          every collection begins with real moments,
          real people,
          and everyday stories.
        </p>

        <p
          style={{
            fontStyle: "italic",
            color: theme.colors.textLight,
            lineHeight: theme.typography.lineHeight.relaxed,
            fontWeight: theme.typography.fontWeight.medium,
          }}
        >
          Because style is not about becoming someone else.
          It is about feeling more like yourself.
        </p>
      </div>
    </div>
  )
}