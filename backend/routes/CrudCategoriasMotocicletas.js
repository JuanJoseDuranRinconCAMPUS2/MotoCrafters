import dotenv from 'dotenv';
import mysql from 'mysql2';
import {proxyPCategorias, proxyPutCategorias, proxyDeleteCategorias}  from '../middleware/proxyCategorias.js';
import validation from '../Authentication/Auth.js';
import {Router} from 'express';
const CCategoriasMotocicletas= Router();
dotenv.config();
let con = undefined;
CCategoriasMotocicletas.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CCategoriasMotocicletas.get('/GetCategoriasMotocicletas', validation, (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Categoria_Motocicleta`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = `No hay data disponible en esta BD`;
                res.status(500).send(errorMessage);
            } else {
                data = JSON.stringify(data);
                res.send(JSON.parse(data));
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo post
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CCategoriasMotocicletas.post('/PostCategoriasMotocicletas', validation, proxyPCategorias, (req,res)=>{
    const { nombreCategoria } = req.body;
    con.query(
        /*SQL*/`INSERT INTO Categoria_Motocicleta (Cat_Nombre) VALUES(?);`,
        [nombreCategoria],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al enviar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                res.send("La data a sido enviada correctamente");
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo put
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CCategoriasMotocicletas.put('/PutCategoriasMotocicletas',validation, proxyPutCategorias, (req,res)=>{
    const idCategoria = req.query.idCategoria;
    const {nombreCategoria} = req.body;
    con.query(
        /*SQL*/`UPDATE Categoria_Motocicleta SET Cat_Nombre = ? WHERE Cat_Id = ?;`,
        [nombreCategoria, idCategoria],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La Categoria de motocicleta con el ID ${idCategoria} no existe.`);
                } else {
                    res.send("Los datos han sido actualizados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo delete
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CCategoriasMotocicletas.delete('/DeleteCategoriasMotocicletas', validation, proxyDeleteCategorias, (req,res)=>{
    const idCategoria = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Categoria_Motocicleta WHERE Cat_Id = ?;`,
        [idCategoria],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La Categoria de motocicleta con el ID ${idCategoria} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CCategoriasMotocicletas;