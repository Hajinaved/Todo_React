import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function LogoutComp() {
  
  return (
    <>
      <div className="LogoutComp">
        <h1>THANKS FOR USING OUR APP</h1>
        <br></br>
        <Link to={"/"}>Click here to Log-in</Link>
      </div>
    </>
  );
}
