import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostMarca, validateQueryPutMarca, validateDeleteMarca } from "../controller/vCrudMarca.js";
import { validate } from 'class-validator';

const proxyPMarca = express();
const proxyPutMarca = express();
const proxyDeleteMarca = express();

proxyPMarca.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostMarca, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutMarca.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutMarca, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validatePostMarca, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteMarca.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteMarca, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPMarca , proxyPutMarca, proxyDeleteMarca};


