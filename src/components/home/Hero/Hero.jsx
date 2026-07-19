/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Component : Hero
 *
 * Chapter 01
 * The Invitation
 *
 * Visitor Journey
 * Wonder → Curiosity
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import Section from "../../common/Section";
import Container from "../../common/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import { getExperience } from "../../../content/experience";

const experience = getExperience("hero");

export default function Hero() {
  return (
    <Section>
      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <HeroContent experience={experience} />

          <HeroImage experience={experience} />

        </div>

      </Container>
    </Section>
  );
}
/**
 * Visitor Journey
 * Curiosity → Emotion
 */