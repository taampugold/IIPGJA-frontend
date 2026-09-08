import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { BookFormatType, BookLanguage } from "../data/books";

export interface CartItem {
  bookId: number;
  title: string;
  author: string;
  image: string;
  format: BookFormatType;
  language: BookLanguage;
  price: number;
  quantity: number;
}

interface AddToCartInput {
  bookId: number;
  title: string;
  author: string;
  image: string;
  format: BookFormatType;
  language: BookLanguage;
  price: number;
  quantity?: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addToCart: (item: AddToCartInput) => void;
  removeFromCart: (
    bookId: number,
    format: BookFormatType,
    language: BookLanguage
  ) => void;
  updateQuantity: (
    bookId: number,
    format: BookFormatType,
    language: BookLanguage,
    quantity: number
  ) => void;
  clearCart: () => void;
}

const STORAGE_KEY = "iipgja-cart";

const CartContext = createContext<CartContextValue | null>(null);

function sameItem(
  a: { bookId: number; format: BookFormatType; language: BookLanguage },
  bookId: number,
  format: BookFormatType,
  language: BookLanguage
) {
  return a.bookId === bookId && a.format === format && a.language === language;
}

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Drop legacy items that used Paperback/Hardcover and had no language
    return parsed.filter(
      (item) =>
        item &&
        (item.format === "Printed Book" || item.format === "e-Book") &&
        (item.language === "Tamil" || item.language === "English")
    );
  } catch {
    return [];
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => loadCart());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback((item: AddToCartInput) => {
    const qty = item.quantity ?? 1;
    setItems((prev) => {
      const index = prev.findIndex((i) =>
        sameItem(i, item.bookId, item.format, item.language)
      );
      if (index === -1) {
        return [...prev, { ...item, quantity: qty }];
      }
      const next = [...prev];
      next[index] = {
        ...next[index],
        quantity: next[index].quantity + qty,
        price: item.price,
      };
      return next;
    });
  }, []);

  const removeFromCart = useCallback(
    (bookId: number, format: BookFormatType, language: BookLanguage) => {
      setItems((prev) =>
        prev.filter((i) => !sameItem(i, bookId, format, language))
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (
      bookId: number,
      format: BookFormatType,
      language: BookLanguage,
      quantity: number
    ) => {
      if (quantity < 1) {
        setItems((prev) =>
          prev.filter((i) => !sameItem(i, bookId, format, language))
        );
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          sameItem(i, bookId, format, language) ? { ...i, quantity } : i
        )
      );
    },
    []
  );

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [
      items,
      itemCount,
      subtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
