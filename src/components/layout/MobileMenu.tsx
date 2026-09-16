import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

interface MenuItem {
  title: string;
  link: string;
}

interface MobileMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menu: MenuItem[];
  userName?: string | null;
  onLogout?: () => void;
}

const MobileMenu = ({ open, setOpen, menu }: MobileMenuProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 xl:hidden">
      <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Menu</h2>

          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <HiX size={28} />
          </button>
        </div>

        <ul className="mt-10 space-y-6">
          {menu.map((item) => (
            <li key={item.title}>
              <Link
                to={item.link}
                onClick={() => setOpen(false)}
                className="block text-lg font-medium text-slate-700 transition hover:text-yellow-600"
              >
                {item.title}
              </Link>
            </li>
          ))}

          <li>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-slate-700 transition hover:text-yellow-600"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
