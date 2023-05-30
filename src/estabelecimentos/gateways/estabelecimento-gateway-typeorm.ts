import { Estabelecimento } from "../entities/estabelecimento.entity";
import { EstabelecimentoGatewayInterface } from "./estabelecimento-gateway-interface";
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstabelecimentosModel } from '../entities/estabelecimento.model';
import { Repository, FindOptionsWhere } from 'typeorm';

@Injectable()
export class EstabelecimentoGatewayTypeorm implements EstabelecimentoGatewayInterface{

    constructor(
        @InjectRepository(EstabelecimentosModel)
        private estabelecimentosModel: Repository<EstabelecimentosModel>,
    ){}    

    async findOneByOrFail(where?: FindOptionsWhere<EstabelecimentosModel>){
        try{
            return await this.estabelecimentosModel.findOneByOrFail(where)
        }catch(error){
            throw new NotFoundException("estabelecimento not found");
        }
      }

    async create(estabelecimento: Estabelecimento): Promise<Estabelecimento> {
        const new_estabelecimento = this.estabelecimentosModel.create(estabelecimento)
        return await this.estabelecimentosModel.save(estabelecimento);
    }

    async update(id: number, estabelecimento: Estabelecimento): Promise<Estabelecimento> {
        const v = await this.findOneByOrFail({id: id})

        for(let k in estabelecimento){
            if(typeof estabelecimento[k] !== "undefined"){
                v[k] = estabelecimento[k];
            }
        }

        return await this.estabelecimentosModel.save(v);
        
    }

    async delete(id: number): Promise<null> {
        await this.findOneByOrFail({id: id})
        this.estabelecimentosModel.delete({id:id});
        return
    }

    async findAll(): Promise<Estabelecimento[]> {
        return await this.estabelecimentosModel.find({select: ['id', 'nome', 'cnpj', 'telefone', 'endereco', 'vagas_carros', 'vagas_motos']})
    }

    async findOne(where: {}): Promise<Estabelecimento> {
        return await this.findOneByOrFail(where)
    }

}