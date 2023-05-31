import {IsNotEmpty, Min} from "class-validator";
export class CreateEstabelecimentoDto {
    
    /**
   * @example SP Parking
   */
    @IsNotEmpty()
    nome: string;

    /**
   * @example 99.999.999/9999-99
   */
    @IsNotEmpty()
    cnpj: string;

    /**
   * @example Av abc, 123
   */
    @IsNotEmpty()
    endereco: string;

    /**
   * @example (99) 99999-9999
   */
    @IsNotEmpty()
    telefone: string;

    /**
   * only numbers and minumun value 1
   * @example 1
   */
    @Min(1)
    @IsNotEmpty()
    vagas_motos: number;

    /**
   * only numbers and minumun value 1
   * @example 1
   */
    @Min(1)
    @IsNotEmpty()
    vagas_carros: number;
}