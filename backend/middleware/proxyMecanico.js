import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostMecanico, validateQueryPutMecanico, validateBodyPutMecanico, validateDeleteMecanico} from "../controller/vCrudMecanicos.js";
import { validate } from 'class-validator';

const proxyPMecanico = express();
const proxyPutMecanico = express();
const proxyDeleteMecanico = express();

proxyPMecanico.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostMecanico, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutMecanico.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutMecanico, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutMecanico, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteMecanico.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteMecanico, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPMecanico , proxyPutMecanico, proxyDeleteMecanico};


