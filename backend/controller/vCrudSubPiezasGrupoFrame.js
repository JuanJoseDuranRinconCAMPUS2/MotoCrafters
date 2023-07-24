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
export class validatePostSubPiezasGrupoFrame {
    constructor(Sgf_Id, Sgf_Ref_No, Sgf_Pieza_No, Sgf_Descripcion, Sgf_Url_Imagen, Sgf_Grupo_Piezas) {
        this.Sgf_Id = Sgf_Id;
        this.Sgf_Ref_No = Sgf_Ref_No;
        this.Sgf_Pieza_No = Sgf_Pieza_No;
        this.Sgf_Descripcion = Sgf_Descripcion;
        this.Sgf_Url_Imagen = Sgf_Url_Imagen;
        this.Sgf_Grupo_Piezas = Sgf_Grupo_Piezas;
    }
}
__decorate([
    Expose({ name: "Sgf_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sgf_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Sgf_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Sgf_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sgf_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostSubPiezasGrupoFrame.prototype, "Sgf_Id", void 0);
__decorate([
    Expose({ name: "Sgf_Ref_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sgf_Ref_No es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Sgf_Ref_No debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sgf_Ref_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sgf_Ref_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostSubPiezasGrupoFrame.prototype, "Sgf_Ref_No", void 0);
__decorate([
    Expose({ name: "Sgf_Pieza_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sgf_Pieza_No es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Sgf_Pieza_No debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sgf_Pieza_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sgf_Pieza_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostSubPiezasGrupoFrame.prototype, "Sgf_Pieza_No", void 0);
__decorate([
    Expose({ name: "Sgf_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sgf_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Sgf_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sgf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sgf_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostSubPiezasGrupoFrame.prototype, "Sgf_Descripcion", void 0);
__decorate([
    Expose({ name: "Sgf_Url_Imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sgf_Url_Imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Sgf_Url_Imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Sgf_Url_Imagen debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sgf_Url_Imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostSubPiezasGrupoFrame.prototype, "Sgf_Url_Imagen", void 0);
__decorate([
    Expose({ name: "Sgf_Grupo_Piezas" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostSubPiezasGrupoFrame.prototype, "Sgf_Grupo_Piezas", void 0);
export class validateQueryPutSubPiezasGrupoFrame {
    constructor(idSubPiezasGrupoFrame) {
        this.idSubPiezasGrupoFrame = idSubPiezasGrupoFrame;
    }
}
__decorate([
    Expose({ name: "idSubPiezasGrupoFrame" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoFrame es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoFrame debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idPiezasGrupoFrame no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutSubPiezasGrupoFrame.prototype, "idSubPiezasGrupoFrame", void 0);
export class validateBodyPutSubPiezasGrupoFrame {
    constructor(Sgf_Ref_No, Sgf_Pieza_No, Sgf_Descripcion, Sgf_Url_Imagen, Sgf_Grupo_Piezas) {
        this.Sgf_Ref_No = Sgf_Ref_No;
        this.Sgf_Pieza_No = Sgf_Pieza_No;
        this.Sgf_Descripcion = Sgf_Descripcion;
        this.Sgf_Url_Imagen = Sgf_Url_Imagen;
        this.Sgf_Grupo_Piezas = Sgf_Grupo_Piezas;
    }
}
__decorate([
    Expose({ name: "Sgf_Ref_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sgf_Ref_No es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Sgf_Ref_No debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sgf_Ref_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sgf_Ref_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutSubPiezasGrupoFrame.prototype, "Sgf_Ref_No", void 0);
__decorate([
    Expose({ name: "Sgf_Pieza_No" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sgf_Pieza_No es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro Sgf_Pieza_No debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sgf_Pieza_No debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sgf_Pieza_No no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutSubPiezasGrupoFrame.prototype, "Sgf_Pieza_No", void 0);
__decorate([
    Expose({ name: "Sgf_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sgf_Descripcion es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Sgf_Descripcion debe tener como máximo 200 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Sgf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sgf_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutSubPiezasGrupoFrame.prototype, "Sgf_Descripcion", void 0);
__decorate([
    Expose({ name: "Sgf_Url_Imagen" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sgf_Url_Imagen es obligatorio' }; } }),
    MaxLength(200, { message: () => { throw { status: 400, message: 'El parametro Sgf_Url_Imagen debe tener como máximo 200 caracteres' }; } }),
    IsString({ message: 'El parámetro Sgf_Url_Imagen debe ser un string' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sgf_Url_Imagen no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutSubPiezasGrupoFrame.prototype, "Sgf_Url_Imagen", void 0);
__decorate([
    Expose({ name: "Sgf_Grupo_Piezas" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Sgf_Grupo_Piezas no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateBodyPutSubPiezasGrupoFrame.prototype, "Sgf_Grupo_Piezas", void 0);
export class validateDeleteSubPiezasGrupoFrame {
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
], validateDeleteSubPiezasGrupoFrame.prototype, "IdDelete", void 0);
