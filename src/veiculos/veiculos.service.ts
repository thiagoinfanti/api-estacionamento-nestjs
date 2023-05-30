import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { VeiculoGatewayInterface } from './gateways/veiculo-gateway-interface';
import { Veiculo } from './entities/veiculo.entity';

@Injectable()
export class VeiculosService {
  constructor(
    @Inject('VeiculoGatewayInterface')
    private veiculoGateway: VeiculoGatewayInterface
  ){}
  
  async create(createVeiculoDto: CreateVeiculoDto) {
    const veiculo = new Veiculo(
      createVeiculoDto.marca,
      createVeiculoDto.modelo,
      createVeiculoDto.cor,
      createVeiculoDto.placa,
      createVeiculoDto.tipo
    );

    return await this.veiculoGateway.create(veiculo);
    
  }

  async findAll() {
    return await this.veiculoGateway.findAll();
  }

  async findOne(id: number) {
    return await this.veiculoGateway.findOne({id:id})
  }

  async update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
    
    const new_veiculo = new Veiculo(
      updateVeiculoDto.marca,
      updateVeiculoDto.modelo,
      updateVeiculoDto.cor,
      updateVeiculoDto.placa,
      updateVeiculoDto.tipo
    );
    return await this.veiculoGateway.update(id, new_veiculo)
  }

  async remove(id: number) {
    await this.veiculoGateway.delete(id)
  }
}
