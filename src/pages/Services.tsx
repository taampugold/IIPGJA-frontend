import PageLayout from "../components/layout/PageLayout";
import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = () => {
  return (
    <PageLayout>
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>
    </PageLayout>
  );
};

export default Services;
