import { Link } from "react-router-dom";

export default function Step3() {
  return (
    <div>
      <h1>Step 3</h1>
      <Link to={"/signup/step2"}>Previous</Link>
      <Link to={"/dashboard"}>Sign up</Link>
    </div>
  );
}
