import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostSubPiezasGrupoFrame, validateQueryPutSubPiezasGrupoFrame, validateBodyPutSubPiezasGrupoFrame, validateDeleteSubPiezasGrupoFrame } from "../controller/vCrudSubPiezasGrupoFrame.js";
import { validate } from 'class-validator';

const proxyPSubPiezasGrupoFrame = express();
const proxyPutSubPiezasGrupoFrame = express();
const proxyDeleteSubPiezasGrupoFrame = express();

proxyPSubPiezasGrupoFrame.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostSubPiezasGrupoFrame, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutSubPiezasGrupoFrame.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutSubPiezasGrupoFrame, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutSubPiezasGrupoFrame, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteSubPiezasGrupoFrame.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteSubPiezasGrupoFrame, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPSubPiezasGrupoFrame , proxyPutSubPiezasGrupoFrame, proxyDeleteSubPiezasGrupoFrame};


