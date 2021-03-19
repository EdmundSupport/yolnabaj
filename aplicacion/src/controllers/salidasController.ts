import {Request, Response} from "express";
import pool from "../database";

class SalidasController {
    public async list(req: Request, res: Response): Promise<void>{
        const salidas = await pool.query('SELECT * FROM cafe.salidas');
        res.json(salidas);
    } 

    public async get(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const salidas = await pool.query('SELECT * FROM cafe.salidas WHERE idsalidas=?',[id]);
        if(salidas.length > 0){
            return res.json(salidas[0]);
        }
        res.status(404).json({text:"La entrada no existe"});
        
        console.log(salidas);
    } 

    public async create(req: Request, res: Response): Promise<void>{
        const salidas = await pool.query('INSERT INTO cafe.salidas SET ?', [req.body]);
        res.json(req.body);
    }

    public async createDet(req: Request, res: Response): Promise<void>{
        const salidas = await pool.query('INSERT INTO cafe.detalleSalida SET ?', [req.body]);
        res.json(JSON.stringify(salidas));
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const detalleEntrada = await pool.query('SELECT * FROM cafe.detalleSalida WHERE idsalidas=?',[id]);
        const salidas = await pool.query('DELETE FROM cafe.salidas WHERE idsalidas=?',[id]);
        
        res.json({text: 'Eliminando un salidas '+salidas});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const salidas = await pool.query('UPDATE cafe.salidas SET ? WHERE idsalidas=?',[req.body, id]);
        res.json(JSON.stringify(salidas));
    }
}

export const salidasController = new SalidasController();