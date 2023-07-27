import dotenv from 'dotenv';
import mysql from 'mysql2';
import { proxyPTipoIdentificacion, proxyPutTipoIdentificacion, proxyDeleteTipoIdentificacion} from '../middleware/proxyTipoIdentificacion.js';
import validation from '../Authentication/Auth.js';
import {Router} from 'express';
const CTipoIdentificacion= Router();
dotenv.config();
let con = undefined;
CTipoIdentificacion.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CTipoIdentificacion.get('/GetTipoIdentificacion', validation, (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Tipo_Identificacion`,
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
CTipoIdentificacion.post('/PostTipoIdentificacion', validation, proxyPTipoIdentificacion, (req,res)=>{
    const { Td_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Td_Id FROM Tipo_Identificacion WHERE Td_Id = ${Td_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            if (data.length !== 0) {
                delete req.body.Td_Id;
            } 
            POSTTipoIdentificacion(res,req.body);
        }
    );
})
function POSTTipoIdentificacion(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Tipo_Identificacion SET ?`,
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
CTipoIdentificacion.put('/PutTipoIdentificacion', validation, proxyPutTipoIdentificacion, (req,res)=>{
    const idTipoIdentificacion = req.query.idTipoIdentificacion;
    const TipoIdentificacion = req.body;
    con.query(
        /*SQL*/`UPDATE Tipo_Identificacion SET ? WHERE Td_Id = ${idTipoIdentificacion};`,
        TipoIdentificacion,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La Tipo de Identificacion con el ID ${idTipoIdentificacion} no existe.`);
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
CTipoIdentificacion.delete('/DeleteTipoIdentificacion', validation, proxyDeleteTipoIdentificacion, (req,res)=>{
    const idTipoIdentificacion = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Tipo_Identificacion WHERE Td_Id = ?;`,
        [idTipoIdentificacion],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El tipo de Identificacion con el ID ${idTipoIdentificacion} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CTipoIdentificacion;