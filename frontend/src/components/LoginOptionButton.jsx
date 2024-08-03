/* eslint-disable react/prop-types */
import "../assets/styles/LoginOptionButton.css";

function LoginOptionButton(props) {
  return (
    <div className="button-element">
      <div className="logo">
        <img src={props.logo} />
      </div>
      <button>Continue with {props.name}</button>
    </div>
  );
}
export default LoginOptionButton;
