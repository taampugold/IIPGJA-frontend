import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FaDownload } from "react-icons/fa";

interface DownloadPdfButtonProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const DownloadPdfButton = ({ contentRef }: DownloadPdfButtonProps) => {
  const handleDownload = async () => {
    if (!contentRef.current) return;

    const canvas = await html2canvas(contentRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Fit entire certificate on a single A4 page
    let imageWidth = pageWidth;
    let imageHeight = (canvas.height * imageWidth) / canvas.width;

    if (imageHeight > pageHeight) {
      imageHeight = pageHeight;
      imageWidth = (canvas.width * imageHeight) / canvas.height;
    }

    const x = (pageWidth - imageWidth) / 2;
    const y = (pageHeight - imageHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, imageWidth, imageHeight);

    const date = new Date().toISOString().slice(0, 10);

    pdf.save(`IIPGJA_Gold_Test_Certificate_${date}.pdf`);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="btn-green-flash flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700 sm:w-auto sm:px-8 sm:py-4"
    >
      <FaDownload />
      Download PDF
    </button>
  );
};

export default DownloadPdfButton;
