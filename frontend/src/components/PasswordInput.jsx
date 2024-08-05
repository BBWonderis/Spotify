/* eslint-disable react/prop-types */
import hideIcon from "../assets/styles/svgs/hideIcon.svg";
function PasswordInput(props) {
  return (
    <div className="input-element password">
      <h6>Password</h6>
      <div className="password">
        <input
          type="password"
          placeholder="Password"
          className="password-input"
          onChange={props.handleChange}
          value={
            props.passwordCheck
              ? props.formData.passwordCheck
              : props.formData.password
          }
          name={props.passwordCheck ? "passwordCheck" : "password"}
        />
        <button type="button">
          <img src={hideIcon} className="hide-icon" />
        </button>
      </div>
    </div>
  );
}
export default PasswordInput;
