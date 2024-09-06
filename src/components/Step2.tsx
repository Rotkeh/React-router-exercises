import { Link } from "react-router-dom";

export default function Step2() {
  return (
    <div>
      <h1>Step 2</h1>
      <Link to={"/signup/step1"}>Previous</Link>
      <Link to={"/signup/step3"}>Next</Link>
    </div>
  );
}
