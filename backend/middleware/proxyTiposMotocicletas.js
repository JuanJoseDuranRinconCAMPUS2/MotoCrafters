import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostTiposM, validateQueryPutTiposM, validateDeleteTiposM } from "../controller/vCrudTiposMotocicletas.js";
import { validate } from 'class-validator';

const proxyPTiposM = express();
const proxyPutTiposM = express();
const proxyDeleteTiposM = express();

proxyPTiposM.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostTiposM, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutTiposM.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutTiposM, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validatePostTiposM, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteTiposM.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteTiposM, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPTiposM , proxyPutTiposM, proxyDeleteTiposM};


