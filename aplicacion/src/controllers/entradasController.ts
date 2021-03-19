import {Request, Response} from "express";
import pool from "../database";

class EntradasController {
    public async list(req: Request, res: Response): Promise<void>{
        const entradas = await pool.query('SELECT * FROM cafe.entradas');
        res.json(entradas);
    } 

    public async get(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const entradas = await pool.query('SELECT * FROM cafe.entradas WHERE identradas=?',[id]);
        if(entradas.length > 0){
            return res.json(entradas[0]);
        }
        res.status(404).json({text:"La entrada no existe"});
        
        console.log(entradas);
    } 

    public async create(req: Request, res: Response): Promise<void>{
        const entradas = await pool.query('INSERT INTO cafe.entradas SET ?', [req.body]);
        res.json(entradas);
    }

    public async createDet(req: Request, res: Response): Promise<void>{
        const entradas = await pool.query('INSERT INTO cafe.detalleEntrada SET ?', [req.body]);
        res.json(JSON.stringify(entradas));
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const detalleEntrada = await pool.query('SELECT * FROM cafe.detalleEntrada WHERE identradas=?',[id]);
        const entradas = await pool.query('DELETE FROM cafe.entradas WHERE identradas=?',[id]);
        
        res.json({text: 'Eliminando un entradas '+entradas});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const entradas = await pool.query('UPDATE cafe.entradas SET ? WHERE identradas=?',[req.body, id]);
        res.json(JSON.stringify(entradas));
    }
}

export const entradasController = new EntradasController();