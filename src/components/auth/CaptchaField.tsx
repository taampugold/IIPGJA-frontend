import { useCallback, useImperativeHandle, useState, forwardRef } from "react";
import { HiOutlineRefresh } from "react-icons/hi";

function createChallenge() {
  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 8) + 1;
  return {
    question: `${a} + ${b}`,
    answer: String(a + b),
  };
}

export interface CaptchaFieldHandle {
  validate: () => boolean;
  refresh: () => void;
}

interface CaptchaFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const CaptchaField = forwardRef<CaptchaFieldHandle, CaptchaFieldProps>(
  function CaptchaField({ value, onChange, error }, ref) {
    const [challenge, setChallenge] = useState(createChallenge);

    const refresh = useCallback(() => {
      setChallenge(createChallenge());
      onChange("");
    }, [onChange]);

    useImperativeHandle(
      ref,
      () => ({
        validate: () => value.trim() === challenge.answer,
        refresh,
      }),
      [value, challenge.answer, refresh]
    );

    return (
      <div>
        <label className="mb-2 block font-medium text-gray-700">
          Captcha <span className="text-red-500">*</span>
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <div
            aria-hidden
            className="flex h-12 min-w-[120px] select-none items-center justify-center rounded-xl bg-slate-800 px-4 font-mono text-xl font-bold tracking-[0.2em] text-[#f5d78e]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(184,144,61,0.12) 8px, rgba(184,144,61,0.12) 16px)",
            }}
          >
            {challenge.question} = ?
          </div>

          <button
            type="button"
            onClick={refresh}
            aria-label="Refresh captcha"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 text-slate-600 transition hover:border-[#b8903d] hover:text-[#b8903d]"
          >
            <HiOutlineRefresh size={22} />
          </button>

          <input
            type="text"
            inputMode="numeric"
            required
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Answer"
            className="h-12 min-w-[100px] flex-1 rounded-xl border px-4 outline-none focus:border-[#b8903d]"
            aria-invalid={Boolean(error)}
          />
        </div>

        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

export default CaptchaField;
