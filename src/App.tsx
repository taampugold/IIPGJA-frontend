import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ExamCartProvider } from "./context/ExamCartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ExamCartProvider>
          <AppRoutes />
        </ExamCartProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
