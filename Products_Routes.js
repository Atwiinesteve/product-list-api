// Importing Modules.
import express from 'express';
import { ProductsRepository } from './repository/productsRepo.js';

// Router
const productRoute = express.Router();

// Products Repository
const productsRepository = new ProductsRepository()

//Getting Products.
productRoute.get('/', (request, response) => {
    const allProducts = productsRepository.list();
    response.status(201).send(allProducts);
});

// Creating a product.
productRoute.post('/', (request, response) => {
    const { name, description, quantity, price } = request.body;

    const productAlreadyExists = productsRepository.findByName({ name });
    if (productAlreadyExists) {
        return response.status(404).send(`Product: ${name} already exists...`)
    }

    productsRepository.create({ name, description, quantity, price });
    return response.status(201).send(`Product(s) ${name} added to database.`);
});

// Finding a Product by ID.
// productRoute.get('/', (request, response) => {});

// Updating a product.
productRoute.patch('/:id', (request, response) => {
    const { id } = request.params;
    const quantity = request.headers;

    const product = productsRepository.findById({ id });
    if (!product) {
        return response.status(404).send('Product not Found.')
    }
    const updatedProduct = productsRepository.updateQuantity({ id, quantity })
    response.status(201).send(updatedProduct)
});

// Deleting a product.
productRoute.delete('/:id', (request, response) => {
    const { id } = request.params;
    const product = productsRepository.findById({ id });

    if (!product) {
        return response.status(404).send('Product not Found ...')
    } else {
        productsRepository.delete({ id });
        return response.status(200).send('Product Successfully Deleted from Database ... ')
    }
});

// Exporting Routes.
export { productRoute };