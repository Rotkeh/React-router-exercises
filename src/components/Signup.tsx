import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("test");
    if (location.pathname === "/signup") {
      console.log("test2");
      navigate("step1");
    }
  }),
    [];
  return (
    <div>
      <h1>Signup</h1>
      <Outlet />
    </div>
  );
}
