import dotenv from 'dotenv';
import mysql from 'mysql2';

import {Router} from 'express';
const CColores= Router();
dotenv.config();
let con = undefined;
CColores.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CColores.get('/GetColores', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM Colores`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = `Ninguno`;
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
CColores.post('/PostColores', (req,res)=>{
    const valoresColores = Object.values(req.body);
    const coloresJSON = {};    
    valoresColores.forEach((color, index) => {
        const colorKey = `color${index + 1}`;
        coloresJSON[colorKey] = color;
      });
    const JsonData = JSON.stringify(coloresJSON);
    con.query(
        /*SQL*/`INSERT INTO Colores (Cl_DisColores) VALUES(?);`,
        [JsonData],
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
CColores.put('/PutColores', (req,res)=>{
    const valoresColores = Object.values(req.body);
    const idColor = req.query.idColor;
    const coloresJSON = {};    
    valoresColores.forEach((color, index) => {
        const colorKey = `color${index + 1}`;
        coloresJSON[colorKey] = color;
      });
    const JsonData = JSON.stringify(coloresJSON);
    con.query(
        /*SQL*/`UPDATE Colores SET Cl_DisColores = ? WHERE Cl_Id = ?;`,
        [JsonData, idColor],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(errorMessage);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send("El color con el ID especificado no existe.");
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
CColores.delete('/DeleteColores', (req,res)=>{
    const idColor = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM Colores WHERE Cl_Id = ?;`,
        [idColor],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(errorMessage);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send("El color con el ID especificado no existe.");
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

export default CColores;