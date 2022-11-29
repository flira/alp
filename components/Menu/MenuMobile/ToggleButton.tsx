import React from "react";
import CSS from "./toggleButton.module.css";

type ToggleButtonProp = {
  action: React.MouseEventHandler<HTMLButtonElement>,
  children: any,
  isOpen: boolean,
  width?: string
}

function ToggleButton({ action, children, isOpen, width }: ToggleButtonProp): JSX.Element {
  return (
    <button
      onClick={action}
      className={CSS.button + (isOpen ? ` ${CSS.open}` : '')}
      type="button">
      <svg className={CSS.svg} x="0px" y="0px" viewBox="0 0 168 100" style={{width: width}}>
        <rect
          width="168"
          height="16"
          className={`${CSS.dash} ${CSS.firstDash}`} />
        <rect
          y="42"
          width="168"
          height="16"
          className={`${CSS.dash} ${CSS.secondDash}`} />
        <rect
          y="84"
          width="168"
          height="16"
          className={`${CSS.dash} ${CSS.thirdDash}`} />
      </svg>
      <label className={CSS.label}>{children}</label>
    </button>
  );
}

export default ToggleButton;