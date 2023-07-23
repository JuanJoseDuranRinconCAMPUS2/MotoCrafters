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
class Color {
}
__decorate([
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro color debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro color no puede estar vacio' }; } }),
    __metadata("design:type", String)
], Color.prototype, "value", void 0);
export class validatePostColores {
    constructor(color1, color2, color3, color4) {
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.color4 = color4;
    }
}
__decorate([
    Expose({ name: "color1" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro color1 es obligatorio' }; } }),
    MaxLength(10, { message: () => { throw { status: 400, message: 'El parametro color1 debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro color1 debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro color1 no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostColores.prototype, "color1", void 0);
__decorate([
    Expose({ name: "color2" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro color2 es obligatorio' }; } }),
    MaxLength(10, { message: () => { throw { status: 400, message: 'El parametro color2 debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro color2 debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro color2 no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostColores.prototype, "color2", void 0);
__decorate([
    Expose({ name: "color3" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro color3 es obligatorio' }; } }),
    MaxLength(10, { message: () => { throw { status: 400, message: 'El parametro color3 debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro color3 debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    __metadata("design:type", String)
], validatePostColores.prototype, "color3", void 0);
__decorate([
    Expose({ name: "color4" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro color4 es obligatorio' }; } }),
    MaxLength(10, { message: () => { throw { status: 400, message: 'El parametro color4 debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro color4 debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    __metadata("design:type", String)
], validatePostColores.prototype, "color4", void 0);
export class validateQueryPutColores {
    constructor(idColor) {
        this.idColor = idColor;
    }
}
__decorate([
    Expose({ name: "idColor" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idCategoria es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idCategoria debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idCategoria no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutColores.prototype, "idColor", void 0);
export class validateDeleteColores {
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
], validateDeleteColores.prototype, "IdDelete", void 0);
