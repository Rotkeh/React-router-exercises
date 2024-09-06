import { NavLink } from "react-router-dom";

export function NavMenu() {
  return (
    <>
      <nav id="nav-menu">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"contact"}>Contact</NavLink>
        <NavLink to={"services"}>Services</NavLink>
        <NavLink to={"signup"}>Signup</NavLink>
        <NavLink to={"dashboard"}>Dashboard</NavLink>
      </nav>
    </>
  );
}
