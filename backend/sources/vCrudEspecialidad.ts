import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches} from 'class-validator';

export class validatePostEspecialidad{
 
    @Expose({ name: "Esp_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Esp_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Esp_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Esp_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Esp_Id no puede estar vacio'}}})
    Esp_Id: number;

    @Expose({ name: "Esp_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Esp_Nombre es obligatorio'}}})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'El parametro Esp_Nombre debe tener como máximo 50 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Esp_Nombre debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Esp_Nombre no puede estar vacio'}}})
    Esp_Nombre: string;

    constructor(Esp_Id: number, Esp_Nombre: string){
        this.Esp_Id = Esp_Id;
        this.Esp_Nombre = Esp_Nombre;
    }
}

export class validateQueryPutEspecialidad{

    @Expose({ name: "idEspecialidad" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idEspecialidad es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idEspecialidad debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idEspecialidad no puede estar vacio'}}})
    idEspecialidad: number;

    constructor(idEspecialidad: number){
        this.idEspecialidad = idEspecialidad;
    }
}

export class validateBodyPutEspecialidad{

    @Expose({ name: "Esp_Nombre" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Esp_Nombre es obligatorio'}}})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'El parametro Esp_Nombre debe tener como máximo 50 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Esp_Nombre debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Esp_Nombre no puede estar vacio'}}})
    Esp_Nombre: string;

    constructor(Esp_Nombre: string){
        this.Esp_Nombre = Esp_Nombre;
    }
}

export class validateDeleteEspecialidad{

  @Expose({ name: "IdDelete" })
  @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete es obligatorio'}}})
  @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro idCategoria debe ser positivo'}}})
  @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro IdDelete debe ser un numero'}}})
  @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete no puede estar vacio'}}})
  IdDelete: number;

  constructor(IdDelete: number){
      this.IdDelete = IdDelete;
  }
}