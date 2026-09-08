import { useState } from "react";
import { Link } from "react-router-dom";
import { Book, BookFormat, BookLanguage } from "../../data/books";
import { useCart } from "../../context/CartContext";
import StarRating from "./StarRating";
import BookImageViewer from "./BookImageViewer";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  const { addToCart } = useCart();
  const [selected, setSelected] = useState<BookFormat>(
    book.formats.find((f) => f.type === "Printed Book") ?? book.formats[0]
  );
  const [language, setLanguage] = useState<BookLanguage>(
    book.languages.includes("Tamil") ? "Tamil" : book.languages[0]
  );
  const [added, setAdded] = useState(false);

  const inStock = book.stock === "In stock";

  const handleAddToCart = () => {
    if (!inStock) return;
    addToCart({
      bookId: book.id,
      title: book.title,
      author: book.author,
      image: book.image,
      format: selected.type,
      language,
      price: selected.price,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <article className="flex flex-col gap-5 overflow-hidden rounded-2xl bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:flex-row sm:items-stretch sm:gap-6 sm:p-6">
      <BookImageViewer
        src={book.image}
        alt={book.title}
        className="mx-auto block w-56 shrink-0 cursor-zoom-in overflow-hidden rounded-xl sm:mx-0 sm:w-64 sm:self-stretch md:w-72 lg:w-80"
        imgClassName="block h-auto w-full sm:h-full sm:object-cover sm:object-top"
      />

      <div className="min-w-0 flex-1">
        <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
          {book.category}
        </span>

        <Link to={`/books/${book.id}`}>
          <h2 className="mt-3 text-xl font-bold text-slate-800 transition hover:text-[#b8903d]">
            {book.title}
          </h2>
        </Link>

        <p className="mt-1 text-sm text-gray-600">
          by <span className="font-semibold text-slate-700">{book.author}</span>
        </p>

        <div className="mt-2 flex items-center gap-2 text-sm">
          <StarRating rating={book.rating} />
          <span className="font-medium text-slate-600">
            {book.rating} ({book.reviewCount})
          </span>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Language
          </p>
          <div className="flex flex-wrap gap-2">
            {book.languages.map((lang) => {
              const active = language === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-xl border px-3 py-1.5 text-sm font-semibold transition ${
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

        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Available as
          </p>
          <div className="flex flex-wrap gap-2">
            {book.formats.map((format) => {
              const active = selected.type === format.type;
              return (
                <button
                  key={format.type}
                  type="button"
                  onClick={() => setSelected(format)}
                  className={`rounded-xl border px-3 py-2 text-left transition ${
                    active
                      ? "border-[#b8903d] bg-[#fff8e8] shadow-sm"
                      : "border-slate-200 bg-white hover:border-[#b8903d]/50"
                  }`}
                >
                  <span
                    className={`block text-sm font-semibold ${
                      active ? "text-[#b8903d]" : "text-slate-700"
                    }`}
                  >
                    {format.type}
                  </span>
                  <span className="block text-xs font-bold text-slate-800">
                    ₹{format.price.toLocaleString("en-IN")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-2xl font-bold text-[#b8903d]">
            ₹{selected.price.toLocaleString("en-IN")}
          </span>
        </div>

        <p
          className={`mt-3 text-sm font-semibold ${
            inStock ? "text-emerald-700" : "text-red-600"
          }`}
        >
          {book.stock}
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`mt-4 rounded-xl px-6 py-3 text-sm font-semibold transition sm:min-w-[11rem] ${
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
      </div>
    </article>
  );
};

export default BookCard;
