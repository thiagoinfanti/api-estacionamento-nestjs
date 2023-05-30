import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";
import { IsValidVehicleType } from "src/helpers/decorators/IsValidVehicleType.decorator";
export class CreateVeiculoDto {
    @ApiProperty()
    @IsNotEmpty()
    marca: string;

    @ApiProperty()
    @IsNotEmpty()
    modelo: string;

    @ApiProperty()
    @IsNotEmpty()
    cor: string;

    @ApiProperty()
    @IsNotEmpty()
    placa: string;

    @ApiProperty({description: "carro ou moto"})
    @IsValidVehicleType()
    @IsNotEmpty()
    tipo: string;
}