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
export class validatePostGeneroIdentificacion {
    constructor(Gt_Id, Gt_Nombre, Gt_Abreviatura) {
        this.Gt_Id = Gt_Id;
        this.Gt_Nombre = Gt_Nombre;
        this.Gt_Abreviatura = Gt_Abreviatura;
    }
}
__decorate([
    Expose({ name: "Gt_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Gt_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Gt_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Gt_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Gt_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostGeneroIdentificacion.prototype, "Gt_Id", void 0);
__decorate([
    Expose({ name: "Gt_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Gt_Nombre es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Gt_Nombre debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Gt_Nombre debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Gt_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostGeneroIdentificacion.prototype, "Gt_Nombre", void 0);
__decorate([
    Expose({ name: "Gt_Abreviatura" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Gt_Abreviatura es obligatorio' }; } }),
    MaxLength(5, { message: () => { throw { status: 400, message: 'El parametro Gt_Abreviatura debe tener como máximo 5 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Gt_Abreviatura debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Gt_Abreviatura no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostGeneroIdentificacion.prototype, "Gt_Abreviatura", void 0);
export class validateQueryPutGeneroIdentificacion {
    constructor(idGeneroIdentificacion) {
        this.idGeneroIdentificacion = idGeneroIdentificacion;
    }
}
__decorate([
    Expose({ name: "idGeneroIdentificacion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idGeneroIdentificacion es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idGeneroIdentificacion debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idGeneroIdentificacion no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutGeneroIdentificacion.prototype, "idGeneroIdentificacion", void 0);
export class validateBodyPutGeneroIdentificacion {
    constructor(Gt_Nombre, Gt_Abreviatura) {
        this.Gt_Nombre = Gt_Nombre;
        this.Gt_Abreviatura = Gt_Abreviatura;
    }
}
__decorate([
    Expose({ name: "Gt_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Gt_Nombre es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Gt_Nombre debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Gt_Nombre debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Gt_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutGeneroIdentificacion.prototype, "Gt_Nombre", void 0);
__decorate([
    Expose({ name: "Gt_Abreviatura" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Gt_Abreviatura es obligatorio' }; } }),
    MaxLength(5, { message: () => { throw { status: 400, message: 'El parametro Gt_Abreviatura debe tener como máximo 5 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Gt_Abreviatura debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Gt_Abreviatura no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutGeneroIdentificacion.prototype, "Gt_Abreviatura", void 0);
export class validateDeleteGeneroIdentificacion {
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
], validateDeleteGeneroIdentificacion.prototype, "IdDelete", void 0);
