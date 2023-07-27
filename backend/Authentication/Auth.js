import dotnev from 'dotenv';
import jwt  from 'jsonwebtoken';
dotnev.config();
const key = JSON.parse(process.env.MY_SECRETKEY);

const validation = (req, res, next) =>{
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: '¡Acceso no autorizado! No se proporcionó el token' });
    }
  
    jwt.verify(token, key.key, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: '¡Acceso no autorizado! Token inválido' });
      }
  
      req.usuario = decoded.username;
      next();
    });
}

export default validation;