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
import Errorpop from "../components/Errorpop.jsx";
function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    passwordCheck: ""
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
      const response = await fetch("http://localhost:8000/sign-up", {
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
    <div className="register page">
      <div className="login-box container">
        <img src={spotifyLogo} alt="spotify-logo" className="spotify-logo" />
        <h1>Register and start listening</h1>
        {pageData.error && (
          <Errorpop
            errorStatus={pageData.errorMessage.status}
            errorStatusText={pageData.errorMessage.statusText}
          />
        )}
        <form action="" onSubmit={handleSubmit}>
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
