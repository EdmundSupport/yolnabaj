import { Router } from "express";
import { entradasController } from "../controllers/entradasController";

class EntradaRoutes {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', entradasController.list);
        this.router.get('/:id', entradasController.get);
        this.router.post('/', entradasController.create);
        this.router.delete('/:id',entradasController.delete);
        this.router.put('/:id',entradasController.update);
    }
}

const entradasRoutes = new EntradaRoutes();
export default entradasRoutes.router;