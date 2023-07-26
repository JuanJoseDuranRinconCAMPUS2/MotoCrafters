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
export class validatePostInvPiezasFrame {
    constructor(Ipf_Id, Ipf_Pieza_Id, Ipf_Fecha_Entrada, Ipf_Cantidad, Ipf_Observaciones, Ipf_Inventario) {
        this.Ipf_Id = Ipf_Id;
        this.Ipf_Pieza_Id = Ipf_Pieza_Id;
        this.Ipf_Fecha_Entrada = Ipf_Fecha_Entrada;
        this.Ipf_Cantidad = Ipf_Cantidad;
        this.Ipf_Observaciones = Ipf_Observaciones;
        this.Ipf_Inventario = Ipf_Inventario;
    }
}
__decorate([
    Expose({ name: "Ipf_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipf_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipf_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipf_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipf_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostInvPiezasFrame.prototype, "Ipf_Id", void 0);
__decorate([
    Expose({ name: "Ipf_Pieza_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipf_Pieza_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipf_Pieza_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipf_Pieza_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipf_Pieza_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostInvPiezasFrame.prototype, "Ipf_Pieza_Id", void 0);
__decorate([
    Expose({ name: "Ipf_Fecha_Entrada" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostInvPiezasFrame.prototype, "Ipf_Fecha_Entrada", void 0);
__decorate([
    Expose({ name: "Ipf_Cantidad" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipf_Cantidad es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipf_Cantidad debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipf_Cantidad debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipf_Cantidad no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostInvPiezasFrame.prototype, "Ipf_Cantidad", void 0);
__decorate([
    Expose({ name: "Ipf_Observaciones" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipf_Observaciones es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Ipf_Observaciones debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ipf_Observaciones debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipf_Observaciones no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostInvPiezasFrame.prototype, "Ipf_Observaciones", void 0);
__decorate([
    Expose({ name: "Ipf_Inventario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipf_Inventario es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipf_Inventario debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipf_Inventario debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipf_Inventario no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostInvPiezasFrame.prototype, "Ipf_Inventario", void 0);
export class validateQueryPutInvPiezasFrame {
    constructor(idInvPiezasF) {
        this.idInvPiezasF = idInvPiezasF;
    }
}
__decorate([
    Expose({ name: "idInvPiezasF" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idInvPiezasF es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idInvPiezasF debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idInvPiezasF no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutInvPiezasFrame.prototype, "idInvPiezasF", void 0);
export class validateBodyPutInvPiezasFrame {
    constructor(Ipf_Pieza_Id, Ipf_Fecha_Entrada, Ipf_Cantidad, Ipf_Observaciones, Ipf_Inventario) {
        this.Ipf_Pieza_Id = Ipf_Pieza_Id;
        this.Ipf_Fecha_Entrada = Ipf_Fecha_Entrada;
        this.Ipf_Cantidad = Ipf_Cantidad;
        this.Ipf_Observaciones = Ipf_Observaciones;
        this.Ipf_Inventario = Ipf_Inventario;
    }
}
__decorate([
    Expose({ name: "Ipf_Pieza_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipf_Pieza_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipf_Pieza_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipf_Pieza_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipf_Pieza_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutInvPiezasFrame.prototype, "Ipf_Pieza_Id", void 0);
__decorate([
    Expose({ name: "Ipf_Fecha_Entrada" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipf_Fecha_Entrada no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validateBodyPutInvPiezasFrame.prototype, "Ipf_Fecha_Entrada", void 0);
__decorate([
    Expose({ name: "Ipf_Cantidad" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipf_Cantidad es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipf_Cantidad debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipf_Cantidad debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipf_Cantidad no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutInvPiezasFrame.prototype, "Ipf_Cantidad", void 0);
__decorate([
    Expose({ name: "Ipf_Observaciones" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipf_Observaciones es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Ipf_Observaciones debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ipf_Observaciones debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipf_Observaciones no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutInvPiezasFrame.prototype, "Ipf_Observaciones", void 0);
__decorate([
    Expose({ name: "Ipf_Inventario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipf_Inventario es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipf_Inventario debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipf_Inventario debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipf_Inventario no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutInvPiezasFrame.prototype, "Ipf_Inventario", void 0);
export class validateDeleteInvPiezasFrame {
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
], validateDeleteInvPiezasFrame.prototype, "IdDelete", void 0);
