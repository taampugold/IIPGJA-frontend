import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { HiTrash } from "react-icons/hi";
import {
  calculateDensity,
  validateInputs,
} from "../../utils/goldCalculator";
import PageContainer from "../layout/PageContainer";
export interface DensityCalculation {
  airWeight: number;
  waterWeight: number;
  density: number;
}

interface CalculatorFormProps {
  materialType: string;
  onMaterialTypeChange: (value: string) => void;
  companyName: string;
  onCompanyNameChange: (value: string) => void;
  customerName: string;
  onCustomerNameChange: (value: string) => void;
  materialPhoto: string;
  onMaterialPhotoChange: (value: string) => void;
  loanNo: string;
  onLoanNoChange: (value: string) => void;
  goldSkinPercentage: string;
  onGoldSkinPercentageChange: (value: string) => void;
  sealOrMark: string;
  onSealOrMarkChange: (value: string) => void;
  referenceIdentityMark: string;
  onReferenceIdentityMarkChange: (value: string) => void;
  surface: string;
  onSurfaceChange: (value: string) => void;
  onCalculate: (result: DensityCalculation) => void;
}

const fieldInputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-5 py-3 text-lg outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30";

const CalculatorForm = ({
  materialType,
  onMaterialTypeChange,
  companyName,
  onCompanyNameChange,
  customerName,
  onCustomerNameChange,
  materialPhoto,
  onMaterialPhotoChange,
  loanNo,
  onLoanNoChange,
  goldSkinPercentage,
  onGoldSkinPercentageChange,
  sealOrMark,
  onSealOrMarkChange,
  referenceIdentityMark,
  onReferenceIdentityMarkChange,
  surface,
  onSurfaceChange,
  onCalculate,
}: CalculatorFormProps) => {

  const [airWeight, setAirWeight] = useState("");
  const [waterWeight, setWaterWeight] = useState("");
  const [error, setError] = useState("");
  const [calculation, setCalculation] = useState<DensityCalculation | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (airWeight === "" || waterWeight === "") {
      setError("");
      setCalculation(null);
      return;
    }

    const air = Number(airWeight);
    const water = Number(waterWeight);

    const validation = validateInputs(air, water);

    if (validation) {
      setError(validation);
      setCalculation(null);
      return;
    }

    const density = calculateDensity(air, water);

    setError("");

    // Store the result only.
    // Do NOT call onCalculate() here.
    setCalculation({
      airWeight: air,
      waterWeight: water,
      density,
    });
  }, [airWeight, waterWeight]);
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid material photo");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      onMaterialPhotoChange(String(reader.result));
      setError("");
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoDelete = () => {
    onMaterialPhotoChange("");
    if (photoInputRef.current) photoInputRef.current.value = "";
  };
  return (
    <section id="gold-testing-calculator" className="scroll-mt-32 bg-[#faf9f6] -mt-12 py-20">
      <PageContainer className="h-full -mt-10">
        <div className="rounded-3xl bg-[#023712] shadow-2xl overflow-hidden">
         <div className="grid lg:grid-cols-[28%_72%]">

            {/* ================= LEFT SIDE IMAGE ================= */}
            <div className="flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-[#0b4d20] to-[#023712] p-6 lg:p-8">
              <img
                src="/images/gold_testing/Balance.png"
                alt="Gold Testing Balance"
                className="w-full max-w-[240px] object-contain drop-shadow-2xl"
              />
              <div className="w-full max-w-[240px] text-left text-sm leading-6 text-gray-100">
                <p className="font-bold text-[#ffd700]">Note :</p>
                <ol className="mt-2 list-decimal space-y-2 pl-4">
                  <li>
                    Turn the scale to &apos;0&apos; before weighing air.
                    Similarly, turn it to &apos;Tare&apos; before weighing
                    water.
                  </li>
                  <li>Electronic scale box should be an enclosure.</li>
                  <li>Use purified water.</li>
                </ol>
              </div>
              <img
                src="/images/gold_testing/stone.png"
                alt="Touch Stone Gold Testing"
                className="w-full max-w-[240px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* ================= RIGHT SIDE CALCULATOR ================= */}
            <div className="p-8 lg:p-12">
              <div className="mb-8 flex justify-end">
                <div className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-right backdrop-blur-sm">
                  <p className="text-2xl font-bold text-[#ffd700]">
                    {currentTime.toLocaleTimeString()}
                  </p>

                  <p className="text-sm text-gray-200">
                    {currentTime.toLocaleDateString("en-IN", {
                      weekday: "long",
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="mb-10">
                <h2 className="text-6xl font-bold text-white">
                  Gold Purity Testing
                </h2>

                <p className="mt-4 text-lg text-gray-200">
                  Enter the jewellery weight in Air and Water to calculate
                  the gold purity using the specific gravity method.
                </p>
              </div>

            <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-center">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-6">
                {/* Company Name */}
                <label className="whitespace-nowrap text-2xl font-semibold text-white">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => onCompanyNameChange(e.target.value)}
                  placeholder="Enter company name"
                  className={fieldInputClass}
                />

                {/* Customer Name */}
                <label className="whitespace-nowrap text-2xl font-semibold text-white">
                  Customer Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => onCustomerNameChange(e.target.value)}
                  placeholder="Enter customer name"
                  className={fieldInputClass}
                />

                {/* Loan No. */}
                <label className="whitespace-nowrap text-2xl font-semibold text-white">
                  Loan No.
                </label>
                <input
                  type="text"
                  value={loanNo}
                  onChange={(e) => onLoanNoChange(e.target.value)}
                  placeholder="Enter loan number"
                  className={fieldInputClass}
                />

                {/* Gold Skin Percentage */}
                <label className="whitespace-nowrap text-2xl font-semibold text-white">
                  Gold Skin Percentage
                </label>
                <div className="flex min-w-0 items-center gap-3">
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={goldSkinPercentage}
                    onChange={(e) => onGoldSkinPercentageChange(e.target.value)}
                    placeholder="0.00"
                    className={`${fieldInputClass} [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                  />
                  <span className="shrink-0 text-xl font-semibold text-white">
                    Touch
                  </span>
                </div>

                <label className="max-w-[14rem] text-xl font-semibold leading-tight text-white">
                  Seal or Mark
                </label>
                <input
                  type="text"
                  value={sealOrMark}
                  onChange={(e) => onSealOrMarkChange(e.target.value)}
                  placeholder="Enter seal or mark"
                  className={fieldInputClass}
                />

                <label className="max-w-[14rem] text-xl font-semibold leading-tight text-white">
                  Reference ID Mark
                </label>
                <input
                  type="text"
                  value={referenceIdentityMark}
                  onChange={(e) => onReferenceIdentityMarkChange(e.target.value)}
                  placeholder="Enter reference ID mark"
                  className={fieldInputClass}
                />
              </div>

              {/* Material Photo */}
              <div className="relative h-72">
                {materialPhoto && (
                  <button
                    type="button"
                    onClick={handlePhotoDelete}
                    aria-label="Delete material photo"
                    className="absolute right-2 top-2 z-10 text-white/90 transition hover:text-white"
                  >
                    <HiTrash size={18} />
                  </button>
                )}
                <label className="flex h-full cursor-pointer overflow-hidden rounded-xl border border-white/20 bg-white/10">
                  {materialPhoto ? (
                    <img
                      src={materialPhoto}
                      alt="Material"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center px-2 text-center text-sm font-semibold text-gray-200">
                      Upload <br /> Gold metal or jewellery
                    </span>
                  )}
                  <input
                    ref={photoInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            {/* Material Type */}
<div className="mb-8 flex flex-nowrap items-center gap-4">
  <label className="shrink-0 whitespace-nowrap text-2xl font-semibold text-white">
    Material Type
  </label>

  <div className="flex flex-nowrap gap-3">
    {/* Metal */}
    <label className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 transition hover:border-[#d4af37] lg:gap-3 lg:px-5">
      <input
        type="radio"
        name="materialType"
        value="Gold Metal"
        checked={materialType === "Gold Metal"}
        onChange={(e) => onMaterialTypeChange(e.target.value)}
        className="h-5 w-5 accent-red-600"
      />

      <span className="whitespace-nowrap font-semibold text-gray-800">
        Gold Metal
      </span>
    </label>

    {/* Jewellery */}
    <label className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 transition hover:border-[#d4af37] lg:gap-3 lg:px-5">
      <input
        type="radio"
        name="materialType"
        value="Gold Jewellery"
        checked={materialType === "Gold Jewellery"}
       onChange={(e) => onMaterialTypeChange(e.target.value)}
        className="h-5 w-5 accent-red-600"
      />

      <span className="whitespace-nowrap font-semibold text-gray-800">
        Gold Jewellery
      </span>
    </label>

    {/* Particles Jewel */}
    <label className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 transition hover:border-[#d4af37] lg:gap-3 lg:px-5">
      <input
        type="radio"
        name="materialType"
        value="Particles Jewellery"
        checked={materialType === "Particles Jewellery"}
        onChange={(e) => onMaterialTypeChange(e.target.value)}
        className="h-5 w-5 accent-red-600"
      />

      <span className="whitespace-nowrap font-semibold text-gray-800">
        Particles Jewellery
      </span>
    </label>
  </div>
</div>

              {/* Weight in Air */}
              <div className="mb-6 flex items-center gap-4">
                <label className="w-80 shrink-0 text-2xl font-semibold text-white">
                  Weight in Air (grams)
                </label>

                <input
                  type="number"
                  step="0.0001"
                  placeholder="3.5630"
                  value={airWeight}
                  onChange={(e) => setAirWeight(e.target.value)}
                  className="w-40 rounded-xl border border-gray-300 bg-white px-5 py-3 text-lg outline-none transition
               focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30 ml-2
               [appearance:textfield]
               [&::-webkit-inner-spin-button]:appearance-none
               [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>

              {/* Weight in Water */}
              <div className="mb-6 flex items-center gap-4">
                <label className="w-80 shrink-0 text-2xl font-semibold text-white">
                  Weight in Water (grams)
                </label>
                <span className="w-[5px]">
                  <input
                    type="number"
                    placeholder="3.3460"
                    value={waterWeight}
                    onChange={(e) => setWaterWeight(e.target.value)}
                    className="w-40 rounded-xl border border-gray-300 bg-white px-5 py-3 text-lg outline-none transition
               focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30 ml-2
               [appearance:textfield]
               [&::-webkit-inner-spin-button]:appearance-none
               [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </span>
              </div>

              <div className="mb-8 flex flex-nowrap items-center gap-4">
                <label className="shrink-0 whitespace-nowrap text-2xl font-semibold text-white">
                  Touch Stone <br/>Surface Colour
                </label>
                <div className="flex flex-nowrap gap-3">
                  {[
                    { id: "white", title: "White Gold" },
                    { id: "yellow", title: "Yellow Gold" },
                    { id: "brown", title: "Brown Gold" },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 transition hover:border-[#d4af37] lg:gap-3 lg:px-5"
                    >
                      <input
                        type="radio"
                        name="surface"
                        value={item.id}
                        checked={surface === item.id}
                        onChange={() => onSurfaceChange(item.id)}
                        className="h-5 w-5 cursor-pointer accent-red-600"
                      />
                      <span className="whitespace-nowrap font-semibold text-gray-800">
                        {item.title}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-600">
                  {error}
                </div>
              )}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <span className="text-center text-xl font-bold text-[#f3c96b] sm:text-2xl">
                  Gold Purity Testing Digital Photographic Certificate
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (!companyName.trim()) {
                      setError("Please enter the company name.");
                      return;
                    }

                    if (!customerName.trim()) {
                      setError("Please enter the customer name.");
                      return;
                    }

                    if (!loanNo.trim()) {
                      setError("Please enter the loan number.");
                      return;
                    }

                    if (
                      goldSkinPercentage.trim() === "" ||
                      Number(goldSkinPercentage) < 0
                    ) {
                      setError("Please enter a valid gold skin percentage.");
                      return;
                    }

                    if (!materialPhoto) {
                      setError("Please upload a material photo.");
                      return;
                    }

                    if (!calculation) {
                      setError("Please enter valid weights.");
                      return;
                    }

                    if (!surface) {
                      setError("Please select the touch stone surface colour.");
                      return;
                    }

                    onCalculate(calculation);

                    setTimeout(() => {
                      const element = document.getElementById("gold-testing-results");

                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }, 100);
                  }}
                  className="btn-gold-flash relative inline-flex items-center overflow-hidden rounded-xl bg-[#b8903d] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#9c7b31]"
                >
                  <span className="relative z-10">click here</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default CalculatorForm;