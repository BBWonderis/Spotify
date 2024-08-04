import { styled } from "@mui/system";
import { Switch as BaseSwitch, switchClasses } from "@mui/base/Switch";
import "../assets/styles/mainColors.css";

const Switch = styled(BaseSwitch)`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 30px;
  height: 16px;
  background: var(--outline-grey);
  border-radius: 10px;

  cursor: pointer;
  transition: all 0.2s ease;

  & .${switchClasses.thumb} {
    display: block;
    width: 12px;
    height: 12px;
    top: 2px;
    left: 3px;
    border-radius: 16px;
    background-color: black;
    position: relative;
    transition: all 200ms ease;
  }

  & .${switchClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }

  &.${switchClasses.checked} {
    background: var(--spotify-green);

    & .${switchClasses.thumb} {
      left: 16px;
      top: 2px;
      background-color: black;
    }
  }
`;

export default function StylingSlotsSingleComponent() {
  return <Switch />;
}
