import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString, IsEmail} from 'class-validator';

export class validatePostDuenoMotocicleta{
 
    @Expose({ name: "Dm_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Id no puede estar vacio'}}})
    Dm_Id: number;

    @Expose({ name: "Dm_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Nombre es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Nombre debe tener como máximo 100 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Dm_Nombre debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Nombre no puede estar vacio'}}})
    Dm_Nombre: string;

    @Expose({ name: "Dm_Tipo_Iden" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Tipo_Iden es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Tipo_Iden debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Tipo_Iden debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Tipo_Iden no puede estar vacio'}}})
    Dm_Tipo_Iden: number;

    @Expose({ name: "Dm_Identificacion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Identificacion es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Identificacion debe tener como máximo 20 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Dm_Identificacion debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Identificacion no puede estar vacio'}}})
    Dm_Identificacion: number;

    @Expose({ name: "Dm_Telefono" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Telefono es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Telefono debe tener como máximo 20 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Dm_Telefono debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Telefono no puede estar vacio'}}})
    Dm_Telefono: number;

    @Expose({ name: "Dm_Email" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Email es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Email debe tener como máximo 100 caracteres'}}})
    @IsEmail({}, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Email debe ser un correo electronico valido'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Email no puede estar vacio'}}})
    Dm_Email: string;

    @Expose({ name: "Dm_Direccion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Direccion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Direccion debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Dm_Direccion debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Direccion no puede estar vacio'}}})
    Dm_Direccion: string;

    @Expose({ name: "Dm_Genero" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Genero es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Genero debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Genero debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Genero no puede estar vacio'}}})
    Dm_Genero: number;

    @Expose({ name: "Dm_Fecha_Registro" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Fecha_Registro es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Fecha_Registro no puede estar vacio'}}})
    Dm_Fecha_Registro: Date;

    constructor(Dm_Id: number, Dm_Nombre: string, Dm_Tipo_Iden : number, Dm_Identificacion : number, Dm_Telefono : number, Dm_Email : string, Dm_Direccion : string, Dm_Genero : number, Dm_Fecha_Registro : Date){
        this.Dm_Id = Dm_Id;
        this.Dm_Nombre = Dm_Nombre;
        this.Dm_Tipo_Iden = Dm_Tipo_Iden;
        this.Dm_Identificacion = Dm_Identificacion;
        this.Dm_Telefono = Dm_Telefono;
        this.Dm_Email = Dm_Email;
        this.Dm_Direccion = Dm_Direccion;
        this.Dm_Genero = Dm_Genero;
        this.Dm_Fecha_Registro = Dm_Fecha_Registro;
    }
}

export class validateQueryPutDuenoMotocicleta{

    @Expose({ name: "idDueñoMotocicleta" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idDueñoMotocicleta es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idDueñoMotocicleta debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idDueñoMotocicleta no puede estar vacio'}}})
    idDueñoMotocicleta: number;

    constructor(idDueñoMotocicleta: number){
        this.idDueñoMotocicleta = idDueñoMotocicleta;
    }
}

export class validateBodyPutDuenoMotocicleta{

    @Expose({ name: "Dm_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Nombre es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Nombre debe tener como máximo 100 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Dm_Nombre debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Nombre no puede estar vacio'}}})
    Dm_Nombre: string;

    @Expose({ name: "Dm_Tipo_Iden" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Tipo_Iden es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Tipo_Iden debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Tipo_Iden debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Tipo_Iden no puede estar vacio'}}})
    Dm_Tipo_Iden: number;

    @Expose({ name: "Dm_Identificacion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Identificacion es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Identificacion debe tener como máximo 20 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Dm_Identificacion debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Identificacion no puede estar vacio'}}})
    Dm_Identificacion: number;

    @Expose({ name: "Dm_Telefono" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Telefono es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Telefono debe tener como máximo 20 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Dm_Telefono debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Telefono no puede estar vacio'}}})
    Dm_Telefono: number;

    @Expose({ name: "Dm_Email" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Email es obligatorio'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Email debe tener como máximo 100 caracteres'}}})
    @IsEmail({}, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Email debe ser un correo electronico valido'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Email no puede estar vacio'}}})
    Dm_Email: string;

    @Expose({ name: "Dm_Direccion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Direccion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Direccion debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Dm_Direccion debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Direccion no puede estar vacio'}}})
    Dm_Direccion: string;

    @Expose({ name: "Dm_Genero" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Genero es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Genero debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Dm_Genero debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Genero no puede estar vacio'}}})
    Dm_Genero: number;

    @Expose({ name: "Dm_Fecha_Registro" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Fecha_Registro es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Dm_Fecha_Registro no puede estar vacio'}}})
    Dm_Fecha_Registro: Date;

    constructor(Dm_Nombre: string, Dm_Tipo_Iden : number, Dm_Identificacion : number, Dm_Telefono : number, Dm_Email : string, Dm_Direccion : string, Dm_Genero : number, Dm_Fecha_Registro : Date){
        this.Dm_Nombre = Dm_Nombre;
        this.Dm_Tipo_Iden = Dm_Tipo_Iden;
        this.Dm_Identificacion = Dm_Identificacion;
        this.Dm_Telefono = Dm_Telefono;
        this.Dm_Email = Dm_Email;
        this.Dm_Direccion = Dm_Direccion;
        this.Dm_Genero = Dm_Genero;
        this.Dm_Fecha_Registro = Dm_Fecha_Registro;
    }
}

export class validateDeleteDuenoMotocicleta{

  @Expose({ name: "IdDelete" })
  @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete es obligatorio'}}})
  @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria debe ser positivo'}}})
  @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro IdDelete debe ser un numero'}}})
  @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete no puede estar vacio'}}})
  IdDelete: number;

  constructor(IdDelete: number){
      this.IdDelete = IdDelete;
  }
}