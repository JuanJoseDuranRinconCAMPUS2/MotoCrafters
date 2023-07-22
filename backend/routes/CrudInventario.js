import dotenv from 'dotenv';
import mysql from 'mysql2';

import {Router} from 'express';
const CInventario= Router();
dotenv.config();
let con = undefined;
CInventario.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CInventario.get('/GetInventario', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Inventario`,
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
CInventario.post('/PostInventario', (req,res)=>{
    const { Inv_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Inv_Id FROM Inventario WHERE Inv_Id = ${Inv_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Inv_Id;
                POSTInventario(res,req.body);
            }else {
                POSTInventario(res,req.body);
            }
        }
    );
})
function POSTInventario(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Inventario SET ?`,
        data,
        (err,data2,fil)=>{
            if (err) {
                const errorMessage = `Error al enviar los datos`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            res.send("La data se a enviado exitosamente");
        }
    );
}
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo put
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CInventario.put('/PutInventario', (req,res)=>{
    const idInventario = req.query.idInventario;
    const Inventario = req.body;
    con.query(
        /*SQL*/`UPDATE Inventario SET ? WHERE Inv_Id = ${idInventario};`,
        Inventario,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El Inventario con el ID ${idInventario} no existe.`);
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
CInventario.delete('/DeleteInventario', (req,res)=>{
    const idInventario = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Inventario WHERE Inv_Id = ?;`,
        [idInventario],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El Inventario con el ID ${idInventario} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CInventario;