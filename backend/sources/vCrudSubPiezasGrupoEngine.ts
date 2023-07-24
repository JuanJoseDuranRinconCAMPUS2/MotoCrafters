import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostSubPiezasGrupoEngine{
 
    @Expose({ name: "Sge_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Sge_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Id no puede estar vacio'}}})
    Sge_Id: number;

    @Expose({ name: "Sge_Ref_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Ref_No es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Sge_Ref_No debe tener como máximo 20 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sge_Ref_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Ref_No no puede estar vacio'}}})
    Sge_Ref_No: string;

    @Expose({ name: "Sge_Pieza_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Pieza_No es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Sge_Pieza_No debe tener como máximo 20 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sge_Pieza_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Pieza_No no puede estar vacio'}}})
    Sge_Pieza_No: string;

    @Expose({ name: "Sge_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Sge_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Descripcion no puede estar vacio'}}})
    Sge_Descripcion: string;

    @Expose({ name: "Sge_Url_Imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Url_Imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Sge_Url_Imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Sge_Url_Imagen debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Url_Imagen no puede estar vacio'}}})
    Sge_Url_Imagen: string;

    @Expose({ name: "Sge_Grupo_Piezas" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Grupo_Piezas es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Grupo_Piezas debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Sge_Grupo_Piezas debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Grupo_Piezas no puede estar vacio'}}})
    Sge_Grupo_Piezas: number;
    
    constructor(Sge_Id: number, Sge_Ref_No: string, Sge_Pieza_No : string, Sge_Descripcion : string, Sge_Url_Imagen : string, Sge_Grupo_Piezas : number){
        this.Sge_Id = Sge_Id;
        this.Sge_Ref_No =Sge_Ref_No;
        this.Sge_Pieza_No = Sge_Pieza_No;
        this.Sge_Descripcion = Sge_Descripcion;
        this.Sge_Url_Imagen = Sge_Url_Imagen;
        this.Sge_Grupo_Piezas = Sge_Grupo_Piezas;
    }
}

export class validateQueryPutSubPiezasGrupoEngine{

    @Expose({ name: "idSubPiezasGrupoEngine" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idPiezasGrupoEngine es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idPiezasGrupoEngine debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idPiezasGrupoEngine no puede estar vacio'}}})
    idSubPiezasGrupoEngine: number;

    constructor(idSubPiezasGrupoEngine: number){
        this.idSubPiezasGrupoEngine = idSubPiezasGrupoEngine;
    }
}

export class validateBodyPutSubPiezasGrupoEngine{

    @Expose({ name: "Sge_Ref_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Ref_No es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Sge_Ref_No debe tener como máximo 20 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sge_Ref_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Ref_No no puede estar vacio'}}})
    Sge_Ref_No: string;

    @Expose({ name: "Sge_Pieza_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Pieza_No es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Sge_Pieza_No debe tener como máximo 20 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sge_Pieza_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Pieza_No no puede estar vacio'}}})
    Sge_Pieza_No: string;

    @Expose({ name: "Sge_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Sge_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Descripcion no puede estar vacio'}}})
    Sge_Descripcion: string;

    @Expose({ name: "Sge_Url_Imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Url_Imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Sge_Url_Imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Sge_Url_Imagen debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Url_Imagen no puede estar vacio'}}})
    Sge_Url_Imagen: string;

    @Expose({ name: "Sge_Grupo_Piezas" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Grupo_Piezas es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Grupo_Piezas debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Sge_Grupo_Piezas debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sge_Grupo_Piezas no puede estar vacio'}}})
    Sge_Grupo_Piezas: number;
    
    constructor(Sge_Ref_No: string, Sge_Pieza_No : string, Sge_Descripcion : string, Sge_Url_Imagen : string, Sge_Grupo_Piezas : number){
        this.Sge_Ref_No =Sge_Ref_No;
        this.Sge_Pieza_No = Sge_Pieza_No;
        this.Sge_Descripcion = Sge_Descripcion;
        this.Sge_Url_Imagen = Sge_Url_Imagen;
        this.Sge_Grupo_Piezas = Sge_Grupo_Piezas;
    }
}

export class validateDeleteSubPiezasGrupoEngine{

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