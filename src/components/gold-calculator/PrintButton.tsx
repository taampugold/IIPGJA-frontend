import { FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

interface PrintButtonProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const PrintButton = ({ contentRef }: PrintButtonProps) => {
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: `Gold_Test_Report_${new Date()
      .toISOString()
      .slice(0, 10)}`,
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }

      @media print {
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .certificate-page {
          width: 210mm !important;
          height: 297mm !important;
          overflow: hidden !important;
          page-break-after: avoid !important;
          page-break-inside: avoid !important;
        }
      }
    `,
  });

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="btn-gold-flash flex items-center gap-3 rounded-xl bg-[#b8903d] px-8 py-4 font-semibold text-white transition hover:bg-[#9d7830]"
    >
      <FaPrint />
      Print Report
    </button>
  );
};

export default PrintButton;
