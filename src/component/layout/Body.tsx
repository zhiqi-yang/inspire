import React from "react";
import ss from "./Body.scss";


export type BodyProps = {
  children?: React.ReactNode;
};

const Body: React.FC<BodyProps> = ({ children }) => {
  console.log(1);
  return (
    <div className={ss.frame}>
      {children ? children : null}
    </div>
  );
};

export default Body;
