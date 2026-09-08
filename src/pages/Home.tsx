import PageLayout from "../components/layout/PageLayout";
import Hero from "../components/hero/Hero";
import CourseSection from "../components/courses/CourseSection";
import WhyChoose from "../components/choose/WhyChoose";
import HowItWorks from "../components/howItWorks/HowItWorks";
import Partners from "../components/partners/Partners";
import CTA from "../components/cta/CTA";

const Home = () => {
  return (
    <PageLayout>
      <Hero />
      <CourseSection />
      <WhyChoose />
      {/* <HowItWorks /> */}
      {/* <Partners /> */}
      <CTA />
    </PageLayout>
  );
};

export default Home;
