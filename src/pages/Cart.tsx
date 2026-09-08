import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import PageContainer from "../components/layout/PageContainer";
import { useCart } from "../context/CartContext";
import { books } from "../data/books";

const Cart = () => {
  const {
    items,
    itemCount,
    subtotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const getStock = (bookId: number) =>
    books.find((b) => b.id === bookId)?.stock ?? "Out of stock";

  return (
    <PageLayout>
      <section className="w-full bg-[#1c1c1c] py-14 text-white">
        <PageContainer fullWidth className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Shopping Cart</h1>
          <p className="mt-3 text-gray-300">
            Review your books before checkout.
          </p>
        </PageContainer>
      </section>

      <section className="min-h-[50vh] bg-[#faf9f6] py-12">
        <PageContainer>
          {items.length === 0 ? (
            <div className="rounded-3xl bg-white p-12 text-center shadow-lg">
              <p className="text-lg text-gray-600">Your cart is empty.</p>
              <Link
                to="/books"
                className="mt-6 inline-block rounded-xl bg-[#b8903d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9d7830]"
              >
                Browse books
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
              <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                  <p className="text-sm font-medium text-slate-600">
                    {itemCount} {itemCount === 1 ? "item" : "items"}
                  </p>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-sm font-semibold text-[#b8903d] hover:underline"
                  >
                    Clear cart
                  </button>
                </div>

                <ul className="divide-y divide-slate-100">
                  {items.map((item) => (
                    <li
                      key={`${item.bookId}-${item.format}-${item.language}`}
                      className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:px-6"
                    >
                      <Link
                        to={`/books/${item.bookId}`}
                        className="mx-auto block w-28 shrink-0 overflow-hidden rounded-xl sm:mx-0"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="block h-auto w-full"
                        />
                      </Link>

                      <div className="min-w-0 flex-1">
                        <Link
                          to={`/books/${item.bookId}`}
                          className="text-base font-bold text-slate-800 transition hover:text-[#b8903d]"
                        >
                          {item.title}
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">
                          by {item.author}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="inline-block rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
                            {item.format}
                          </span>
                          <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                            {item.language}
                          </span>
                        </div>
                        <p
                          className={`mt-2 text-sm font-medium ${
                            getStock(item.bookId) === "In stock"
                              ? "text-emerald-700"
                              : "text-red-600"
                          }`}
                        >
                          {getStock(item.bookId)}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-[#faf7ef] px-3 py-1.5 text-sm">
                            Qty
                            <select
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.bookId,
                                  item.format,
                                  item.language,
                                  Number(e.target.value)
                                )
                              }
                              className="bg-transparent outline-none"
                            >
                              {Array.from({ length: 10 }, (_, i) => i + 1).map(
                                (n) => (
                                  <option key={n} value={n}>
                                    {n}
                                  </option>
                                )
                              )}
                            </select>
                          </label>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(
                                item.bookId,
                                item.format,
                                item.language
                              )
                            }
                            className="text-sm font-semibold text-red-600 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="text-right sm:min-w-[110px]">
                        <p className="text-lg font-bold text-[#b8903d]">
                          ₹
                          {(item.price * item.quantity).toLocaleString("en-IN")}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-gray-500">
                            ₹{item.price.toLocaleString("en-IN")} each
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-100 px-6 py-4 text-right">
                  <p className="text-lg text-slate-700">
                    Subtotal ({itemCount}{" "}
                    {itemCount === 1 ? "item" : "items"}):{" "}
                    <span className="font-bold text-slate-900">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </p>
                </div>
              </div>

              <aside className="h-fit rounded-3xl bg-white p-6 shadow-lg">
                <p className="text-lg text-slate-700">
                  Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"}):{" "}
                  <span className="font-bold text-slate-900">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </p>

                <Link
                  to="/proceed-to-buy"
                  className="mt-5 block w-full rounded-xl bg-[#b8903d] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#9d7830]"
                >
                  Proceed to Buy
                </Link>

                <Link
                  to="/books"
                  className="mt-3 block text-center text-sm font-semibold text-[#b8903d] hover:underline"
                >
                  Continue shopping
                </Link>
              </aside>
            </div>
          )}
        </PageContainer>
      </section>
    </PageLayout>
  );
};

export default Cart;
