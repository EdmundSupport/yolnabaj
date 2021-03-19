import {Request, Response} from "express";

class IndexController {
    index(reg: Request, res: Response){
        res.json({tex: 'API Is /api/productos'});
    } 
}

export const indexController = new IndexController();