import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostPiezasGrupoFrame, validateQueryPutPiezasGrupoFrame, validateBodyPutPiezasGrupoFrame, validateDeletePiezasGrupoFrame } from "../controller/vCrudPiezasGrupoFrame.js";
import { validate } from 'class-validator';

const proxyPPiezasGrupoFrame = express();
const proxyPutPiezasGrupoFrame = express();
const proxyDeletePiezasGrupoFrame = express();

proxyPPiezasGrupoFrame.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostPiezasGrupoFrame, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutPiezasGrupoFrame.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutPiezasGrupoFrame, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutPiezasGrupoFrame, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeletePiezasGrupoFrame.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeletePiezasGrupoFrame, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPPiezasGrupoFrame , proxyPutPiezasGrupoFrame, proxyDeletePiezasGrupoFrame};


