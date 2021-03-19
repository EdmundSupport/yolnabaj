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
exports.entradasController = void 0;
const database_1 = __importDefault(require("../database"));
class EntradasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entradas = yield database_1.default.query('SELECT * FROM cafe.entradas');
            res.json(entradas);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const entradas = yield database_1.default.query('SELECT * FROM cafe.entradas WHERE identradas=?', [id]);
            if (entradas.length > 0) {
                return res.json(entradas[0]);
            }
            res.status(404).json({ text: "La entrada no existe" });
            console.log(entradas);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entradas = yield database_1.default.query('INSERT INTO cafe.entradas SET ?', [req.body]);
            res.json(entradas);
        });
    }
    createDet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entradas = yield database_1.default.query('INSERT INTO cafe.detalleEntrada SET ?', [req.body]);
            res.json(JSON.stringify(entradas));
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const detalleEntrada = yield database_1.default.query('SELECT * FROM cafe.detalleEntrada WHERE identradas=?', [id]);
            const entradas = yield database_1.default.query('DELETE FROM cafe.entradas WHERE identradas=?', [id]);
            res.json({ text: 'Eliminando un entradas ' + entradas });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const entradas = yield database_1.default.query('UPDATE cafe.entradas SET ? WHERE identradas=?', [req.body, id]);
            res.json(JSON.stringify(entradas));
        });
    }
}
exports.entradasController = new EntradasController();
