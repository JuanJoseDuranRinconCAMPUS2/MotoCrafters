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
export class validatePostEspecialidad {
    constructor(Esp_Id, Esp_Nombre) {
        this.Esp_Id = Esp_Id;
        this.Esp_Nombre = Esp_Nombre;
    }
}
__decorate([
    Expose({ name: "Esp_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Esp_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro Esp_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro Esp_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Esp_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostEspecialidad.prototype, "Esp_Id", void 0);
__decorate([
    Expose({ name: "Esp_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Esp_Nombre es obligatorio' }; } }),
    MaxLength(50, { message: () => { throw { status: 400, message: 'El parametro Esp_Nombre debe tener como máximo 50 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Esp_Nombre debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Esp_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostEspecialidad.prototype, "Esp_Nombre", void 0);
export class validateQueryPutEspecialidad {
    constructor(idEspecialidad) {
        this.idEspecialidad = idEspecialidad;
    }
}
__decorate([
    Expose({ name: "idEspecialidad" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idEspecialidad es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idEspecialidad debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idEspecialidad no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutEspecialidad.prototype, "idEspecialidad", void 0);
export class validateBodyPutEspecialidad {
    constructor(Esp_Nombre) {
        this.Esp_Nombre = Esp_Nombre;
    }
}
__decorate([
    Expose({ name: "Esp_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Esp_Nombre es obligatorio' }; } }),
    MaxLength(50, { message: () => { throw { status: 400, message: 'El parametro Esp_Nombre debe tener como máximo 50 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro Esp_Nombre debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Esp_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutEspecialidad.prototype, "Esp_Nombre", void 0);
export class validateDeleteEspecialidad {
    constructor(IdDelete) {
        this.IdDelete = IdDelete;
    }
}
__decorate([
    Expose({ name: "IdDelete" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro IdDelete es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro idCategoria debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro IdDelete debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro IdDelete no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateDeleteEspecialidad.prototype, "IdDelete", void 0);
