import React, { useState, MouseEvent, useRef } from "react";

import ss from "./MenuButton.scss";

export interface MenuProps {
  size?: number;
  backgroundColor?: string;
}

const MenuButton: React.FC<MenuProps> = ({ backgroundColor, size}) => {

  const baseSize = size || 200;
  const bg = backgroundColor || "#000";
  
  const style = {
    "--base-size": `${baseSize}px`,
    "--bg": `${bg}`,
    "--line-height": `${(baseSize * 12) / 100}px`,
  } as React.CSSProperties;

  const [state, setState] = useState(false);

  const oneRef = useRef<HTMLDivElement>(null);
  const twoRef = useRef<HTMLDivElement>(null);
  const threeRef = useRef<HTMLDivElement>(null);

  const handlerCheckbox = (e: MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    [oneRef, twoRef, threeRef].forEach((item) => item.current?.classList.remove(`${ss.noAnimation}`));
    const newState = !state;
    setState(newState);
  };

  return (
    <div className={ss.frame} style={style}>
      <div className={ss.container}>
        <input type="checkbox" id={ss.cb} checked={state} onChange={() => {}}></input>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={ss.bg} htmlFor={ss.cb} onClick={handlerCheckbox}></label>
        <div ref={oneRef} className={`${ss.one} ${ss.noAnimation}`}></div>
        <div ref={twoRef} className={`${ss.two} ${ss.noAnimation}`}></div>
        <div ref={threeRef} className={`${ss.three} ${ss.noAnimation}`}></div>
      </div>
    </div>
  )
}

export default MenuButton;