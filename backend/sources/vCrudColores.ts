import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, ValidateNested, IsObject} from 'class-validator';
class Color {
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro color debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro color no puede estar vacio'}}})
    value: string;
  }

export class validatePostColores{
 
    @Expose({ name: "color1" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro color1 es obligatorio'}}})
    @MaxLength(10, { message: ()=>{ throw { status: 400, message: 'El parametro color1 debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro color1 debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro color1 no puede estar vacio'}}})
    color1: string;

    @Expose({ name: "color2" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro color2 es obligatorio'}}})
    @MaxLength(10, { message: ()=>{ throw { status: 400, message: 'El parametro color2 debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro color2 debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro color2 no puede estar vacio'}}})
    color2: string;
    
    @Expose({ name: "color3" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro color3 es obligatorio'}}})
    @MaxLength(10, { message: ()=>{ throw { status: 400, message: 'El parametro color3 debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro color3 debe ser una cadena de texto sin números ni caracteres especiales'}}})
    color3: string;

    @Expose({ name: "color4" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro color4 es obligatorio'}}})
    @MaxLength(10, { message: ()=>{ throw { status: 400, message: 'El parametro color4 debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro color4 debe ser una cadena de texto sin números ni caracteres especiales'}}})
    color4: string;
    
    constructor(color1: string, color2: string, color3: string, color4: string){
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.color4 = color4;
    }
}

export class validateQueryPutColores{

    @Expose({ name: "idColor" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idCategoria debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria no puede estar vacio'}}})
    idColor: number;

    constructor(idColor: number){
        this.idColor = idColor;
    }
}

export class validateDeleteColores{

  @Expose({ name: "IdDelete" })
  @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete es obligatorio'}}})
  @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria debe ser positivo'}}})
  @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro idCategoria debe ser un numero'}}})
  @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete no puede estar vacio'}}})
  IdDelete: number;

  constructor(IdDelete: number){
      this.IdDelete = IdDelete;
  }
}