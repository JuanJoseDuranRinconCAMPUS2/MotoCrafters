import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, ValidateNested, IsObject} from 'class-validator';


export class validatePostTipoIdentificacion{
    
    @Expose({ name: "Td_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Td_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Td_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Td_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Td_Id no puede estar vacio'}}})
    Td_Id: number;

    @Expose({ name: "Td_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Td_Nombre es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Td_Nombre debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Td_Nombre debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Td_Nombre no puede estar vacio'}}})
    Td_Nombre: string;

    @Expose({ name: "Td_Abreviatura" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Td_Abreviatura es obligatorio'}}})
    @MaxLength(5, { message: ()=>{ throw { status: 400, message: 'El parametro Td_Abreviatura debe tener como máximo 5 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Td_Abreviatura debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Td_Abreviatura no puede estar vacio'}}})
    Td_Abreviatura: string;
    
    
    constructor(Td_Id: number, Td_Nombre: string, Td_Abreviatura: string){
        this.Td_Id = Td_Id;
        this.Td_Nombre = Td_Nombre;
        this.Td_Abreviatura = Td_Abreviatura;
    }
}

export class validateQueryPutTipoIdentificacion{

    @Expose({ name: "idTipoIdentificacion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idTipoIdentificacion es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idTipoIdentificacion debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idTipoIdentificacion no puede estar vacio'}}})
    idTipoIdentificacion: number;

    constructor(idTipoIdentificacion: number){
        this.idTipoIdentificacion = idTipoIdentificacion;
    }
}

export class validateBodyPutTipoIdentificacion{

    @Expose({ name: "Td_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Td_Nombre es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Td_Nombre debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Td_Nombre debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Td_Nombre no puede estar vacio'}}})
    Td_Nombre: string;

    @Expose({ name: "Td_Abreviatura" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Td_Abreviatura es obligatorio'}}})
    @MaxLength(5, { message: ()=>{ throw { status: 400, message: 'El parametro Td_Abreviatura debe tener como máximo 5 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Td_Abreviatura debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Td_Abreviatura no puede estar vacio'}}})
    Td_Abreviatura: string;
    
    
    constructor(Td_Nombre: string, Td_Abreviatura: string){
        this.Td_Nombre = Td_Nombre;
        this.Td_Abreviatura = Td_Abreviatura;
    }
}

export class validateDeleteTipoIdentificacion{

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