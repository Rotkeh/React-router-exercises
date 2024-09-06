import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  return loggedIn ? <Outlet /> : <Navigate to="login" />;
}
