import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostGrupoEngine, validateQueryPutGrupoEngine, validateBodyPutGrupoEngine, validateDeleteGrupoEngine } from "../controller/vCrudGrupoEngine.js";
import { validate } from 'class-validator';

const proxyPGrupoEngine = express();
const proxyPutGrupoEngine = express();
const proxyDeleteGrupoEngine = express();

proxyPGrupoEngine.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostGrupoEngine, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutGrupoEngine.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutGrupoEngine, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutGrupoEngine, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteGrupoEngine.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteGrupoEngine, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPGrupoEngine , proxyPutGrupoEngine, proxyDeleteGrupoEngine};


