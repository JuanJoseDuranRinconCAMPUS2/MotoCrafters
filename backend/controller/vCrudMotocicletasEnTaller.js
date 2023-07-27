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
export class validatePostMotocicletasEnTaller {
    constructor(Met_Id, Met_Marca, Met_Nom_Modelo, Met_Año_Modelo, Met_Num_Chasis, Met_Kilometraje, Met_Color, Met_Dueño, Met_Estado, Met_Tipo, Met_Categoria, Met_Fecha_Registro, Met_Url_imagen) {
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
__decorate([
    Expose({ name: "Met_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Met_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Met_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletasEnTaller.prototype, "Met_Id", void 0);
__decorate([
    Expose({ name: "Met_Marca" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Marca es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Met_Marca debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Met_Marca debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Marca no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletasEnTaller.prototype, "Met_Marca", void 0);
__decorate([
    Expose({ name: "Met_Nom_Modelo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Nom_Modelo es obligatorio' }; } }),
    MaxLength(45, { message: () => { throw { status: 400, message: 'El parametro Met_Nom_Modelo debe tener como máximo 45 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El Met_Nom_Modelo Mto_Nom_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Nom_Modelo no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMotocicletasEnTaller.prototype, "Met_Nom_Modelo", void 0);
__decorate([
    Expose({ name: "Met_Año_Modelo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Año_Modelo es obligatorio' }; } }),
    MaxLength(4, { message: () => { throw { status: 400, message: 'El parametro Met_Año_Modelo debe tener como máximo 4 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Met_Año_Modelo debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Año_Modelo no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletasEnTaller.prototype, "Met_A\u00F1o_Modelo", void 0);
__decorate([
    Expose({ name: "Met_Num_Chasis" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Num_Chasis es obligatorio' }; } }),
    MaxLength(17, { message: () => { throw { status: 400, message: 'El parametro Met_Num_Chasis debe tener como máximo 17 caracteres' }; } }),
    Matches(/^[A-Za-z0-9\s.]+$/, { message: () => { throw { status: 400, message: 'El parametro Met_Num_Chasis debe ser una cadena de texto con letras y numeros' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Num_Chasis no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMotocicletasEnTaller.prototype, "Met_Num_Chasis", void 0);
__decorate([
    Expose({ name: "Met_Kilometraje" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Kilometraje es obligatorio' }; } }),
    MaxLength(5, { message: () => { throw { status: 400, message: 'El parametro Met_Kilometraje debe tener como máximo 5 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Met_Kilometraje debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Kilometraje no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletasEnTaller.prototype, "Met_Kilometraje", void 0);
__decorate([
    Expose({ name: "Met_Color" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Color es obligatorio' }; } }),
    MaxLength(10, { message: () => { throw { status: 400, message: 'El parametro Met_Color debe tener como máximo 10 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Met_Color debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Color no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMotocicletasEnTaller.prototype, "Met_Color", void 0);
__decorate([
    Expose({ name: "Met_Dueño" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Dueño es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Met_Dueño debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Met_Dueño debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Dueño no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletasEnTaller.prototype, "Met_Due\u00F1o", void 0);
__decorate([
    Expose({ name: "Met_Estado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Estado es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Met_Estado debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Met_Estado debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Estado no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletasEnTaller.prototype, "Met_Estado", void 0);
__decorate([
    Expose({ name: "Met_Tipo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Tipo es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Met_Tipo debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Met_Tipo debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Tipo no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletasEnTaller.prototype, "Met_Tipo", void 0);
__decorate([
    Expose({ name: "Met_Categoria" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Categoria es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Met_Categoria debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Met_Categoria debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Categoria no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMotocicletasEnTaller.prototype, "Met_Categoria", void 0);
__decorate([
    Expose({ name: "Met_Fecha_Registro" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Fecha_Registro es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Met_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Fecha_Registro no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostMotocicletasEnTaller.prototype, "Met_Fecha_Registro", void 0);
__decorate([
    Expose({ name: "Met_Url_imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Url_imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Met_Url_imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: () => { throw { status: 400, message: 'El parámetro Met_Url_imagen debe ser un string' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Url_imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMotocicletasEnTaller.prototype, "Met_Url_imagen", void 0);
export class validateQueryPutMotocicletasEnTaller {
    constructor(idMotocicletasEnTaller) {
        this.idMotocicletasEnTaller = idMotocicletasEnTaller;
    }
}
__decorate([
    Expose({ name: "idMotocicletasEnTaller" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idMotocicletasEnTaller es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idMotocicletasEnTaller debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idMotocicletasEnTaller no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutMotocicletasEnTaller.prototype, "idMotocicletasEnTaller", void 0);
export class validateBodyPutMotocicletasEnTaller {
    constructor(Met_Marca, Met_Nom_Modelo, Met_Año_Modelo, Met_Num_Chasis, Met_Kilometraje, Met_Color, Met_Dueño, Met_Estado, Met_Tipo, Met_Categoria, Met_Fecha_Registro, Met_Url_imagen) {
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
__decorate([
    Expose({ name: "Met_Marca" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Marca es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Met_Marca debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Met_Marca debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Marca no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_Marca", void 0);
__decorate([
    Expose({ name: "Met_Nom_Modelo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Nom_Modelo es obligatorio' }; } }),
    MaxLength(45, { message: () => { throw { status: 400, message: 'El parametro Met_Nom_Modelo debe tener como máximo 45 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El Met_Nom_Modelo Mto_Nom_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Nom_Modelo no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_Nom_Modelo", void 0);
__decorate([
    Expose({ name: "Met_Año_Modelo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Año_Modelo es obligatorio' }; } }),
    MaxLength(4, { message: () => { throw { status: 400, message: 'El parametro Met_Año_Modelo debe tener como máximo 4 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Met_Año_Modelo debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Año_Modelo no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_A\u00F1o_Modelo", void 0);
__decorate([
    Expose({ name: "Met_Num_Chasis" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Num_Chasis es obligatorio' }; } }),
    MaxLength(17, { message: () => { throw { status: 400, message: 'El parametro Met_Num_Chasis debe tener como máximo 17 caracteres' }; } }),
    Matches(/^[A-Za-z0-9\s.]+$/, { message: () => { throw { status: 400, message: 'El parametro Met_Num_Chasis debe ser una cadena de texto con letras y numeros' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Num_Chasis no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_Num_Chasis", void 0);
__decorate([
    Expose({ name: "Met_Kilometraje" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Kilometraje es obligatorio' }; } }),
    MaxLength(5, { message: () => { throw { status: 400, message: 'El parametro Met_Kilometraje debe tener como máximo 5 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Met_Kilometraje debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Kilometraje no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_Kilometraje", void 0);
__decorate([
    Expose({ name: "Met_Color" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Color es obligatorio' }; } }),
    MaxLength(10, { message: () => { throw { status: 400, message: 'El parametro Met_Color debe tener como máximo 10 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Met_Color debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Color no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_Color", void 0);
__decorate([
    Expose({ name: "Met_Dueño" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Dueño es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Met_Dueño debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Met_Dueño debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Dueño no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_Due\u00F1o", void 0);
__decorate([
    Expose({ name: "Met_Estado" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Estado es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Met_Estado debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Met_Estado debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Estado no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_Estado", void 0);
__decorate([
    Expose({ name: "Met_Tipo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Tipo es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Met_Tipo debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Met_Tipo debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Tipo no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_Tipo", void 0);
__decorate([
    Expose({ name: "Met_Categoria" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Categoria es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Met_Categoria debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Met_Categoria debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Categoria no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_Categoria", void 0);
__decorate([
    Expose({ name: "Met_Fecha_Registro" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Fecha_Registro es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Met_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Fecha_Registro no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_Fecha_Registro", void 0);
__decorate([
    Expose({ name: "Met_Url_imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Met_Url_imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Met_Url_imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: () => { throw { status: 400, message: 'El parámetro Met_Url_imagen debe ser un string' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Met_Url_imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMotocicletasEnTaller.prototype, "Met_Url_imagen", void 0);
export class validateDeleteMotocicletasEnTaller {
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
], validateDeleteMotocicletasEnTaller.prototype, "IdDelete", void 0);
