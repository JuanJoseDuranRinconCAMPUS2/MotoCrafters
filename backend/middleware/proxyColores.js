import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostColores, validateQueryPutColores, validateDeleteColores } from "../controller/vCrudColores.js";
import { validate } from 'class-validator';

const proxyPColores = express();
const proxyPutColores = express();
const proxyDeleteColores = express();

proxyPColores.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostColores, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutColores.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutColores, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validatePostColores, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteColores.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteColores, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPColores , proxyPutColores, proxyDeleteColores};


