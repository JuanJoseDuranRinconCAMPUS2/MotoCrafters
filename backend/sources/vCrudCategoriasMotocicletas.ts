import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches} from 'class-validator';

export class validatePostCategorias{
 
    @Expose({ name: "nombreCategoria" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria debe tener como máximo 20 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombreCategoria no puede estar vacio'}}})
    nombreCategoria: string;

    constructor(nombreCategoria: string){
        this.nombreCategoria = nombreCategoria;
    }
}

export class validateQueryPutCategorias{

    @Expose({ name: "idCategoria" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idCategoria debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria no puede estar vacio'}}})
    idCategoria: number;

    constructor(idCategoria: number){
        this.idCategoria = idCategoria;
    }
}

export class validateDeleteCategorias{

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