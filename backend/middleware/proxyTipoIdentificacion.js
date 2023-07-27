import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostTipoIdentificacion, validateQueryPutTipoIdentificacion, validateBodyPutTipoIdentificacion, validateDeleteTipoIdentificacion } from "../controller/vCrudTipoIdentificacion.js";
import { validate } from 'class-validator';

const proxyPTipoIdentificacion = express();
const proxyPutTipoIdentificacion = express();
const proxyDeleteTipoIdentificacion = express();

proxyPTipoIdentificacion.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostTipoIdentificacion, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutTipoIdentificacion.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutTipoIdentificacion, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutTipoIdentificacion, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteTipoIdentificacion.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteTipoIdentificacion, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPTipoIdentificacion , proxyPutTipoIdentificacion, proxyDeleteTipoIdentificacion};


