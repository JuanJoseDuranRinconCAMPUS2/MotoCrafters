import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString, IsEmail} from 'class-validator';

export class validatePostMecanico{
 
    @Expose({ name: "Mec_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Id no puede estar vacio'}}})
    Mec_Id: number;

    @Expose({ name: "Mec_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Nombre es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Nombre debe tener como máximo 100 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Mec_Nombre debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Nombre no puede estar vacio'}}})
    Mec_Nombre: string;

    @Expose({ name: "Mec_Especialidad" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Especialidad es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Especialidad debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Especialidad debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Especialidad no puede estar vacio'}}})
    Mec_Especialidad: number;

    @Expose({ name: "Mec_Tipo_Iden" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Tipo_Iden es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Tipo_Iden debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Tipo_Iden debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Tipo_Iden no puede estar vacio'}}})
    Mec_Tipo_Iden: number;

    @Expose({ name: "Mec_Identificacion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Identificacion es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Identificacion debe tener como máximo 20 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Mec_Identificacion debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Identificacion no puede estar vacio'}}})
    Mec_Identificacion: number;

    @Expose({ name: "Mec_Telefono" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Telefono es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Telefono debe tener como máximo 20 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Mec_Telefono debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Telefono no puede estar vacio'}}})
    Mec_Telefono: number;

    @Expose({ name: "Mec_Email" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Email es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Email debe tener como máximo 100 caracteres'}}})
    @IsEmail({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Email debe ser un correo electronico valido'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Email no puede estar vacio'}}})
    Mec_Email: string;

    @Expose({ name: "Mec_Direccion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Direccion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Direccion debe tener como máximo 200 caracteres'}}})
    @IsString({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Direccion debe ser un string'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Direccion no puede estar vacio'}}})
    Mec_Direccion: string;

    @Expose({ name: "Mec_Genero" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Genero es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Genero debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Genero debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Genero no puede estar vacio'}}})
    Mec_Genero: number;

    @Expose({ name: "Mec_Fecha_Registro" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Fecha_Registro es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Fecha_Registro no puede estar vacio'}}})
    Mec_Fecha_Registro: Date;

    constructor(Mec_Id: number, Mec_Nombre: string, Mec_Especialidad : number, Mec_Tipo_Iden : number, Mec_Identificacion : number, Mec_Telefono : number, Mec_Email : string, Mec_Direccion : string, Mec_Genero : number, Mec_Fecha_Registro : Date){
        this.Mec_Id = Mec_Id;
        this.Mec_Nombre = Mec_Nombre;
        this.Mec_Especialidad = Mec_Especialidad;
        this.Mec_Tipo_Iden = Mec_Tipo_Iden;
        this.Mec_Identificacion = Mec_Identificacion;
        this.Mec_Telefono = Mec_Telefono;
        this.Mec_Email = Mec_Email;
        this.Mec_Direccion = Mec_Direccion;
        this.Mec_Genero = Mec_Genero;
        this.Mec_Fecha_Registro = Mec_Fecha_Registro;
    }
}

export class validateQueryPutMecanico{

    @Expose({ name: "idMecanico" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idMecanico es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idMecanico debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idMecanico no puede estar vacio'}}})
    idMecanico: number;

    constructor(idMecanico: number){
        this.idMecanico = idMecanico;
    }
}

export class validateBodyPutMecanico{

    @Expose({ name: "Mec_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Nombre es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Nombre debe tener como máximo 100 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Mec_Nombre debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Nombre no puede estar vacio'}}})
    Mec_Nombre: string;

    @Expose({ name: "Mec_Especialidad" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Especialidad es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Especialidad debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Especialidad debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Especialidad no puede estar vacio'}}})
    Mec_Especialidad: number;

    @Expose({ name: "Mec_Tipo_Iden" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Tipo_Iden es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Tipo_Iden debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Tipo_Iden debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Tipo_Iden no puede estar vacio'}}})
    Mec_Tipo_Iden: number;

    @Expose({ name: "Mec_Identificacion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Identificacion es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Identificacion debe tener como máximo 20 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Mec_Identificacion debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Identificacion no puede estar vacio'}}})
    Mec_Identificacion: number;

    @Expose({ name: "Mec_Telefono" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Telefono es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Telefono debe tener como máximo 20 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Mec_Telefono debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Telefono no puede estar vacio'}}})
    Mec_Telefono: number;

    @Expose({ name: "Mec_Email" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Email es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Email debe tener como máximo 100 caracteres'}}})
    @IsEmail({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Email debe ser un correo electronico valido'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Email no puede estar vacio'}}})
    Mec_Email: string;

    @Expose({ name: "Mec_Direccion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Direccion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Direccion debe tener como máximo 200 caracteres'}}})
    @IsString({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Direccion debe ser un string'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Direccion no puede estar vacio'}}})
    Mec_Direccion: string;

    @Expose({ name: "Mec_Genero" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Genero es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Genero debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mec_Genero debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Genero no puede estar vacio'}}})
    Mec_Genero: number;

    @Expose({ name: "Mec_Fecha_Registro" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Fecha_Registro es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mec_Fecha_Registro no puede estar vacio'}}})
    Mec_Fecha_Registro: Date;

    constructor(Mec_Nombre: string, Mec_Especialidad : number, Mec_Tipo_Iden : number, Mec_Identificacion : number, Mec_Telefono : number, Mec_Email : string, Mec_Direccion : string, Mec_Genero : number, Mec_Fecha_Registro : Date){
        this.Mec_Nombre = Mec_Nombre;
        this.Mec_Especialidad = Mec_Especialidad;
        this.Mec_Tipo_Iden = Mec_Tipo_Iden;
        this.Mec_Identificacion = Mec_Identificacion;
        this.Mec_Telefono = Mec_Telefono;
        this.Mec_Email = Mec_Email;
        this.Mec_Direccion = Mec_Direccion;
        this.Mec_Genero = Mec_Genero;
        this.Mec_Fecha_Registro = Mec_Fecha_Registro;
    }
}

export class validateDeleteMecanico{

  @Expose({ name: "IdDelete" })
  @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete es obligatorio'}}})
  @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete debe ser positivo'}}})
  @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro IdDelete debe ser un numero'}}})
  @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete no puede estar vacio'}}})
  IdDelete: number;

  constructor(IdDelete: number){
      this.IdDelete = IdDelete;
  }
}