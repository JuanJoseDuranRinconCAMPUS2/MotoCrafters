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
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString } from 'class-validator';
export class validatePostPiezasGrupoEngine {
    constructor(Pge_Id, Pge_No, Pge_Descripcion, Pge_Diagrama, Pge_Url_Imagen, Pge_Grupo_Ref) {
        this.Pge_Id = Pge_Id;
        this.Pge_No = Pge_No;
        this.Pge_Descripcion = Pge_Descripcion;
        this.Pge_Diagrama = Pge_Diagrama;
        this.Pge_Url_Imagen = Pge_Url_Imagen;
        this.Pge_Grupo_Ref = Pge_Grupo_Ref;
    }
}
__decorate([
    Expose({ name: "Pge_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pge_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Pge_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Pge_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pge_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostPiezasGrupoEngine.prototype, "Pge_Id", void 0);
__decorate([
    Expose({ name: "Pge_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pge_No es obligatorio' }; } }),
    MaxLength(3, { message: () => { throw { status: 400, message: 'El parametro Pge_No debe tener como máximo 3 caracteres' }; } }),
    Matches(/^[A-Za-z0-9]+$/, { message: () => { throw { status: 400, message: 'El parametro Pge_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pge_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostPiezasGrupoEngine.prototype, "Pge_No", void 0);
__decorate([
    Expose({ name: "Pge_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pge_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pge_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Pge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pge_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostPiezasGrupoEngine.prototype, "Pge_Descripcion", void 0);
__decorate([
    Expose({ name: "Pge_Diagrama" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pge_Diagrama es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pge_Diagrama debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Pge_Diagrama debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pge_Diagrama no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostPiezasGrupoEngine.prototype, "Pge_Diagrama", void 0);
__decorate([
    Expose({ name: "Pge_Url_Imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pge_Url_Imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pge_Url_Imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Mto_Url_imagen debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pge_Url_Imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostPiezasGrupoEngine.prototype, "Pge_Url_Imagen", void 0);
__decorate([
    Expose({ name: "Pge_Grupo_Ref" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pge_Grupo_Ref es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Pge_Grupo_Ref debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Pge_Grupo_Ref debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pge_Grupo_Ref no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostPiezasGrupoEngine.prototype, "Pge_Grupo_Ref", void 0);
export class validateQueryPutPiezasGrupoEngine {
    constructor(idPiezasGrupoEngine) {
        this.idPiezasGrupoEngine = idPiezasGrupoEngine;
    }
}
__decorate([
    Expose({ name: "idPiezasGrupoEngine" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoEngine es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoEngine debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoEngine no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutPiezasGrupoEngine.prototype, "idPiezasGrupoEngine", void 0);
export class validateBodyPutPiezasGrupoEngine {
    constructor(Pge_No, Pge_Descripcion, Pge_Diagrama, Pge_Url_Imagen, Pge_Grupo_Ref) {
        this.Pge_No = Pge_No;
        this.Pge_Descripcion = Pge_Descripcion;
        this.Pge_Diagrama = Pge_Diagrama;
        this.Pge_Url_Imagen = Pge_Url_Imagen;
        this.Pge_Grupo_Ref = Pge_Grupo_Ref;
    }
}
__decorate([
    Expose({ name: "Pge_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pge_No es obligatorio' }; } }),
    MaxLength(3, { message: () => { throw { status: 400, message: 'El parametro Pge_No debe tener como máximo 3 caracteres' }; } }),
    Matches(/^[A-Za-z0-9]+$/, { message: () => { throw { status: 400, message: 'El parametro Pge_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pge_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutPiezasGrupoEngine.prototype, "Pge_No", void 0);
__decorate([
    Expose({ name: "Pge_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pge_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pge_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Pge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pge_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutPiezasGrupoEngine.prototype, "Pge_Descripcion", void 0);
__decorate([
    Expose({ name: "Pge_Diagrama" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pge_Diagrama es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pge_Diagrama debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Pge_Diagrama debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pge_Diagrama no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutPiezasGrupoEngine.prototype, "Pge_Diagrama", void 0);
__decorate([
    Expose({ name: "Pge_Url_Imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pge_Url_Imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pge_Url_Imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Mto_Url_imagen debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pge_Url_Imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutPiezasGrupoEngine.prototype, "Pge_Url_Imagen", void 0);
__decorate([
    Expose({ name: "Pge_Grupo_Ref" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pge_Grupo_Ref es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Pge_Grupo_Ref debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Pge_Grupo_Ref debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pge_Grupo_Ref no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutPiezasGrupoEngine.prototype, "Pge_Grupo_Ref", void 0);
export class validateDeletePiezasGrupoEngine {
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
], validateDeletePiezasGrupoEngine.prototype, "IdDelete", void 0);
