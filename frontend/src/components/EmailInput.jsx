function EmailInput(props) {
  return (
    <div className="input-element email">
      <h6>E-mail</h6>
      <input
        type="text"
        placeholder="E-mail"
        className="email-input"
        name="login"
        value={props.formData.login}
        onChange={props.handleChange}
      />
    </div>
  );
}
export default EmailInput;
