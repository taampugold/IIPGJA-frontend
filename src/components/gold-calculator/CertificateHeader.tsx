interface CertificateHeaderProps {
  reportNumber?: string;
}

const CertificateHeader = ({ reportNumber }: CertificateHeaderProps) => {
  const now = new Date();

  const reportId =
    reportNumber ??
    `IIPGJA-${now.getFullYear()}${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}${String(now.getDate()).padStart(2, "0")}-${Math.floor(
      Math.random() * 9000 + 1000
    )}`;

  return (
    <div className="relative mb-3 rounded-xl border-[4px] border-[#c8a34d] bg-white">
      <div className="relative p-3">
        <div className="flex items-stretch justify-between gap-3">
          {/* Title */}
          <div className="flex min-w-0 flex-1 items-stretch overflow-hidden rounded-lg bg-[#6a511e] text-white">
            <img
              src="/images/IIPGJA-logo.png"
              alt="IIPGJA"
              className="mx-4 mt-0.5 h-[6.5rem] w-[6.5rem] shrink-0 self-center object-contain"
            />
            <div className="flex min-w-0 flex-1 flex-col justify-center py-2.5 pr-4 text-left">
              <h2 className="text-base font-bold leading-snug tracking-wide sm:text-xl">
                TAMPU&apos;S GOLD PURITY TESTING
                <span className="mt-0.5 block">
                  DIGITAL PHOTOGRAPHIC <br/> CERTIFICATE
                </span>
              </h2>
              <p className="mt-1.5 text-[11px] font-medium tracking-[0.18em] text-white sm:text-sm">
                Density &amp; Touch Stone Surface Method
              </p>
            </div>
          </div>

          {/* Certificate meta on right */}
          <div className="w-[180px] shrink-0 space-y-2 rounded-lg border border-[#c8a34d] bg-[#fff8e8] px-3 py-2 text-right">
            <div>
              <p className="text-[10px] text-gray-500">Certificate No.</p>
              <h3 className="text-xs font-bold text-[#b8903d]">{reportId}</h3>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-[#c8a34d]/40 pt-2">
              <div>
                <p className="text-[10px] text-gray-500">Date</p>
                <h3 className="text-xs font-semibold text-[#081c24]">
                  {now.toLocaleDateString()}
                </h3>
              </div>
              <div>
                <p className="text-[10px] text-gray-500">Time</p>
                <h3 className="text-xs font-semibold text-[#081c24]">
                  {now.toLocaleTimeString()}
                </h3>
              </div>
            </div>

            <div className="border-t border-[#c8a34d]/40 pt-2">
              <p className="text-[10px] text-gray-500">Status</p>
              <h3 className="text-xs font-semibold text-green-600">VERIFIED</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateHeader;
