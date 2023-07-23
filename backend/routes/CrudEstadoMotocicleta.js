import dotenv from 'dotenv';
import mysql from 'mysql2';

import {Router} from 'express';
const CEstadoMotocicleta= Router();
dotenv.config();
let con = undefined;
CEstadoMotocicleta.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CEstadoMotocicleta.get('/GetEstadoMotocicleta', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Estado_Motocicleta`,
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
CEstadoMotocicleta.post('/PostEstadoMotocicleta', (req,res)=>{
    const { Em_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Em_Id FROM Estado_Motocicleta WHERE Em_Id = ${Em_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            if (data.length !== 0) {
                delete req.body.Em_Id;
            } 
            POSTEstadoMotocicleta(res,req.body);
        }
    );
})
function POSTEstadoMotocicleta(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Estado_Motocicleta SET ?`,
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
CEstadoMotocicleta.put('/PutEstadoMotocicleta', (req,res)=>{
    const idEstadoMotocicleta = req.query.idEstadoMotocicleta;
    const EstadoMotocicleta = req.body;
    con.query(
        /*SQL*/`UPDATE Estado_Motocicleta SET ? WHERE Em_Id = ${idEstadoMotocicleta};`,
        EstadoMotocicleta,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El Estado de la Motocicleta en el taller con el ID ${idEstadoMotocicleta} no existe.`);
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
CEstadoMotocicleta.delete('/DeleteEstadoMotocicleta', (req,res)=>{
    const idEstadoMotocicleta = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Estado_Motocicleta WHERE Em_Id = ?;`,
        [idEstadoMotocicleta],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El Estado de la Motocicleta en el taller con el ID ${idEstadoMotocicleta} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CEstadoMotocicleta;