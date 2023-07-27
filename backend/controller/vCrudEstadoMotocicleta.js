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
export class validatePostEstadoMotocicleta {
    constructor(Em_Id, Em_Nombre) {
        this.Em_Id = Em_Id;
        this.Em_Nombre = Em_Nombre;
    }
}
__decorate([
    Expose({ name: "Em_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Em_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Em_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Em_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Em_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostEstadoMotocicleta.prototype, "Em_Id", void 0);
__decorate([
    Expose({ name: "Em_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Em_Nombre es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Em_Nombre debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Em_Nombre debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Em_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostEstadoMotocicleta.prototype, "Em_Nombre", void 0);
export class validateQueryPutEstadoMotocicleta {
    constructor(idEstadoMotocicleta) {
        this.idEstadoMotocicleta = idEstadoMotocicleta;
    }
}
__decorate([
    Expose({ name: "idEstadoMotocicleta" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idEstadoMotocicleta es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idEstadoMotocicleta debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idEstadoMotocicleta no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutEstadoMotocicleta.prototype, "idEstadoMotocicleta", void 0);
export class validateBodyPutEstadoMotocicleta {
    constructor(Em_Nombre) {
        this.Em_Nombre = Em_Nombre;
    }
}
__decorate([
    Expose({ name: "Em_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Em_Nombre es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Em_Nombre debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Em_Nombre debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Em_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutEstadoMotocicleta.prototype, "Em_Nombre", void 0);
export class validateDeleteEstadoMotocicleta {
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
], validateDeleteEstadoMotocicleta.prototype, "IdDelete", void 0);
