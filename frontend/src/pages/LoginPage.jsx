import spotifyLogo from "../assets/styles/svgs/spotifyLogo.svg";
import hideIcon from "../assets/styles/svgs/hideIcon.svg";
import "../assets/styles/LoginPage.css";
import HorizontalLine from "../components/HorizontalLine";
import LoginOptionButton from "../components/LoginOptionButton";
import gooleLogo from "../assets/styles/svgs/googleLogo.svg";
import appleLogo from "../assets/styles/svgs/appleLogo.svg";
import facebookLogo from "../assets/styles/svgs/facebookLogo.svg";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "../components/ToggleSwitch";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
    password: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="login-page">
      <div className="login-box">
        <img src={spotifyLogo} alt="spotify-logo" className="spotify-logo" />
        <h1>Log in to Spotify</h1>
        <div className="login-with">
          <LoginOptionButton name="Google" logo={gooleLogo} />
          <LoginOptionButton name="Facebook" logo={facebookLogo} />
          <LoginOptionButton name="Apple" logo={appleLogo} />
        </div>

        <HorizontalLine />
        <form onSubmit={handleSubmit}>
          <div className="input-element email">
            <h6>E-mail or username</h6>
            <input
              type="text"
              placeholder="E-mail or username"
              className="email-input"
              value={formData.login}
              onChange={handleChange}
              name="login"
            />
          </div>

          <div className="input-element password">
            <h6>Password</h6>
            <div className="input">
              <input
                type="password"
                placeholder="Password"
                className="password-input"
                onChange={handleChange}
                value={formData.password}
                name="password"
              />
              <button type="button">
                <img src={hideIcon} className="hide-icon" />
              </button>
            </div>
          </div>
          <div className="remember-me">
            <ToggleSwitch className="remember-me-switch" />
            <p>Remember me</p>
          </div>
          <div className="submit">
            <button className="submit-button">Login</button>
          </div>
        </form>
        <h5 className="password-reset-link">Forgot your password?</h5>
        <HorizontalLine />
        <div className="sign-up-link">
          Dont have account?{" "}
          <strong onClick={() => navigate("/register")}>
            Sign up for Spotify
          </strong>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
