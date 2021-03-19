"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salidasController_1 = require("../controllers/salidasController");
class SalidaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', salidasController_1.salidasController.list);
        this.router.get('/:id', salidasController_1.salidasController.get);
        this.router.post('/', salidasController_1.salidasController.create);
        this.router.delete('/:id', salidasController_1.salidasController.delete);
        this.router.put('/:id', salidasController_1.salidasController.update);
    }
}
const salidasRoutes = new SalidaRoutes();
exports.default = salidasRoutes.router;
