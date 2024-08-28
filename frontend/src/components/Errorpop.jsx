import "../assets/styles/Errorpop.css";
import error from "../assets/styles/svgs/error.svg";

function Errorpop(props) {
  return (
    <div className="error-pop">
      <img src={error} alt="error" className="error-icon" />
      <p>{`Error ${props.errorStatus} due to the ${props.errorStatusText}`}</p>
    </div>
  );
}
export default Errorpop;
