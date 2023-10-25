const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 4, name: "Headphones", price: 50 }
  ];
  
  const productNames = products.map(product => product.name);
  
  console.log(productNames); // In ra ["Laptop", "Smartphone", "Tablet", "Headphones"]
  