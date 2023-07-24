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
export class validatePostSubPiezasGrupoEngine {
    constructor(Sge_Id, Sge_Ref_No, Sge_Pieza_No, Sge_Descripcion, Sge_Url_Imagen, Sge_Grupo_Piezas) {
        this.Sge_Id = Sge_Id;
        this.Sge_Ref_No = Sge_Ref_No;
        this.Sge_Pieza_No = Sge_Pieza_No;
        this.Sge_Descripcion = Sge_Descripcion;
        this.Sge_Url_Imagen = Sge_Url_Imagen;
        this.Sge_Grupo_Piezas = Sge_Grupo_Piezas;
    }
}
__decorate([
    Expose({ name: "Sge_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sge_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Sge_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Sge_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sge_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostSubPiezasGrupoEngine.prototype, "Sge_Id", void 0);
__decorate([
    Expose({ name: "Sge_Ref_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sge_Ref_No es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Sge_Ref_No debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sge_Ref_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sge_Ref_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostSubPiezasGrupoEngine.prototype, "Sge_Ref_No", void 0);
__decorate([
    Expose({ name: "Sge_Pieza_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sge_Pieza_No es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Sge_Pieza_No debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sge_Pieza_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sge_Pieza_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostSubPiezasGrupoEngine.prototype, "Sge_Pieza_No", void 0);
__decorate([
    Expose({ name: "Sge_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sge_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Sge_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sge_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostSubPiezasGrupoEngine.prototype, "Sge_Descripcion", void 0);
__decorate([
    Expose({ name: "Sge_Url_Imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sge_Url_Imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Sge_Url_Imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Sge_Url_Imagen debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sge_Url_Imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostSubPiezasGrupoEngine.prototype, "Sge_Url_Imagen", void 0);
__decorate([
    Expose({ name: "Sge_Grupo_Piezas" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sge_Grupo_Piezas es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Sge_Grupo_Piezas debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Sge_Grupo_Piezas debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sge_Grupo_Piezas no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostSubPiezasGrupoEngine.prototype, "Sge_Grupo_Piezas", void 0);
export class validateQueryPutSubPiezasGrupoEngine {
    constructor(idSubPiezasGrupoEngine) {
        this.idSubPiezasGrupoEngine = idSubPiezasGrupoEngine;
    }
}
__decorate([
    Expose({ name: "idSubPiezasGrupoEngine" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoEngine es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoEngine debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoEngine no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutSubPiezasGrupoEngine.prototype, "idSubPiezasGrupoEngine", void 0);
export class validateBodyPutSubPiezasGrupoEngine {
    constructor(Sge_Ref_No, Sge_Pieza_No, Sge_Descripcion, Sge_Url_Imagen, Sge_Grupo_Piezas) {
        this.Sge_Ref_No = Sge_Ref_No;
        this.Sge_Pieza_No = Sge_Pieza_No;
        this.Sge_Descripcion = Sge_Descripcion;
        this.Sge_Url_Imagen = Sge_Url_Imagen;
        this.Sge_Grupo_Piezas = Sge_Grupo_Piezas;
    }
}
__decorate([
    Expose({ name: "Sge_Ref_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sge_Ref_No es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Sge_Ref_No debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sge_Ref_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sge_Ref_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutSubPiezasGrupoEngine.prototype, "Sge_Ref_No", void 0);
__decorate([
    Expose({ name: "Sge_Pieza_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sge_Pieza_No es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Sge_Pieza_No debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sge_Pieza_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sge_Pieza_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutSubPiezasGrupoEngine.prototype, "Sge_Pieza_No", void 0);
__decorate([
    Expose({ name: "Sge_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sge_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Sge_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sge_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutSubPiezasGrupoEngine.prototype, "Sge_Descripcion", void 0);
__decorate([
    Expose({ name: "Sge_Url_Imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sge_Url_Imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Sge_Url_Imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Sge_Url_Imagen debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sge_Url_Imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutSubPiezasGrupoEngine.prototype, "Sge_Url_Imagen", void 0);
__decorate([
    Expose({ name: "Sge_Grupo_Piezas" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sge_Grupo_Piezas es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Sge_Grupo_Piezas debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Sge_Grupo_Piezas debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sge_Grupo_Piezas no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutSubPiezasGrupoEngine.prototype, "Sge_Grupo_Piezas", void 0);
export class validateDeleteSubPiezasGrupoEngine {
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
], validateDeleteSubPiezasGrupoEngine.prototype, "IdDelete", void 0);
