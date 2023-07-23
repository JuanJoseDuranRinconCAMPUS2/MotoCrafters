import dotenv from 'dotenv';
import mysql from 'mysql2';

import {Router} from 'express';
const CMecanico= Router();
dotenv.config();
let con = undefined;
CMecanico.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CMecanico.get('/GetMecanico', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Mecanico`,
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
CMecanico.post('/PostMecanico', (req,res)=>{
    const { Mec_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Mec_Id FROM Mecanico WHERE Mec_Id = ${Mec_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            if (data.length !== 0) {
                delete req.body.Mec_Id;
            } 
            POSTMecanico(res,req.body);
        }
    );
})
function POSTMecanico(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Mecanico SET ?`,
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
CMecanico.put('/PutMecanico', (req,res)=>{
    const idMecanico = req.query.idMecanico;
    const Mecanico = req.body;
    con.query(
        /*SQL*/`UPDATE Mecanico SET ? WHERE Mec_Id = ${idMecanico};`,
        Mecanico,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El mecanico con el ID ${idMecanico} no existe.`);
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
CMecanico.delete('/DeleteMecanico', (req,res)=>{
    const idMecanico = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Mecanico WHERE Mec_Id = ?;`,
        [idMecanico],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El mecanico con el ID ${idMecanico} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CMecanico;