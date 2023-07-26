import dotenv from 'dotenv';
import mysql from 'mysql2';
import { proxyPEspecialidad, proxyPutEspecialidad, proxyDeleteEspecialidad } from '../middleware/proxyEspecialidad.js';
import {Router} from 'express';
const CEspecialidad= Router();
dotenv.config();
let con = undefined;
CEspecialidad.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CEspecialidad.get('/GetEspecialidad', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Especialidad`,
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
CEspecialidad.post('/PostEspecialidad', proxyPEspecialidad, (req,res)=>{
    const { Esp_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Esp_Id FROM Especialidad WHERE Esp_Id = ${Esp_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            if (data.length !== 0) {
                delete req.body.Esp_Id;
            } 
            POSTEspecialidad(res,req.body);
        }
    );
})
function POSTEspecialidad(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Especialidad SET ?`,
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
CEspecialidad.put('/PutEspecialidad', proxyPutEspecialidad, (req,res)=>{
    const idEspecialidad = req.query.idEspecialidad;
    const Especialidad = req.body;
    con.query(
        /*SQL*/`UPDATE Especialidad SET ? WHERE Esp_Id = ${idEspecialidad};`,
        Especialidad,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La motocicleta en el taller con el ID ${idEspecialidad} no existe.`);
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
CEspecialidad.delete('/DeleteEspecialidad', proxyDeleteEspecialidad, (req,res)=>{
    const idEspecialidad = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Especialidad WHERE Esp_Id = ?;`,
        [idEspecialidad],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La motocicleta en el taller con el ID ${idEspecialidad} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CEspecialidad;