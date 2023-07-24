import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches} from 'class-validator';

export class validatePostInventario{
 
    @Expose({ name: "Inv_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Inv_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Inv_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Inv_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Inv_Id no puede estar vacio'}}})
    Inv_Id: number;

    @Expose({ name: "Inv_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Inv_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Inv_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Inv_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Inv_Descripcion no puede estar vacio'}}})
    Inv_Descripcion: string;

    constructor(Inv_Id: number, Inv_Descripcion: string){
        this.Inv_Id = Inv_Id;
        this.Inv_Descripcion = Inv_Descripcion;
    }
}

export class validateQueryPutInventario{

    @Expose({ name: "idInventario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idCategoria debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria no puede estar vacio'}}})
    idInventario: number;

    constructor(idInventario: number){
        this.idInventario = idInventario;
    }
}

export class validateBodyPutInventario{

    @Expose({ name: "Inv_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Inv_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Inv_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Inv_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Inv_Descripcion no puede estar vacio'}}})
    Inv_Descripcion: string;

    constructor(Inv_Descripcion: string){
        this.Inv_Descripcion = Inv_Descripcion;
    }
}

export class validateDeleteInventario{

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