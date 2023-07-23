import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostMotocicletas, validateQueryPutMotocicletas, validateBodyPutMotocicletas, validateDeleteMotocicletas } from "../controller/vCrudMotocicletas.js";
import { validate } from 'class-validator';

const proxyPMotocicletas = express();
const proxyPutMotocicletas = express();
const proxyDeleteMotocicletas = express();

proxyPMotocicletas.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostMotocicletas, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutMotocicletas.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutMotocicletas, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutMotocicletas, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteMotocicletas.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteMotocicletas, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPMotocicletas , proxyPutMotocicletas, proxyDeleteMotocicletas};


