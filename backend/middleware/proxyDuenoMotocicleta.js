import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostDuenoMotocicleta, validateQueryPutDuenoMotocicleta, validateBodyPutDuenoMotocicleta, validateDeleteDuenoMotocicleta } from "../controller/vCrudDuenoMotocicleta.js";
import { validate } from 'class-validator';

const proxyPDuenoMotocicleta = express();
const proxyPutDuenoMotocicleta = express();
const proxyDeleteDuenoMotocicleta = express();

proxyPDuenoMotocicleta.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostDuenoMotocicleta, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutDuenoMotocicleta.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutDuenoMotocicleta, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutDuenoMotocicleta, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteDuenoMotocicleta.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteDuenoMotocicleta, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPDuenoMotocicleta , proxyPutDuenoMotocicleta, proxyDeleteDuenoMotocicleta};


