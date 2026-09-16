import PageContainer from "../layout/PageContainer";
import HeroContent from "./HeroContent";
import HeroBooksAnimation from "./HeroBooksAnimation";

const Hero = () => {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden pb-16 sm:min-h-[640px] sm:pb-24 lg:min-h-[90vh] lg:pb-0">

      <div className="absolute inset-0 bg-slate-900" />

      <div className="relative z-10 flex h-full w-full items-center">
        <PageContainer
          fullWidth
          className="grid items-center gap-8 py-10 lg:grid-cols-2 lg:gap-12 lg:py-0"
        >
          <HeroContent />
          <HeroBooksAnimation />
        </PageContainer>
      </div>
    </section>
  );
};

export default Hero;
