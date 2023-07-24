import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostSubPiezasGrupoFrame{
 
    @Expose({ name: "Sgf_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Id no puede estar vacio'}}})
    Sgf_Id: number;

    @Expose({ name: "Sgf_Ref_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Ref_No es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Ref_No debe tener como máximo 20 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Ref_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Ref_No no puede estar vacio'}}})
    Sgf_Ref_No: string;

    @Expose({ name: "Sgf_Pieza_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Pieza_No es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Pieza_No debe tener como máximo 20 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Pieza_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Pieza_No no puede estar vacio'}}})
    Sgf_Pieza_No: string;

    @Expose({ name: "Sgf_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Descripcion no puede estar vacio'}}})
    Sgf_Descripcion: string;

    @Expose({ name: "Sgf_Url_Imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Url_Imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Url_Imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Sgf_Url_Imagen debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Url_Imagen no puede estar vacio'}}})
    Sgf_Url_Imagen: string;

    @Expose({ name: "Sgf_Grupo_Piezas" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas no puede estar vacio'}}})
    Sgf_Grupo_Piezas: number;
    
    constructor(Sgf_Id: number, Sgf_Ref_No: string, Sgf_Pieza_No : string, Sgf_Descripcion : string, Sgf_Url_Imagen : string, Sgf_Grupo_Piezas : number){
        this.Sgf_Id = Sgf_Id;
        this.Sgf_Ref_No =Sgf_Ref_No;
        this.Sgf_Pieza_No = Sgf_Pieza_No;
        this.Sgf_Descripcion = Sgf_Descripcion;
        this.Sgf_Url_Imagen = Sgf_Url_Imagen;
        this.Sgf_Grupo_Piezas = Sgf_Grupo_Piezas;
    }
}

export class validateQueryPutSubPiezasGrupoFrame{

    @Expose({ name: "idSubPiezasGrupoFrame" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idPiezasGrupoFrame es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idPiezasGrupoFrame debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idPiezasGrupoFrame no puede estar vacio'}}})
    idSubPiezasGrupoFrame: number;

    constructor(idSubPiezasGrupoFrame: number){
        this.idSubPiezasGrupoFrame = idSubPiezasGrupoFrame;
    }
}

export class validateBodyPutSubPiezasGrupoFrame{

    @Expose({ name: "Sgf_Ref_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Ref_No es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Ref_No debe tener como máximo 20 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Ref_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Ref_No no puede estar vacio'}}})
    Sgf_Ref_No: string;

    @Expose({ name: "Sgf_Pieza_No" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Pieza_No es obligatorio'}}})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Pieza_No debe tener como máximo 20 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Pieza_No debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Pieza_No no puede estar vacio'}}})
    Sgf_Pieza_No: string;

    @Expose({ name: "Sgf_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Descripcion no puede estar vacio'}}})
    Sgf_Descripcion: string;

    @Expose({ name: "Sgf_Url_Imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Url_Imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Url_Imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Sgf_Url_Imagen debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Url_Imagen no puede estar vacio'}}})
    Sgf_Url_Imagen: string;

    @Expose({ name: "Sgf_Grupo_Piezas" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas no puede estar vacio'}}})
    Sgf_Grupo_Piezas: number;
    
    constructor(Sgf_Ref_No: string, Sgf_Pieza_No : string, Sgf_Descripcion : string, Sgf_Url_Imagen : string, Sgf_Grupo_Piezas : number){
        this.Sgf_Ref_No =Sgf_Ref_No;
        this.Sgf_Pieza_No = Sgf_Pieza_No;
        this.Sgf_Descripcion = Sgf_Descripcion;
        this.Sgf_Url_Imagen = Sgf_Url_Imagen;
        this.Sgf_Grupo_Piezas = Sgf_Grupo_Piezas;
    }
}

export class validateDeleteSubPiezasGrupoFrame{

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