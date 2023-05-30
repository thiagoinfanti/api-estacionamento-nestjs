import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';
import { EstacionamentoGatewayInterface } from './gateways/estacionamento-gateway-interface';
import { Estacionamento } from './entities/estacionamento.entity';


@Injectable()
export class EstacionamentosService {
  constructor(
    @Inject('EstacionamentoGatewayInterface')
    private estacionamentoGateway: EstacionamentoGatewayInterface,
  ){}
  
  async create(createEstacionamentoDto: CreateEstacionamentoDto) {

    const estacionamento = new Estacionamento(
      createEstacionamentoDto.estabelecimento_id,
      createEstacionamentoDto.veiculo_id,
      createEstacionamentoDto.tipo,
      createEstacionamentoDto.entrada,
      createEstacionamentoDto.saida
    );

    let params = {
      estabelecimento_id: createEstacionamentoDto.estabelecimento_id,
      veiculo_id: createEstacionamentoDto.veiculo_id,
      tipo: createEstacionamentoDto.tipo
    }

    return await this.estacionamentoGateway.create(params, estacionamento);
    
  }

  async findAll() {
    return await this.estacionamentoGateway.findAll();
  }

  async findOne(id: number) {
    return await this.estacionamentoGateway.findOne({id:id})
  }

  async update(id: number, updateEstacionamentoDto: UpdateEstacionamentoDto) {
    
    const new_estacionamento = new Estacionamento(
      updateEstacionamentoDto.estabelecimento_id,
      updateEstacionamentoDto.veiculo_id,
      updateEstacionamentoDto.tipo,
      updateEstacionamentoDto.entrada,
      updateEstacionamentoDto.saida
    );
    
      let params = {
        id: id,
        estabelecimento_id: updateEstacionamentoDto.estabelecimento_id,
        veiculo_id: updateEstacionamentoDto.veiculo_id,
      }

    return await this.estacionamentoGateway.update(id, new_estacionamento)
  }

  
  async remove(id: number) {
    await this.estacionamentoGateway.delete(id)
  }
  
  
  async entranceExit(){
    
    const quantities = await this.estacionamentoGateway.entranceExit();

    return quantities;
  }

  async entranceExitByHour(){
    
    const quantities = await this.estacionamentoGateway.entranceExitByHour();

    return quantities;
  }

}
