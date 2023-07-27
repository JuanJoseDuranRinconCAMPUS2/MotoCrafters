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
export class validatePostTipoIdentificacion {
    constructor(Td_Id, Td_Nombre, Td_Abreviatura) {
        this.Td_Id = Td_Id;
        this.Td_Nombre = Td_Nombre;
        this.Td_Abreviatura = Td_Abreviatura;
    }
}
__decorate([
    Expose({ name: "Td_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Td_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Td_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Td_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Td_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostTipoIdentificacion.prototype, "Td_Id", void 0);
__decorate([
    Expose({ name: "Td_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Td_Nombre es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Td_Nombre debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Td_Nombre debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Td_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostTipoIdentificacion.prototype, "Td_Nombre", void 0);
__decorate([
    Expose({ name: "Td_Abreviatura" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Td_Abreviatura es obligatorio' }; } }),
    MaxLength(5, { message: () => { throw { status: 400, message: 'El parametro Td_Abreviatura debe tener como máximo 5 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Td_Abreviatura debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Td_Abreviatura no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostTipoIdentificacion.prototype, "Td_Abreviatura", void 0);
export class validateQueryPutTipoIdentificacion {
    constructor(idTipoIdentificacion) {
        this.idTipoIdentificacion = idTipoIdentificacion;
    }
}
__decorate([
    Expose({ name: "idTipoIdentificacion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idTipoIdentificacion es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idTipoIdentificacion debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idTipoIdentificacion no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutTipoIdentificacion.prototype, "idTipoIdentificacion", void 0);
export class validateBodyPutTipoIdentificacion {
    constructor(Td_Nombre, Td_Abreviatura) {
        this.Td_Nombre = Td_Nombre;
        this.Td_Abreviatura = Td_Abreviatura;
    }
}
__decorate([
    Expose({ name: "Td_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Td_Nombre es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Td_Nombre debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Td_Nombre debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Td_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutTipoIdentificacion.prototype, "Td_Nombre", void 0);
__decorate([
    Expose({ name: "Td_Abreviatura" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Td_Abreviatura es obligatorio' }; } }),
    MaxLength(5, { message: () => { throw { status: 400, message: 'El parametro Td_Abreviatura debe tener como máximo 5 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro Td_Abreviatura debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Td_Abreviatura no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutTipoIdentificacion.prototype, "Td_Abreviatura", void 0);
export class validateDeleteTipoIdentificacion {
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
], validateDeleteTipoIdentificacion.prototype, "IdDelete", void 0);
