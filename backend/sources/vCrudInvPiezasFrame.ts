import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostInvPiezasFrame{
 
    @Expose({ name: "Ipf_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Id no puede estar vacio'}}})
    Ipf_Id: number;

    @Expose({ name: "Ipf_Pieza_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Pieza_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Pieza_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Pieza_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Pieza_Id no puede estar vacio'}}})
    Ipf_Pieza_Id: number;

    @Expose({ name: "Ipf_Fecha_Entrada" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada no puede estar vacio'}}})
    Ipf_Fecha_Entrada: Date;

    @Expose({ name: "Ipf_Cantidad" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Cantidad es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Cantidad debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Cantidad debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Cantidad no puede estar vacio'}}})
    Ipf_Cantidad: number;

    @Expose({ name: "Ipf_Observaciones" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Observaciones es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Observaciones debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Observaciones debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Observaciones no puede estar vacio'}}})
    Ipf_Observaciones: string;

    @Expose({ name: "Ipf_Inventario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Inventario es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Inventario debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Inventario debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Inventario no puede estar vacio'}}})
    Ipf_Inventario: number;
    
    constructor(Ipf_Id: number, Ipf_Pieza_Id: number, Ipf_Fecha_Entrada : Date, Ipf_Cantidad : number, Ipf_Observaciones : string, Ipf_Inventario : number){
        this.Ipf_Id = Ipf_Id;
        this.Ipf_Pieza_Id =Ipf_Pieza_Id;
        this.Ipf_Fecha_Entrada = Ipf_Fecha_Entrada;
        this.Ipf_Cantidad = Ipf_Cantidad;
        this.Ipf_Observaciones = Ipf_Observaciones;
        this.Ipf_Inventario = Ipf_Inventario;
    }
}

export class validateQueryPutInvPiezasFrame{

    @Expose({ name: "idInvPiezasF" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idInvPiezasF es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idInvPiezasF debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idInvPiezasF no puede estar vacio'}}})
    idInvPiezasF: number;

    constructor(idInvPiezasF: number){
        this.idInvPiezasF = idInvPiezasF;
    }
}

export class validateBodyPutInvPiezasFrame{

    @Expose({ name: "Ipf_Pieza_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Pieza_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Pieza_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Pieza_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Pieza_Id no puede estar vacio'}}})
    Ipf_Pieza_Id: number;

    @Expose({ name: "Ipf_Fecha_Entrada" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada no puede estar vacio'}}})
    Ipf_Fecha_Entrada: Date;

    @Expose({ name: "Ipf_Cantidad" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Cantidad es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Cantidad debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Cantidad debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Cantidad no puede estar vacio'}}})
    Ipf_Cantidad: number;

    @Expose({ name: "Ipf_Observaciones" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Observaciones es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Observaciones debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Observaciones debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Observaciones no puede estar vacio'}}})
    Ipf_Observaciones: string;

    @Expose({ name: "Ipf_Inventario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Inventario es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Inventario debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Inventario debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ipf_Inventario no puede estar vacio'}}})
    Ipf_Inventario: number;
    
    constructor(Ipf_Pieza_Id: number, Ipf_Fecha_Entrada : Date, Ipf_Cantidad : number, Ipf_Observaciones : string, Ipf_Inventario : number){
        this.Ipf_Pieza_Id =Ipf_Pieza_Id;
        this.Ipf_Fecha_Entrada = Ipf_Fecha_Entrada;
        this.Ipf_Cantidad = Ipf_Cantidad;
        this.Ipf_Observaciones = Ipf_Observaciones;
        this.Ipf_Inventario = Ipf_Inventario;
    }
}

export class validateDeleteInvPiezasFrame{

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