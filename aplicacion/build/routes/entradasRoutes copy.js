"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entradasController_1 = require("../controllers/entradasController");
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', entradasController_1.entradasController.list);
        this.router.get('/:id', entradasController_1.entradasController.get);
        this.router.post('/', entradasController_1.entradasController.create);
        this.router.delete('/:id', entradasController_1.entradasController.delete);
        this.router.put('/:id', entradasController_1.entradasController.update);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
