import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostSubPiezasGrupoEngine, validateQueryPutSubPiezasGrupoEngine, validateBodyPutSubPiezasGrupoEngine, validateDeleteSubPiezasGrupoEngine } from "../controller/vCrudSubPiezasGrupoEngine.js";
import { validate } from 'class-validator';

const proxyPSubPiezasGrupoEngine = express();
const proxyPutSubPiezasGrupoEngine = express();
const proxyDeleteSubPiezasGrupoEngine = express();

proxyPSubPiezasGrupoEngine.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostSubPiezasGrupoEngine, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutSubPiezasGrupoEngine.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutSubPiezasGrupoEngine, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutSubPiezasGrupoEngine, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteSubPiezasGrupoEngine.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteSubPiezasGrupoEngine, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPSubPiezasGrupoEngine , proxyPutSubPiezasGrupoEngine, proxyDeleteSubPiezasGrupoEngine};


