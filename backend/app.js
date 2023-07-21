import dotnev from 'dotenv';
import express from 'express';
import CColores from './routes/CrudColores.js';
console.clear();
dotnev.config();

const MotoApi = express();
MotoApi.use(express.json());
MotoApi.use("/Colores", CColores);

const config = JSON.parse(process.env.MY_CONFIG);
MotoApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})