import { FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import PageContainer from "../components/layout/PageContainer";
import { useCart } from "../context/CartContext";

interface CheckoutForm {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: "cod" | "upi" | "card";
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-[#faf7ef] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#b8903d] focus:ring-2 focus:ring-[#b8903d]/20";

const ProceedToBuy = () => {
  const navigate = useNavigate();
  const { items, itemCount, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [form, setForm] = useState<CheckoutForm>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const deliveryFee = subtotal >= 499 ? 0 : 49;
  const total = subtotal + deliveryFee;

  if (items.length === 0 && !submitted) {
    return <Navigate to="/cart" replace />;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = `IIPGJA-${Date.now().toString().slice(-8)}`;
    setOrderId(id);
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <PageLayout>
        <section className="min-h-[60vh] bg-[#faf9f6] py-16">
          <PageContainer>
            <div className="mx-auto max-w-xl text-center">
              <div className="rounded-3xl bg-white p-10 shadow-lg">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl text-[#b8903d]">
                  ✓
                </div>
                <h1 className="mt-6 text-3xl font-bold text-slate-800">
                  Order placed successfully
                </h1>
                <p className="mt-3 text-gray-600">
                  Thank you for shopping with IIPGJA. Your order has been
                  received.
                </p>
                <p className="mt-4 rounded-xl bg-[#fff8e8] px-4 py-3 text-sm font-semibold text-slate-700">
                  Order ID: <span className="text-[#b8903d]">{orderId}</span>
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  We will contact you at {form.email || "your email"} with
                  delivery updates.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Link
                    to="/books"
                    className="rounded-xl bg-[#b8903d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9d7830]"
                  >
                    Continue shopping
                  </Link>
                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="rounded-xl border-2 border-[#b8903d] px-6 py-3 text-sm font-semibold text-[#b8903d] transition hover:bg-[#b8903d] hover:text-white"
                  >
                    Go to Home
                  </button>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="w-full bg-[#1c1c1c] py-14 text-white">
        <PageContainer fullWidth className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Proceed to Buy</h1>
          <p className="mt-3 text-gray-300">
            Enter your delivery details to complete the order.
          </p>
        </PageContainer>
      </section>

      <section className="bg-[#faf9f6] py-12">
        <PageContainer className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-6 shadow-lg sm:p-8"
          >
            <h2 className="text-xl font-bold text-slate-800">
              Delivery details
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                Full name
                <input
                  required
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your full name"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@email.com"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Phone
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                Address
                <textarea
                  required
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  className={inputClass}
                  placeholder="House no, street, landmark"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                City
                <input
                  required
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className={inputClass}
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                State
                <input
                  required
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className={inputClass}
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Pincode
                <input
                  required
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  className={inputClass}
                  pattern="[0-9]{6}"
                  title="Enter a 6-digit pincode"
                />
              </label>
            </div>

            <h2 className="mt-8 text-xl font-bold text-slate-800">
              Payment method
            </h2>

            <div className="mt-4 space-y-3">
              {(
                [
                  { value: "cod", label: "Cash on Delivery" },
                  { value: "upi", label: "UPI" },
                  { value: "card", label: "Credit / Debit Card" },
                ] as const
              ).map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
                    form.paymentMethod === option.value
                      ? "border-[#b8903d] bg-[#fff8e8]"
                      : "border-slate-200 hover:border-[#b8903d]/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={option.value}
                    checked={form.paymentMethod === option.value}
                    onChange={handleChange}
                    className="accent-[#b8903d]"
                  />
                  <span className="text-sm font-semibold text-slate-700">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-[#b8903d] py-3.5 text-sm font-semibold text-white transition hover:bg-[#9d7830] sm:w-auto sm:min-w-[220px] sm:px-8"
            >
              Place order · ₹{total.toLocaleString("en-IN")}
            </button>

            <Link
              to="/cart"
              className="mt-4 block text-sm font-semibold text-[#b8903d] hover:underline"
            >
              ← Back to cart
            </Link>
          </form>

          <aside className="h-fit rounded-3xl bg-white p-6 shadow-lg lg:sticky lg:top-28">
            <h2 className="text-lg font-bold text-slate-800">Order summary</h2>

            <ul className="mt-4 max-h-72 space-y-4 overflow-y-auto">
              {items.map((item) => (
                <li
                  key={`${item.bookId}-${item.format}-${item.language}`}
                  className="flex gap-3 border-b border-slate-100 pb-4 last:border-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-14 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-semibold text-slate-800">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {item.format} · {item.language} · Qty {item.quantity}
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#b8903d]">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>
                  Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
                </span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery</span>
                <span>
                  {deliveryFee === 0
                    ? "FREE"
                    : `₹${deliveryFee.toLocaleString("en-IN")}`}
                </span>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-3 text-base font-bold text-slate-900">
                <span>Total</span>
                <span className="text-[#b8903d]">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {deliveryFee === 0 ? (
              <p className="mt-3 rounded-xl bg-yellow-50 px-3 py-2 text-xs text-yellow-800">
                Free delivery applied on this order.
              </p>
            ) : (
              <p className="mt-3 text-xs text-gray-500">
                Add ₹{(499 - subtotal).toLocaleString("en-IN")} more for free
                delivery.
              </p>
            )}
          </aside>
        </PageContainer>
      </section>
    </PageLayout>
  );
};

export default ProceedToBuy;
