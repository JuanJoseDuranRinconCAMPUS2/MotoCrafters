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
export class validatePostPiezasGrupoFrame {
    constructor(Pgf_Id, Pgf_No, Pgf_Descripcion, Pgf_Diagrama, Pgf_Url_Imagen, Pgf_Grupo_Ref) {
        this.Pgf_Id = Pgf_Id;
        this.Pgf_No = Pgf_No;
        this.Pgf_Descripcion = Pgf_Descripcion;
        this.Pgf_Diagrama = Pgf_Diagrama;
        this.Pgf_Url_Imagen = Pgf_Url_Imagen;
        this.Pgf_Grupo_Ref = Pgf_Grupo_Ref;
    }
}
__decorate([
    Expose({ name: "Pgf_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pgf_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Pgf_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Pgf_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pgf_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostPiezasGrupoFrame.prototype, "Pgf_Id", void 0);
__decorate([
    Expose({ name: "Pgf_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pgf_No es obligatorio' }; } }),
    MaxLength(3, { message: () => { throw { status: 400, message: 'El parametro Pgf_No debe tener como máximo 3 caracteres' }; } }),
    Matches(/^[A-Za-z0-9]+$/, { message: () => { throw { status: 400, message: 'El parametro Pgf_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pgf_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostPiezasGrupoFrame.prototype, "Pgf_No", void 0);
__decorate([
    Expose({ name: "Pgf_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pgf_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pgf_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Pgf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pgf_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostPiezasGrupoFrame.prototype, "Pgf_Descripcion", void 0);
__decorate([
    Expose({ name: "Pgf_Diagrama" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pgf_Diagrama es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pgf_Diagrama debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Pgf_Diagrama debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pgf_Diagrama no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostPiezasGrupoFrame.prototype, "Pgf_Diagrama", void 0);
__decorate([
    Expose({ name: "Pgf_Url_Imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pgf_Url_Imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pgf_Url_Imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Pgf_Url_Imagen debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pgf_Url_Imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostPiezasGrupoFrame.prototype, "Pgf_Url_Imagen", void 0);
__decorate([
    Expose({ name: "Pgf_Grupo_Ref" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pgf_Grupo_Ref es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Pgf_Grupo_Ref debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Pgf_Grupo_Ref debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pgf_Grupo_Ref no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostPiezasGrupoFrame.prototype, "Pgf_Grupo_Ref", void 0);
export class validateQueryPutPiezasGrupoFrame {
    constructor(idPiezasGrupoFrame) {
        this.idPiezasGrupoFrame = idPiezasGrupoFrame;
    }
}
__decorate([
    Expose({ name: "idPiezasGrupoFrame" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoEngine es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoEngine debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoEngine no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutPiezasGrupoFrame.prototype, "idPiezasGrupoFrame", void 0);
export class validateBodyPutPiezasGrupoFrame {
    constructor(Pgf_No, Pgf_Descripcion, Pgf_Diagrama, Pgf_Url_Imagen, Pgf_Grupo_Ref) {
        this.Pgf_No = Pgf_No;
        this.Pgf_Descripcion = Pgf_Descripcion;
        this.Pgf_Diagrama = Pgf_Diagrama;
        this.Pgf_Url_Imagen = Pgf_Url_Imagen;
        this.Pgf_Grupo_Ref = Pgf_Grupo_Ref;
    }
}
__decorate([
    Expose({ name: "Pgf_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pgf_No es obligatorio' }; } }),
    MaxLength(3, { message: () => { throw { status: 400, message: 'El parametro Pgf_No debe tener como máximo 3 caracteres' }; } }),
    Matches(/^[A-Za-z0-9]+$/, { message: () => { throw { status: 400, message: 'El parametro Pgf_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pgf_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutPiezasGrupoFrame.prototype, "Pgf_No", void 0);
__decorate([
    Expose({ name: "Pgf_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pgf_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pgf_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Pgf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pgf_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutPiezasGrupoFrame.prototype, "Pgf_Descripcion", void 0);
__decorate([
    Expose({ name: "Pgf_Diagrama" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pgf_Diagrama es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pgf_Diagrama debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Pgf_Diagrama debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pgf_Diagrama no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutPiezasGrupoFrame.prototype, "Pgf_Diagrama", void 0);
__decorate([
    Expose({ name: "Pgf_Url_Imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pgf_Url_Imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Pgf_Url_Imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Pgf_Url_Imagen debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pgf_Url_Imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutPiezasGrupoFrame.prototype, "Pgf_Url_Imagen", void 0);
__decorate([
    Expose({ name: "Pgf_Grupo_Ref" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Pgf_Grupo_Ref es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Pgf_Grupo_Ref debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Pgf_Grupo_Ref debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Pgf_Grupo_Ref no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutPiezasGrupoFrame.prototype, "Pgf_Grupo_Ref", void 0);
export class validateDeletePiezasGrupoFrame {
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
], validateDeletePiezasGrupoFrame.prototype, "IdDelete", void 0);
