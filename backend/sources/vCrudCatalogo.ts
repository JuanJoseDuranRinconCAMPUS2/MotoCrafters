import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostCatalogo{
 
    @Expose({ name: "Ctl_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Id no puede estar vacio'}}})
    Ctl_Id: number;

    @Expose({ name: "Ctl_Motocicleta" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Motocicleta es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Motocicleta debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Motocicleta debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Motocicleta no puede estar vacio'}}})
    Ctl_Motocicleta: number;

    @Expose({ name: "Ctl_Modelo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Modelo es obligatorio'}}})
    @MaxLength(40, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Modelo debe tener como máximo 40 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Modelo no puede estar vacio'}}})
    Ctl_Modelo: string;

    @Expose({ name: "Ctl_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Descripcion no puede estar vacio'}}})
    Ctl_Descripcion: string;

    @Expose({ name: "Ctl_Version" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Version es obligatorio'}}})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Version debe tener como máximo 50 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Version debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Version no puede estar vacio'}}})
    Ctl_Version: string;

    @Expose({ name: "Ctl_Grupo_Engine" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Engine es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Engine debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Engine debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Engine no puede estar vacio'}}})
    Ctl_Grupo_Engine: number;

    @Expose({ name: "Ctl_Grupo_Frame" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Frame es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Frame debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Frame debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Frame no puede estar vacio'}}})
    Ctl_Grupo_Frame: number;

    constructor(Ctl_Id: number, Ctl_Motocicleta: number, Ctl_Modelo : string, Ctl_Descripcion : string, Ctl_Version : string, Ctl_Grupo_Engine : number, Ctl_Grupo_Frame : number){
        this.Ctl_Id = Ctl_Id;
        this.Ctl_Motocicleta = Ctl_Motocicleta;
        this.Ctl_Modelo = Ctl_Modelo;
        this.Ctl_Descripcion = Ctl_Descripcion;
        this.Ctl_Version = Ctl_Version;
        this.Ctl_Grupo_Engine = Ctl_Grupo_Engine;
        this.Ctl_Grupo_Frame = Ctl_Grupo_Frame;
    }
}

export class validateQueryPutCatalogo{

    @Expose({ name: "idCatalogo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idMotocicleta es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idMotocicleta debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idMotocicleta no puede estar vacio'}}})
    idCatalogo: number;

    constructor(idCatalogo: number){
        this.idCatalogo = idCatalogo;
    }
}

export class validateBodyPutCatalogo{

    @Expose({ name: "Ctl_Motocicleta" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Motocicleta es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Motocicleta debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Motocicleta debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Motocicleta no puede estar vacio'}}})
    Ctl_Motocicleta: number;

    @Expose({ name: "Ctl_Modelo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Modelo es obligatorio'}}})
    @MaxLength(40, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Modelo debe tener como máximo 40 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Modelo no puede estar vacio'}}})
    Ctl_Modelo: string;

    @Expose({ name: "Ctl_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Descripcion no puede estar vacio'}}})
    Ctl_Descripcion: string;

    @Expose({ name: "Ctl_Version" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Version es obligatorio'}}})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Version debe tener como máximo 50 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Version debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Version no puede estar vacio'}}})
    Ctl_Version: string;

    @Expose({ name: "Ctl_Grupo_Engine" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Engine es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Engine debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Engine debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Engine no puede estar vacio'}}})
    Ctl_Grupo_Engine: number;

    @Expose({ name: "Ctl_Grupo_Frame" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Frame es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Frame debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Frame debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ctl_Grupo_Frame no puede estar vacio'}}})
    Ctl_Grupo_Frame: number;

    constructor(Ctl_Motocicleta: number, Ctl_Modelo : string, Ctl_Descripcion : string, Ctl_Version : string, Ctl_Grupo_Engine : number, Ctl_Grupo_Frame : number){
        this.Ctl_Motocicleta = Ctl_Motocicleta;
        this.Ctl_Modelo = Ctl_Modelo;
        this.Ctl_Descripcion = Ctl_Descripcion;
        this.Ctl_Version = Ctl_Version;
        this.Ctl_Grupo_Engine = Ctl_Grupo_Engine;
        this.Ctl_Grupo_Frame = Ctl_Grupo_Frame;
    }
}

export class validateDeleteCatalogo{

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