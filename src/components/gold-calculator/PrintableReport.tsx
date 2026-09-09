import React, { forwardRef } from "react";
import CertificateHeader from "./CertificateHeader";
import ReportTable from "./ReportTable";
import ReportRemarks from "./ReportRemarks";
import CertificateFooter from "./CertificateFooter";

interface PrintableReportProps {
  companyName: string;
  customerName: string;
  materialPhoto: string;
  materialType: string;
  loanNo: string;
  goldSkinPercentage: string;
  sealOrMark: string;
  referenceIdentityMark: string;
  airWeight: number;
  waterWeight: number;
  density: number;
  surface: string;
  touch: number;
  carat: number;
  goldPurityWeight24: number;
  goldPurityWeight22: number;
}

const PrintableReport = forwardRef<HTMLDivElement, PrintableReportProps>(
  (
    {
      companyName,
      customerName,
      materialPhoto,
      materialType,
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
    },
    ref
  ) => {
    // Small logos tiled across the full certificate page
    const watermarkTiles = Array.from({ length: 48 }, (_, i) => i);

    return (
      <div
        ref={ref}
        className="certificate-page relative mx-auto box-border flex h-[297mm] w-[210mm] flex-col overflow-hidden bg-white px-5 py-3 text-black"
      >
        {/* Small logo watermark pattern across entire page */}
        <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4 gap-x-6 gap-y-10 overflow-hidden p-4 opacity-[0.12]">
          {watermarkTiles.map((i) => (
            <div
              key={i}
              className="flex items-center justify-center"
            >
              <img
                src="/images/IIPGJA-logo.png"
                alt=""
                className="h-14 w-auto"
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 flex h-full min-h-0 flex-col">
          <div className="min-h-0 shrink">
            <CertificateHeader />

            <ReportTable
              materialType={materialType}
              companyName={companyName}
              customerName={customerName}
              materialPhoto={materialPhoto}
              loanNo={loanNo}
              goldSkinPercentage={goldSkinPercentage}
              sealOrMark={sealOrMark}
              referenceIdentityMark={referenceIdentityMark}
              airWeight={airWeight}
              waterWeight={waterWeight}
              density={density}
              touch={touch}
              carat={carat}
              goldPurityWeight24={goldPurityWeight24}
              goldPurityWeight22={goldPurityWeight22}
            />
          </div>

          <div className="min-h-0 shrink">
            <ReportRemarks surface={surface} />
          </div>

          <div className="mt-auto shrink-0 pb-0.5">
            <CertificateFooter />
          </div>
        </div>
      </div>
    );
  }
);

PrintableReport.displayName = "PrintableReport";

export default PrintableReport;
