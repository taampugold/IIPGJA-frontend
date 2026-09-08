/**
 * Calculate Density
 *
 * Formula:
 * Density = (Weight in Air - Weight in Water) / Weight in Air
 */
export const calculateDensity = (
  airWeight: number,
  waterWeight: number
): number => {
  return (airWeight - waterWeight) / airWeight;
};

/**
 * Calculate Current Density
 *
 * Formula:
 * (Density - 0.0518) × 1610
 */
export const calculateCurrentDensity = (
  density: number
): number => {
  return (density - 0.0518) * 1610;
};

/**
 * Surface-colour correction from the value measured before colour selection
 * (current density).
 *
 *  1–20  → 0.5
 * 21–30  → 1.0
 * 31–40  → 1.5
 * 41–50  → 2.0
 * 51–60  → 2.5
 * 61–70  → 3.0
 * 71–99  → 4.0
 *
 * White / Yellow: subtract from current density.
 * Brown: add to current density.
 */
export const getSurfaceCorrection = (value: number): number => {
  if (value <= 20) return 0.5;
  if (value <= 30) return 1.0;
  if (value <= 40) return 1.5;
  if (value <= 50) return 2.0;
  if (value <= 60) return 2.5;
  if (value <= 70) return 3.0;
  return 4.0;
};
export const calculateTouch = (
  currentDensity: number,
  correction: number,
  surface: string
): number => {
  const adjustedDensity =
    surface.toLowerCase() === "brown"
      ? currentDensity + correction
      : currentDensity - correction;

  return 100 - adjustedDensity;
};
/**
 * Calculate Carat
 *
 * Formula:
 * Touch × 24 / 100
 */
export const calculateCarat = (
  touch: number
): number => {
  return (touch * 24) / 100;
};

/**
 * Calculate Gold Purity Weight
 *
 * Formula:
 * 24 Carat: (Air Weight × Carat) / 24
 * 22 Carat: (Air Weight × Carat) / 22
 */
export const calculateGoldPurityWeight = (
  airWeight: number,
  carat: number,
  standardCarat: 22 | 24
): number => {
  return (airWeight * carat) / standardCarat;
};

/**
 * Validate Inputs
 */
export const validateInputs = (
  airWeight: number,
  waterWeight: number
): string => {
  if (isNaN(airWeight) || isNaN(waterWeight)) {
    return "Please enter valid numbers.";
  }

  if (airWeight <= 0) {
    return "Weight in Air must be greater than zero.";
  }

  if (waterWeight <= 0) {
    return "Weight in Water must be greater than zero.";
  }

  if (waterWeight >= airWeight) {
    return "Weight in Water must be less than Weight in Air.";
  }

  return "";
};