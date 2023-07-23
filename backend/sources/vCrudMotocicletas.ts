import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostMotocicletas{
 
    @Expose({ name: "Mto_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id no puede estar vacio'}}})
    Mto_Id: number;

    @Expose({ name: "Mto_Marca" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Marca es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Marca debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Marca debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Marca no puede estar vacio'}}})
    Mto_Marca: number;

    @Expose({ name: "Mto_Nom_Modelo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Nom_Modelo es obligatorio'}}})
    @MaxLength(45, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Nom_Modelo debe tener como máximo 45 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Mto_Nom_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Nom_Modelo no puede estar vacio'}}})
    Mto_Nom_Modelo: string;

    @Expose({ name: "Mto_Año_Modelo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Año_Modelo es obligatorio'}}})
    @MaxLength(4, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Año_Modelo debe tener como máximo 4 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Mto_Año_Modelo debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Año_Modelo no puede estar vacio'}}})
    Mto_Año_Modelo: number;

    @Expose({ name: "Mto_Cilindraje" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Cilindraje es obligatorio'}}})
    @MaxLength(10, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Cilindraje debe tener como máximo 10 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s.]+$/, { message: () => {throw { status: 400, message: 'El parametro Mto_Cilindraje debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Cilindraje no puede estar vacio'}}})
    Mto_Cilindraje: string;

    @Expose({ name: "Mto_Potencia" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia es obligatorio'}}})
    @MaxLength(40, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia debe tener como máximo 40 caracteres'}}})
    @IsString({ message: 'El parámetro Mto_Potencia debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia no puede estar vacio'}}})
    Mto_Potencia: string;

    @Expose({ name: "Mto_Torque" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia es obligatorio'}}})
    @MaxLength(40, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia debe tener como máximo 40 caracteres'}}})
    @IsString({ message: 'El parámetro Mto_Potencia debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia no puede estar vacio'}}})
    Mto_Torque: string;

    @Expose({ name: "Mto_Colores" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id no puede estar vacio'}}})
    Mto_Colores: number;

    @Expose({ name: "Mto_Tipo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id no puede estar vacio'}}})
    Mto_Tipo: number;

    @Expose({ name: "Mto_Categoria" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Categoria es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Categoria debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Categoria debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Categoria no puede estar vacio'}}})
    Mto_Categoria: number;

    @Expose({ name: "Mto_Url_imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Url_imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Url_imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Mto_Url_imagen debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Url_imagen no puede estar vacio'}}})
    Mto_Url_imagen: string;

    constructor(Mto_Id: number, Mto_Marca: number, Mto_Nom_Modelo : string, Mto_Año_Modelo : number, Mto_Cilindraje : string, Mto_Potencia : string, Mto_Torque : string, Mto_Colores: number, Mto_Tipo: number, Mto_Categoria: number, Mto_Url_imagen :string){
        this.Mto_Id = Mto_Id;
        this.Mto_Marca = Mto_Marca;
        this.Mto_Nom_Modelo = Mto_Nom_Modelo;
        this.Mto_Año_Modelo = Mto_Año_Modelo;
        this.Mto_Cilindraje = Mto_Cilindraje;
        this.Mto_Potencia = Mto_Potencia;
        this.Mto_Torque = Mto_Torque;
        this.Mto_Colores = Mto_Colores;
        this.Mto_Tipo = Mto_Tipo;
        this.Mto_Categoria = Mto_Categoria;
        this.Mto_Url_imagen = Mto_Url_imagen;
    }
}

export class validateQueryPutMotocicletas{

    @Expose({ name: "idMotocicleta" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idMotocicleta es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idMotocicleta debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idMotocicleta no puede estar vacio'}}})
    idMotocicleta: number;

    constructor(idMotocicleta: number){
        this.idMotocicleta = idMotocicleta;
    }
}

export class validateBodyPutMotocicletas{

    @Expose({ name: "Mto_Marca" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Marca es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Marca debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Marca debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Marca no puede estar vacio'}}})
    Mto_Marca: number;

    @Expose({ name: "Mto_Nom_Modelo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Nom_Modelo es obligatorio'}}})
    @MaxLength(45, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Nom_Modelo debe tener como máximo 45 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Mto_Nom_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Nom_Modelo no puede estar vacio'}}})
    Mto_Nom_Modelo: string;

    @Expose({ name: "Mto_Año_Modelo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Año_Modelo es obligatorio'}}})
    @MaxLength(4, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Año_Modelo debe tener como máximo 4 caracteres'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro Mto_Año_Modelo debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Año_Modelo no puede estar vacio'}}})
    Mto_Año_Modelo: number;

    @Expose({ name: "Mto_Cilindraje" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Cilindraje es obligatorio'}}})
    @MaxLength(10, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Cilindraje debe tener como máximo 10 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s.]+$/, { message: () => {throw { status: 400, message: 'El parametro Mto_Cilindraje debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Cilindraje no puede estar vacio'}}})
    Mto_Cilindraje: string;

    @Expose({ name: "Mto_Potencia" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia es obligatorio'}}})
    @MaxLength(40, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia debe tener como máximo 40 caracteres'}}})
    @IsString({ message: 'El parámetro Mto_Potencia debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia no puede estar vacio'}}})
    Mto_Potencia: string;

    @Expose({ name: "Mto_Torque" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia es obligatorio'}}})
    @MaxLength(40, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia debe tener como máximo 40 caracteres'}}})
    @IsString({ message: 'El parámetro Mto_Potencia debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Potencia no puede estar vacio'}}})
    Mto_Torque: string;

    @Expose({ name: "Mto_Colores" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id no puede estar vacio'}}})
    Mto_Colores: number;

    @Expose({ name: "Mto_Tipo" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Id no puede estar vacio'}}})
    Mto_Tipo: number;

    @Expose({ name: "Mto_Categoria" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Categoria es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Categoria debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Categoria debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Categoria no puede estar vacio'}}})
    Mto_Categoria: number;

    @Expose({ name: "Mto_Url_imagen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Url_imagen es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Mto_Url_imagen debe tener como máximo 200 caracteres'}}})
    @IsString({ message: 'El parámetro Mto_Url_imagen debe ser un string' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Mto_Url_imagen no puede estar vacio'}}})
    Mto_Url_imagen: string;

    constructor(Mto_Marca: number, Mto_Nom_Modelo : string, Mto_Año_Modelo : number, Mto_Cilindraje : string, Mto_Potencia : string, Mto_Torque : string, Mto_Colores: number, Mto_Tipo: number, Mto_Categoria: number, Mto_Url_imagen :string){
        this.Mto_Marca = Mto_Marca;
        this.Mto_Nom_Modelo = Mto_Nom_Modelo;
        this.Mto_Año_Modelo = Mto_Año_Modelo;
        this.Mto_Cilindraje = Mto_Cilindraje;
        this.Mto_Potencia = Mto_Potencia;
        this.Mto_Torque = Mto_Torque;
        this.Mto_Colores = Mto_Colores;
        this.Mto_Tipo = Mto_Tipo;
        this.Mto_Categoria = Mto_Categoria;
        this.Mto_Url_imagen = Mto_Url_imagen;
    }
}

export class validateDeleteMotocicletas{

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