import dotenv from 'dotenv';
import mysql from 'mysql2';
import {proxyPMarca, proxyPutMarca, proxyDeleteMarca}  from '../middleware/proxyMarca.js';
import validation from '../Authentication/Auth.js';
import {Router} from 'express';
const CMarca= Router();
dotenv.config();
let con = undefined;
CMarca.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CMarca.get('/GetMarcas', validation, (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Marca`,
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
CMarca.post('/PostMarcas', validation, proxyPMarca, (req,res)=>{
    const { nombreMarca } = req.body;
    con.query(
        /*SQL*/`INSERT INTO Marca (Mrc_Nombre) VALUES(?);`,
        [nombreMarca],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al enviar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                res.send("La data a sido enviada correctamente");
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo put
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CMarca.put('/PutMarcas', validation, proxyPutMarca, (req,res)=>{
    const idMarca = req.query.idMarca;
    const {nombreMarca} = req.body;
    con.query(
        /*SQL*/`UPDATE Marca SET Mrc_Nombre = ? WHERE Mrc_Id = ?;`,
        [nombreMarca, idMarca],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La marca con el ID ${idMarca} no existe.`);
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
CMarca.delete('/DeleteMarcas', validation, proxyDeleteMarca, (req,res)=>{
    const idMarca = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Marca WHERE Mrc_Id = ?;`,
        [idMarca],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La marca con el ID ${idMarca} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CMarca;