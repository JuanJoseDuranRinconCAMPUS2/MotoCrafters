import dotenv from 'dotenv';
import mysql from 'mysql2';

import {Router} from 'express';
const CHistorialMotocicleta= Router();
dotenv.config();
let con = undefined;
CHistorialMotocicleta.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CHistorialMotocicleta.get('/GetHistorialMotocicleta', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Historial_Motocicleta`,
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
CHistorialMotocicleta.post('/PostHistorialMotocicleta', (req,res)=>{
    const { Hm_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Hm_Id FROM Historial_Motocicleta WHERE Hm_Id = ${Hm_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            if (data.length !== 0) {
                delete req.body.Hm_Id;
            } 
            POSTHistorialMotocicleta(res,req.body);
        }
    );
})
function POSTHistorialMotocicleta(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Historial_Motocicleta SET ?`,
        data,
        (err,data2,fil)=>{
            if (err) {
                const errorMessage = `Error al enviar los datos`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            res.send("La data se ha enviado exitosamente");
        }
    );
}
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo put
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CHistorialMotocicleta.put('/PutHistorialMotocicleta', (req,res)=>{
    const idHistorialMotocicleta = req.query.idHistorialMotocicleta;
    const HistorialMotocicleta = req.body;
    con.query(
        /*SQL*/`UPDATE Historial_Motocicleta SET ? WHERE Hm_Id = ${idHistorialMotocicleta};`,
        HistorialMotocicleta,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El historial de la motocicleta con el ID ${idHistorialMotocicleta} no existe.`);
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
CHistorialMotocicleta.delete('/DeleteHistorialMotocicleta', (req,res)=>{
    const idHistorialMotocicleta = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Historial_Motocicleta WHERE Hm_Id = ?;`,
        [idHistorialMotocicleta],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El historial de la motocicleta con el ID ${idHistorialMotocicleta} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CHistorialMotocicleta;