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
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches } from 'class-validator';
export class validatePostCatalogo {
    constructor(Ctl_Id, Ctl_Motocicleta, Ctl_Modelo, Ctl_Descripcion, Ctl_Version, Ctl_Grupo_Engine, Ctl_Grupo_Frame) {
        this.Ctl_Id = Ctl_Id;
        this.Ctl_Motocicleta = Ctl_Motocicleta;
        this.Ctl_Modelo = Ctl_Modelo;
        this.Ctl_Descripcion = Ctl_Descripcion;
        this.Ctl_Version = Ctl_Version;
        this.Ctl_Grupo_Engine = Ctl_Grupo_Engine;
        this.Ctl_Grupo_Frame = Ctl_Grupo_Frame;
    }
}
__decorate([
    Expose({ name: "Ctl_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ctl_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ctl_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostCatalogo.prototype, "Ctl_Id", void 0);
__decorate([
    Expose({ name: "Ctl_Motocicleta" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Motocicleta es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ctl_Motocicleta debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ctl_Motocicleta debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Motocicleta no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostCatalogo.prototype, "Ctl_Motocicleta", void 0);
__decorate([
    Expose({ name: "Ctl_Modelo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Modelo es obligatorio' }; } }),
    MaxLength(40, { message: () => { throw { status: 400, message: 'El parametro Ctl_Modelo debe tener como máximo 40 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ctl_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Modelo no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostCatalogo.prototype, "Ctl_Modelo", void 0);
__decorate([
    Expose({ name: "Ctl_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Ctl_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ctl_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostCatalogo.prototype, "Ctl_Descripcion", void 0);
__decorate([
    Expose({ name: "Ctl_Version" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Version es obligatorio' }; } }),
    MaxLength(50, { message: () => { throw { status: 400, message: 'El parametro Ctl_Version debe tener como máximo 50 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ctl_Version debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Version no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostCatalogo.prototype, "Ctl_Version", void 0);
__decorate([
    Expose({ name: "Ctl_Grupo_Engine" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Engine es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Engine debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Engine debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Engine no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostCatalogo.prototype, "Ctl_Grupo_Engine", void 0);
__decorate([
    Expose({ name: "Ctl_Grupo_Frame" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Frame es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Frame debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Frame debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Frame no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostCatalogo.prototype, "Ctl_Grupo_Frame", void 0);
export class validateQueryPutCatalogo {
    constructor(idCatalogo) {
        this.idCatalogo = idCatalogo;
    }
}
__decorate([
    Expose({ name: "idCatalogo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idMotocicleta es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idMotocicleta debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idMotocicleta no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutCatalogo.prototype, "idCatalogo", void 0);
export class validateBodyPutCatalogo {
    constructor(Ctl_Motocicleta, Ctl_Modelo, Ctl_Descripcion, Ctl_Version, Ctl_Grupo_Engine, Ctl_Grupo_Frame) {
        this.Ctl_Motocicleta = Ctl_Motocicleta;
        this.Ctl_Modelo = Ctl_Modelo;
        this.Ctl_Descripcion = Ctl_Descripcion;
        this.Ctl_Version = Ctl_Version;
        this.Ctl_Grupo_Engine = Ctl_Grupo_Engine;
        this.Ctl_Grupo_Frame = Ctl_Grupo_Frame;
    }
}
__decorate([
    Expose({ name: "Ctl_Motocicleta" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Motocicleta es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ctl_Motocicleta debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ctl_Motocicleta debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Motocicleta no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutCatalogo.prototype, "Ctl_Motocicleta", void 0);
__decorate([
    Expose({ name: "Ctl_Modelo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Modelo es obligatorio' }; } }),
    MaxLength(40, { message: () => { throw { status: 400, message: 'El parametro Ctl_Modelo debe tener como máximo 40 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ctl_Modelo debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Modelo no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutCatalogo.prototype, "Ctl_Modelo", void 0);
__decorate([
    Expose({ name: "Ctl_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Ctl_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ctl_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutCatalogo.prototype, "Ctl_Descripcion", void 0);
__decorate([
    Expose({ name: "Ctl_Version" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Version es obligatorio' }; } }),
    MaxLength(50, { message: () => { throw { status: 400, message: 'El parametro Ctl_Version debe tener como máximo 50 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ctl_Version debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Version no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutCatalogo.prototype, "Ctl_Version", void 0);
__decorate([
    Expose({ name: "Ctl_Grupo_Engine" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Engine es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Engine debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Engine debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Engine no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutCatalogo.prototype, "Ctl_Grupo_Engine", void 0);
__decorate([
    Expose({ name: "Ctl_Grupo_Frame" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Frame es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Frame debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Frame debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ctl_Grupo_Frame no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutCatalogo.prototype, "Ctl_Grupo_Frame", void 0);
export class validateDeleteCatalogo {
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
], validateDeleteCatalogo.prototype, "IdDelete", void 0);
