import {IsNotEmpty, IsOptional} from "class-validator";
import { IsValidVehicleType } from "src/helpers/decorators/IsValidVehicleType.decorator";
import { DeepPartial } from 'typeorm';
import { VeiculoTipoEnum } from "src/veiculos/dto/veiculo-tipo.dto";
import { ApiProperty } from "@nestjs/swagger";
export class CreateEstacionamentoDto {
    @ApiProperty()
    @IsNotEmpty()
    estabelecimento_id: number;

    @ApiProperty()
    @IsNotEmpty()
    veiculo_id: number;

    @ApiProperty({description: "carro ou moto"})
    @IsValidVehicleType()
    @IsNotEmpty()
    //tipo: string;
    tipo: DeepPartial<VeiculoTipoEnum>;

    @ApiProperty()
    @IsNotEmpty()
    entrada: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    saida: Date;

    
}