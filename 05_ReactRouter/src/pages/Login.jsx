import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate;

  const handleLogin = (event) => {
    event.preventDefault();

    console.log(`user ${username} has loged in!`);

    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Login;
