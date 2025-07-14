import { useState, MyFC } from '@/core/MyReact';

const Counter: MyFC = () => {

  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count() + 1);
  };

  return () => {
    const outerDiv = document.createElement('div');
    const countDiv = document.createElement('div');
    const button = document.createElement('button');
    countDiv.innerHTML = `${count()}`;
    button.textContent = '增加（通过自编写的类React源码实现）';
    button.addEventListener('click', increment);
  
    outerDiv.appendChild(countDiv);
    outerDiv.appendChild(button);
    return outerDiv;
  }
}

export default Counter;