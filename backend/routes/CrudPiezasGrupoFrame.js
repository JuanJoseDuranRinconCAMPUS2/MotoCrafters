import dotenv from 'dotenv';
import mysql from 'mysql2';

import {Router} from 'express';
const CPiezasGrupoFrame= Router();
dotenv.config();
let con = undefined;
CPiezasGrupoFrame.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CPiezasGrupoFrame.get('/GetPiezasGrupoFrame', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Piezas_Grupo_Frame`,
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
CPiezasGrupoFrame.post('/PostPiezasGrupoFrame', (req,res)=>{
    const { Pgf_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Pgf_Id FROM Piezas_Grupo_Frame WHERE Pgf_Id = ${Pgf_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Pgf_Id;
                POSTPiezasGrupoFrame(res,req.body);
            }else {
                POSTPiezasGrupoFrame(res,req.body);
            }
        }
    );
})
function POSTPiezasGrupoFrame(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Piezas_Grupo_Frame SET ?`,
        data,
        (err,data2,fil)=>{
            if (err) {
                const errorMessage = `Error al enviar los datos`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            res.send("La data se ha enviado exitosamente");
        }
    );
}
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo put
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CPiezasGrupoFrame.put('/PutPiezasGrupoFrame', (req,res)=>{
    const idPiezasGrupoFrame = req.query.idPiezasGrupoFrame;
    const PiezasGrupoFrame = req.body;
    con.query(
        /*SQL*/`UPDATE Piezas_Grupo_Frame SET ? WHERE Pgf_Id = ${idPiezasGrupoFrame};`,
        PiezasGrupoFrame,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La pieza del grupo frame de la motocicleta con el ID ${idPiezasGrupoFrame} no existe.`);
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
CPiezasGrupoFrame.delete('/DeletePiezasGrupoFrame', (req,res)=>{
    const idPiezasGrupoFrame = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Piezas_Grupo_Frame WHERE Pgf_Id = ?;`,
        [idPiezasGrupoFrame],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La pieza del grupo frame de la motocicleta con el ID ${idPiezasGrupoFrame} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CPiezasGrupoFrame;