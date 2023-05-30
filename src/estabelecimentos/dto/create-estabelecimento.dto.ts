import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, Min} from "class-validator";
export class CreateEstabelecimentoDto {
    @ApiProperty()
    @IsNotEmpty()
    nome: string;

    @ApiProperty()
    @IsNotEmpty()
    cnpj: string;

    @ApiProperty()
    @IsNotEmpty()
    endereco: string;

    @ApiProperty()
    @IsNotEmpty()
    telefone: string;

    @ApiProperty()
    @Min(1)
    @IsNotEmpty()
    vagas_motos: number;

    @ApiProperty()
    @Min(1)
    @IsNotEmpty()
    vagas_carros: number;
}