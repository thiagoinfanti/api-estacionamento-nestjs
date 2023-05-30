import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVeiculoDto } from './create-veiculo.dto';
import {IsNotEmpty, IsOptional} from "class-validator";
import { IsValidVehicleType } from 'src/helpers/decorators/IsValidVehicleType.decorator';

export class UpdateVeiculoDto extends PartialType(CreateVeiculoDto) {
    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    marca: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    modelo: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    cor: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    placa: string;

    @ApiProperty()
    @IsValidVehicleType()
    @IsNotEmpty()
    @IsOptional()
    tipo: string;
}