import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostPiezasGrupoEngine, validateQueryPutPiezasGrupoEngine, validateBodyPutPiezasGrupoEngine, validateDeletePiezasGrupoEngine } from "../controller/vCrudPiezasGrupoEngine.js";
import { validate } from 'class-validator';

const proxyPPiezasGrupoEngine = express();
const proxyPutPiezasGrupoEngine = express();
const proxyDeletePiezasGrupoEngine = express();

proxyPPiezasGrupoEngine.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostPiezasGrupoEngine, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutPiezasGrupoEngine.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutPiezasGrupoEngine, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutPiezasGrupoEngine, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeletePiezasGrupoEngine.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeletePiezasGrupoEngine, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPPiezasGrupoEngine , proxyPutPiezasGrupoEngine, proxyDeletePiezasGrupoEngine};


