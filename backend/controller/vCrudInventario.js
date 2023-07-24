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
export class validatePostInventario {
    constructor(Inv_Id, Inv_Descripcion) {
        this.Inv_Id = Inv_Id;
        this.Inv_Descripcion = Inv_Descripcion;
    }
}
__decorate([
    Expose({ name: "Inv_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Inv_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Inv_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Inv_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Inv_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostInventario.prototype, "Inv_Id", void 0);
__decorate([
    Expose({ name: "Inv_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Inv_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Inv_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Inv_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Inv_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostInventario.prototype, "Inv_Descripcion", void 0);
export class validateQueryPutInventario {
    constructor(idInventario) {
        this.idInventario = idInventario;
    }
}
__decorate([
    Expose({ name: "idInventario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idCategoria es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idCategoria debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idCategoria no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutInventario.prototype, "idInventario", void 0);
export class validateBodyPutInventario {
    constructor(Inv_Descripcion) {
        this.Inv_Descripcion = Inv_Descripcion;
    }
}
__decorate([
    Expose({ name: "Inv_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Inv_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Inv_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Inv_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Inv_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutInventario.prototype, "Inv_Descripcion", void 0);
export class validateDeleteInventario {
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
], validateDeleteInventario.prototype, "IdDelete", void 0);
