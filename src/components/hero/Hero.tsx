import PageContainer from "../layout/PageContainer";
import HeroContent from "./HeroContent";
import HeroBooksAnimation from "./HeroBooksAnimation";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[650px] w-full">

      <div className="absolute inset-0 bg-slate-900" />

      <div className="relative z-10 flex h-full w-full items-center">
        <PageContainer
          fullWidth
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 ml-14"
        >
          <HeroContent />
          <HeroBooksAnimation />
        </PageContainer>
      </div>
    </section>
  );
};

export default Hero;
