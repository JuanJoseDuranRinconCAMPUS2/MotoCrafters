import dotenv from 'dotenv';
import mysql from 'mysql2';
import { proxyPMotocicletasEnTaller, proxyPutMotocicletasEnTaller, proxyDeleteMotocicletasEnTaller } from '../middleware/proxyMotocicletasEnTaller.js';
import validation from '../Authentication/Auth.js';
import {Router} from 'express';
const CMotocicletasEnTaller= Router();
dotenv.config();
let con = undefined;
CMotocicletasEnTaller.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CMotocicletasEnTaller.get('/GetMotocicletasEnTaller', validation, (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Motocicleta_En_Taller`,
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
CMotocicletasEnTaller.post('/PostMotocicletasEnTaller', validation, proxyPMotocicletasEnTaller, (req,res)=>{
    const { Met_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Met_Id FROM Motocicleta_En_Taller WHERE Met_Id = ${Met_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            if (data.length !== 0) {
                delete req.body.Met_Id;
            } 
            POSTMotocicletasEnTaller(res,req.body);
        }
    );
})
function POSTMotocicletasEnTaller(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Motocicleta_En_Taller SET ?`,
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
CMotocicletasEnTaller.put('/PutMotocicletasEnTaller', validation, proxyPutMotocicletasEnTaller, (req,res)=>{
    const idMotocicletasEnTaller = req.query.idMotocicletasEnTaller;
    const MotocicletasEnT = req.body;
    con.query(
        /*SQL*/`UPDATE Motocicleta_En_Taller SET ? WHERE Met_Id = ${idMotocicletasEnTaller};`,
        MotocicletasEnT,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La motocicleta en el taller con el ID ${idMotocicletasEnTaller} no existe.`);
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
CMotocicletasEnTaller.delete('/DeleteMotocicletasEnTaller', validation, proxyDeleteMotocicletasEnTaller, (req,res)=>{
    const idMotocicletasEnTaller = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Motocicleta_En_Taller WHERE Met_Id = ?;`,
        [idMotocicletasEnTaller],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La motocicleta en el taller con el ID ${idMotocicletasEnTaller} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CMotocicletasEnTaller;