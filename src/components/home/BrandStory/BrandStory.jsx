/**
 * --------------------------------------------------------
 * VYRA Fashion
 * BrandStory
 * --------------------------------------------------------
 *
 * Chapter 03
 * Connection
 *
 * Every brand has products.
 *
 * Few brands have meaning.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import Container from "../../common/Container";
import Section from "../../common/Section";

import BrandStoryContent from "./BrandStoryContent";
import BrandStorySignature from "./BrandStorySignature";

export default function BrandStory() {
  return (
    <Section>

      <Container>

        <BrandStoryContent />

        <BrandStorySignature />       

      </Container>

    </Section>
  );
}