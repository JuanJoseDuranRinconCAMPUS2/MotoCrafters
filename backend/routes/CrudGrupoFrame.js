import dotenv from 'dotenv';
import mysql from 'mysql2';
import {proxyPGrupoFrame , proxyPutGrupoFrame, proxyDeleteGrupoFrame}  from '../middleware/proxyGrupoFrame.js';
import {Router} from 'express';
const CGrupoFrame= Router();
dotenv.config();
let con = undefined;
CGrupoFrame.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CGrupoFrame.get('/GetGrupoFrame', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Grupo_Frame`,
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
CGrupoFrame.post('/PostGrupoFrame', proxyPGrupoFrame, (req,res)=>{
    const { Gf_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Gf_Id FROM Grupo_Frame WHERE Gf_Id = ${Gf_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Gf_Id;
                POSTGrupoFrame(res,req.body);
            }else {
                POSTGrupoFrame(res,req.body);
            }
        }
    );
})
function POSTGrupoFrame(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Grupo_Frame SET ?`,
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
CGrupoFrame.put('/PutGrupoFrame', proxyPutGrupoFrame, (req,res)=>{
    const idGrupoF = req.query.idGrupoF;
    const grupoF = req.body;
    con.query(
        /*SQL*/`UPDATE Grupo_Frame SET ? WHERE Gf_Id = ${idGrupoF};`,
        grupoF,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El grupo Frame de la motocicleta con el ID ${idGrupoF} no existe.`);
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
CGrupoFrame.delete('/DeleteGrupoFrame', proxyDeleteGrupoFrame, (req,res)=>{
    const idGrupoF = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Grupo_Frame WHERE Gf_Id = ?;`,
        [idGrupoF],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El grupo Frame de la motocicleta con el ID ${idGrupoF} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CGrupoFrame;