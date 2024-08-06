import "../assets/styles/Sign.css";
import "../assets/styles/RegisterPage.css";
import spotifyLogo from "../assets/styles/svgs/spotifyLogo.svg";
import HorizontalLine from "../components/HorizontalLine";
import LoginOptionButton from "../components/LoginOptionButton";
import gooleLogo from "../assets/styles/svgs/googleLogo.svg";
import appleLogo from "../assets/styles/svgs/appleLogo.svg";
import facebookLogo from "../assets/styles/svgs/facebookLogo.svg";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput.jsx";
import { useState } from "react";
import UsernameInput from "../components/UsernameInput.jsx";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
    username: "",
    password: "",
    passwordCheck: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      };
    });
  }

  return (
    <div className="register page">
      <div className="login-box container">
        <img src={spotifyLogo} alt="spotify-logo" className="spotify-logo" />
        <h1>Register and start listening</h1>
        <form action="">
          <ul style={{ width: "100%", padding: 0 }}>
            <EmailInput handleChange={handleChange} formData={formData} />
            <UsernameInput handleChange={handleChange} formData={formData} />
            <PasswordInput handleChange={handleChange} formData={formData} />
            <PasswordInput
              handleChange={handleChange}
              formData={formData}
              passwordCheck={true}
            />
          </ul>
          <div className="submit">
            <button className="submit-button">Continue</button>
          </div>
        </form>
        <div className="splitter">
          <HorizontalLine text="or" />
        </div>

        <div className="sign-options">
          <LoginOptionButton name="Google" logo={gooleLogo} />
          <LoginOptionButton name="Facebook" logo={facebookLogo} />
          <LoginOptionButton name="Apple" logo={appleLogo} />
        </div>
        <HorizontalLine />
        <div className="sign-up-link">
          Already have account?{" "}
          <strong onClick={() => navigate("/login")}>Sign up</strong>.
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
