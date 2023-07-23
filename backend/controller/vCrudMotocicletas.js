var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString } from 'class-validator';
export class validatePostMotocicletas {
    constructor(Mto_Id, Mto_Marca, Mto_Nom_Modelo, Mto_Año_Modelo, Mto_Cilindraje, Mto_Potencia, Mto_Torque, Mto_Colores, Mto_Tipo, Mto_Categoria, Mto_Url_imagen) {
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
__decorate([
    Expose({ name: "Mto_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mto_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mto_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletas.prototype, "Mto_Id", void 0);
__decorate([
    Expose({ name: "Mto_Marca" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Marca es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mto_Marca debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mto_Marca debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Marca no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletas.prototype, "Mto_Marca", void 0);
__decorate([
    Expose({ name: "Mto_Nom_Modelo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Nom_Modelo es obligatorio' }; } }),
    MaxLength(45, { message: () => { throw { status: 400, message: 'El parametro Mto_Nom_Modelo debe tener como máximo 45 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Mto_Nom_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Nom_Modelo no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMotocicletas.prototype, "Mto_Nom_Modelo", void 0);
__decorate([
    Expose({ name: "Mto_Año_Modelo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Año_Modelo es obligatorio' }; } }),
    MaxLength(4, { message: () => { throw { status: 400, message: 'El parametro Mto_Año_Modelo debe tener como máximo 4 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Mto_Año_Modelo debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Año_Modelo no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletas.prototype, "Mto_A\u00F1o_Modelo", void 0);
__decorate([
    Expose({ name: "Mto_Cilindraje" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Cilindraje es obligatorio' }; } }),
    MaxLength(10, { message: () => { throw { status: 400, message: 'El parametro Mto_Cilindraje debe tener como máximo 10 caracteres' }; } }),
    Matches(/^[A-Za-z0-9\s.]+$/, { message: () => { throw { status: 400, message: 'El parametro Mto_Cilindraje debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Cilindraje no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMotocicletas.prototype, "Mto_Cilindraje", void 0);
__decorate([
    Expose({ name: "Mto_Potencia" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Potencia es obligatorio' }; } }),
    MaxLength(40, { message: () => { throw { status: 400, message: 'El parametro Mto_Potencia debe tener como máximo 40 caracteres' }; } }),
    IsString({ message: 'El parámetro Mto_Potencia debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Potencia no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMotocicletas.prototype, "Mto_Potencia", void 0);
__decorate([
    Expose({ name: "Mto_Torque" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Potencia es obligatorio' }; } }),
    MaxLength(40, { message: () => { throw { status: 400, message: 'El parametro Mto_Potencia debe tener como máximo 40 caracteres' }; } }),
    IsString({ message: 'El parámetro Mto_Potencia debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Potencia no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMotocicletas.prototype, "Mto_Torque", void 0);
__decorate([
    Expose({ name: "Mto_Colores" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mto_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mto_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletas.prototype, "Mto_Colores", void 0);
__decorate([
    Expose({ name: "Mto_Tipo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mto_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mto_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletas.prototype, "Mto_Tipo", void 0);
__decorate([
    Expose({ name: "Mto_Categoria" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Categoria es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mto_Categoria debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mto_Categoria debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Categoria no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletas.prototype, "Mto_Categoria", void 0);
__decorate([
    Expose({ name: "Mto_Url_imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Url_imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Mto_Url_imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Mto_Url_imagen debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Url_imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMotocicletas.prototype, "Mto_Url_imagen", void 0);
export class validateQueryPutMotocicletas {
    constructor(idMotocicleta) {
        this.idMotocicleta = idMotocicleta;
    }
}
__decorate([
    Expose({ name: "idMotocicleta" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idMotocicleta es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idMotocicleta debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idMotocicleta no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutMotocicletas.prototype, "idMotocicleta", void 0);
export class validateBodyPutMotocicletas {
    constructor(Mto_Marca, Mto_Nom_Modelo, Mto_Año_Modelo, Mto_Cilindraje, Mto_Potencia, Mto_Torque, Mto_Colores, Mto_Tipo, Mto_Categoria, Mto_Url_imagen) {
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
__decorate([
    Expose({ name: "Mto_Marca" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Marca es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mto_Marca debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mto_Marca debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Marca no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletas.prototype, "Mto_Marca", void 0);
__decorate([
    Expose({ name: "Mto_Nom_Modelo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Nom_Modelo es obligatorio' }; } }),
    MaxLength(45, { message: () => { throw { status: 400, message: 'El parametro Mto_Nom_Modelo debe tener como máximo 45 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Mto_Nom_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Nom_Modelo no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMotocicletas.prototype, "Mto_Nom_Modelo", void 0);
__decorate([
    Expose({ name: "Mto_Año_Modelo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Año_Modelo es obligatorio' }; } }),
    MaxLength(4, { message: () => { throw { status: 400, message: 'El parametro Mto_Año_Modelo debe tener como máximo 4 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Mto_Año_Modelo debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Año_Modelo no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletas.prototype, "Mto_A\u00F1o_Modelo", void 0);
__decorate([
    Expose({ name: "Mto_Cilindraje" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Cilindraje es obligatorio' }; } }),
    MaxLength(10, { message: () => { throw { status: 400, message: 'El parametro Mto_Cilindraje debe tener como máximo 10 caracteres' }; } }),
    Matches(/^[A-Za-z0-9\s.]+$/, { message: () => { throw { status: 400, message: 'El parametro Mto_Cilindraje debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Cilindraje no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMotocicletas.prototype, "Mto_Cilindraje", void 0);
__decorate([
    Expose({ name: "Mto_Potencia" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Potencia es obligatorio' }; } }),
    MaxLength(40, { message: () => { throw { status: 400, message: 'El parametro Mto_Potencia debe tener como máximo 40 caracteres' }; } }),
    IsString({ message: 'El parámetro Mto_Potencia debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Potencia no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMotocicletas.prototype, "Mto_Potencia", void 0);
__decorate([
    Expose({ name: "Mto_Torque" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Potencia es obligatorio' }; } }),
    MaxLength(40, { message: () => { throw { status: 400, message: 'El parametro Mto_Potencia debe tener como máximo 40 caracteres' }; } }),
    IsString({ message: 'El parámetro Mto_Potencia debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Potencia no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMotocicletas.prototype, "Mto_Torque", void 0);
__decorate([
    Expose({ name: "Mto_Colores" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mto_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mto_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletas.prototype, "Mto_Colores", void 0);
__decorate([
    Expose({ name: "Mto_Tipo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mto_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mto_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletas.prototype, "Mto_Tipo", void 0);
__decorate([
    Expose({ name: "Mto_Categoria" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Categoria es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mto_Categoria debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mto_Categoria debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Categoria no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletas.prototype, "Mto_Categoria", void 0);
__decorate([
    Expose({ name: "Mto_Url_imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mto_Url_imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Mto_Url_imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Mto_Url_imagen debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mto_Url_imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMotocicletas.prototype, "Mto_Url_imagen", void 0);
export class validateDeleteMotocicletas {
    constructor(IdDelete) {
        this.IdDelete = IdDelete;
    }
}
__decorate([
    Expose({ name: "IdDelete" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro IdDelete es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro idCategoria debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro idCategoria debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro IdDelete no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateDeleteMotocicletas.prototype, "IdDelete", void 0);
