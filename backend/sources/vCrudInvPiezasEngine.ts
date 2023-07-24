import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostInvPiezasEngine{
 
    @Expose({ name: "Ipe_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Id no puede estar vacio'}}})
    Ipe_Id: number;

    @Expose({ name: "Ipe_Pieza_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Pieza_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Pieza_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Pieza_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Pieza_Id no puede estar vacio'}}})
    Ipe_Pieza_Id: number;

    @Expose({ name: "Ipe_Fecha_Entrada" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Fecha_Entrada es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: 'El parametro Ipe_Fecha_Entrada debe tener el formato de fecha YYYY-MM-DD.' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Fecha_Entrada no puede estar vacio'}}})
    Ipe_Fecha_Entrada: Date;

    @Expose({ name: "Ipe_Cantidad" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Cantidad es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Cantidad debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Cantidad debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Cantidad no puede estar vacio'}}})
    Ipe_Cantidad: number;

    @Expose({ name: "Ipe_Observaciones" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Observaciones es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Observaciones debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Observaciones debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Observaciones no puede estar vacio'}}})
    Ipe_Observaciones: string;

    @Expose({ name: "Ipe_Inventario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Inventario es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Inventario debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Inventario debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Inventario no puede estar vacio'}}})
    Ipe_Inventario: number;
    
    constructor(Ipe_Id: number, Ipe_Pieza_Id: number, Ipe_Fecha_Entrada : Date, Ipe_Cantidad : number, Ipe_Observaciones : string, Ipe_Inventario : number){
        this.Ipe_Id = Ipe_Id;
        this.Ipe_Pieza_Id =Ipe_Pieza_Id;
        this.Ipe_Fecha_Entrada = Ipe_Fecha_Entrada;
        this.Ipe_Cantidad = Ipe_Cantidad;
        this.Ipe_Observaciones = Ipe_Observaciones;
        this.Ipe_Inventario = Ipe_Inventario;
    }
}

export class validateQueryPutInvPiezasEngine{

    @Expose({ name: "idInvPiezasE" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idInvPiezasE es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idInvPiezasE debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idInvPiezasE no puede estar vacio'}}})
    idInvPiezasE: number;

    constructor(idInvPiezasE: number){
        this.idInvPiezasE = idInvPiezasE;
    }
}

export class validateBodyPutInvPiezasEngine{

    @Expose({ name: "Ipe_Pieza_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Pieza_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Pieza_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Pieza_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Pieza_Id no puede estar vacio'}}})
    Ipe_Pieza_Id: number;

    @Expose({ name: "Ipe_Fecha_Entrada" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Fecha_Entrada es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: 'El parametro Ipe_Fecha_Entrada debe tener el formato de fecha YYYY-MM-DD.' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Fecha_Entrada no puede estar vacio'}}})
    Ipe_Fecha_Entrada: Date;

    @Expose({ name: "Ipe_Cantidad" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Cantidad es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Cantidad debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Cantidad debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Cantidad no puede estar vacio'}}})
    Ipe_Cantidad: number;

    @Expose({ name: "Ipe_Observaciones" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Observaciones es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Observaciones debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Observaciones debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Observaciones no puede estar vacio'}}})
    Ipe_Observaciones: string;

    @Expose({ name: "Ipe_Inventario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Inventario es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Inventario debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Inventario debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipe_Inventario no puede estar vacio'}}})
    Ipe_Inventario: number;
    
    constructor(Ipe_Pieza_Id: number, Ipe_Fecha_Entrada : Date, Ipe_Cantidad : number, Ipe_Observaciones : string, Ipe_Inventario : number){
        this.Ipe_Pieza_Id =Ipe_Pieza_Id;
        this.Ipe_Fecha_Entrada = Ipe_Fecha_Entrada;
        this.Ipe_Cantidad = Ipe_Cantidad;
        this.Ipe_Observaciones = Ipe_Observaciones;
        this.Ipe_Inventario = Ipe_Inventario;
    }
}

export class validateDeleteInvPiezasEngine{

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