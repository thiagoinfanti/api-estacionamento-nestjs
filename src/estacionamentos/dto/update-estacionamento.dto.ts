import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEstacionamentoDto } from './create-estacionamento.dto';
import {IsNotEmpty, IsOptional} from "class-validator";
import { IsValidVehicleType } from 'src/helpers/decorators/IsValidVehicleType.decorator';
import { DeepPartial } from 'typeorm';
import { VeiculoTipoEnum } from "src/veiculos/dto/veiculo-tipo.dto";

export class UpdateEstacionamentoDto extends PartialType(CreateEstacionamentoDto) {
    
    @ApiProperty({required: false})
    @IsNotEmpty()
    @IsOptional()
    estabelecimento_id: number;

    @ApiProperty({required: false})
    @IsNotEmpty()
    @IsOptional()
    veiculo_id: number;

    @ApiProperty({required: false})
    @IsValidVehicleType()
    @IsNotEmpty()
    @IsOptional()
    tipo: DeepPartial<VeiculoTipoEnum>;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    entrada: Date;

    @ApiProperty({required: true})
    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    saida: Date;
}