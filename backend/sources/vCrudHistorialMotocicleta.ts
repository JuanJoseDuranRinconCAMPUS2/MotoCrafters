import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, ValidateNested, IsObject} from 'class-validator';


export class validatePostHistorialMotocicleta{
    
    @Expose({ name: "Hm_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Id no puede estar vacio'}}})
    Hm_Id: number;

    @Expose({ name: "Hm_MecanicoAsig" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_MecanicoAsig es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_MecanicoAsig debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_MecanicoAsig debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_MecanicoAsig no puede estar vacio'}}})
    Hm_MecanicoAsig: number;

    @Expose({ name: "Hm_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion no puede estar vacio'}}})
    Hm_Descripcion: string;

    @Expose({ name: "Hm_Fecha_Ingreso" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso no puede estar vacio'}}})
    Hm_Fecha_Ingreso: Date;

    @Expose({ name: "Hm_Fecha_Salida" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Fecha_Salida es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Fecha_Salida debe tener el formato de fecha YYYY-MM-DD.'}}})
    Hm_Fecha_Salida: Date;

    @Expose({ name: "Hm_Descripcion_Problema" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Problema es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Problema debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Problema debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Problema no puede estar vacio'}}})
    Hm_Descripcion_Problema: string;

    @Expose({ name: "Hm_Descripcion_Reparacion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion no puede estar vacio'}}})
    Hm_Descripcion_Reparacion: string;

    @Expose({ name: "Hm_Observaciones" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Observaciones es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_Observaciones debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Hm_Observaciones debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Observaciones no puede estar vacio'}}})
    Hm_Observaciones: string;

    @Expose({ name: "Hm_Motocicleta" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Motocicleta es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Motocicleta debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_Motocicleta debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Motocicleta no puede estar vacio'}}})
    Hm_Motocicleta: number;
   
    constructor(Hm_Id: number, Hm_MecanicoAsig: number, Hm_Descripcion: string, Hm_Fecha_Ingreso : Date, Hm_Fecha_Salida : Date, Hm_Descripcion_Problema: string, Hm_Descripcion_Reparacion: string, Hm_Observaciones: string, Hm_Motocicleta: number){
        this.Hm_Id = Hm_Id;
        this.Hm_MecanicoAsig = Hm_MecanicoAsig;
        this.Hm_Descripcion = Hm_Descripcion;
        this.Hm_Fecha_Ingreso = Hm_Fecha_Ingreso;
        this.Hm_Fecha_Salida = Hm_Fecha_Salida;
        this.Hm_Descripcion_Problema = Hm_Descripcion_Problema;
        this.Hm_Descripcion_Reparacion = Hm_Descripcion_Reparacion;
        this.Hm_Observaciones = Hm_Observaciones;
        this.Hm_Motocicleta = Hm_Motocicleta;
    }
}

export class validateQueryPutHistorialMotocicleta{

    @Expose({ name: "idHistorialMotocicleta" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idHistorialMotocicleta es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idHistorialMotocicleta debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idHistorialMotocicleta no puede estar vacio'}}})
    idHistorialMotocicleta: number;

    constructor(idHistorialMotocicleta: number){
        this.idHistorialMotocicleta = idHistorialMotocicleta;
    }
}

export class validateBodyPutHistorialMotocicleta{

    @Expose({ name: "Hm_MecanicoAsig" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_MecanicoAsig es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_MecanicoAsig debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_MecanicoAsig debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_MecanicoAsig no puede estar vacio'}}})
    Hm_MecanicoAsig: number;

    @Expose({ name: "Hm_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion no puede estar vacio'}}})
    Hm_Descripcion: string;

    @Expose({ name: "Hm_Fecha_Ingreso" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso no puede estar vacio'}}})
    Hm_Fecha_Ingreso: Date;

    @Expose({ name: "Hm_Fecha_Salida" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Fecha_Salida es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Fecha_Salida debe tener el formato de fecha YYYY-MM-DD.'}}})
    Hm_Fecha_Salida: Date;

    @Expose({ name: "Hm_Descripcion_Problema" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Problema es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Problema debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Problema debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Problema no puede estar vacio'}}})
    Hm_Descripcion_Problema: string;

    @Expose({ name: "Hm_Descripcion_Reparacion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion no puede estar vacio'}}})
    Hm_Descripcion_Reparacion: string;

    @Expose({ name: "Hm_Observaciones" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Observaciones es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_Observaciones debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Hm_Observaciones debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Observaciones no puede estar vacio'}}})
    Hm_Observaciones: string;

    @Expose({ name: "Hm_Motocicleta" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Motocicleta es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Motocicleta debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Hm_Motocicleta debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Hm_Motocicleta no puede estar vacio'}}})
    Hm_Motocicleta: number;
   
    constructor(Hm_MecanicoAsig: number, Hm_Descripcion: string, Hm_Fecha_Ingreso : Date, Hm_Fecha_Salida : Date, Hm_Descripcion_Problema: string, Hm_Descripcion_Reparacion: string, Hm_Observaciones: string, Hm_Motocicleta: number){
        this.Hm_MecanicoAsig = Hm_MecanicoAsig;
        this.Hm_Descripcion = Hm_Descripcion;
        this.Hm_Fecha_Ingreso = Hm_Fecha_Ingreso;
        this.Hm_Fecha_Salida = Hm_Fecha_Salida;
        this.Hm_Descripcion_Problema = Hm_Descripcion_Problema;
        this.Hm_Descripcion_Reparacion = Hm_Descripcion_Reparacion;
        this.Hm_Observaciones = Hm_Observaciones;
        this.Hm_Motocicleta = Hm_Motocicleta;
    }
}

export class validateDeleteHistorialMotocicleta{

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