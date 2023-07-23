import dotenv from 'dotenv';
import mysql from 'mysql2';
import {proxyPTiposM, proxyPutTiposM, proxyDeleteTiposM}  from '../middleware/proxyTiposMotocicletas.js';
import {Router} from 'express';
const CTiposMotocicletas= Router();
dotenv.config();
let con = undefined;
CTiposMotocicletas.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CTiposMotocicletas.get('/GetTiposMotocicletas', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Tipo_Motocicleta`,
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
CTiposMotocicletas.post('/PostTiposMotocicletas', proxyPTiposM, (req,res)=>{
    const { nombreTipo } = req.body;
    con.query(
        /*SQL*/`INSERT INTO Tipo_Motocicleta (Tpo_Nombre) VALUES(?);`,
        [nombreTipo],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al enviar la data`;
                res.status(500).send(errorMessage, err.message);
            } else {
                res.send("La data a sido enviada correctamente");
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo put
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CTiposMotocicletas.put('/PutTiposMotocicletas', proxyPutTiposM, (req,res)=>{
    const idTipos = req.query.idTipos;
    const {nombreTipo} = req.body;
    con.query(
        /*SQL*/`UPDATE Tipo_Motocicleta SET Tpo_Nombre = ? WHERE Tpo_Id = ?;`,
        [nombreTipo, idTipos],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(errorMessage);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`el tipo de motocicleta con el ID ${idTipos} no existe.`);
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
CTiposMotocicletas.delete('/DeleteTiposMotocicletas', proxyDeleteTiposM, (req,res)=>{
    const idTipos = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Tipo_Motocicleta WHERE Tpo_Id = ?;`,
        [idTipos],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(errorMessage);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`el tipo de motocicleta con el ID ${idTipos} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

export default CTiposMotocicletas;