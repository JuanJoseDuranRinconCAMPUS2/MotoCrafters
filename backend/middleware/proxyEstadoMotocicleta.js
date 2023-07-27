import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostEstadoMotocicleta, validateQueryPutEstadoMotocicleta, validateBodyPutEstadoMotocicleta, validateDeleteEstadoMotocicleta } from "../controller/vCrudEstadoMotocicleta.js";
import { validate } from 'class-validator';

const proxyPEstadoMotocicleta = express();
const proxyPutEstadoMotocicleta = express();
const proxyDeleteEstadoMotocicleta = express();

proxyPEstadoMotocicleta.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostEstadoMotocicleta, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutEstadoMotocicleta.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutEstadoMotocicleta, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutEstadoMotocicleta, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteEstadoMotocicleta.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteEstadoMotocicleta, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPEstadoMotocicleta , proxyPutEstadoMotocicleta, proxyDeleteEstadoMotocicleta};


