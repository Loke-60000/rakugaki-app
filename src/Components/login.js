import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [storedEmail, setStoredEmail] = useState(localStorage.getItem("email") || "");
  const [storedPassword, setStoredPassword] = useState(localStorage.getItem("password") || "");

  function handleRememberMe(event) {
    setRememberMe(event.target.checked);
    if (!event.target.checked) {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    var formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await fetch(
        "http://localhost/rakugaki_server/login-register/login.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem("user", JSON.stringify(userData));
        if (rememberMe) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
        }
        history("/MainApp");
      } else {
        throw new Error("Invalid email or password.");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email || storedEmail}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password || storedPassword}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="rememberMe"
          checked={rememberMe}
          onChange={handleRememberMe}
        />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default Login;
