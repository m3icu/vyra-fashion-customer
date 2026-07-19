import Section from "../../common/Section";
import Container from "../../common/Container";
import Heading from "../../common/Heading";

import CollectionCard from "./CollectionCard";

import { collections } from "../../../content";

export default function FeaturedCollections() {
  return (
    <Section>

      <Container>

        <div className="mb-14 max-w-2xl">

          <Heading
            eyebrow="Featured Collections"
            size="display"
            title={
              <>
                Create
                <br />
                and Build
                <br />
                Your Story Now.
              </>
            }
            description={
              <>
                Explore thoughtfully curated collections
                inspired by the moments that shape everyday life.
              </>
            }
          >
          </Heading>

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
/**
 * Visitor Journey
 * Discover → Consider
 */