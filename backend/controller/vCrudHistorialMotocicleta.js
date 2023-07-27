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
export class validatePostHistorialMotocicleta {
    constructor(Hm_Id, Hm_MecanicoAsig, Hm_Descripcion, Hm_Fecha_Ingreso, Hm_Fecha_Salida, Hm_Descripcion_Problema, Hm_Descripcion_Reparacion, Hm_Observaciones, Hm_Motocicleta) {
        this.Hm_Id = Hm_Id;
        this.Hm_MecanicoAsig = Hm_MecanicoAsig;
        this.Hm_Descripcion = Hm_Descripcion;
        this.Hm_Fecha_Ingreso = Hm_Fecha_Ingreso;
        this.Hm_Fecha_Salida = Hm_Fecha_Salida;
        this.Hm_Descripcion_Problema = Hm_Descripcion_Problema;
        this.Hm_Descripcion_Reparacion = Hm_Descripcion_Reparacion;
        this.Hm_Observaciones = Hm_Observaciones;
        this.Hm_Motocicleta = Hm_Motocicleta;
    }
}
__decorate([
    Expose({ name: "Hm_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Hm_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Hm_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostHistorialMotocicleta.prototype, "Hm_Id", void 0);
__decorate([
    Expose({ name: "Hm_MecanicoAsig" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_MecanicoAsig es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Hm_MecanicoAsig debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Hm_MecanicoAsig debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_MecanicoAsig no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostHistorialMotocicleta.prototype, "Hm_MecanicoAsig", void 0);
__decorate([
    Expose({ name: "Hm_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostHistorialMotocicleta.prototype, "Hm_Descripcion", void 0);
__decorate([
    Expose({ name: "Hm_Fecha_Ingreso" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validatePostHistorialMotocicleta.prototype, "Hm_Fecha_Ingreso", void 0);
__decorate([
    Expose({ name: "Hm_Fecha_Salida" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Fecha_Salida es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Fecha_Salida debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    __metadata("design:type", Date)
], validatePostHistorialMotocicleta.prototype, "Hm_Fecha_Salida", void 0);
__decorate([
    Expose({ name: "Hm_Descripcion_Problema" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Problema es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Problema debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Problema debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Problema no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostHistorialMotocicleta.prototype, "Hm_Descripcion_Problema", void 0);
__decorate([
    Expose({ name: "Hm_Descripcion_Reparacion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostHistorialMotocicleta.prototype, "Hm_Descripcion_Reparacion", void 0);
__decorate([
    Expose({ name: "Hm_Observaciones" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Observaciones es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Hm_Observaciones debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Observaciones debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Observaciones no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostHistorialMotocicleta.prototype, "Hm_Observaciones", void 0);
__decorate([
    Expose({ name: "Hm_Motocicleta" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Motocicleta es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Hm_Motocicleta debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Hm_Motocicleta debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Motocicleta no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostHistorialMotocicleta.prototype, "Hm_Motocicleta", void 0);
export class validateQueryPutHistorialMotocicleta {
    constructor(idHistorialMotocicleta) {
        this.idHistorialMotocicleta = idHistorialMotocicleta;
    }
}
__decorate([
    Expose({ name: "idHistorialMotocicleta" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idHistorialMotocicleta es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idHistorialMotocicleta debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idHistorialMotocicleta no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutHistorialMotocicleta.prototype, "idHistorialMotocicleta", void 0);
export class validateBodyPutHistorialMotocicleta {
    constructor(Hm_MecanicoAsig, Hm_Descripcion, Hm_Fecha_Ingreso, Hm_Fecha_Salida, Hm_Descripcion_Problema, Hm_Descripcion_Reparacion, Hm_Observaciones, Hm_Motocicleta) {
        this.Hm_MecanicoAsig = Hm_MecanicoAsig;
        this.Hm_Descripcion = Hm_Descripcion;
        this.Hm_Fecha_Ingreso = Hm_Fecha_Ingreso;
        this.Hm_Fecha_Salida = Hm_Fecha_Salida;
        this.Hm_Descripcion_Problema = Hm_Descripcion_Problema;
        this.Hm_Descripcion_Reparacion = Hm_Descripcion_Reparacion;
        this.Hm_Observaciones = Hm_Observaciones;
        this.Hm_Motocicleta = Hm_Motocicleta;
    }
}
__decorate([
    Expose({ name: "Hm_MecanicoAsig" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_MecanicoAsig es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Hm_MecanicoAsig debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Hm_MecanicoAsig debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_MecanicoAsig no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutHistorialMotocicleta.prototype, "Hm_MecanicoAsig", void 0);
__decorate([
    Expose({ name: "Hm_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutHistorialMotocicleta.prototype, "Hm_Descripcion", void 0);
__decorate([
    Expose({ name: "Hm_Fecha_Ingreso" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Fecha_Ingreso no puede estar vacio' }; } }),
    __metadata("design:type", Date)
], validateBodyPutHistorialMotocicleta.prototype, "Hm_Fecha_Ingreso", void 0);
__decorate([
    Expose({ name: "Hm_Fecha_Salida" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Fecha_Salida es obligatorio' }; } }),
    Matches(/^(\d{4})-(\d{2})-(\d{2})$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Fecha_Salida debe tener el formato de fecha YYYY-MM-DD.' }; } }),
    __metadata("design:type", Date)
], validateBodyPutHistorialMotocicleta.prototype, "Hm_Fecha_Salida", void 0);
__decorate([
    Expose({ name: "Hm_Descripcion_Problema" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Problema es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Problema debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Problema debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Problema no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutHistorialMotocicleta.prototype, "Hm_Descripcion_Problema", void 0);
__decorate([
    Expose({ name: "Hm_Descripcion_Reparacion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Descripcion_Reparacion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutHistorialMotocicleta.prototype, "Hm_Descripcion_Reparacion", void 0);
__decorate([
    Expose({ name: "Hm_Observaciones" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Observaciones es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Hm_Observaciones debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Hm_Observaciones debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Observaciones no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutHistorialMotocicleta.prototype, "Hm_Observaciones", void 0);
__decorate([
    Expose({ name: "Hm_Motocicleta" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Hm_Motocicleta es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Hm_Motocicleta debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Hm_Motocicleta debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Hm_Motocicleta no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutHistorialMotocicleta.prototype, "Hm_Motocicleta", void 0);
export class validateDeleteHistorialMotocicleta {
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
], validateDeleteHistorialMotocicleta.prototype, "IdDelete", void 0);
