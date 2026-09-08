import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { apiRequest } from "../lib/api";

export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  username: string;
}

interface AuthResponse {
  message: string;
  token: string;
  user: AuthUser;
  testId?: string | null;
}

interface LoginInput {
  emailOrUsername: string;
  password: string;
  testId?: string | null;
}

interface AuthContextValue {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  login: (input: LoginInput) => Promise<AuthResponse>;
  setSession: (token: string, user: AuthUser) => void;
  logout: () => void;
}

const TOKEN_KEY = "iipgja-auth-token";
const USER_KEY = "iipgja-auth-user";

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem(TOKEN_KEY)
  );
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? (JSON.parse(raw) as AuthUser) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(Boolean(token));

  const persist = useCallback((nextToken: string, nextUser: AuthUser) => {
    localStorage.setItem(TOKEN_KEY, nextToken);
    localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
    setToken(nextToken);
    setUser(nextUser);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setToken(null);
    setUser(null);
  }, []);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    apiRequest<{ user: AuthUser }>("/api/auth/me", { token })
      .then((data) => {
        if (cancelled) return;
        setUser(data.user);
        localStorage.setItem(USER_KEY, JSON.stringify(data.user));
      })
      .catch(() => {
        if (!cancelled) logout();
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [token, logout]);

  const login = useCallback(
    async (input: LoginInput) => {
      const data = await apiRequest<AuthResponse>("/api/auth/login", {
        method: "POST",
        body: input,
      });
      persist(data.token, data.user);
      return data;
    },
    [persist]
  );

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      login,
      setSession: persist,
      logout,
    }),
    [user, token, loading, login, persist, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
