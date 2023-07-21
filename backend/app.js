import dotnev from 'dotenv';
import express from 'express';
import CColores from './routes/CrudColores.js';
import CMarca from './routes/CrudMarca.js';
import CTiposMotocicletas from './routes/CrudTiposMotocicletas.js';
console.clear();
dotnev.config();

const MotoApi = express();
MotoApi.use(express.json());

// Endpoint con los cruds de las tablas de la base de datos
// ════════ ⋆★⋆ ════════
MotoApi.use("/Colores", CColores);
MotoApi.use("/Marcas", CMarca);
MotoApi.use("/TiposMotocicletas", CTiposMotocicletas);
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
MotoApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})