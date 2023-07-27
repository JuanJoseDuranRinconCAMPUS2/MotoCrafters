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
export class validatePostMecanico {
    constructor(Mec_Id, Mec_Nombre, Mec_Especialidad, Mec_Tipo_Iden, Mec_Identificacion, Mec_Telefono, Mec_Email, Mec_Direccion, Mec_Genero, Mec_Fecha_Registro) {
        this.Mec_Id = Mec_Id;
        this.Mec_Nombre = Mec_Nombre;
        this.Mec_Especialidad = Mec_Especialidad;
        this.Mec_Tipo_Iden = Mec_Tipo_Iden;
        this.Mec_Identificacion = Mec_Identificacion;
        this.Mec_Telefono = Mec_Telefono;
        this.Mec_Email = Mec_Email;
        this.Mec_Direccion = Mec_Direccion;
        this.Mec_Genero = Mec_Genero;
        this.Mec_Fecha_Registro = Mec_Fecha_Registro;
    }
}
__decorate([
    Expose({ name: "Mec_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mec_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mec_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMecanico.prototype, "Mec_Id", void 0);
__decorate([
    Expose({ name: "Mec_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Nombre es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro Mec_Nombre debe tener como máximo 100 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Mec_Nombre debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMecanico.prototype, "Mec_Nombre", void 0);
__decorate([
    Expose({ name: "Mec_Especialidad" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Especialidad es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mec_Especialidad debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mec_Especialidad debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Especialidad no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMecanico.prototype, "Mec_Especialidad", void 0);
__decorate([
    Expose({ name: "Mec_Tipo_Iden" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Tipo_Iden es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mec_Tipo_Iden debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mec_Tipo_Iden debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Tipo_Iden no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMecanico.prototype, "Mec_Tipo_Iden", void 0);
__decorate([
    Expose({ name: "Mec_Identificacion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Identificacion es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Mec_Identificacion debe tener como máximo 20 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Mec_Identificacion debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Identificacion no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMecanico.prototype, "Mec_Identificacion", void 0);
__decorate([
    Expose({ name: "Mec_Telefono" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Telefono es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Mec_Telefono debe tener como máximo 20 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Mec_Telefono debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Telefono no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMecanico.prototype, "Mec_Telefono", void 0);
__decorate([
    Expose({ name: "Mec_Email" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Email es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro Mec_Email debe tener como máximo 100 caracteres' }; } }),
    IsEmail({}, { message: () => { throw { status: 400, message: 'El parametro Mec_Email debe ser un correo electronico valido' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Email no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMecanico.prototype, "Mec_Email", void 0);
__decorate([
    Expose({ name: "Mec_Direccion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Direccion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Mec_Direccion debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: () => { throw { status: 400, message: 'El parametro Mec_Direccion debe ser un string' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Direccion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostMecanico.prototype, "Mec_Direccion", void 0);
__decorate([
    Expose({ name: "Mec_Genero" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Genero es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mec_Genero debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mec_Genero debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Genero no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostMecanico.prototype, "Mec_Genero", void 0);
__decorate([
    Expose({ name: "Mec_Fecha_Registro" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Fecha_Registro es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Mec_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Fecha_Registro no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostMecanico.prototype, "Mec_Fecha_Registro", void 0);
export class validateQueryPutMecanico {
    constructor(idMecanico) {
        this.idMecanico = idMecanico;
    }
}
__decorate([
    Expose({ name: "idMecanico" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idMecanico es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idMecanico debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idMecanico no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutMecanico.prototype, "idMecanico", void 0);
export class validateBodyPutMecanico {
    constructor(Mec_Nombre, Mec_Especialidad, Mec_Tipo_Iden, Mec_Identificacion, Mec_Telefono, Mec_Email, Mec_Direccion, Mec_Genero, Mec_Fecha_Registro) {
        this.Mec_Nombre = Mec_Nombre;
        this.Mec_Especialidad = Mec_Especialidad;
        this.Mec_Tipo_Iden = Mec_Tipo_Iden;
        this.Mec_Identificacion = Mec_Identificacion;
        this.Mec_Telefono = Mec_Telefono;
        this.Mec_Email = Mec_Email;
        this.Mec_Direccion = Mec_Direccion;
        this.Mec_Genero = Mec_Genero;
        this.Mec_Fecha_Registro = Mec_Fecha_Registro;
    }
}
__decorate([
    Expose({ name: "Mec_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Nombre es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro Mec_Nombre debe tener como máximo 100 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Mec_Nombre debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMecanico.prototype, "Mec_Nombre", void 0);
__decorate([
    Expose({ name: "Mec_Especialidad" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Especialidad es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mec_Especialidad debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mec_Especialidad debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Especialidad no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMecanico.prototype, "Mec_Especialidad", void 0);
__decorate([
    Expose({ name: "Mec_Tipo_Iden" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Tipo_Iden es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mec_Tipo_Iden debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mec_Tipo_Iden debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Tipo_Iden no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMecanico.prototype, "Mec_Tipo_Iden", void 0);
__decorate([
    Expose({ name: "Mec_Identificacion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Identificacion es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Mec_Identificacion debe tener como máximo 20 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Mec_Identificacion debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Identificacion no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMecanico.prototype, "Mec_Identificacion", void 0);
__decorate([
    Expose({ name: "Mec_Telefono" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Telefono es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Mec_Telefono debe tener como máximo 20 caracteres' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro Mec_Telefono debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Telefono no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMecanico.prototype, "Mec_Telefono", void 0);
__decorate([
    Expose({ name: "Mec_Email" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Email es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro Mec_Email debe tener como máximo 100 caracteres' }; } }),
    IsEmail({}, { message: () => { throw { status: 400, message: 'El parametro Mec_Email debe ser un correo electronico valido' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Email no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMecanico.prototype, "Mec_Email", void 0);
__decorate([
    Expose({ name: "Mec_Direccion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Direccion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Mec_Direccion debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: () => { throw { status: 400, message: 'El parametro Mec_Direccion debe ser un string' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Direccion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutMecanico.prototype, "Mec_Direccion", void 0);
__decorate([
    Expose({ name: "Mec_Genero" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Genero es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Mec_Genero debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Mec_Genero debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Genero no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutMecanico.prototype, "Mec_Genero", void 0);
__decorate([
    Expose({ name: "Mec_Fecha_Registro" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Mec_Fecha_Registro es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Mec_Fecha_Registro debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Mec_Fecha_Registro no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validateBodyPutMecanico.prototype, "Mec_Fecha_Registro", void 0);
export class validateDeleteMecanico {
    constructor(IdDelete) {
        this.IdDelete = IdDelete;
    }
}
__decorate([
    Expose({ name: "IdDelete" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro IdDelete es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro IdDelete debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro IdDelete debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro IdDelete no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateDeleteMecanico.prototype, "IdDelete", void 0);
