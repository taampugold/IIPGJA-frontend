import { useMemo, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import CalculatorHero from "../components/gold-calculator/CalculatorHero";
import GoldTestingBenefits from "../components/gold-calculator/GoldTestingBenefits";
import CalculatorForm from "../components/gold-calculator/CalculatorForm";
import GoldReport from "../components/gold-calculator/GoldReport";
import GoldTestingSteps from "../components/gold-calculator/GoldTestingSteps";
import {
  calculateCurrentDensity,
  calculateTouch,
  calculateCarat,
  calculateGoldPurityWeight,
  getSurfaceCorrection,
} from "../utils/goldCalculator";

const GoldCalculator = () => {
  const [density, setDensity] = useState<number | null>(null);
  const [airWeight, setAirWeight] = useState(0);
  const [waterWeight, setWaterWeight] = useState(0);
  const [materialType, setMaterialType] = useState("Gold Jewellery");
  const [companyName, setCompanyName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [materialPhoto, setMaterialPhoto] = useState("");
  const [loanNo, setLoanNo] = useState("");
  const [goldSkinPercentage, setGoldSkinPercentage] = useState("");
  const [sealOrMark, setSealOrMark] = useState("");
  const [referenceIdentityMark, setReferenceIdentityMark] = useState("");
  const [showReport, setShowReport] = useState(false);
  const [surface, setSurface] = useState("");

  const handleDensityCalculated = (result: {
    airWeight: number;
    waterWeight: number;
    density: number;
  }) => {
    setAirWeight(result.airWeight);
    setWaterWeight(result.waterWeight);
    setDensity(result.density);
    setShowReport(true);
  };

  const currentDensity = useMemo(() => {
    if (density === null) return 0;
    return calculateCurrentDensity(density);
  }, [density]);

  const correction = useMemo(() => {
    if (density === null) return 0;
    return getSurfaceCorrection(currentDensity);
  }, [currentDensity, density]);

  const touch = useMemo(() => {
    if (density === null) return 0;
    return calculateTouch(currentDensity, correction, surface);
  }, [currentDensity, correction, surface, density]);

  const carat = useMemo(() => {
    if (density === null) return 0;
    return calculateCarat(touch);
  }, [touch, density]);

  const goldPurityWeight24 = useMemo(() => {
    if (density === null) return 0;
    return calculateGoldPurityWeight(airWeight, carat, 24);
  }, [airWeight, carat, density]);

  const goldPurityWeight22 = useMemo(() => {
    if (density === null) return 0;
    return calculateGoldPurityWeight(airWeight, carat, 22);
  }, [airWeight, carat, density]);

  const resetCalculator = () => {
    setDensity(null);
    setAirWeight(0);
    setWaterWeight(0);
    setSurface("");
    setShowReport(false);
    setCompanyName("");
    setCustomerName("");
    setMaterialPhoto("");
    setLoanNo("");
    setGoldSkinPercentage("");
    setSealOrMark("");
    setReferenceIdentityMark("");
  };

  return (
    <PageLayout>
      <main className="min-h-screen">
        <CalculatorHero />
        <GoldTestingBenefits />
        <GoldTestingSteps />
        <CalculatorForm
          materialType={materialType}
          onMaterialTypeChange={setMaterialType}
          companyName={companyName}
          onCompanyNameChange={setCompanyName}
          customerName={customerName}
          onCustomerNameChange={setCustomerName}
          materialPhoto={materialPhoto}
          onMaterialPhotoChange={setMaterialPhoto}
          loanNo={loanNo}
          onLoanNoChange={setLoanNo}
          goldSkinPercentage={goldSkinPercentage}
          onGoldSkinPercentageChange={setGoldSkinPercentage}
          sealOrMark={sealOrMark}
          onSealOrMarkChange={setSealOrMark}
          referenceIdentityMark={referenceIdentityMark}
          onReferenceIdentityMarkChange={setReferenceIdentityMark}
          surface={surface}
          onSurfaceChange={setSurface}
          onCalculate={handleDensityCalculated}
        />
        {showReport && density !== null && (
            <GoldReport
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
              currentDensity={currentDensity}
              surface={surface}
              correction={correction}
              touch={touch}
              carat={carat}
              goldPurityWeight24={goldPurityWeight24}
              goldPurityWeight22={goldPurityWeight22}
              onReset={resetCalculator}
            />
        )}
      </main>
    </PageLayout>
  );
};

export default GoldCalculator;
