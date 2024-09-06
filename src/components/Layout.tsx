import { Outlet } from "react-router-dom";
import { NavMenu } from "./NavMenu";

export default function Layout() {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
}
