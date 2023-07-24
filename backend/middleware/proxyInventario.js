import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostInventario, validateQueryPutInventario, validateBodyPutInventario, validateDeleteInventario } from "../controller/vCrudInventario.js";
import { validate } from 'class-validator';

const proxyPInventario = express();
const proxyPutInventario = express();
const proxyDeleteInventario = express();

proxyPInventario.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostInventario, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutInventario.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutInventario, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutInventario, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteInventario.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteInventario, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPInventario , proxyPutInventario, proxyDeleteInventario};


