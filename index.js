
class ProductManager {
    constructor() {
      this.products = [];
      this.currentId = 1;
    }
  
    addProduct(title, description, price, thumbnail, stock) {
      // Validar campos obligatorios
      if (!title || !description || !price || !thumbnail || !stock) {
        console.log("Todos los campos son obligatorios");
        return;
      }
  
      // Crear nuevo producto
      const newProduct = {
        id: this.currentId,
        title,
        description,
        price,
        thumbnail,
        //Genera campo auto. letra+ padStar(4 campos,rellena con 0 a la izq)
        code: "C" + this.currentId.toString().padStart(4, "0"),
        stock,
      };
  
      // Incrementar el ID actual
      this.currentId++;
  
      // Agregar el producto al arreglo
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        return product;
      } else {
        console.log("Not found");
      }
    }
  }

  /*---------------CASOS---------------*/
  
const gestor = new ProductManager();

// Agregar productos
gestor.addProduct("Producto 1", "Descripción 1", 1250, "imagen1.jpg", 50);
gestor.addProduct("Producto 2", "Descripción 2", 850, "imagen2.jpg", 85);
gestor.addProduct("Producto 3", "Descripción 3", 1400, "imagen3.jpg", 14);

// Obtener la lista de productos
const products = gestor.getProducts();
console.log(products);

const unProducto = gestor.getProductById(2);
console.log(unProducto);
//const unElemento = gestor.getProductById(C0002);
//console.log(unElemento);

