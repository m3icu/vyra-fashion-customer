import Section from "../../layout/Section";
import Container from "../../layout/Container";

import CollectionCard from "./CollectionCard";
import collections from "./collections";

export default function FeaturedCollections() {
  return (
    <Section>

      <Container>

        <div className="mb-14 max-w-2xl">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-stone-500">
            Featured Collections
          </p>

          <h2 className="mb-6 text-4xl font-light leading-tight md:text-5xl">
            Collections
            <br />
            for Every
            <br />
            Meaningful Moment.
          </h2>

          <p className="text-lg leading-8 text-stone-600">
            Explore thoughtfully curated collections
            inspired by the moments that shape everyday life.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}