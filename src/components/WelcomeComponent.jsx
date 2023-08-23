import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext, useAuth } from "./security/AuthContext";

export default function WelcomeComp() {
  const p = useParams();
/*   const ac = useAuth();
  console.log(ac);
  console.log(ac.number); */

  return (
    <div className="welcomeCSS">
      <h1>Welcome {p.username}</h1>
      <div>
        manage your todos <Link to={`/listtodo/${p.username}`}>HERE</Link>
      </div>
    </div>
  );
}
