import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, ValidateNested, IsObject} from 'class-validator';


export class validatePostEstadoMotocicleta{
    
    @Expose({ name: "Em_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Em_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Em_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Em_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Em_Id no puede estar vacio'}}})
    Em_Id: number;

    @Expose({ name: "Em_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Em_Nombre es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Em_Nombre debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Em_Nombre debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Em_Nombre no puede estar vacio'}}})
    Em_Nombre: string;
   
    constructor(Em_Id: number, Em_Nombre: string){
        this.Em_Id = Em_Id;
        this.Em_Nombre = Em_Nombre;
    }
}

export class validateQueryPutEstadoMotocicleta{

    @Expose({ name: "idEstadoMotocicleta" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idEstadoMotocicleta es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idEstadoMotocicleta debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idEstadoMotocicleta no puede estar vacio'}}})
    idEstadoMotocicleta: number;

    constructor(idEstadoMotocicleta: number){
        this.idEstadoMotocicleta = idEstadoMotocicleta;
    }
}

export class validateBodyPutEstadoMotocicleta{

    @Expose({ name: "Em_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Em_Nombre es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Em_Nombre debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Em_Nombre debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Em_Nombre no puede estar vacio'}}})
    Em_Nombre: string;
   
    constructor(Em_Nombre: string){
        this.Em_Nombre = Em_Nombre;
    }
}

export class validateDeleteEstadoMotocicleta{

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