import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostInvPiezasFrame, validateQueryPutInvPiezasFrame, validateBodyPutInvPiezasFrame, validateDeleteInvPiezasFrame } from "../controller/vCrudInvPiezasFrame.js";
import { validate } from 'class-validator';

const proxyPInvPiezasFrame = express();
const proxyPutInvPiezasFrame = express();
const proxyDeleteInvPiezasFrame = express();

proxyPInvPiezasFrame.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostInvPiezasFrame, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutInvPiezasFrame.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutInvPiezasFrame, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutInvPiezasFrame, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteInvPiezasFrame.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteInvPiezasFrame, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPInvPiezasFrame , proxyPutInvPiezasFrame, proxyDeleteInvPiezasFrame};


