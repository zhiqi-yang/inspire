import React from "react";

const env : 'development' | 'production' = 
  process.env.NODE_ENV?.trim() === 'development' ? 'development' : 'production';

const NewDiv: React.FC = () => <div>{`hello my third component ${env}`}</div>;

export default NewDiv;