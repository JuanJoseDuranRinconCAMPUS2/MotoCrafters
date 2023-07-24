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
export class validatePostInvPiezasEngine {
    constructor(Ipe_Id, Ipe_Pieza_Id, Ipe_Fecha_Entrada, Ipe_Cantidad, Ipe_Observaciones, Ipe_Inventario) {
        this.Ipe_Id = Ipe_Id;
        this.Ipe_Pieza_Id = Ipe_Pieza_Id;
        this.Ipe_Fecha_Entrada = Ipe_Fecha_Entrada;
        this.Ipe_Cantidad = Ipe_Cantidad;
        this.Ipe_Observaciones = Ipe_Observaciones;
        this.Ipe_Inventario = Ipe_Inventario;
    }
}
__decorate([
    Expose({ name: "Ipe_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipe_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipe_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipe_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipe_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostInvPiezasEngine.prototype, "Ipe_Id", void 0);
__decorate([
    Expose({ name: "Ipe_Pieza_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipe_Pieza_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipe_Pieza_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipe_Pieza_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipe_Pieza_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostInvPiezasEngine.prototype, "Ipe_Pieza_Id", void 0);
__decorate([
    Expose({ name: "Ipe_Fecha_Entrada" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipe_Fecha_Entrada es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: 'El parametro Ipe_Fecha_Entrada debe tener el formato de fecha YYYY-MM-DD.' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipe_Fecha_Entrada no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostInvPiezasEngine.prototype, "Ipe_Fecha_Entrada", void 0);
__decorate([
    Expose({ name: "Ipe_Cantidad" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipe_Cantidad es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipe_Cantidad debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipe_Cantidad debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipe_Cantidad no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostInvPiezasEngine.prototype, "Ipe_Cantidad", void 0);
__decorate([
    Expose({ name: "Ipe_Observaciones" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipe_Observaciones es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Ipe_Observaciones debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ipe_Observaciones debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipe_Observaciones no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostInvPiezasEngine.prototype, "Ipe_Observaciones", void 0);
__decorate([
    Expose({ name: "Ipe_Inventario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipe_Inventario es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipe_Inventario debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipe_Inventario debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipe_Inventario no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostInvPiezasEngine.prototype, "Ipe_Inventario", void 0);
export class validateQueryPutInvPiezasEngine {
    constructor(idInvPiezasE) {
        this.idInvPiezasE = idInvPiezasE;
    }
}
__decorate([
    Expose({ name: "idInvPiezasE" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idInvPiezasE es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idInvPiezasE debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idInvPiezasE no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutInvPiezasEngine.prototype, "idInvPiezasE", void 0);
export class validateBodyPutInvPiezasEngine {
    constructor(Ipe_Pieza_Id, Ipe_Fecha_Entrada, Ipe_Cantidad, Ipe_Observaciones, Ipe_Inventario) {
        this.Ipe_Pieza_Id = Ipe_Pieza_Id;
        this.Ipe_Fecha_Entrada = Ipe_Fecha_Entrada;
        this.Ipe_Cantidad = Ipe_Cantidad;
        this.Ipe_Observaciones = Ipe_Observaciones;
        this.Ipe_Inventario = Ipe_Inventario;
    }
}
__decorate([
    Expose({ name: "Ipe_Pieza_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipe_Pieza_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipe_Pieza_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipe_Pieza_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipe_Pieza_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutInvPiezasEngine.prototype, "Ipe_Pieza_Id", void 0);
__decorate([
    Expose({ name: "Ipe_Fecha_Entrada" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipe_Fecha_Entrada es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: 'El parametro Ipe_Fecha_Entrada debe tener el formato de fecha YYYY-MM-DD.' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipe_Fecha_Entrada no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validateBodyPutInvPiezasEngine.prototype, "Ipe_Fecha_Entrada", void 0);
__decorate([
    Expose({ name: "Ipe_Cantidad" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipe_Cantidad es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipe_Cantidad debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipe_Cantidad debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipe_Cantidad no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutInvPiezasEngine.prototype, "Ipe_Cantidad", void 0);
__decorate([
    Expose({ name: "Ipe_Observaciones" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipe_Observaciones es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Ipe_Observaciones debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ipe_Observaciones debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipe_Observaciones no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutInvPiezasEngine.prototype, "Ipe_Observaciones", void 0);
__decorate([
    Expose({ name: "Ipe_Inventario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ipe_Inventario es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ipe_Inventario debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ipe_Inventario debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ipe_Inventario no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutInvPiezasEngine.prototype, "Ipe_Inventario", void 0);
export class validateDeleteInvPiezasEngine {
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
], validateDeleteInvPiezasEngine.prototype, "IdDelete", void 0);
