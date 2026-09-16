import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import CourseList from "../pages/Course";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import CourseDetails from "../pages/CourseDetails";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import VerifyEmail from "../pages/auth/VerifyEmail";
import StudentPortal from "../pages/StudentPortal";
import Profile from "../pages/Profile";
import Books from "../pages/Books";
import BookDetail from "../pages/BookDetail";
import Cart from "../pages/Cart";
import ProceedToBuy from "../pages/ProceedToBuy";
import GoldCalculator from "../pages/GoldCalculator";
import {
  WebsiteLayout,
  GuestLayout,
  PortalLayout,
} from "../layouts/RouteGuards";

function AppRoutes() {
  return (
    <Routes>
      {/* Public marketing website */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/enrollment" element={<Navigate to="/courses" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookId" element={<BookDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/proceed-to-buy" element={<ProceedToBuy />} />
        <Route path="/gold-calculator" element={<GoldCalculator />} />
      </Route>

      {/* Auth screens */}
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Route>

      {/* Separate student portal (not the website) */}
      <Route element={<PortalLayout />}>
        <Route path="/app" element={<StudentPortal />} />
        <Route path="/app/profile" element={<Profile />} />
      </Route>

      <Route path="/dashboard" element={<Navigate to="/app" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
