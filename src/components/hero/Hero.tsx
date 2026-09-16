import PageContainer from "../layout/PageContainer";
import HeroContent from "./HeroContent";
import HeroBooksAnimation from "./HeroBooksAnimation";

const Hero = () => {
  return (
    <section className="relative min-h-[560px] w-full overflow-hidden sm:h-[90vh] sm:min-h-[650px]">

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
