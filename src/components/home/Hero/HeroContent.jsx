import Heading from "../../common/Heading";
import Button from "../../ui/Button";
import {
  getExperience
} from "../../../content/experience";


const scene =
getExperience("hero");

export default function HeroContent() {
  return (
    <div className="space-y-6">

      <Heading
        as="h1"
        size="hero"
        eyebrow="New Collection"
        title={
          <>
            Fashion
            <br />
            for Every
            <br />
            Meaningful Moment.
          </>
        }
        description={
          <>
            Designed to accompany the quiet moments,
            the joyful moments,
            and every story in between.
          </>
        }
      />

      <Button
        variant="secondary"
        size="lg"
      >
        Explore Collection
      </Button>

    </div>
  );
}