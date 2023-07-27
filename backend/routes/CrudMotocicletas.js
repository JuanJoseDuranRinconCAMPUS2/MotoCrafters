import dotenv from 'dotenv';
import mysql from 'mysql2';
import {proxyPMotocicletas , proxyPutMotocicletas, proxyDeleteMotocicletas}  from '../middleware/proxyMotocicletas.js';
import validation from '../Authentication/Auth.js';
import {Router} from 'express';
const CMotocicletas= Router();
dotenv.config();
let con = undefined;
CMotocicletas.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CMotocicletas.get('/GetMotocicletas', validation, (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Motocicleta`,
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
CMotocicletas.post('/PostMotocicletas', validation, proxyPMotocicletas, (req,res)=>{
    const { Mto_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Mto_Id FROM Motocicleta WHERE Mto_Id = ${Mto_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Mto_Id;
                POSTMotocicletas(res,req.body);
            }else {
                POSTMotocicletas(res,req.body);
            }
        }
    );
})
function POSTMotocicletas(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Motocicleta SET ?`,
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
CMotocicletas.put('/PutMotocicletas', validation, proxyPutMotocicletas, (req,res)=>{
    const idMotocicletas = req.query.idMotocicleta;
    const Motocicleta = req.body;
    con.query(
        /*SQL*/`UPDATE Motocicleta SET ? WHERE Mto_Id = ${idMotocicletas};`,
        Motocicleta,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La motocicleta con el ID ${idMotocicletas} no existe.`);
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
CMotocicletas.delete('/DeleteMotocicletas', validation, proxyDeleteMotocicletas, (req,res)=>{
    const idMotocicletas = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Motocicleta WHERE Mto_Id = ?;`,
        [idMotocicletas],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La motocicleta con el ID ${idMotocicletas} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CMotocicletas;