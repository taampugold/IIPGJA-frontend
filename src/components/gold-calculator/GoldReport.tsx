import { useRef } from "react";
import { FaRedo } from "react-icons/fa";

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
  sealOrMark: string;
  referenceIdentityMark: string;
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
  sealOrMark,
  referenceIdentityMark,
  airWeight,
  waterWeight,
  density,
  surface,
  touch,
  carat,
  goldPurityWeight24,
  goldPurityWeight22,
  onReset,
}: GoldReportProps) => {
  const reportRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section id="gold-testing-results" className="bg-[#faf9f6] -mt-10 py-20">
        <PageContainer>
          <div className="mb-6 rounded-2xl bg-[#081c24] px-6 py-4 text-center shadow-md">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Gold Purity Testing Digital Photographic Certificate
            </h3>
          </div>
          <div className="w-full rounded-3xl bg-[#023712] p-10 shadow-2xl">

            <div className="overflow-x-auto">
              <div className="flex min-w-[210mm] justify-center">
                <PrintableReport
                  ref={reportRef}
                  companyName={companyName}
                  customerName={customerName}
                  materialPhoto={materialPhoto}
                  materialType={materialType}
                  loanNo={loanNo}
                  goldSkinPercentage={goldSkinPercentage}
                  sealOrMark={sealOrMark}
                  referenceIdentityMark={referenceIdentityMark}
                  airWeight={airWeight}
                  waterWeight={waterWeight}
                  density={density}
                  surface={surface}
                  touch={touch}
                  carat={carat}
                  goldPurityWeight24={goldPurityWeight24}
                  goldPurityWeight22={goldPurityWeight22}
                />
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <PrintButton contentRef={reportRef} />
              <DownloadPdfButton contentRef={reportRef} />
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
        </PageContainer>
      </section>
    </>
  );
};

export default GoldReport;
