// Import Custom Modules.
import { Product } from '../model/Products.js'

class ProductsRepository {

    constructor() {
        this.products = [];
    }

    // Create Product
    create({ name, description, quantity, price }) {
        const product = new Product();
        Object.assign(product, {
            name,
            description,
            quantity,
            price,
            created_at: new Date(),
        });

        this.products.push(product);

    }

    // Delete Product.
    delete({ id }) {
        const productIndex = this.products.findIndex((product) => product.id === id);
        return this.products.splice(productIndex, 1);
    }

    // Update Product Quantity.
    updateQuantity({ id, quantity }) {
        const product = this.products.find((product) => product.id === id);

        product.quantity = parseInt(quantity);
        product.updated_at = new Date();

        const productIndex = this.products.findIndex((_productIndex) => product.id === id);
        Object.assign(this.products[productIndex], product);

        return product;
    }

    // Find product by name.
    findByName({ name }) {
        const product = this.products.find((product) => product.name === name);
        return product;
    }

    // Find product by ID.
    findById({ id }) {
        const product = this.products.find((product) => product.id === id);
        return product;
    }

    // List of Products.
    list() {
        return this.products;
    }

}

export { ProductsRepository }