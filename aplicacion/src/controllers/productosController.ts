import {Request, Response} from "express";
import pool from "../database";

class ProductosController {
    public async list(req: Request, res: Response): Promise<void>{
        const productos = await pool.query('SELECT * FROM cafe.productos');
        res.json(productos);
    } 

    public async get(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const productos = await pool.query('SELECT * FROM cafe.productos WHERE idproductos=?',[id]);
        if(productos.length > 0){
            return res.json(productos[0]);
        }
        res.status(404).json({text:"El juego no existe"});
        
        console.log(productos);
    } 

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO cafe.productos SET ?', [req.body]);
        res.json({text: 'Creando un producto'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const productos = await pool.query('DELETE FROM cafe.productos WHERE idproductos=?',[id]);
        
        res.json({text: 'Eliminando un productos '+productos});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const productos = await pool.query('UPDATE cafe.productos SET ? WHERE idproductos=?',[req.body, id]);
        res.json({text: 'Actualizando un producto' + req.params.id});
    }
}

export const productosController = new ProductosController();