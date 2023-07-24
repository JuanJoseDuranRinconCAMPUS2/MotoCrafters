import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostGrupoFrame, validateQueryPutGrupoFrame, validateBodyPutGrupoFrame, validateDeleteGrupoFrame } from "../controller/vCrudGrupoFrame.js";
import { validate } from 'class-validator';

const proxyPGrupoFrame = express();
const proxyPutGrupoFrame = express();
const proxyDeleteGrupoFrame = express();

proxyPGrupoFrame.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostGrupoFrame, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutGrupoFrame.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutGrupoFrame, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutGrupoFrame, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteGrupoFrame.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteGrupoFrame, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPGrupoFrame , proxyPutGrupoFrame, proxyDeleteGrupoFrame};


