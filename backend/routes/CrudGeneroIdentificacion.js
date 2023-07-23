import dotenv from 'dotenv';
import mysql from 'mysql2';

import {Router} from 'express';
const CGeneroIdentificacion= Router();
dotenv.config();
let con = undefined;
CGeneroIdentificacion.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CGeneroIdentificacion.get('/GetGeneroIdentificacion', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Genero_Identificacion`,
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
CGeneroIdentificacion.post('/PostGeneroIdentificacion', (req,res)=>{
    const { Gt_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Gt_Id FROM Genero_Identificacion WHERE Gt_Id = ${Gt_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            if (data.length !== 0) {
                delete req.body.Gt_Id;
            } 
            POSTGeneroIdentificacion(res,req.body);
        }
    );
})
function POSTGeneroIdentificacion(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Genero_Identificacion SET ?`,
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
CGeneroIdentificacion.put('/PutGeneroIdentificacion', (req,res)=>{
    const idGeneroIdentificacion = req.query.idGeneroIdentificacion;
    const GeneroIdentificacion = req.body;
    con.query(
        /*SQL*/`UPDATE Genero_Identificacion SET ? WHERE Gt_Id = ${idGeneroIdentificacion};`,
        GeneroIdentificacion,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El genero con el ID ${idGeneroIdentificacion} no existe.`);
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
CGeneroIdentificacion.delete('/DeleteGeneroIdentificacion', (req,res)=>{
    const idGeneroIdentificacion = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Genero_Identificacion WHERE Gt_Id = ?;`,
        [idGeneroIdentificacion],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El genero con el ID ${idGeneroIdentificacion} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CGeneroIdentificacion;