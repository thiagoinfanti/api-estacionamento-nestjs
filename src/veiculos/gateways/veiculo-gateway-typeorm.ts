import { Veiculo } from "../entities/veiculo.entity";
import { VeiculoGatewayInterface } from "./veiculo-gateway-interface";
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VeiculosModel } from '../entities/veiculo.model';
import { Repository, FindOptionsWhere } from 'typeorm';

@Injectable()
export class VeiculoGatewayTypeorm implements VeiculoGatewayInterface{

    constructor(
        @InjectRepository(VeiculosModel)
        private veiculosModel: Repository<VeiculosModel>
    ){}    

    async findOneByOrFail(where?: FindOptionsWhere<VeiculosModel>){
        try{
            return await this.veiculosModel.findOneByOrFail(where)
        }catch(error){
            throw new NotFoundException("veículo not found");
        }
      }

    async create(veiculo: Veiculo): Promise<Veiculo> {
        const new_veiculo = this.veiculosModel.create(veiculo)
        return await this.veiculosModel.save(veiculo);
    }

    async update(id: number, veiculo: Veiculo): Promise<Veiculo> {
        const v = await this.findOneByOrFail({id: id})

        for(let k in veiculo){
            if(typeof veiculo[k] !== "undefined"){
                v[k] = veiculo[k];
            }
        }

        return await this.veiculosModel.save(v);
        
    }

    async delete(id: number): Promise<null> {
        await this.findOneByOrFail({id: id})
        this.veiculosModel.delete({id:id});
        return
    }

    async findAll(): Promise<Veiculo[]> {
        return await this.veiculosModel.find({select: ['id', 'marca', 'modelo', 'cor', 'placa', 'tipo']})
    }

    async findOne(where: {}): Promise<Veiculo> {
        return await this.findOneByOrFail(where)
    }

}