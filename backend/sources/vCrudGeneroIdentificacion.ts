import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, ValidateNested, IsObject} from 'class-validator';


export class validatePostGeneroIdentificacion{
    
    @Expose({ name: "Gt_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Gt_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Gt_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Gt_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Gt_Id no puede estar vacio'}}})
    Gt_Id: number;

    @Expose({ name: "Gt_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Gt_Nombre es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Gt_Nombre debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Gt_Nombre debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Gt_Nombre no puede estar vacio'}}})
    Gt_Nombre: string;

    @Expose({ name: "Gt_Abreviatura" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Gt_Abreviatura es obligatorio'}}})
    @MaxLength(5, { message: ()=>{ throw { status: 400, message: 'El parametro Gt_Abreviatura debe tener como máximo 5 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Gt_Abreviatura debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Gt_Abreviatura no puede estar vacio'}}})
    Gt_Abreviatura: string;
    
    
    constructor(Gt_Id: number, Gt_Nombre: string, Gt_Abreviatura: string){
        this.Gt_Id = Gt_Id;
        this.Gt_Nombre = Gt_Nombre;
        this.Gt_Abreviatura = Gt_Abreviatura;
    }
}

export class validateQueryPutGeneroIdentificacion{

    @Expose({ name: "idGeneroIdentificacion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idGeneroIdentificacion es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idGeneroIdentificacion debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idGeneroIdentificacion no puede estar vacio'}}})
    idGeneroIdentificacion: number;

    constructor(idGeneroIdentificacion: number){
        this.idGeneroIdentificacion = idGeneroIdentificacion;
    }
}

export class validateBodyPutGeneroIdentificacion{

    @Expose({ name: "Gt_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Gt_Nombre es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Gt_Nombre debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Gt_Nombre debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Gt_Nombre no puede estar vacio'}}})
    Gt_Nombre: string;

    @Expose({ name: "Gt_Abreviatura" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Gt_Abreviatura es obligatorio'}}})
    @MaxLength(5, { message: ()=>{ throw { status: 400, message: 'El parametro Gt_Abreviatura debe tener como máximo 5 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Gt_Abreviatura debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Gt_Abreviatura no puede estar vacio'}}})
    Gt_Abreviatura: string;
    
    
    constructor(Gt_Nombre: string, Gt_Abreviatura: string){
        this.Gt_Nombre = Gt_Nombre;
        this.Gt_Abreviatura = Gt_Abreviatura;
    }
}

export class validateDeleteGeneroIdentificacion{

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