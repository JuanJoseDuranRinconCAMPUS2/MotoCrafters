import dotenv from 'dotenv';
import mysql from 'mysql2';

import {Router} from 'express';
const CSubPiezasGrupoFrame= Router();
dotenv.config();
let con = undefined;
CSubPiezasGrupoFrame.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CSubPiezasGrupoFrame.get('/GetSubPiezasGrupoFrame', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM SubPiezas_Grupo_Frame`,
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
CSubPiezasGrupoFrame.post('/PostSubPiezasGrupoFrame', (req,res)=>{
    const { Sgf_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Sgf_Id FROM SubPiezas_Grupo_Frame WHERE Sgf_Id = ${Sgf_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Sgf_Id;
                POSTSubPiezasGrupoEngine(res,req.body);
            }else {
                POSTSubPiezasGrupoEngine(res,req.body);
            }
        }
    );
})
function POSTSubPiezasGrupoEngine(res,data) {
    con.query(
        /*SQL*/`INSERT INTO SubPiezas_Grupo_Frame SET ?`,
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
CSubPiezasGrupoFrame.put('/PutSubPiezasGrupoFrame', (req,res)=>{
    const idSubPiezasGrupoFrame = req.query.idSubPiezasGrupoFrame;
    const SubPiezasGrupoFrame = req.body;
    con.query(
        /*SQL*/`UPDATE SubPiezas_Grupo_Frame SET ? WHERE Sgf_Id = ${idSubPiezasGrupoFrame};`,
        SubPiezasGrupoFrame,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La subpieza del grupo frame de la motocicleta con el ID ${idSubPiezasGrupoFrame} no existe.`);
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
CSubPiezasGrupoFrame.delete('/DeleteSubPiezasGrupoFrame', (req,res)=>{
    const idSubPiezasGrupoFrame = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM SubPiezas_Grupo_Frame WHERE Sgf_Id = ?;`,
        [idSubPiezasGrupoFrame],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La subpieza del grupo frame de la motocicleta con el ID ${idSubPiezasGrupoFrame} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CSubPiezasGrupoFrame;