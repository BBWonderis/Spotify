/* eslint-disable react/prop-types */
function UsernameInput(props) {
  return (
    <div className="input-element email">
      <h6>Username</h6>
      <input
        type="text"
        placeholder="Username"
        className="email-input"
        name="username"
        value={props.formData.username}
        onChange={props.handleChange}
      />
    </div>
  );
}
export default UsernameInput;
