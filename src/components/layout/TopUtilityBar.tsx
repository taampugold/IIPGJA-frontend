import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiGlobeAlt, HiUserCircle } from "react-icons/hi";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const TopUtilityBar = () => {
  const { itemCount: cartCount } = useCart();
  const { user, logout } = useAuth();
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
      <div className="flex min-h-9 w-full flex-wrap items-center justify-end gap-x-3 gap-y-1 px-3 py-1.5 text-xs sm:min-h-10 sm:gap-5 sm:px-6 sm:text-sm lg:px-8">
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
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b8903d] px-1 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>

        <span className="text-white/30">|</span>

        {user ? (
          <>
            <Link
              to="/"
              aria-label="Website"
              title="Website"
              className="flex items-center text-white/90 transition hover:text-white"
            >
              <HiGlobeAlt size={16} />
            </Link>
            <Link
              to="/app/profile"
              aria-label="Profile"
              title="Profile"
              className="flex items-center text-white/90 transition hover:text-white"
            >
              <HiUserCircle size={16} />
            </Link>
            <Link
              to="/app"
              className="font-medium text-white/90 transition hover:text-white"
            >
              Portal
            </Link>
            <button
              type="button"
              onClick={logout}
              className="font-medium text-white/90 transition hover:text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="font-medium text-white/90 transition hover:text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopUtilityBar;
