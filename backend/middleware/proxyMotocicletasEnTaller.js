import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostMotocicletasEnTaller, validateQueryPutMotocicletasEnTaller, validateBodyPutMotocicletasEnTaller, validateDeleteMotocicletasEnTaller } from "../controller/vCrudMotocicletasEnTaller.js";
import { validate } from 'class-validator';

const proxyPMotocicletasEnTaller = express();
const proxyPutMotocicletasEnTaller = express();
const proxyDeleteMotocicletasEnTaller = express();

proxyPMotocicletasEnTaller.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostMotocicletasEnTaller, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutMotocicletasEnTaller.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutMotocicletasEnTaller, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutMotocicletasEnTaller, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteMotocicletasEnTaller.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteMotocicletasEnTaller, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPMotocicletasEnTaller , proxyPutMotocicletasEnTaller, proxyDeleteMotocicletasEnTaller};


