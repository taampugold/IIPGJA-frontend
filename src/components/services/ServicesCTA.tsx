import { Link } from "react-router-dom";
import PageContainer from "../layout/PageContainer";

const ServicesCTA = () => {
  return (
    <section className="bg-white py-20">
      <PageContainer>
        <div className="rounded-3xl bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c] p-10 text-center text-white shadow-xl md:p-14">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need help choosing a service?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Whether you want NDM Loyal Jewellery, training support, sales,
            equipment, or gold testing — our team is ready to assist.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-[#b8903d] px-8 py-4 font-semibold text-white transition hover:bg-[#9d7830]"
            >
              Contact Us
            </Link>
            <Link
              to="/gold-calculator"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Gold Testing
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default ServicesCTA;
