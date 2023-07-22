import dotenv from 'dotenv';
import mysql from 'mysql2';

import {Router} from 'express';
const CPiezasGrupoEngine= Router();
dotenv.config();
let con = undefined;
CPiezasGrupoEngine.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CPiezasGrupoEngine.get('/GetPiezasGrupoEngine', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Piezas_Grupo_Engine`,
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
CPiezasGrupoEngine.post('/PostPiezasGrupoEngine', (req,res)=>{
    const { Pge_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Pge_Id FROM Piezas_Grupo_Engine WHERE Pge_Id = ${Pge_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Pge_Id;
                POSTPiezasGrupoEngine(res,req.body);
            }else {
                POSTPiezasGrupoEngine(res,req.body);
            }
        }
    );
})
function POSTPiezasGrupoEngine(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Piezas_Grupo_Engine SET ?`,
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
CPiezasGrupoEngine.put('/PutPiezasGrupoEngine', (req,res)=>{
    const idPiezasGrupoEngine = req.query.idPiezasGrupoEngine;
    const PiezasGrupoEngine = req.body;
    con.query(
        /*SQL*/`UPDATE Piezas_Grupo_Engine SET ? WHERE Pge_Id = ${idPiezasGrupoEngine};`,
        PiezasGrupoEngine,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El Catalogo de la motocicleta con el ID ${idPiezasGrupoEngine} no existe.`);
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
CPiezasGrupoEngine.delete('/DeletePiezasGrupoEngine', (req,res)=>{
    const idPiezasGrupoEngine = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Piezas_Grupo_Engine WHERE Pge_Id = ?;`,
        [idPiezasGrupoEngine],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El Catalogo de la motocicleta con el ID ${idPiezasGrupoEngine} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CPiezasGrupoEngine;