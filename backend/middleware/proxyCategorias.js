import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostCategorias, validateQueryPutCategorias, validateDeleteCategorias } from "../controller/vCrudCategoriasMotocicletas.js";
import { validate } from 'class-validator';

const proxyPCategorias = express();
const proxyPutCategorias = express();
const proxyDeleteCategorias = express();

proxyPCategorias.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostCategorias, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPutCategorias.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutCategorias, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validatePostCategorias, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDeleteCategorias.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteCategorias, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPCategorias , proxyPutCategorias, proxyDeleteCategorias};


