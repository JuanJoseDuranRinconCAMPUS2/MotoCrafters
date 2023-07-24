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
export class validatePostGrupoEngine {
    constructor(Ge_Id, Ge_Descripcion) {
        this.Ge_Id = Ge_Id;
        this.Ge_Descripcion = Ge_Descripcion;
    }
}
__decorate([
    Expose({ name: "Ge_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ge_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Ge_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Ge_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ge_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostGrupoEngine.prototype, "Ge_Id", void 0);
__decorate([
    Expose({ name: "Ge_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ge_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Ge_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ge_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostGrupoEngine.prototype, "Ge_Descripcion", void 0);
export class validateQueryPutGrupoEngine {
    constructor(idGrupoE) {
        this.idGrupoE = idGrupoE;
    }
}
__decorate([
    Expose({ name: "idGrupoE" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idGrupoE es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idGrupoE debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idGrupoE no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutGrupoEngine.prototype, "idGrupoE", void 0);
export class validateBodyPutGrupoEngine {
    constructor(Ge_Descripcion) {
        this.Ge_Descripcion = Ge_Descripcion;
    }
}
__decorate([
    Expose({ name: "Ge_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Ge_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Ge_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Ge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Ge_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutGrupoEngine.prototype, "Ge_Descripcion", void 0);
export class validateDeleteGrupoEngine {
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
], validateDeleteGrupoEngine.prototype, "IdDelete", void 0);
