const env : 'development' | 'production' = 
  process.env.NODE_ENV?.trim() === 'development' ? 'development' : 'production';

const rootElement : HTMLElement | null = document.getElementById('root');
const newDiv : HTMLDivElement = document.createElement('div');
newDiv.textContent = `hello new ${env}`;
rootElement?.appendChild(newDiv);