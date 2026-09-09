interface ReportTableProps {
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
  touch: number;
  carat: number;
  goldPurityWeight24: number;
  goldPurityWeight22: number;
}

const ReportTable = ({
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
  touch,
  carat,
  goldPurityWeight24,
  goldPurityWeight22,
}: ReportTableProps) => {
  const detailRows = [
    { label: "Company Name", value: companyName },
    { label: "Customer Name", value: customerName },
    { label: "Loan No.", value: loanNo },
    {
      label: "Gold Skin Percentage",
      value: `${Number(goldSkinPercentage || 0).toFixed(2)} Touch`,
    },
    { label: "Seal or Mark", value: sealOrMark || "—" },
    { label: "Reference ID Mark", value: referenceIdentityMark || "—" },
  ];

  const testRows = [
    { label: "Air Weight", value: `${airWeight.toFixed(4)} g` },
    { label: "Water Weight", value: `${waterWeight.toFixed(4)} g` },
    { label: "Density", value: density.toFixed(6) },
  ];

  const photoRowSpan = 6;

  return (
    <div className="mt-2 space-y-2">
      <table className="w-full overflow-hidden rounded-lg border border-gray-300 text-sm">
        <thead>
          <tr className="bg-[#6a511e] text-white">
            <th className="w-[40%] px-4 py-2.5 text-left font-semibold">
              Particulars
            </th>
            <th className="px-4 py-2.5 text-left font-semibold">Details</th>
            {materialPhoto && (
              <th className="w-44 border-l border-white/40 px-2 py-1" />
            )}
          </tr>
        </thead>
        <tbody>
          {detailRows.map((row, index) => (
            <tr
              key={row.label}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-[#faf7ef]"
              } border-b border-gray-200`}
            >
              <td className="px-4 py-2 font-semibold text-gray-700">
                {row.label}
              </td>
              <td className="px-4 py-2 text-left font-bold text-[#081c24]">
                {row.value}
              </td>
              {materialPhoto && index === 0 && (
                <td
                  rowSpan={photoRowSpan}
                  className="w-44 border-l border-gray-200 bg-white p-2 align-middle"
                >
                  <div className="mx-auto h-52 w-40 overflow-hidden rounded-md border border-[#c8a34d]">
                    <img
                      src={materialPhoto}
                      alt="Tested material"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
              )}
              {materialPhoto && index >= photoRowSpan && (
                <td className="w-44 border-l border-gray-200 bg-white" />
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <table className="w-full overflow-hidden rounded-lg border border-gray-300 text-sm">
        <thead>
          <tr className="bg-[#6a511e] text-white">
            <th colSpan={2} className="px-4 py-2.5">
              <div className="grid grid-cols-3 items-center font-semibold">
                <span className="text-left">Test Parameter</span>
                <span className="text-center">{materialType}</span>
                <span className="text-right">Result</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {testRows.map((row, index) => (
            <tr
              key={row.label}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-[#faf7ef]"
              } border-b border-gray-200`}
            >
              <td className="px-4 py-2 font-semibold text-gray-700">
                {row.label}
              </td>
              <td className="px-4 py-2 text-right font-bold text-[#081c24]">
                {row.value}
              </td>
            </tr>
          ))}
          <tr className="border-b border-gray-200 bg-white">
            <td className="px-4 py-2 font-semibold text-gray-700">
              Gold Purity Percentage (approx)
            </td>
            <td className="px-4 py-2 font-bold text-[#081c24]">
              <div className="ml-auto grid w-[22rem] max-w-full grid-cols-2 gap-x-8 text-left tabular-nums">
                <span>{touch.toFixed(2)} Touch</span>
                <span>{carat.toFixed(2)} Carat</span>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200 bg-[#faf7ef]">
            <td className="px-4 py-2 font-semibold text-gray-700">
              Gold Purity Weight
            </td>
            <td className="px-4 py-2 font-bold text-[#081c24]">
              <div className="ml-auto grid w-[22rem] max-w-full grid-cols-2 gap-x-8 text-left tabular-nums">
                <span>{goldPurityWeight24.toFixed(4)} g (24 Carat)</span>
                <span>{goldPurityWeight22.toFixed(4)} g (22 Carat)</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
