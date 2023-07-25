const ProductManager = require('./index')


async function pruebaManager(){
const manager = new ProductManager('Productos.json');

// Crear un nuevo producto
const nuevoProducto =[{
  title: 'Producto 1',
  description: 'Descripción del producto 1',
  price: 9.99,
  thumbnail: 'imagen1.jpg',
  stock: 10,
},
{
    title: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 18,
    thumbnail: 'imagen2.jpg',
    stock: 10,
  },
  {
    title: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 22,
    thumbnail: 'imagen3.jpg',
    stock: 10,
  },
]

nuevoProducto.forEach(async (producto) => {
  await  manager.addProduct(producto);
  });

// Consultar productos 
const productos =  await manager.getProducts();
console.log(productos);

// Producto por ID
const productoId = 1;
const producto =await  manager.getProductById(productoId);
console.log(producto);

// Actualizar producto
const productoIdActualizar = 1;
const camposActualizados = {
  price: 14.99,
  stock: 5,
};
manager.updateProduct(productoIdActualizar, camposActualizados);

// Eliminar producto
const productoIdEliminar = 1;
manager.deleteProduct(productoIdEliminar);

}

pruebaManager()
