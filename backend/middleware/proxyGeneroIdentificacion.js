import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostGeneroIdentificacion, validateQueryPutGeneroIdentificacion, validateBodyPutGeneroIdentificacion, validateDeleteGeneroIdentificacion } from "../controller/vCrudGeneroIdentificacion.js";
import { validate } from 'class-validator';

const proxyPGeneroIdentificacion = express();
const proxyPutGeneroIdentificacion = express();
const proxyDeleteGeneroIdentificacion = express();

proxyPGeneroIdentificacion.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostGeneroIdentificacion, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutGeneroIdentificacion.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutGeneroIdentificacion, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutGeneroIdentificacion, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteGeneroIdentificacion.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteGeneroIdentificacion, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPGeneroIdentificacion , proxyPutGeneroIdentificacion, proxyDeleteGeneroIdentificacion};


