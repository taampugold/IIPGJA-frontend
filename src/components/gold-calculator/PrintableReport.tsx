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
  airWeight: number;
  waterWeight: number;
  density: number;
  surface: string;
  correction: number;
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
      airWeight,
      waterWeight,
      density,
      surface,
      correction,
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

            <div className="mt-2 flex items-stretch justify-between gap-4 rounded-lg border border-[#c8a34d] bg-[#fffdf7] p-2.5">
              <div className="min-w-0 flex-1 space-y-1.5 self-center text-sm">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-gray-500">
                    Company Name
                  </p>
                  <p className="font-semibold text-[#081c24]">{companyName}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-gray-500">
                    Customer Name
                  </p>
                  <p className="font-semibold text-[#081c24]">{customerName}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-gray-500">
                    Loan No.
                  </p>
                  <p className="font-semibold text-[#081c24]">{loanNo}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-gray-500">
                    Gold Skin Percentage
                  </p>
                  <p className="font-semibold text-[#081c24]">
                    {Number(goldSkinPercentage || 0).toFixed(2)} Touch
                  </p>
                </div>
              </div>
              {materialPhoto && (
                <div className="h-28 w-24 shrink-0 overflow-hidden rounded-md border border-[#c8a34d]">
                  <img
                    src={materialPhoto}
                    alt="Tested material"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>

            <ReportTable
              materialType={materialType}
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
            <ReportRemarks surface={surface} correction={correction} />
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
