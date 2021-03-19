"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = require("../controllers/productosController");
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productosController_1.productosController.list);
        this.router.get('/:id', productosController_1.productosController.get);
        this.router.post('/', productosController_1.productosController.create);
        this.router.delete('/:id', productosController_1.productosController.delete);
        this.router.put('/:id', productosController_1.productosController.update);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
