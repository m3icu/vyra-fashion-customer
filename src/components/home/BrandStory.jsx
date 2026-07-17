import Container from "../common/Container";
import Section from "../common/Section";

export default function BrandStory() {
  return (
    <Section>

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
            Our Story
          </p>

          <h2 className="mb-10 text-4xl font-light leading-tight md:text-5xl">
            Fashion
            <br />
            that accompanies
            <br />
            meaningful moments.
          </h2>

          <div className="space-y-8 text-lg leading-9 text-stone-600">

            <p>
              We believe clothing is more than fabric.
              It becomes part of the memories we carry,
              the places we visit,
              and the people we meet.
            </p>

            <p>
              Every VYRA piece is created to feel timeless,
              comfortable,
              and quietly elegant,
              allowing you to focus on living your story.
            </p>

            <p>
              Because the most beautiful outfit
              is the one that lets you be yourself.
            </p>

          </div>

        </div>

      </Container>

    </Section>
  );
}