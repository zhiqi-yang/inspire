import React from "react";

import ss from "./Title.scss";

export interface Props {
  title: string;
  index: number;
  click: (index: number) => void
}

const Title: React.FC<Props> = ({ title, index, click }) => {
  console.log(1);
  return (
    <div className={ss.title}>
      <p>{title}</p>
      <div className={ss.container}>
        <div className={ss.button} onClick={() => click(index)}>显示</div>
      </div>
    </div>
  );
};

export default Title;
