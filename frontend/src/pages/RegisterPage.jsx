import "../assets/styles/Sign.css";
import "../assets/styles/RegisterPage.css";
import spotifyLogo from "../assets/styles/svgs/spotifyLogo.svg";
import HorizontalLine from "../components/HorizontalLine";
import LoginOptionButton from "../components/LoginOptionButton";
import gooleLogo from "../assets/styles/svgs/googleLogo.svg";
import appleLogo from "../assets/styles/svgs/appleLogo.svg";
import facebookLogo from "../assets/styles/svgs/facebookLogo.svg";

function RegisterPage() {
  return (
    <div className="register page">
      <div className="login-box container">
        <img src={spotifyLogo} alt="spotify-logo" className="spotify-logo" />
        <h1>Register and start listening</h1>
        <form action="">
          <div className="input-element email">
            <h6>E-mail</h6>
            <input
              type="text"
              placeholder="E-mail"
              className="email-input"
              name="login"
            />
          </div>
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
      </div>
    </div>
  );
}
export default RegisterPage;
