import "../styles/Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../photo/google.png";

interface UserProps {
  email: string;
}

const Login = () => {
  const [user, setUser] = useState<UserProps>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const handleLogin = (e: { preventDefault: () => void }) => {
    if (email.includes("@")) {
      if (email.split("@")[1] !== "gmail.com") {
        e.preventDefault();
        setError("Gmail account only");
      } else {
        const newUser = {
          email: email,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      }
    } else {
      e.preventDefault();
      setError("Need Email");
    }
  };

  return (
    <div className="login">
      <div className="login__box">
        <img src={logo} alt="Logo" />
        <div className="login__title">
          <h3>Sign in</h3>
          <p>to continue to YouTube</p>
        </div>

        <form className="login__form" onSubmit={handleLogin}>
          <div className="login__inputContainer">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Email</p>
          </div>
          <div className="login__inputContainer">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>Password</p>
          </div>
          <div className="login__bot">
            {error && <p className="login__error">{error}</p>}
            <p className="login__textClick">Forgot email?</p>
            <p className="login__text">
              Not your computer? Use a private browsing window to sign in.
              <span className="login__textClick"> Learn more</span>
            </p>
            <div className="login__btnContainer">
              <p className="login__textClick">Create account</p>
              <button type="submit" className="login__btn">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
