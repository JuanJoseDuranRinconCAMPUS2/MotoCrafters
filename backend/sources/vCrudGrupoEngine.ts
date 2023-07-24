import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePostGrupoEngine{
 
    @Expose({ name: "Ge_Id" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ge_Id es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro Ge_Id debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro Ge_Id debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ge_Id no puede estar vacio'}}})
    Ge_Id: number;

    @Expose({ name: "Ge_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ge_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Ge_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ge_Descripcion no puede estar vacio'}}})
    Ge_Descripcion: string;

    constructor(Ge_Id: number, Ge_Descripcion: string){
        this.Ge_Id = Ge_Id;
        this.Ge_Descripcion = Ge_Descripcion;
    }
}

export class validateQueryPutGrupoEngine{

    @Expose({ name: "idGrupoE" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro idGrupoE es obligatorio'}}})
    @Matches(/^\d+$/, { message: () => {throw { status: 400, message: 'El parametro idGrupoE debe ser un numero positivo' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro idGrupoE no puede estar vacio'}}})
    idGrupoE: number;

    constructor(idGrupoE: number){
        this.idGrupoE = idGrupoE;
    }
}

export class validateBodyPutGrupoEngine{

    @Expose({ name: "Ge_Descripcion" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro Ge_Descripcion es obligatorio'}}})
    @MaxLength(200, { message: ()=>{ throw { status: 400, message: 'El parametro Ge_Descripcion debe tener como máximo 200 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro Ge_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro Ge_Descripcion no puede estar vacio'}}})
    Ge_Descripcion: string;

    constructor(Ge_Descripcion: string){
        this.Ge_Descripcion = Ge_Descripcion;
    }
}

export class validateDeleteGrupoEngine{

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