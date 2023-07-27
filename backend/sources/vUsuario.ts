import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsEmail, IsNotEmpty, Matches} from 'class-validator';

export class validatePostUsuario{
    
    @Expose({ name: "Email" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Email es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro Email debe tener como máximo 100 caracteres'}}})
    @IsEmail({}, { message: ()=>{ throw { status: 400, message: 'El parametro Email debe ser un correo electronico valido'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Email no puede estar vacio'}}})
    Email: string;

    @Expose({ name: "password" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro password es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro password debe tener como máximo 20 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro password debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro password no puede estar vacio'}}})
    password: string;

    constructor(Email : string, password: string){
        this.Email = Email;
        this.password = password;
    }
}