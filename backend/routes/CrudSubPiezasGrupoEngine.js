import dotenv from 'dotenv';
import mysql from 'mysql2';
import {proxyPSubPiezasGrupoEngine , proxyPutSubPiezasGrupoEngine, proxyDeleteSubPiezasGrupoEngine}  from '../middleware/proxySubPiezasGrupoEngine.js';
import validation from '../Authentication/Auth.js';
import {Router} from 'express';
const CSubPiezasGrupoEngine= Router();
dotenv.config();
let con = undefined;
CSubPiezasGrupoEngine.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CSubPiezasGrupoEngine.get('/GetSubPiezasGrupoEngine', validation, (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM SubPiezas_Grupo_Engine`,
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
CSubPiezasGrupoEngine.post('/PostSubPiezasGrupoEngine', validation, proxyPSubPiezasGrupoEngine, (req,res)=>{
    const { Sge_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Sge_Id FROM SubPiezas_Grupo_Engine WHERE Sge_Id = ${Sge_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Sge_Id;
                POSTSubPiezasGrupoEngine(res,req.body);
            }else {
                POSTSubPiezasGrupoEngine(res,req.body);
            }
        }
    );
})
function POSTSubPiezasGrupoEngine(res,data) {
    con.query(
        /*SQL*/`INSERT INTO SubPiezas_Grupo_Engine SET ?`,
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
CSubPiezasGrupoEngine.put('/PutSubPiezasGrupoEngine', validation, proxyPutSubPiezasGrupoEngine, (req,res)=>{
    const idSubPiezasGrupoEngine = req.query.idSubPiezasGrupoEngine;
    const SubPiezasGrupoEngine = req.body;
    con.query(
        /*SQL*/`UPDATE SubPiezas_Grupo_Engine SET ? WHERE Sge_Id = ${idSubPiezasGrupoEngine};`,
        SubPiezasGrupoEngine,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La subpieza del grupo frame de la motocicleta con el ID ${idSubPiezasGrupoEngine} no existe.`);
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
CSubPiezasGrupoEngine.delete('/DeleteSubPiezasGrupoEngine', validation, proxyDeleteSubPiezasGrupoEngine, (req,res)=>{
    const idSubPiezasGrupoEngine = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM SubPiezas_Grupo_Engine WHERE Sge_Id = ?;`,
        [idSubPiezasGrupoEngine],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La subpieza del grupo frame de la motocicleta con el ID ${idSubPiezasGrupoEngine} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CSubPiezasGrupoEngine;