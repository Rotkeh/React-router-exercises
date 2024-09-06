import { Link, Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"stats"}>Stats</Link>
        <Link to={"settings"}>Settings</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  );
}
