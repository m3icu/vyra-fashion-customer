import Hero from "../components/home/Hero/Hero";
import FeaturedCollections from "../components/home/FeaturedCollections/FeaturedCollections";
import BrandStory from "../components/home/BrandStory";
//import FeaturedProducts from "../components/home/FeaturedProducts";
//import JournalPreview from "../components/home/JournalPreview";
//import Newsletter from "../components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <BrandStory />
      {/* <FeaturedProducts /> */}
      {/* <JournalPreview /> */}
      {/* <Newsletter /> */}
    </>
  );
}