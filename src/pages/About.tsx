import PageLayout from "../components/layout/PageLayout";
import AboutHero from "../components/about/AboutHero";
import AboutIntroduction from "../components/about/AboutIntroduction";
import AboutPresentDay from "../components/about/AboutPresentDay";
import AboutSkillsIndia from "../components/about/AboutSkillsIndia";
import AboutSyllabus from "../components/about/AboutSyllabus";
import AboutCertificateBenefits from "../components/about/AboutCertificateBenefits";
import AboutJobOpportunities from "../components/about/AboutJobOpportunities";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  return (
    <PageLayout>
      <main>
        <AboutHero />
        <AboutIntroduction />
        <AboutPresentDay />
        <AboutSkillsIndia />
        <AboutSyllabus />
        <AboutCertificateBenefits />
        <AboutJobOpportunities />
        <AboutCTA />
      </main>
    </PageLayout>
  );
};

export default About;
