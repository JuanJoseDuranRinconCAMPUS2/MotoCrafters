import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostGrupoFrame{
 
    @Expose({ name: "Gf_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Gf_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Gf_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Gf_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Gf_Id no puede estar vacio'}}})
    Gf_Id: number;

    @Expose({ name: "Gf_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Gf_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Gf_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Gf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Gf_Descripcion no puede estar vacio'}}})
    Gf_Descripcion: string;

    constructor(Gf_Id: number, Gf_Descripcion: string){
        this.Gf_Id = Gf_Id;
        this.Gf_Descripcion = Gf_Descripcion;
    }
}

export class validateQueryPutGrupoFrame{

    @Expose({ name: "idGrupoF" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idGrupoF es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idGrupoF debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idGrupoF no puede estar vacio'}}})
    idGrupoF: number;

    constructor(idGrupoF: number){
        this.idGrupoF = idGrupoF;
    }
}

export class validateBodyPutGrupoFrame{

    @Expose({ name: "Gf_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Gf_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Gf_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Gf_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Gf_Descripcion no puede estar vacio'}}})
    Gf_Descripcion: string;

    constructor(Gf_Descripcion: string){
        this.Gf_Descripcion = Gf_Descripcion;
    }
}

export class validateDeleteGrupoFrame{

  @Expose({ name: "IdDelete" })
  @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete es obligatorio'}}})
  @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete debe ser positivo'}}})
  @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro IdDelete debe ser un numero'}}})
  @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro IdDelete no puede estar vacio'}}})
  IdDelete: number;

  constructor(IdDelete: number){
      this.IdDelete = IdDelete;
  }
}