import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostMotocicletasEnTaller{
 
    @Expose({ name: "Met_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Id no puede estar vacio'}}})
    Met_Id: number;

    @Expose({ name: "Met_Marca" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Marca es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Marca debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Marca debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Marca no puede estar vacio'}}})
    Met_Marca: number;

    @Expose({ name: "Met_Nom_Modelo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Nom_Modelo es obligatorio'}}})
    @MaxLength(45, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Nom_Modelo debe tener como máximo 45 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El Met_Nom_Modelo Mto_Nom_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Nom_Modelo no puede estar vacio'}}})
    Met_Nom_Modelo: string;

    @Expose({ name: "Met_Año_Modelo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Año_Modelo es obligatorio'}}})
    @MaxLength(4, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Año_Modelo debe tener como máximo 4 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Met_Año_Modelo debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Año_Modelo no puede estar vacio'}}})
    Met_Año_Modelo: number;

    @Expose({ name: "Met_Num_Chasis" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Num_Chasis es obligatorio'}}})
    @MaxLength(17, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Num_Chasis debe tener como máximo 17 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s.]+$/, { message: () => {throw { status: 400, message: 'El parametro Met_Num_Chasis debe ser una cadena de texto con letras y numeros' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Num_Chasis no puede estar vacio'}}})
    Met_Num_Chasis: string;

    @Expose({ name: "Met_Kilometraje" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Kilometraje es obligatorio'}}})
    @MaxLength(5, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Kilometraje debe tener como máximo 5 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Met_Kilometraje debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Kilometraje no puede estar vacio'}}})
    Met_Kilometraje: number;

    @Expose({ name: "Met_Color" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Color es obligatorio'}}})
    @MaxLength(10, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Color debe tener como máximo 10 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Met_Color debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Color no puede estar vacio'}}})
    Met_Color: string;

    @Expose({ name: "Met_Dueño" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Dueño es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Dueño debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Dueño debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Dueño no puede estar vacio'}}})
    Met_Dueño: number;

    @Expose({ name: "Met_Estado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Estado es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Estado debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Estado debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Estado no puede estar vacio'}}})
    Met_Estado: number;

    @Expose({ name: "Met_Tipo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Tipo es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Tipo debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Tipo debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Tipo no puede estar vacio'}}})
    Met_Tipo: number;

    @Expose({ name: "Met_Categoria" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Categoria es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Categoria debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Categoria debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Categoria no puede estar vacio'}}})
    Met_Categoria: number;

    @Expose({ name: "Met_Fecha_Registro" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Fecha_Registro es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Met_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Fecha_Registro no puede estar vacio'}}})
    Met_Fecha_Registro: Date;

    @Expose({ name: "Met_Url_imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Url_imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Url_imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: ()=>{ throw { status: 400, message: 'El parámetro Met_Url_imagen debe ser un string'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Url_imagen no puede estar vacio'}}})
    Met_Url_imagen: string;

    constructor(Met_Id: number, Met_Marca: number, Met_Nom_Modelo : string, Met_Año_Modelo : number, Met_Num_Chasis : string, Met_Kilometraje : number, Met_Color : string, Met_Dueño: number, Met_Estado: number, Met_Tipo: number, Met_Categoria: number, Met_Fecha_Registro : Date, Met_Url_imagen :string){
        this.Met_Id = Met_Id;
        this.Met_Marca = Met_Marca;
        this.Met_Nom_Modelo = Met_Nom_Modelo;
        this.Met_Año_Modelo = Met_Año_Modelo;
        this.Met_Num_Chasis = Met_Num_Chasis;
        this.Met_Kilometraje = Met_Kilometraje;
        this.Met_Color = Met_Color;
        this.Met_Dueño = Met_Dueño;
        this.Met_Estado = Met_Estado;
        this.Met_Tipo = Met_Tipo;
        this.Met_Categoria = Met_Categoria;
        this.Met_Fecha_Registro = Met_Fecha_Registro;
        this.Met_Url_imagen = Met_Url_imagen;
    }
}

export class validateQueryPutMotocicletasEnTaller{

    @Expose({ name: "idMotocicletasEnTaller" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idMotocicletasEnTaller es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idMotocicletasEnTaller debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idMotocicletasEnTaller no puede estar vacio'}}})
    idMotocicletasEnTaller: number;

    constructor(idMotocicletasEnTaller: number){
        this.idMotocicletasEnTaller = idMotocicletasEnTaller;
    }
}

export class validateBodyPutMotocicletasEnTaller{

    @Expose({ name: "Met_Marca" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Marca es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Marca debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Marca debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Marca no puede estar vacio'}}})
    Met_Marca: number;

    @Expose({ name: "Met_Nom_Modelo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Nom_Modelo es obligatorio'}}})
    @MaxLength(45, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Nom_Modelo debe tener como máximo 45 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El Met_Nom_Modelo Mto_Nom_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Nom_Modelo no puede estar vacio'}}})
    Met_Nom_Modelo: string;

    @Expose({ name: "Met_Año_Modelo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Año_Modelo es obligatorio'}}})
    @MaxLength(4, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Año_Modelo debe tener como máximo 4 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Met_Año_Modelo debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Año_Modelo no puede estar vacio'}}})
    Met_Año_Modelo: number;

    @Expose({ name: "Met_Num_Chasis" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Num_Chasis es obligatorio'}}})
    @MaxLength(17, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Num_Chasis debe tener como máximo 17 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s.]+$/, { message: () => {throw { status: 400, message: 'El parametro Met_Num_Chasis debe ser una cadena de texto con letras y numeros' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Num_Chasis no puede estar vacio'}}})
    Met_Num_Chasis: string;

    @Expose({ name: "Met_Kilometraje" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Kilometraje es obligatorio'}}})
    @MaxLength(5, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Kilometraje debe tener como máximo 5 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Met_Kilometraje debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Kilometraje no puede estar vacio'}}})
    Met_Kilometraje: number;

    @Expose({ name: "Met_Color" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Color es obligatorio'}}})
    @MaxLength(10, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Color debe tener como máximo 10 caracteres'}}})
    @Matches(/^[\p{L}\s]+$/u, {  message: ()=>{ throw { status: 400, message: 'El parametro Met_Color debe ser una cadena de texto sin números ni caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Color no puede estar vacio'}}})
    Met_Color: string;

    @Expose({ name: "Met_Dueño" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Dueño es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Dueño debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Dueño debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Dueño no puede estar vacio'}}})
    Met_Dueño: number;

    @Expose({ name: "Met_Estado" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Estado es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Estado debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Estado debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Estado no puede estar vacio'}}})
    Met_Estado: number;

    @Expose({ name: "Met_Tipo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Tipo es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Tipo debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Tipo debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Tipo no puede estar vacio'}}})
    Met_Tipo: number;

    @Expose({ name: "Met_Categoria" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Categoria es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Categoria debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Categoria debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Categoria no puede estar vacio'}}})
    Met_Categoria: number;

    @Expose({ name: "Met_Fecha_Registro" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Fecha_Registro es obligatorio'}}})
    @Matches(/^(\d{4})-(\d{2})-(\d{2})$/,{ message: ()=>{ throw { status: 400, message: 'El parametro Met_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Fecha_Registro no puede estar vacio'}}})
    Met_Fecha_Registro: Date;

    @Expose({ name: "Met_Url_imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Url_imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Met_Url_imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: ()=>{ throw { status: 400, message: 'El parámetro Met_Url_imagen debe ser un string'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Met_Url_imagen no puede estar vacio'}}})
    Met_Url_imagen: string;

    constructor(Met_Marca: number, Met_Nom_Modelo : string, Met_Año_Modelo : number, Met_Num_Chasis : string, Met_Kilometraje : number, Met_Color : string, Met_Dueño: number, Met_Estado: number, Met_Tipo: number, Met_Categoria: number, Met_Fecha_Registro : Date, Met_Url_imagen :string){
        this.Met_Marca = Met_Marca;
        this.Met_Nom_Modelo = Met_Nom_Modelo;
        this.Met_Año_Modelo = Met_Año_Modelo;
        this.Met_Num_Chasis = Met_Num_Chasis;
        this.Met_Kilometraje = Met_Kilometraje;
        this.Met_Color = Met_Color;
        this.Met_Dueño = Met_Dueño;
        this.Met_Estado = Met_Estado;
        this.Met_Tipo = Met_Tipo;
        this.Met_Categoria = Met_Categoria;
        this.Met_Fecha_Registro = Met_Fecha_Registro;
        this.Met_Url_imagen = Met_Url_imagen;
    }
}

export class validateDeleteMotocicletasEnTaller{

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