import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostCatalogo, validateQueryPutCatalogo, validateBodyPutCatalogo, validateDeleteCatalogo } from "../controller/vCrudCatalogo.js";
import { validate } from 'class-validator';

const proxyPCatalogo = express();
const proxyPutCatalogo = express();
const proxyDeleteCatalogo = express();

proxyPCatalogo.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostCatalogo, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutCatalogo.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutCatalogo, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutCatalogo, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteCatalogo.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteCatalogo, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPCatalogo , proxyPutCatalogo, proxyDeleteCatalogo};


