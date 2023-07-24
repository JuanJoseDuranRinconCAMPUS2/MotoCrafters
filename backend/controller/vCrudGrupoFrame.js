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
export class validatePostGrupoFrame {
    constructor(Gf_Id, Gf_Descripcion) {
        this.Gf_Id = Gf_Id;
        this.Gf_Descripcion = Gf_Descripcion;
    }
}
__decorate([
    Expose({ name: "Gf_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Gf_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Gf_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Gf_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Gf_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostGrupoFrame.prototype, "Gf_Id", void 0);
__decorate([
    Expose({ name: "Gf_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Gf_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Gf_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Gf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Gf_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostGrupoFrame.prototype, "Gf_Descripcion", void 0);
export class validateQueryPutGrupoFrame {
    constructor(idGrupoF) {
        this.idGrupoF = idGrupoF;
    }
}
__decorate([
    Expose({ name: "idGrupoF" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idGrupoF es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idGrupoF debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idGrupoF no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutGrupoFrame.prototype, "idGrupoF", void 0);
export class validateBodyPutGrupoFrame {
    constructor(Gf_Descripcion) {
        this.Gf_Descripcion = Gf_Descripcion;
    }
}
__decorate([
    Expose({ name: "Gf_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Gf_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Gf_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Gf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Gf_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutGrupoFrame.prototype, "Gf_Descripcion", void 0);
export class validateDeleteGrupoFrame {
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
], validateDeleteGrupoFrame.prototype, "IdDelete", void 0);
