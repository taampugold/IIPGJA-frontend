import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaExchangeAlt,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaStore,
} from "react-icons/fa";
import StarRating from "../components/books/StarRating";
import BookImageViewer from "../components/books/BookImageViewer";
import { books, type BookFormat, type BookLanguage } from "../data/books";
import { useCart } from "../context/CartContext";
import PageLayout from "../components/layout/PageLayout";
import PageContainer from "../components/layout/PageContainer";

const services = [
  { label: "Free Delivery", icon: FaShippingFast },
  { label: "Easy Replacement", icon: FaExchangeAlt },
  { label: "IIPGJA Store", icon: FaStore },
  { label: "Pay on Delivery", icon: FaMoneyBillWave },
  { label: "Secure Checkout", icon: FaLock },
];

const BookDetail = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const book = useMemo(
    () => books.find((b) => String(b.id) === bookId),
    [bookId]
  );

  const [selected, setSelected] = useState<BookFormat | null>(null);
  const [language, setLanguage] = useState<BookLanguage | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSelected(null);
    setLanguage(null);
    setQuantity(1);
    setAdded(false);
  }, [bookId]);

  const format =
    selected ??
    book?.formats.find((f) => f.type === "Printed Book") ??
    book?.formats[0] ??
    null;

  const selectedLanguage =
    language ??
    (book?.languages.includes("Tamil") ? "Tamil" : book?.languages[0]) ??
    null;

  if (!book || !format || !selectedLanguage) {
    return (
      <PageLayout>
        <section className="bg-[#faf9f6] py-24 text-center">
          <PageContainer>
            <h1 className="text-2xl font-bold text-slate-800">Book not found</h1>
            <Link
              to="/books"
              className="mt-4 inline-block font-semibold text-[#b8903d] hover:underline"
            >
              Back to Books
            </Link>
          </PageContainer>
        </section>
      </PageLayout>
    );
  }

  const inStock = book.stock === "In stock";

  const handleAddToCart = () => {
    if (!inStock) return;
    addToCart({
      bookId: book.id,
      title: book.title,
      author: book.author,
      image: book.image,
      format: format.type,
      language: selectedLanguage,
      price: format.price,
      quantity,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (!inStock) return;
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <PageLayout>
      <section className="w-full bg-[#1c1c1c] py-10 text-white">
        <PageContainer fullWidth>
          <p className="text-sm text-gray-400">
            <Link to="/books" className="text-[#d4af37] hover:underline">
              Books
            </Link>
            <span className="mx-2">/</span>
            <span>{book.category}</span>
            <span className="mx-2">/</span>
            <span className="text-gray-200">{book.title}</span>
          </p>
        </PageContainer>
      </section>

      <section className="bg-[#faf9f6] py-12 sm:py-16">
        <PageContainer className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)_300px]">
          {/* Cover */}
          <div className="h-fit w-fit max-w-full justify-self-center lg:sticky lg:top-28 lg:justify-self-start">
            <BookImageViewer
              src={book.image}
              alt={book.title}
              className="block cursor-zoom-in overflow-hidden rounded-2xl shadow-lg"
              imgClassName="block h-auto max-h-[520px] w-full max-w-[280px]"
            />
          </div>

          {/* Details */}
          <div className="min-w-0 rounded-3xl bg-white p-6 shadow-lg sm:p-8">
            <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
              {book.category}
            </span>

            <h1 className="mt-4 text-2xl font-bold leading-snug text-slate-800 sm:text-3xl">
              {book.title}
            </h1>

            <p className="mt-3 text-sm text-gray-600">
              by{" "}
              <span className="font-semibold text-slate-800">{book.author}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="font-semibold text-[#b8903d]">{format.type}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="font-semibold text-slate-700">
                {selectedLanguage}
              </span>
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <StarRating rating={book.rating} size="md" />
                <span className="text-sm font-semibold text-slate-700">
                  {book.rating}
                </span>
                <span className="text-sm text-gray-500">
                  ({book.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Language
              </h2>
              <div className="mt-3 flex flex-wrap gap-3">
                {book.languages.map((lang) => {
                  const active = selectedLanguage === lang;
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setLanguage(lang)}
                      className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                        active
                          ? "border-[#b8903d] bg-[#fff8e8] text-[#b8903d] shadow-sm"
                          : "border-slate-200 text-slate-700 hover:border-[#b8903d]/50"
                      }`}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </div>

            <div id="formats" className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Available as
              </h2>
              <div className="mt-3 flex flex-wrap gap-3">
                {book.formats.map((f) => {
                  const active = format.type === f.type;
                  return (
                    <button
                      key={f.type}
                      type="button"
                      onClick={() => setSelected(f)}
                      className={`min-w-[130px] rounded-xl border px-4 py-3 text-left transition ${
                        active
                          ? "border-[#b8903d] bg-[#fff8e8] shadow-sm"
                          : "border-slate-200 hover:border-[#b8903d]/50"
                      }`}
                    >
                      <span
                        className={`block text-sm font-semibold ${
                          active ? "text-[#b8903d]" : "text-slate-700"
                        }`}
                      >
                        {f.type}
                      </span>
                      <span className="mt-0.5 block text-lg font-bold text-slate-800">
                        ₹{f.price.toLocaleString("en-IN")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-yellow-100 bg-[#fff8e8] p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b8903d] text-xs text-white">
                  %
                </span>
                Special offers for IIPGJA learners
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>
                  <span className="font-semibold text-slate-800">
                    Student offer:{" "}
                  </span>
                  Extra savings on Printed Book & e-Book editions.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Bundle tip:{" "}
                  </span>
                  Pair this book with IIPGJA courses for better learning.
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 border-b border-slate-100 pb-6">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="flex w-[4.5rem] flex-col items-center text-center"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 text-[#b8903d]">
                      <Icon size={16} />
                    </span>
                    <span className="mt-2 text-[11px] font-medium leading-tight text-slate-600">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-bold text-slate-800">
                About this book
              </h2>
              <div className="mt-3 space-y-3">
                {book.about.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-sm leading-relaxed text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Purchase card */}
          <aside className="h-fit rounded-3xl bg-white p-6 shadow-lg lg:sticky lg:top-28">
            <div className="rounded-2xl border border-[#b8903d]/40 bg-[#fff8e8] px-4 py-3">
              <span className="block text-sm font-semibold text-slate-700">
                {format.type} · {selectedLanguage}
              </span>
              <span className="block text-xl font-bold text-[#b8903d]">
                ₹{format.price.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-800">
                ₹{format.price.toLocaleString("en-IN")}
              </span>
            </div>

            <p className="mt-2 text-xs text-gray-500">Inclusive of all taxes</p>

            {format.type === "Printed Book" ? (
              <p className="mt-4 text-sm text-gray-600">
                <span className="font-semibold text-slate-800">
                  Free delivery
                </span>{" "}
                within 3–5 business days
              </p>
            ) : (
              <p className="mt-4 text-sm text-gray-600">
                <span className="font-semibold text-slate-800">
                  Instant download
                </span>{" "}
                after purchase
              </p>
            )}

            <p
              className={`mt-3 text-base font-semibold ${
                inStock ? "text-emerald-700" : "text-red-600"
              }`}
            >
              {book.stock}
            </p>

            <label className="mt-4 flex items-center gap-2 text-sm text-slate-700">
              Quantity
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                disabled={!inStock}
                className="rounded-xl border border-slate-200 bg-[#faf7ef] px-3 py-2 text-sm outline-none focus:border-[#b8903d] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!inStock}
              className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition ${
                inStock
                  ? "bg-[#b8903d] text-white hover:bg-[#9d7830]"
                  : "cursor-not-allowed bg-slate-200 text-slate-500"
              }`}
            >
              {inStock
                ? added
                  ? "Added to cart ✓"
                  : "Add to cart"
                : "Out of stock"}
            </button>

            <button
              type="button"
              onClick={handleBuyNow}
              disabled={!inStock}
              className={`mt-3 w-full rounded-xl border-2 py-3 text-sm font-semibold transition ${
                inStock
                  ? "border-[#b8903d] text-[#b8903d] hover:bg-[#b8903d] hover:text-white"
                  : "cursor-not-allowed border-slate-200 text-slate-400"
              }`}
            >
              Buy Now
            </button>

            <div className="mt-5 space-y-1 border-t border-slate-100 pt-4 text-xs text-gray-500">
              <p>
                Ships from{" "}
                <span className="font-medium text-slate-700">IIPGJA Store</span>
              </p>
              <p>
                Sold by{" "}
                <span className="font-medium text-slate-700">
                  IIPGJA Publications
                </span>
              </p>
            </div>
          </aside>
        </PageContainer>
      </section>
    </PageLayout>
  );
};

export default BookDetail;
