import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches} from 'class-validator';

export class validatePostTiposM{
 
    @Expose({ name: "nombreTipo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria no puede estar vacio'}}})
    nombreTipo: string;

    constructor(nombreTipo: string){
        this.nombreTipo = nombreTipo;
    }
}

export class validateQueryPutTiposM{

    @Expose({ name: "idTipos" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idCategoria debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria no puede estar vacio'}}})
    idTipos: number;

    constructor(idTipos: number){
        this.idTipos = idTipos;
    }
}

export class validateDeleteTiposM{

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