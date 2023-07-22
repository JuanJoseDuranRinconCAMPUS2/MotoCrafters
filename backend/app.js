import dotnev from 'dotenv';
import express from 'express';
import CColores from './routes/CrudColores.js';
import CMarca from './routes/CrudMarca.js';
import CTiposMotocicletas from './routes/CrudTiposMotocicletas.js';
import CCategoriasMotocicletas from './routes/CrudCategoriasMotocicletas.js';
import CMotocicletas from './routes/CrudMotocicletas.js';
import CGrupoFrame from './routes/CrudGrupoFrame.js';
import CGrupoEngine from './routes/CrudGrupoEngine.js';
import CCatalogo from './routes/CrudCatalogo.js';
CGrupoEngine
console.clear();
dotnev.config();

const MotoApi = express();
MotoApi.use(express.json());

// Endpoint con los cruds de las tablas de la base de datos
// ════════ ⋆★⋆ ════════
MotoApi.use("/Colores", CColores);
MotoApi.use("/Marcas", CMarca);
MotoApi.use("/TiposMotocicletas", CTiposMotocicletas);
MotoApi.use("/CategoriasMotocicletas", CCategoriasMotocicletas);
MotoApi.use("/Motocicletas", CMotocicletas);
MotoApi.use("/GrupoFrame", CGrupoFrame);
MotoApi.use("/GrupoEngine", CGrupoEngine);
MotoApi.use("/Catalogo", CCatalogo);
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
MotoApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})