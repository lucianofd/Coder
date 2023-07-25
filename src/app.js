const express = require('express');
const fs = require('fs').promises;
const ProductManager = require('./ProductManager');

const app = express();
const manager = new ProductManager('./Productos.json');

// Endpoint para obtener todos los productos o limitar el resultado con query param ?limit=
app.get('/products', async (req, res) => {
  try {
    const products = await manager.getProducts();
    const limit = req.query.limit;

    if (limit) {
      const limitedProducts = products.slice(0, parseInt(limit, 10));
      res.json(limitedProducts);
    } else {
      res.json(products);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

// Endpoint para obtener un producto por su id
app.get('/products/:pid', async (req, res) => {
  try {
    const productId = parseInt(req.params.pid, 10);
    const product = await manager.getProductById(productId);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'No se encontró el producto con el ID especificado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor Express iniciado en http://localhost:${port}`);
});
