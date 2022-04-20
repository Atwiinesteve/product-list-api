// Importing Modules.
import express from "express";

// Importing Custom Routes.
import { productRoute } from "./Products_Routes.js";

// Server Application.
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware.
app.use(express.json());

// Initial Route.
app.use('/products', productRoute);

// Server Initialization.
app.listen(PORT, () => { console.log(`Server Application Running at http://localhost:${PORT}`); });