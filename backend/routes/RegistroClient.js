import dotenv from 'dotenv';
import { proxyPUsuario } from '../middleware/proxyUsuario.js';
import {Router} from 'express';
import jwt  from 'jsonwebtoken';
const CreacionUsu= Router();
dotenv.config();
const key = JSON.parse(process.env.MY_SECRETKEY);

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CreacionUsu.post('/CrearUsuario', proxyPUsuario,(req,res)=>{
    const { Email, password } = req.body;
    if (Email === Email && password === password) {
      const token = jwt.sign({ email: req.Email, password: req.password}, key.key, { expiresIn: '1h' });
  
      res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); 
      res.json({ message: 'Inicio de sesión exitoso, usa la token generada para ingresar a la api [El token durara 1 hora]', token });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CreacionUsu;