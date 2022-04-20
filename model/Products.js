// Importing Modules.
import { v4 as uuid } from "uuid";

// Product Class
class Product {

    id;
    name;
    decription;
    quantity;
    price;
    created_at;
    updated_at;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

// Exporting
export { Product }