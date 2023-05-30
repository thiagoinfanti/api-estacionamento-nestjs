import { DeepPartial } from 'typeorm';
import { VeiculosModule } from 'src/veiculos/veiculos.module';
import { EstabelecimentosModule } from 'src/estabelecimentos/estabelecimentos.module';
import { VeiculoTipoEnum } from 'src/veiculos/dto/veiculo-tipo.dto';

export class Estacionamento{
    id: number;

    estabelecimento_id: DeepPartial<EstabelecimentosModule>;
    veiculo_id: DeepPartial<VeiculosModule>;
    

    //estabelecimento_id: number;
    //veiculo_id: number;
    tipo: string;
    entrada: Date;
    saida: Date;
    createdAt: string;
    updatedAt: string;
    
    constructor(
        estabelecimento_id: number,
        veiculo_id: number,
        tipo: string,
        entrada: Date,
        saida: Date, 
        createdAt?: string, 
        updatedAt?: string, 
        id?: number
    ){

        this.id = id;
        this.estabelecimento_id = estabelecimento_id;
        this.veiculo_id = veiculo_id;
        this.entrada = entrada;
        this.saida = saida;
        this.tipo = tipo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

    }
}