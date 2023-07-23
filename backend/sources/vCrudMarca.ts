import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches} from 'class-validator';

export class validatePostMarca{
 
    @Expose({ name: "nombreMarca" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria es obligatorio'}}})
    @MaxLength(10, { message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria no puede estar vacio'}}})
    nombreMarca: string;

    constructor(nombreMarca: string){
        this.nombreMarca = nombreMarca;
    }
}

export class validateQueryPutMarca{

    @Expose({ name: "idMarca" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idCategoria debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria no puede estar vacio'}}})
    idMarca: number;

    constructor(idMarca: number){
        this.idMarca = idMarca;
    }
}

export class validateDeleteMarca{

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