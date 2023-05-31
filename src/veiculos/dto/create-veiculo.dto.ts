import {IsNotEmpty} from "class-validator";
import { IsValidVehicleType } from "src/helpers/decorators/IsValidVehicleType.decorator";
export class CreateVeiculoDto {
    /**
    * @example Ford
    */
    @IsNotEmpty()
    marca: string;

    /**
    * @example Fiesta
    */
    @IsNotEmpty()
    modelo: string;

    /**
    * @example Branco
    */
    @IsNotEmpty()
    cor: string;

    /**
    * @example FIZ9999
    */
    @IsNotEmpty()
    placa: string;

    /**
    * Only accepts value carro or moto
    * @example carro
    */
    @IsValidVehicleType()
    @IsNotEmpty()
    tipo: string;
}