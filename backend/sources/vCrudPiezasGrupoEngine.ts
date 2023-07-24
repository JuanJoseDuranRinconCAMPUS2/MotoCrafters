import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostPiezasGrupoEngine{
 
    @Expose({ name: "Pge_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Pge_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Id no puede estar vacio'}}})
    Pge_Id: number;

    @Expose({ name: "Pge_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_No es obligatorio'}}})
    @MaxLength(3, { message: ()=>{ throw { status: 400, message: 'El parametro Pge_No debe tener como máximo 3 caracteres'}}})
    @Matches(/^[A-Za-z0-9]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Pge_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_No no puede estar vacio'}}})
    Pge_No: string;

    @Expose({ name: "Pge_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pge_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Pge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Descripcion no puede estar vacio'}}})
    Pge_Descripcion: string;

    @Expose({ name: "Pge_Diagrama" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Diagrama es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pge_Diagrama debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Pge_Diagrama debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Diagrama no puede estar vacio'}}})
    Pge_Diagrama: string;

    @Expose({ name: "Pge_Url_Imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Url_Imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pge_Url_Imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Mto_Url_imagen debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Url_Imagen no puede estar vacio'}}})
    Pge_Url_Imagen: string;

    @Expose({ name: "Pge_Grupo_Ref" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Grupo_Ref es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Grupo_Ref debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Pge_Grupo_Ref debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Grupo_Ref no puede estar vacio'}}})
    Pge_Grupo_Ref: number;
    
    constructor(Pge_Id: number, Pge_No: string, Pge_Descripcion : string, Pge_Diagrama : string, Pge_Url_Imagen : string, Pge_Grupo_Ref : number){
        this.Pge_Id = Pge_Id;
        this.Pge_No = Pge_No;
        this.Pge_Descripcion = Pge_Descripcion;
        this.Pge_Diagrama = Pge_Diagrama;
        this.Pge_Url_Imagen = Pge_Url_Imagen;
        this.Pge_Grupo_Ref = Pge_Grupo_Ref;
    }
}

export class validateQueryPutPiezasGrupoEngine{

    @Expose({ name: "idPiezasGrupoEngine" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idPiezasGrupoEngine es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idPiezasGrupoEngine debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idPiezasGrupoEngine no puede estar vacio'}}})
    idPiezasGrupoEngine: number;

    constructor(idPiezasGrupoEngine: number){
        this.idPiezasGrupoEngine = idPiezasGrupoEngine;
    }
}

export class validateBodyPutPiezasGrupoEngine{

    @Expose({ name: "Pge_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_No es obligatorio'}}})
    @MaxLength(3, { message: ()=>{ throw { status: 400, message: 'El parametro Pge_No debe tener como máximo 3 caracteres'}}})
    @Matches(/^[A-Za-z0-9]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Pge_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_No no puede estar vacio'}}})
    Pge_No: string;

    @Expose({ name: "Pge_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pge_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Pge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Descripcion no puede estar vacio'}}})
    Pge_Descripcion: string;

    @Expose({ name: "Pge_Diagrama" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Diagrama es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pge_Diagrama debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Pge_Diagrama debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Diagrama no puede estar vacio'}}})
    Pge_Diagrama: string;

    @Expose({ name: "Pge_Url_Imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Url_Imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Pge_Url_Imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Mto_Url_imagen debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Url_Imagen no puede estar vacio'}}})
    Pge_Url_Imagen: string;

    @Expose({ name: "Pge_Grupo_Ref" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Grupo_Ref es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Grupo_Ref debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Pge_Grupo_Ref debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Pge_Grupo_Ref no puede estar vacio'}}})
    Pge_Grupo_Ref: number;
    
    constructor(Pge_No: string, Pge_Descripcion : string, Pge_Diagrama : string, Pge_Url_Imagen : string, Pge_Grupo_Ref : number){
        this.Pge_No = Pge_No;
        this.Pge_Descripcion = Pge_Descripcion;
        this.Pge_Diagrama = Pge_Diagrama;
        this.Pge_Url_Imagen = Pge_Url_Imagen;
        this.Pge_Grupo_Ref = Pge_Grupo_Ref;
    }
}

export class validateDeletePiezasGrupoEngine{

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