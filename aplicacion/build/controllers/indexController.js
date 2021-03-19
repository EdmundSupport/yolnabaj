"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(reg, res) {
        res.json({ tex: 'API Is /api/productos' });
    }
}
exports.indexController = new IndexController();
