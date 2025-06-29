const env = process.env.NODE_ENV?.trim() === 'development' ? 'development' : 'production';

const rootElement = document.getElementById('root');
const newDiv = document.createElement('div');
newDiv.textContent = `hello new ${env}`;
rootElement.appendChild(newDiv);
