import Button from "../../ui/Button";

export default function HeroContent() {
  return (
    <div className="space-y-6">

      <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
        New Collection
      </p>

      <h1 className="text-5xl font-light leading-tight md:text-6xl">
        Fashion
        <br />
        for Every
        <br />
        Meaningful Moment.
      </h1>

      <p className="max-w-lg text-lg leading-8 text-stone-600">
        Designed to accompany the quiet moments,
        the joyful moments,
        and every story in between.
      </p>

      <Button
        variant="secondary"
        size="lg"
      >
        Explore Collection
      </Button>

    </div>
  );
}