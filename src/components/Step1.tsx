import { Link } from "react-router-dom";

export default function Step1() {
  return (
    <div>
      <h1>Step 1</h1>
      <Link to={"/"}>Back</Link>
      <Link to={"/signup/step2"}>Next</Link>
    </div>
  );
}
