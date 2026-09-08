import PageContainer from "../layout/PageContainer";

interface SurfaceSelectorProps {
  surface: string;
  onSurfaceChange: (surface: string) => void;
}

const SurfaceSelector = ({
  surface,
  onSurfaceChange,
}: SurfaceSelectorProps) => {
  const surfaceOptions = [
    {
      id: "white",
      title: "White Gold",
    },
    {
      id: "yellow",
      title: "Yellow Gold",
    },
    {
      id: "brown",
      title: "Brown Gold",
    },
  ];

  return (
    <section id="surface-selector" className="bg-[#faf9f6] py-20">
      <PageContainer>
        <div className="overflow-hidden rounded-3xl bg-[#023712] shadow-2xl">
          <div className="border-b border-white/10 px-10 py-8 text-center">
            <h2 className="text-4xl font-bold text-white">
              Touch Stone Surface Colour Value Testing
            </h2>

            <p className="mt-4 text-lg text-gray-200">
              Select the surface colour observed on the touch stone.
            </p>
          </div>

          <div className="grid lg:grid-cols-[25%_75%]">
            <div className="flex items-center justify-center bg-gradient-to-br from-[#0b4d20] to-[#023712] p-10">
              <img
                src="/images/gold_testing/stone.png"
                alt="Touch Stone Gold Testing"
                className="w-full max-w-[300px] object-contain drop-shadow-2xl"
              />
            </div>

            <div className="p-10">
              <div className="space-y-5">
                {surfaceOptions.map((item) => (
                  <label
                    key={item.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-5 transition ${
                      surface === item.id
                        ? "border-[#d4af37] bg-[#d4af37]/20"
                        : "border-white/20 bg-white/5 hover:border-[#d4af37]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="surface"
                      value={item.id}
                      checked={surface === item.id}
                      onChange={() => onSurfaceChange(item.id)}
                      className="h-5 w-5 cursor-pointer accent-red-500"
                    />

                    <span className="text-lg font-semibold text-white">
                      {item.title}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default SurfaceSelector;
