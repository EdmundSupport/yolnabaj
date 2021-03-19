import { Router } from "express";
import { salidasController } from "../controllers/salidasController";

class SalidaRoutes {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', salidasController.list);
        this.router.get('/:id', salidasController.get);
        this.router.post('/', salidasController.create);
        this.router.delete('/:id',salidasController.delete);
        this.router.put('/:id',salidasController.update);
    }
}

const salidasRoutes = new SalidaRoutes();
export default salidasRoutes.router;