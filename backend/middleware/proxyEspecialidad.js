import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostEspecialidad, validateQueryPutEspecialidad, validateBodyPutEspecialidad, validateDeleteEspecialidad } from "../controller/vCrudEspecialidad.js";
import { validate } from 'class-validator';

const proxyPEspecialidad = express();
const proxyPutEspecialidad = express();
const proxyDeleteEspecialidad = express();

proxyPEspecialidad.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostEspecialidad, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutEspecialidad.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutEspecialidad, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutEspecialidad, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteEspecialidad.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteEspecialidad, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPEspecialidad , proxyPutEspecialidad, proxyDeleteEspecialidad};


