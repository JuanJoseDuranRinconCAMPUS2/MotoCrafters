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
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString, IsEmail } from 'class-validator';
export class validatePostDuenoMotocicleta {
    constructor(Dm_Id, Dm_Nombre, Dm_Tipo_Iden, Dm_Identificacion, Dm_Telefono, Dm_Email, Dm_Direccion, Dm_Genero, Dm_Fecha_Registro) {
        this.Dm_Id = Dm_Id;
        this.Dm_Nombre = Dm_Nombre;
        this.Dm_Tipo_Iden = Dm_Tipo_Iden;
        this.Dm_Identificacion = Dm_Identificacion;
        this.Dm_Telefono = Dm_Telefono;
        this.Dm_Email = Dm_Email;
        this.Dm_Direccion = Dm_Direccion;
        this.Dm_Genero = Dm_Genero;
        this.Dm_Fecha_Registro = Dm_Fecha_Registro;
    }
}
__decorate([
    Expose({ name: "Dm_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Dm_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Dm_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostDuenoMotocicleta.prototype, "Dm_Id", void 0);
__decorate([
    Expose({ name: "Dm_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Nombre es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro Dm_Nombre debe tener como máximo 100 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Dm_Nombre debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostDuenoMotocicleta.prototype, "Dm_Nombre", void 0);
__decorate([
    Expose({ name: "Dm_Tipo_Iden" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Tipo_Iden es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Dm_Tipo_Iden debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Dm_Tipo_Iden debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Tipo_Iden no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostDuenoMotocicleta.prototype, "Dm_Tipo_Iden", void 0);
__decorate([
    Expose({ name: "Dm_Identificacion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Identificacion es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Dm_Identificacion debe tener como máximo 20 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Dm_Identificacion debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Identificacion no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostDuenoMotocicleta.prototype, "Dm_Identificacion", void 0);
__decorate([
    Expose({ name: "Dm_Telefono" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Telefono es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Dm_Telefono debe tener como máximo 20 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Dm_Telefono debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Telefono no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostDuenoMotocicleta.prototype, "Dm_Telefono", void 0);
__decorate([
    Expose({ name: "Dm_Email" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Email es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro Dm_Email debe tener como máximo 100 caracteres' }; } }),
    IsEmail({}, { message: () => { throw { status: 400, message: 'El parametro Dm_Email debe ser un correo electronico valido' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Email no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostDuenoMotocicleta.prototype, "Dm_Email", void 0);
__decorate([
    Expose({ name: "Dm_Direccion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Direccion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Dm_Direccion debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Dm_Direccion debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Direccion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostDuenoMotocicleta.prototype, "Dm_Direccion", void 0);
__decorate([
    Expose({ name: "Dm_Genero" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Genero es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Dm_Genero debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Dm_Genero debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Genero no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostDuenoMotocicleta.prototype, "Dm_Genero", void 0);
__decorate([
    Expose({ name: "Dm_Fecha_Registro" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Fecha_Registro es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Dm_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Fecha_Registro no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostDuenoMotocicleta.prototype, "Dm_Fecha_Registro", void 0);
export class validateQueryPutDuenoMotocicleta {
    constructor(idDueñoMotocicleta) {
        this.idDueñoMotocicleta = idDueñoMotocicleta;
    }
}
__decorate([
    Expose({ name: "idDueñoMotocicleta" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idDueñoMotocicleta es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idDueñoMotocicleta debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idDueñoMotocicleta no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutDuenoMotocicleta.prototype, "idDue\u00F1oMotocicleta", void 0);
export class validateBodyPutDuenoMotocicleta {
    constructor(Dm_Nombre, Dm_Tipo_Iden, Dm_Identificacion, Dm_Telefono, Dm_Email, Dm_Direccion, Dm_Genero, Dm_Fecha_Registro) {
        this.Dm_Nombre = Dm_Nombre;
        this.Dm_Tipo_Iden = Dm_Tipo_Iden;
        this.Dm_Identificacion = Dm_Identificacion;
        this.Dm_Telefono = Dm_Telefono;
        this.Dm_Email = Dm_Email;
        this.Dm_Direccion = Dm_Direccion;
        this.Dm_Genero = Dm_Genero;
        this.Dm_Fecha_Registro = Dm_Fecha_Registro;
    }
}
__decorate([
    Expose({ name: "Dm_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Nombre es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro Dm_Nombre debe tener como máximo 100 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Dm_Nombre debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutDuenoMotocicleta.prototype, "Dm_Nombre", void 0);
__decorate([
    Expose({ name: "Dm_Tipo_Iden" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Tipo_Iden es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Dm_Tipo_Iden debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Dm_Tipo_Iden debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Tipo_Iden no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutDuenoMotocicleta.prototype, "Dm_Tipo_Iden", void 0);
__decorate([
    Expose({ name: "Dm_Identificacion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Identificacion es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Dm_Identificacion debe tener como máximo 20 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Dm_Identificacion debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Identificacion no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutDuenoMotocicleta.prototype, "Dm_Identificacion", void 0);
__decorate([
    Expose({ name: "Dm_Telefono" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Telefono es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Dm_Telefono debe tener como máximo 20 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Dm_Telefono debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Telefono no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutDuenoMotocicleta.prototype, "Dm_Telefono", void 0);
__decorate([
    Expose({ name: "Dm_Email" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Email es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro Dm_Email debe tener como máximo 100 caracteres' }; } }),
    IsEmail({}, { message: () => { throw { status: 400, message: 'El parametro Dm_Email debe ser un correo electronico valido' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Email no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutDuenoMotocicleta.prototype, "Dm_Email", void 0);
__decorate([
    Expose({ name: "Dm_Direccion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Direccion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Dm_Direccion debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Dm_Direccion debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Direccion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutDuenoMotocicleta.prototype, "Dm_Direccion", void 0);
__decorate([
    Expose({ name: "Dm_Genero" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Genero es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Dm_Genero debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Dm_Genero debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Genero no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutDuenoMotocicleta.prototype, "Dm_Genero", void 0);
__decorate([
    Expose({ name: "Dm_Fecha_Registro" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Dm_Fecha_Registro es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Dm_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Dm_Fecha_Registro no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validateBodyPutDuenoMotocicleta.prototype, "Dm_Fecha_Registro", void 0);
export class validateDeleteDuenoMotocicleta {
    constructor(IdDelete) {
        this.IdDelete = IdDelete;
    }
}
__decorate([
    Expose({ name: "IdDelete" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro IdDelete es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro idCategoria debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro IdDelete debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro IdDelete no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateDeleteDuenoMotocicleta.prototype, "IdDelete", void 0);
