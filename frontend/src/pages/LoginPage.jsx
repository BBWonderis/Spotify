import spotifyLogo from "../assets/styles/svgs/spotifyLogo.svg";

import "../assets/styles/Sign.css";
import "../assets/styles/LoginPage.css";
import HorizontalLine from "../components/HorizontalLine";
import LoginOptionButton from "../components/LoginOptionButton";
import gooleLogo from "../assets/styles/svgs/googleLogo.svg";
import appleLogo from "../assets/styles/svgs/appleLogo.svg";
import facebookLogo from "../assets/styles/svgs/facebookLogo.svg";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "../components/ToggleSwitch";
import { useState } from "react";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import Errorpop from "../components/Errorpop";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [pageData, setPageData] = useState({
    error: false,
    errorMessage: ""
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
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/sign-in", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        setPageData((prevPageData) => {
          return {
            ...prevPageData,
            error: true,
            errorMessage: response
          };
        });
        throw new Error(response);
      } else {
        setPageData((prevPageData) => {
          return {
            ...prevPageData,
            error: false,
            errorMessage: ""
          };
        });
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login page">
      <div className="login-box container">
        <img src={spotifyLogo} alt="spotify-logo" className="spotify-logo" />
        <h1>Log in to Spotify</h1>
        {pageData.error && (
          <Errorpop
            errorStatus={pageData.errorMessage.status}
            errorStatusText={pageData.errorMessage.statusText}
          />
        )}
        <div className="sign-options">
          <LoginOptionButton name="Google" logo={gooleLogo} />
          <LoginOptionButton name="Facebook" logo={facebookLogo} />
          <LoginOptionButton name="Apple" logo={appleLogo} />
        </div>

        <HorizontalLine />
        <form onSubmit={handleSubmit}>
          <EmailInput handleChange={handleChange} formData={formData} />
          <PasswordInput handleChange={handleChange} formData={formData} />
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
