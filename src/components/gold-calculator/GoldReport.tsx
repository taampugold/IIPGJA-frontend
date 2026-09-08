import { useRef } from "react";
import {
  FaGem,
  FaBalanceScale,
  FaPalette,
  FaPercentage,
  FaAward,
  FaRedo,
} from "react-icons/fa";

import PrintableReport from "./PrintableReport";
import PrintButton from "./PrintButton";
import DownloadPdfButton from "./DownloadPdfButton";
import PageContainer from "../layout/PageContainer";

interface GoldReportProps {
  materialType: string;
  companyName: string;
  customerName: string;
  materialPhoto: string;
  loanNo: string;
  goldSkinPercentage: string;
  airWeight: number;
  waterWeight: number;
  density: number;
  currentDensity: number;
  surface: string;
  correction: number;
  touch: number;
  carat: number;
  goldPurityWeight24: number;
  goldPurityWeight22: number;
  onReset?: () => void;
}
const GoldReport = ({
  materialType,
  companyName,
  customerName,
  materialPhoto,
  loanNo,
  goldSkinPercentage,
  airWeight,
  waterWeight,
  density,
  currentDensity,
  surface,
  correction,
  touch,
  carat,
  goldPurityWeight24,
  goldPurityWeight22,
  onReset,
}: GoldReportProps) => {
  const reportRef = useRef<HTMLDivElement>(null);

 const cards = [
  {
    title: "Material Type",
    value: materialType,
    icon: <FaGem />,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Density",
    value: density.toFixed(6),
    icon: <FaGem />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Current Density",
    value: currentDensity.toFixed(2),
    icon: <FaBalanceScale />,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Surface Colour",
    value:
      surface.charAt(0).toUpperCase() +
      surface.slice(1),
    icon: <FaPalette />,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Correction Value",
    value: correction.toFixed(2),
    icon: <FaPercentage />,
    color: "bg-green-100 text-green-700",
  },
];

  return (
    <>
      <section className="bg-[#faf9f6] -mt-10 py-20">
         <PageContainer>
        <div className="rounded-3xl bg-[#023712] w-full p-10 shadow-2xl">

          <div className="mt-14 bg-gradient-to-r p-10 text-center text-white shadow-2xl">

            <FaAward
              size={72}
              className="mx-auto text-[#f3c96b]"
            />

            <h2 className="mt-6 text-4xl font-bold">
               Gold Testing Result
            </h2>

            <p className="mt-2 text-gray-300">
              Final estimation based on Density Method &
              Touch Stone Surface Colour Correction.
            </p>

            <div className="mt-8 flex items-stretch justify-between gap-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-left">
              <div className="grid min-h-40 min-w-0 flex-1 grid-cols-[auto_1fr] content-between items-center gap-x-4 text-lg text-gray-300 sm:text-xl">
                <span>Company</span>
                <span className="font-semibold text-white">{companyName}</span>
                <span>Customer</span>
                <span className="font-semibold text-white">{customerName}</span>
                <span>Loan No.</span>
                <span className="font-semibold text-white">{loanNo}</span>
                <span>Gold Skin Percentage</span>
                <span className="font-semibold text-white">
                  {Number(goldSkinPercentage || 0).toFixed(2)} Touch
                </span>
                <span>Material Type</span>
                <span className="font-semibold text-white">{materialType}</span>
              </div>
              {materialPhoto && (
                <img
                  src={materialPhoto}
                  alt="Tested material"
                  className="h-40 w-40 shrink-0 self-stretch rounded-xl object-cover"
                />
              )}
            </div>

            <div className="mt-10">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-left backdrop-blur">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-8 gap-y-5">
                  <p className="text-xl font-semibold text-gray-200 sm:text-2xl">
                    Gold Purity Percentage (approx)
                  </p>
                  <h3 className="grid grid-cols-2 gap-x-8 whitespace-nowrap text-3xl font-bold text-[#f3c96b] sm:text-4xl">
                    <span>{touch.toFixed(2)} Touch</span>
                    <span>{carat.toFixed(2)} Carat</span>
                  </h3>
                  <p className="text-xl font-semibold text-gray-200 sm:text-2xl">
                    Gold Purity Weight
                  </p>
                  <h3 className="grid grid-cols-2 gap-x-8 whitespace-nowrap text-2xl font-bold text-[#f3c96b] sm:text-3xl">
                    <span>{goldPurityWeight24.toFixed(4)} g (24 Carat)</span>
                    <span>{goldPurityWeight22.toFixed(4)} g (22 Carat)</span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-12">
              <h3 className="mb-6 text-center text-2xl font-bold text-[#f3c96b] sm:text-3xl">
                Gold Purity Testing Digital Photographic Certificate
              </h3>
              <div className="flex flex-wrap justify-center gap-5">

              {/* Print */}

              <PrintButton
                contentRef={reportRef}
              />

              {/* Download PDF */}

              <DownloadPdfButton
                contentRef={reportRef}
              />

              {/* Reset */}

              {onReset && (
                <button
                  onClick={onReset}
                  className="flex items-center gap-3 rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#081c24]"
                >
                  <FaRedo />

                  New Calculation
                </button>
              )}

            </div>
            </div>

          </div>
</div>
        </PageContainer>
      </section>

      {/* Hidden Printable Certificate */}

      {/* Off-screen Printable Certificate */}

<div
  style={{
    position: "fixed",
    top: 0,
    left: "-9999px",
    width: "210mm",
    background: "#fff",
    zIndex: -1,
  }}
>
  <PrintableReport
  ref={reportRef}
  companyName={companyName}
  customerName={customerName}
  materialPhoto={materialPhoto}
  materialType={materialType}
  loanNo={loanNo}
  goldSkinPercentage={goldSkinPercentage}
  airWeight={airWeight}
  waterWeight={waterWeight}
  density={density}
  surface={surface}
  correction={correction}
  touch={touch}
  carat={carat}
  goldPurityWeight24={goldPurityWeight24}
  goldPurityWeight22={goldPurityWeight22}
/>
</div>

    </>
);
}

export default GoldReport;