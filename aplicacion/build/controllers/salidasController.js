"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.salidasController = void 0;
const database_1 = __importDefault(require("../database"));
class SalidasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const salidas = yield database_1.default.query('SELECT * FROM cafe.salidas');
            res.json(salidas);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const salidas = yield database_1.default.query('SELECT * FROM cafe.salidas WHERE idsalidas=?', [id]);
            if (salidas.length > 0) {
                return res.json(salidas[0]);
            }
            res.status(404).json({ text: "La entrada no existe" });
            console.log(salidas);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const salidas = yield database_1.default.query('INSERT INTO cafe.salidas SET ?', [req.body]);
            res.json(req.body);
        });
    }
    createDet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const salidas = yield database_1.default.query('INSERT INTO cafe.detalleSalida SET ?', [req.body]);
            res.json(JSON.stringify(salidas));
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const detalleEntrada = yield database_1.default.query('SELECT * FROM cafe.detalleSalida WHERE idsalidas=?', [id]);
            const salidas = yield database_1.default.query('DELETE FROM cafe.salidas WHERE idsalidas=?', [id]);
            res.json({ text: 'Eliminando un salidas ' + salidas });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const salidas = yield database_1.default.query('UPDATE cafe.salidas SET ? WHERE idsalidas=?', [req.body, id]);
            res.json(JSON.stringify(salidas));
        });
    }
}
exports.salidasController = new SalidasController();
