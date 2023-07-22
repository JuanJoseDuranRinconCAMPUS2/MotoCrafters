import dotenv from 'dotenv';
import mysql from 'mysql2';

import {Router} from 'express';
const CGrupoEngine= Router();
dotenv.config();
let con = undefined;
CGrupoEngine.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CGrupoEngine.get('/GetGrupoEngine', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Grupo_Engine`,
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
CGrupoEngine.post('/PostGrupoEngine', (req,res)=>{
    const { Ge_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Ge_Id FROM Grupo_Engine WHERE Ge_Id = ${Ge_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Ge_Id;
                POSTGrupoEngine(res,req.body);
            }else {
                POSTGrupoEngine(res,req.body);
            }
        }
    );
})
function POSTGrupoEngine(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Grupo_Engine SET ?`,
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
CGrupoEngine.put('/PutGrupoEngine', (req,res)=>{
    const idGrupoE = req.query.idGrupoE;
    const grupoE = req.body;
    con.query(
        /*SQL*/`UPDATE Grupo_Engine SET ? WHERE Ge_Id = ${idGrupoE};`,
        grupoE,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El grupo Engine de la motocicleta con el ID ${idGrupoE} no existe.`);
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
CGrupoEngine.delete('/DeleteGrupoEngine', (req,res)=>{
    const idGrupoF = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Grupo_Engine WHERE Ge_Id = ?;`,
        [idGrupoF],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El grupo Engine de la motocicleta con el ID ${idGrupoF} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CGrupoEngine;