interface ReportRemarksProps {
  surface: string;
}

const ReportRemarks = ({ surface }: ReportRemarksProps) => {
  const isBrown = surface.toLowerCase() === "brown";
  const observedColour =
    surface.charAt(0).toUpperCase() + surface.slice(1).toLowerCase();

  return (
    <div className="mt-1.5 rounded-lg border border-[#d8c38d] bg-[#fffdf7] p-2">
      <h3 className="mb-0.5 text-xs font-bold text-[#b8903d]">Remarks</h3>

      <div className="space-y-0.5 text-[10px] leading-3 text-gray-700">
        <p>
          • The density of the sample has been calculated using the Hydrostatic
          Density Method.
        </p>

        <p>
          • Current Density is derived using the approved institute calculation
          formula.
        </p>

        <p>
          • The correction value has been applied based on the surface colour characteristics.
        </p>

        <p>
          • Surface colour observed:
          <span className="ml-1 font-semibold text-[#081c24]">
            {observedColour}
          </span>
          . For
          <span className="font-semibold"> {observedColour} Gold </span>
          the adjusted density has been calculated using
          <span className="font-semibold text-[#081c24]">
            {isBrown
              ? " Current Density + Correction"
              : " Current Density − Correction"}
          </span>
          .
        </p>

        <p>
          • Final Touch and Carat values are approximate values intended for
          jewellery appraisal purposes.
        </p>

        <p>
          • The value of Gold Metal, Gold Jewellery and Particles Jewellery may vary by correction value.
        </p>
      </div>

      <div className="mt-1.5 rounded-md border-l-4 border-[#b8903d] bg-yellow-50 px-2.5 py-1.5">
        <p className="text-[10px] leading-3 text-gray-600">
          <strong>Disclaimer:</strong> This report is generated based on the
          Density Method and Touch Stone Surface Colour Method.
          <br /> Final purity may vary depending on manufacturing process, alloy composition and
          gemstone settings.
        </p>
        <p className="mt-1 text-[10px] leading-3 text-gray-600">
          Testing / Acknowledgement record not by itself proof of legal
          ownership.
        </p>
      </div>
    </div>
  );
};

export default ReportRemarks;
