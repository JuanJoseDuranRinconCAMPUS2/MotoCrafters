import dotenv from 'dotenv';
import mysql from 'mysql2';
import { proxyPDuenoMotocicleta, proxyPutDuenoMotocicleta, proxyDeleteDuenoMotocicleta } from '../middleware/proxyDuenoMotocicleta.js';
import {Router} from 'express';
const CDuenoMotocicleta= Router();
dotenv.config();
let con = undefined;
CDuenoMotocicleta.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CDuenoMotocicleta.get('/GetDuenoMotocicleta', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Dueño_Motocicleta`,
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
CDuenoMotocicleta.post('/PostDuenoMotocicleta', proxyPDuenoMotocicleta, (req,res)=>{
    const { Dm_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Dm_Id FROM Dueño_Motocicleta WHERE Dm_Id = ${Dm_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            if (data.length !== 0) {
                delete req.body.Dm_Id;
            } 
            POSTCDueñoMotocicleta(res,req.body);
        }
    );
})
function POSTCDueñoMotocicleta(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Dueño_Motocicleta SET ?`,
        data,
        (err,data2,fil)=>{
            if (err) {
                const errorMessage = `Error al enviar los datos`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            res.send("La data se a enviado exitosamente");
        }
    );
}
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo put
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CDuenoMotocicleta.put('/PutDuenoMotocicleta', proxyPutDuenoMotocicleta, (req,res)=>{
    const idDueñoMotocicleta = req.query.idDueñoMotocicleta;
    const DueñoMotocicleta = req.body;
    con.query(
        /*SQL*/`UPDATE Dueño_Motocicleta SET ? WHERE Dm_Id = ${idDueñoMotocicleta};`,
        DueñoMotocicleta,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El Dueño de la Motocicleta con el ID ${idDueñoMotocicleta} no existe.`);
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
CDuenoMotocicleta.delete('/DeleteDuenoMotocicleta', proxyDeleteDuenoMotocicleta, (req,res)=>{
    const idDueñoMotocicleta = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Dueño_Motocicleta WHERE Dm_Id = ?;`,
        [idDueñoMotocicleta],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El Dueño de la Motocicleta con el ID ${idDueñoMotocicleta} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CDuenoMotocicleta;