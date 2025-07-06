import React from "react";
import { createRoot } from "react-dom/client";

const env : 'development' | 'production' = 
  process.env.NODE_ENV?.trim() === 'development' ? 'development' : 'production';

/**
const rootElement : HTMLElement | null = document.getElementById('root');
const newDiv : HTMLDivElement = document.createElement('div');
newDiv.textContent = `hello new ${env}`;
rootElement?.appendChild(newDiv);
*/

const rootElement = createRoot(document.getElementById("root")!);
const NewDiv: React.FC = () => <div>{`hello new ${env}`}</div>;
rootElement.render(<NewDiv/>);