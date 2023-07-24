import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostPiezasGrupoFrame{
 
    @Expose({ name: "Pgf_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Id no puede estar vacio'}}})
    Pgf_Id: number;

    @Expose({ name: "Pgf_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_No es obligatorio'}}})
    @MaxLength(3, { message: ()=>{ throw { status: 400, message: 'El parametro Pgf_No debe tener como máximo 3 caracteres'}}})
    @Matches(/^[A-Za-z0-9]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Pgf_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_No no puede estar vacio'}}})
    Pgf_No: string;

    @Expose({ name: "Pgf_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Descripcion no puede estar vacio'}}})
    Pgf_Descripcion: string;

    @Expose({ name: "Pgf_Diagrama" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Diagrama es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Diagrama debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Pgf_Diagrama debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Diagrama no puede estar vacio'}}})
    Pgf_Diagrama: string;

    @Expose({ name: "Pgf_Url_Imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Url_Imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Url_Imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Pgf_Url_Imagen debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Url_Imagen no puede estar vacio'}}})
    Pgf_Url_Imagen: string;

    @Expose({ name: "Pgf_Grupo_Ref" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Grupo_Ref es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Grupo_Ref debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Grupo_Ref debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Grupo_Ref no puede estar vacio'}}})
    Pgf_Grupo_Ref: number;
    
    constructor(Pgf_Id: number, Pgf_No: string, Pgf_Descripcion : string, Pgf_Diagrama : string, Pgf_Url_Imagen : string, Pgf_Grupo_Ref : number){
        this.Pgf_Id = Pgf_Id;
        this.Pgf_No = Pgf_No;
        this.Pgf_Descripcion = Pgf_Descripcion;
        this.Pgf_Diagrama = Pgf_Diagrama;
        this.Pgf_Url_Imagen = Pgf_Url_Imagen;
        this.Pgf_Grupo_Ref = Pgf_Grupo_Ref;
    }
}

export class validateQueryPutPiezasGrupoFrame{

    @Expose({ name: "idPiezasGrupoFrame" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idPiezasGrupoEngine es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idPiezasGrupoEngine debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idPiezasGrupoEngine no puede estar vacio'}}})
    idPiezasGrupoFrame: number;

    constructor(idPiezasGrupoFrame: number){
        this.idPiezasGrupoFrame = idPiezasGrupoFrame;
    }
}

export class validateBodyPutPiezasGrupoFrame{

    @Expose({ name: "Pgf_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_No es obligatorio'}}})
    @MaxLength(3, { message: ()=>{ throw { status: 400, message: 'El parametro Pgf_No debe tener como máximo 3 caracteres'}}})
    @Matches(/^[A-Za-z0-9]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Pgf_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_No no puede estar vacio'}}})
    Pgf_No: string;

    @Expose({ name: "Pgf_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Descripcion no puede estar vacio'}}})
    Pgf_Descripcion: string;

    @Expose({ name: "Pgf_Diagrama" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Diagrama es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Diagrama debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Pgf_Diagrama debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Diagrama no puede estar vacio'}}})
    Pgf_Diagrama: string;

    @Expose({ name: "Pgf_Url_Imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Url_Imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Url_Imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Pgf_Url_Imagen debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Url_Imagen no puede estar vacio'}}})
    Pgf_Url_Imagen: string;

    @Expose({ name: "Pgf_Grupo_Ref" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Grupo_Ref es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Grupo_Ref debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Grupo_Ref debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pgf_Grupo_Ref no puede estar vacio'}}})
    Pgf_Grupo_Ref: number;
    
    constructor(Pgf_No: string, Pgf_Descripcion : string, Pgf_Diagrama : string, Pgf_Url_Imagen : string, Pgf_Grupo_Ref : number){
        this.Pgf_No = Pgf_No;
        this.Pgf_Descripcion = Pgf_Descripcion;
        this.Pgf_Diagrama = Pgf_Diagrama;
        this.Pgf_Url_Imagen = Pgf_Url_Imagen;
        this.Pgf_Grupo_Ref = Pgf_Grupo_Ref;
    }
}

export class validateDeletePiezasGrupoFrame{

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