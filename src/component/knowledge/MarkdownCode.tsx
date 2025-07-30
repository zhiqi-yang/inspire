import React from "react";

import ss from "./MarkdownCode.scss";

export interface Props {
  children?: string;
}

const Block: React.FC<Props> = ({ children }) => {
  console.log(1);
  return (
    <div className={ss.markdownCode}>
      <pre><code>{children}</code></pre>
    </div>
  );
};

export default Block;
