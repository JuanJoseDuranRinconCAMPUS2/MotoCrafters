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
export class validatePostCategorias {
    constructor(nombreCategoria) {
        this.nombreCategoria = nombreCategoria;
    }
}
__decorate([
    Expose({ name: "nombreCategoria" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombreCategoria es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro nombreCategoria debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[\p{L}\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro nombreCategoria debe ser una cadena de texto sin números ni caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombreCategoria no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostCategorias.prototype, "nombreCategoria", void 0);
export class validateQueryPutCategorias {
    constructor(idCategoria) {
        this.idCategoria = idCategoria;
    }
}
__decorate([
    Expose({ name: "idCategoria" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idCategoria es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idCategoria debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idCategoria no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutCategorias.prototype, "idCategoria", void 0);
export class validateDeleteCategorias {
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
], validateDeleteCategorias.prototype, "IdDelete", void 0);
