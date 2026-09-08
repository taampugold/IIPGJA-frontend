interface ReportTableProps {
  materialType: string;
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
  airWeight,
  waterWeight,
  density,
  touch,
  carat,
  goldPurityWeight24,
  goldPurityWeight22,
}: ReportTableProps) => {
  const rows = [
    {
      label: "Air Weight",
      value: `${airWeight.toFixed(4)} g`,
    },
    {
      label: "Water Weight",
      value: `${waterWeight.toFixed(4)} g`,
    },
    {
      label: "Density",
      value: density.toFixed(6),
    },
  ];

  return (
    <div className="mt-2">
      <table className="w-full overflow-hidden rounded-lg border border-gray-300 text-sm">
        <thead>
          <tr className="bg-[#b8903d] text-white">
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
          {rows.map((row, index) => (
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
          <tr className="border-b border-gray-200 bg-[#faf7ef]">
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
          <tr className="border-b border-gray-200 bg-white">
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
