import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstabelecimentoDto } from './dto/create-estabelecimento.dto';
import { UpdateEstabelecimentoDto } from './dto/update-estabelecimento.dto';
import { EstabelecimentoGatewayInterface } from './gateways/estabelecimento-gateway-interface';
import { Estabelecimento } from './entities/estabelecimento.entity';

@Injectable()
export class EstabelecimentosService {
  constructor(
    @Inject('EstabelecimentoGatewayInterface')
    private estabelecimentoGateway: EstabelecimentoGatewayInterface
  ){}
  
  async create(createEstabelecimentoDto: CreateEstabelecimentoDto) {
    const veiculo = new Estabelecimento(
      createEstabelecimentoDto.nome,
      createEstabelecimentoDto.cnpj,
      createEstabelecimentoDto.endereco,
      createEstabelecimentoDto.telefone,
      createEstabelecimentoDto.vagas_carros,
      createEstabelecimentoDto.vagas_motos,
    );

    return await this.estabelecimentoGateway.create(veiculo);
    
  }

  async findAll() {
    return await this.estabelecimentoGateway.findAll();
  }

  async findOne(id: number) {
    return await this.estabelecimentoGateway.findOne({id:id})
  }

  async update(id: number, updateEstabelecimentoDto: UpdateEstabelecimentoDto) {
    
    const new_veiculo = new Estabelecimento(
      updateEstabelecimentoDto.nome,
      updateEstabelecimentoDto.cnpj,
      updateEstabelecimentoDto.endereco,
      updateEstabelecimentoDto.telefone,
      updateEstabelecimentoDto.vagas_carros,
      updateEstabelecimentoDto.vagas_motos,
    );
    return await this.estabelecimentoGateway.update(id, new_veiculo)
  }

  async remove(id: number) {
    await this.estabelecimentoGateway.delete(id)
  }
}
