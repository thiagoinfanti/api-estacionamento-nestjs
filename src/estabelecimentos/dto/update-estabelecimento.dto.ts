import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEstabelecimentoDto } from './create-estabelecimento.dto';
import {IsNotEmpty, IsOptional, Min} from "class-validator";

export class UpdateEstabelecimentoDto extends PartialType(CreateEstabelecimentoDto) {
    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    nome: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    cnpj: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    endereco: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    telefone: string;

    @ApiProperty()
    @Min(1)
    @IsNotEmpty()
    @IsOptional()
    vagas_motos: number;

    @ApiProperty()
    @Min(1)
    @IsNotEmpty()
    @IsOptional()
    vagas_carros: number;
}