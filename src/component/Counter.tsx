import React, { useState } from 'react';

const Counter: React.FC = () => {

  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        {count}
      </div>
      
      <button 
        onClick={increment}
      >
        增加
      </button>
    </div>
  );
}

export default Counter;