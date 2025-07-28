import React, { useState } from "react";
import ss from "./Header.scss";

import TTT, { BodyProps } from "./Body";

const Header: React.FC = () => {
  console.log(1);
  return (
    <div className={ss.frame}>
      <div className={ss.wrap}>
      </div>
    </div>
  );
};

export default Header;
