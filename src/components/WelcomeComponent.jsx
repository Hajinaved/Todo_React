import { Link, useParams } from "react-router-dom";

export default function WelcomeComp() {
  const p = useParams();

  return (
    <div className="welcomeCSS">
      <h1>Welcome {p.username}</h1>
      <div>
        manage your todos <Link to={`/listtodo/${p.username}`}>HERE</Link>
      </div>
    </div>
  );
}
