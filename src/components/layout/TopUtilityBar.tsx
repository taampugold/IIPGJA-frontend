import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useCart } from "../../context/CartContext";

const TopUtilityBar = () => {
  const { itemCount: cartCount } = useCart();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const dateStr = now.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const timeStr = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="w-full bg-[#161616] text-white">
      <div className="flex h-9 w-full items-center justify-end gap-3 px-4 text-xs sm:h-10 sm:gap-5 sm:px-6 sm:text-sm lg:px-8">
        <time
          dateTime={now.toISOString()}
          className="hidden truncate text-white/80 sm:inline"
        >
          {dateStr} · {timeStr}
        </time>
        <time
          dateTime={now.toISOString()}
          className="truncate text-[11px] text-white/80 sm:hidden"
        >
          {timeStr}
        </time>

        <span className="text-white/30">|</span>

        <Link
          to="/cart"
          className="relative flex items-center gap-1.5 text-white/90 transition hover:text-white"
        >
          <HiOutlineShoppingCart size={16} />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b8903d] px-1 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>

        <span className="text-white/30">|</span>

        <Link
          to="/login"
          className="font-medium text-white/90 transition hover:text-white"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default TopUtilityBar;
