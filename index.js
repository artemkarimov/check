fetch('http://localhost:3000/products', { maxContentLength: 30000 })
  .then(response => response.json()).then(data => console.log(data));
