import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostInvPiezasEngine, validateQueryPutInvPiezasEngine, validateBodyPutInvPiezasEngine, validateDeleteInvPiezasEngine } from "../controller/vCrudInvPiezasEngine.js";
import { validate } from 'class-validator';

const proxyPInvPiezasEngine = express();
const proxyPutInvPiezasEngine = express();
const proxyDeleteInvPiezasEngine = express();

proxyPInvPiezasEngine.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostInvPiezasEngine, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutInvPiezasEngine.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutInvPiezasEngine, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutInvPiezasEngine, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteInvPiezasEngine.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteInvPiezasEngine, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPInvPiezasEngine , proxyPutInvPiezasEngine, proxyDeleteInvPiezasEngine};


