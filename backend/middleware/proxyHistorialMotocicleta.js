import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostHistorialMotocicleta, validateQueryPutHistorialMotocicleta, validateBodyPutHistorialMotocicleta, validateDeleteHistorialMotocicleta } from "../controller/vCrudHistorialMotocicleta.js";
import { validate } from 'class-validator';

const proxyPHistorialMotocicleta = express();
const proxyPutHistorialMotocicleta = express();
const proxyDeleteHistorialMotocicleta = express();

proxyPHistorialMotocicleta.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostHistorialMotocicleta, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutHistorialMotocicleta.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutHistorialMotocicleta, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutHistorialMotocicleta, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteHistorialMotocicleta.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteHistorialMotocicleta, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPHistorialMotocicleta , proxyPutHistorialMotocicleta, proxyDeleteHistorialMotocicleta};


