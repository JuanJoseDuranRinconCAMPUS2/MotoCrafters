import dotenv from 'dotenv';
import mysql from 'mysql2';
import {proxyPCatalogo , proxyPutCatalogo, proxyDeleteCatalogo}  from '../middleware/proxyCatalogo.js';
import {Router} from 'express';
const CCatalogo= Router();
dotenv.config();
let con = undefined;
CCatalogo.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CCatalogo.get('/GetCatalogo', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Catalogo`,
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
CCatalogo.post('/PostCatalogo', proxyPCatalogo, (req,res)=>{
    const { Ctl_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Ctl_Id FROM Catalogo WHERE Ctl_Id = ${Ctl_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Ctl_Id;
                POSTCatalogo(res,req.body);
            }else {
                POSTCatalogo(res,req.body);
            }
        }
    );
})
function POSTCatalogo(res,data) {
    con.query(
        /*SQL*/`INSERT INTO Catalogo SET ?`,
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
CCatalogo.put('/PutCatalogo', proxyPutCatalogo, (req,res)=>{
    const idCatalogo = req.query.idCatalogo;
    const Catalogo = req.body;
    con.query(
        /*SQL*/`UPDATE Catalogo SET ? WHERE Ctl_Id = ${idCatalogo};`,
        Catalogo,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El Catalogo de la motocicleta con el ID ${idCatalogo} no existe.`);
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
CCatalogo.delete('/DeleteCatalogo', proxyDeleteCatalogo, (req,res)=>{
    const idCatalogo = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Catalogo WHERE ctl_Id = ?;`,
        [idCatalogo],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El Catalogo de la motocicleta con el ID ${idCatalogo} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CCatalogo;