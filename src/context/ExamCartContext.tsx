import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface ExamCartItem {
  courseId: number;
  title: string;
  category: string;
  image: string;
  price: number;
  mrp: number;
}

interface ExamCartContextValue {
  items: ExamCartItem[];
  itemCount: number;
  subtotal: number;
  mrpTotal: number;
  addExam: (item: ExamCartItem) => void;
  removeExam: (courseId: number) => void;
  clearCart: () => void;
  hasExam: (courseId: number) => boolean;
}

const STORAGE_KEY = "iipgja-exam-cart";

const ExamCartContext = createContext<ExamCartContextValue | null>(null);

function loadCart(): ExamCartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const ExamCartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<ExamCartItem[]>(() => loadCart());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addExam = useCallback((item: ExamCartItem) => {
    setItems((prev) => {
      if (prev.some((i) => i.courseId === item.courseId)) return prev;
      return [...prev, item];
    });
  }, []);

  const removeExam = useCallback((courseId: number) => {
    setItems((prev) => prev.filter((i) => i.courseId !== courseId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const hasExam = useCallback(
    (courseId: number) => items.some((i) => i.courseId === courseId),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price, 0),
    [items]
  );

  const mrpTotal = useMemo(
    () => items.reduce((sum, i) => sum + i.mrp, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      itemCount: items.length,
      subtotal,
      mrpTotal,
      addExam,
      removeExam,
      clearCart,
      hasExam,
    }),
    [items, subtotal, mrpTotal, addExam, removeExam, clearCart, hasExam]
  );

  return (
    <ExamCartContext.Provider value={value}>{children}</ExamCartContext.Provider>
  );
};

export function useExamCart() {
  const ctx = useContext(ExamCartContext);
  if (!ctx) {
    throw new Error("useExamCart must be used within ExamCartProvider");
  }
  return ctx;
}
