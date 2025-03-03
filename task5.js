const express = require('express');

const app = express();
const PORT = 3000;

// Sample product data
const products = [
    { id: 1, name: 'iPhone 13', category: 'Mobile' },
    { id: 2, name: 'Samsung Galaxy S23', category: 'Mobile' },
    { id: 3, name: 'MacBook Pro', category: 'Laptop' },
    { id: 4, name: 'Dell XPS 13', category: 'Laptop' },
    { id: 5, name: 'Sony Headphones', category: 'Accessories' }
];

// Default Route
app.get('/', (req, res) => {
    res.send('welcome!!To products');
});

// API to filter products by category
app.get('/products', (req, res) => {
    const category = req.query.category; // Get category from query params

    if (!category) {
        return res.status(400).send('Please provide a category.');
    }

    // Filter products based on category
    const filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());

    if (filteredProducts.length === 0) {
        return res.status(404).send('No products found in this category.');
    }

    res.json(filteredProducts);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
