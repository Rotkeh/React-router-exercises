import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import Stats from "./components/Stats";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import LogIn from "./components/LogIn";
import UserProfile from "./components/UserProfile";
import Services from "./components/Services";
import Layout from "./components/Layout";
import Signup from "./components/Signup";
import Step3 from "./components/Step3";
import Step2 from "./components/Step2";
import Step1 from "./components/Step1";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<LogIn />} />
        <Route path="services" element={<Services />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="user/:userId" element={<UserProfile />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="stats" element={<Stats />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="signup" element={<Signup />}>
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
        </Route>
        <Route path="old-home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);
