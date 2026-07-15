import Section from "../../layout/Section";
import Container from "../../layout/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <Section>
      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>
    </Section>
  );
}