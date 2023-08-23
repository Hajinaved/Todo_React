import { useParams, Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function HeaderComp() {
  const AuthContext = useAuth();
  const Authenticated = AuthContext.isUserAuthenticated();
  const username = AuthContext.getUsername();
  //const { username } = useParams();
  function logout() {
    AuthContext.logout();
    console.log("UNAUTHENTICATED");
  }
  function navitoGit(event) {
    if (AuthContext.isUserAuthenticated()) {
      window.open("https://github.com/navitotechnologies");
    }
  }
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand ms-2 fs-2 fw-bold text-black"
              href="https://github.com/Hajinaved"
              target="_blank"
              onClick={navitoGit}
            >
              HAJI BOSS GIT
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                  {Authenticated && (
                    <Link className="nav-link" to="/welcome/haji">
                      Home
                    </Link>
                  )}
                </li>
                <li className="nav-item fs-5">
                  {Authenticated && (
                    <Link className="nav-link" to={`/listtodo/${username} `}>
                      Todos
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item fs-5">
                {!Authenticated && (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
              </li>
              <li className="nav-item fs-5">
                {Authenticated && (
                  <Link className="nav-link" to="/logout" onClick={logout}>
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
