/* eslint-disable react/prop-types */
function EmailInput(props) {
  return (
    <div className="input-element email">
      <h6>E-mail</h6>
      <input
        type="text"
        placeholder="E-mail"
        className="email-input"
        name="email"
        value={props.formData.email}
        onChange={props.handleChange}
      />
    </div>
  );
}
export default EmailInput;
