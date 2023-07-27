import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePostUsuario } from "../controller/vUsuario.js";
import { validate } from 'class-validator';

const proxyPUsuario = express();

proxyPUsuario.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostUsuario, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
export {proxyPUsuario};


