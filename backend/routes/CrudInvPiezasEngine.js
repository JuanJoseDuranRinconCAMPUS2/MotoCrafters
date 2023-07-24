import dotenv from 'dotenv';
import mysql from 'mysql2';
import {proxyPInvPiezasEngine , proxyPutInvPiezasEngine, proxyDeleteInvPiezasEngine}  from '../middleware/proxyInvPiezasEngine.js';
import {Router} from 'express';
const CInvPiezasEngine= Router();
dotenv.config();
let con = undefined;
CInvPiezasEngine.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CInvPiezasEngine.get('/GetInvPiezasEngine', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Inv_Piezas_Engine`,
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
CInvPiezasEngine.post('/PostInvPiezasEngine', proxyPInvPiezasEngine, (req,res)=>{
    const { Ipe_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Ipe_Id FROM Inv_Piezas_Engine WHERE Ipe_Id = ${Ipe_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Ipe_Id;
                POSTInvPiezasEngine(res,req.body);
            }else {
                POSTInvPiezasEngine(res,req.body);
            }
        }
    );
})
function POSTInvPiezasEngine(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Inv_Piezas_Engine SET ?`,
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
CInvPiezasEngine.put('/PutInvPiezasEngine', proxyPutInvPiezasEngine, (req,res)=>{
    const idInvPiezasE = req.query.idInvPiezasE;
    const InvPiezasE = req.body;
    con.query(
        /*SQL*/`UPDATE Inv_Piezas_Engine SET ? WHERE Ipe_Id = ${idInvPiezasE};`,
        InvPiezasE,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La pieza del grupo Engine en el inventario con el ID ${idInvPiezasE} no existe.`);
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
CInvPiezasEngine.delete('/DeleteInvPiezasEngine', proxyDeleteInvPiezasEngine, (req,res)=>{
    const idInvPiezasE = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Inv_Piezas_Engine WHERE Ipe_Id = ?;`,
        [idInvPiezasE],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La pieza del grupo Engine en el inventario con el ID ${idInvPiezasE} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CInvPiezasEngine;