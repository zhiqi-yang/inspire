const env = process.env.NODE_ENV?.trim() === 'development' ? 'development' : 'production';
console.log(`hello ${env}`);
