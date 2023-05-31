import {IsNotEmpty, IsOptional} from "class-validator";
import { IsValidVehicleType } from "src/helpers/decorators/IsValidVehicleType.decorator";
import { DeepPartial } from 'typeorm';
import { VeiculoTipoEnum } from "src/veiculos/dto/veiculo-tipo.dto";

export class CreateEstacionamentoDto {
    /**
    * Only accepts estabelecimentos pre created
    * @example 1
    */
    @IsNotEmpty()
    estabelecimento_id: number;

    /**
    * Only accepts veiculos pre created
    * @example 1
    */
    @IsNotEmpty()
    veiculo_id: number;

    /**
    * Only accepts value carro or moto
    * @example carro
    */
    @IsValidVehicleType()
    @IsNotEmpty()
    //tipo: string;
    tipo: DeepPartial<VeiculoTipoEnum>;

    /**
    * @example 2023-01-01 10:01:00
    */
    @IsNotEmpty()
    entrada: Date;

    /**
    * @example 2023-01-01 10:01:00
    */
    @IsNotEmpty()
    @IsOptional()
    saida: Date;

    
}