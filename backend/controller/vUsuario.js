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
import { IsDefined, MaxLength, IsEmail, IsNotEmpty, Matches } from 'class-validator';
export class validatePostUsuario {
    constructor(Email, password) {
        this.Email = Email;
        this.password = password;
    }
}
__decorate([
    Expose({ name: "Email" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro Email es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro Email debe tener como máximo 100 caracteres' }; } }),
    IsEmail({}, { message: () => { throw { status: 400, message: 'El parametro Email debe ser un correo electronico valido' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro Email no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostUsuario.prototype, "Email", void 0);
__decorate([
    Expose({ name: "password" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro password es obligatorio' }; } }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'El parametro password debe tener como máximo 20 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro password debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro password no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostUsuario.prototype, "password", void 0);
