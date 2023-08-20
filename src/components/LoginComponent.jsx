import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errormessage, seterrormessage] = useState(false);
  const [succesmessage, setsuccesmessage] = useState(false);
  const navigate = new useNavigate();
  function editpassword(event) {
    setpassword(event.target.value);
  }
  function editusername(event) {
    setusername(event.target.value);
  }
  function handleLogin() {
    if (username === "haji" && password === "boss") {
      setsuccesmessage(true);
      seterrormessage(false);
      console.log("succesfull");
      navigate(`/welcome/${username}`);
    } else if (username === "satu" && password === "boss") {
      setsuccesmessage(true);
      seterrormessage(false);
      console.log("succesfull");
      navigate(`/welcome/${username}`);
    } else {
      setsuccesmessage(false);
      seterrormessage(true);
      console.log("failed");
    }
  }

  return (
    <div className="LoginComp">
      <div className="LoginForm">
        <div className="authmessage">
          {succesmessage && <h1> SUCCESSFUL</h1>}
          {errormessage && <h1> FAILED</h1>}
        </div>
        <div>
          <label>Name </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={editusername}
          ></input>
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={editpassword}
          ></input>
        </div>
        <div>
          <button onClick={handleLogin}>Log In</button>
        </div>
      </div>
    </div>
  );
}
