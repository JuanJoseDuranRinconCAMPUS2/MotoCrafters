import dotenv from 'dotenv';
import mysql from 'mysql2';
import { proxyPInvPiezasFrame, proxyPutInvPiezasFrame, proxyDeleteInvPiezasFrame } from '../middleware/proxyInvPiezasFrame.js';
import {Router} from 'express';
const CInvPiezasFrame= Router();
dotenv.config();
let con = undefined;
CInvPiezasFrame.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CInvPiezasFrame.get('/GetInvPiezasFrame', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Inv_Piezas_Frame`,
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
CInvPiezasFrame.post('/PostInvPiezasFrame', proxyPInvPiezasFrame, (req,res)=>{
    const { Ipf_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Ipf_Id FROM Inv_Piezas_Frame WHERE Ipf_Id = ${Ipf_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            if (data.length !== 0) {
                delete req.body.Ipf_Id;
            } 
            POSTInvPiezasFrame(res,req.body);
        }
    );
})
function POSTInvPiezasFrame(res,data) {
    console.log(data);
    con.query(
        /*SQL*/`INSERT INTO Inv_Piezas_Frame SET ?`,
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
CInvPiezasFrame.put('/PutInvPiezasFrame', proxyPutInvPiezasFrame, (req,res)=>{
    const idInvPiezasF = req.query.idInvPiezasF;
    const InvPiezasF = req.body;
    con.query(
        /*SQL*/`UPDATE Inv_Piezas_Frame SET ? WHERE Ipf_Id = ${idInvPiezasF};`,
        InvPiezasF,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La pieza del grupo Frame en el inventario con el ID ${idInvPiezasF} no existe.`);
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
CInvPiezasFrame.delete('/DeleteInvPiezasFrame', proxyDeleteInvPiezasFrame, (req,res)=>{
    const idInvPiezasF = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Inv_Piezas_Frame WHERE Ipf_Id = ?;`,
        [idInvPiezasF],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La pieza del grupo Frame en el inventario con el ID ${idInvPiezasF} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CInvPiezasFrame;