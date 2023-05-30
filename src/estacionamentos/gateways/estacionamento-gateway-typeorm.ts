import { Estacionamento } from "../entities/estacionamento.entity";
import { EstacionamentoGatewayInterface } from "./estacionamento-gateway-interface";
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstacionamentosModel } from '../entities/estacionamento.model';
import { Repository, FindOptionsWhere, FindManyOptions,  DeepPartial, Not, IsNull, getRepository } from 'typeorm';
import { EstabelecimentosService } from "src/estabelecimentos/estabelecimentos.service";
import { VeiculosService } from 'src/veiculos/veiculos.service';


@Injectable()
export class EstacionamentoGatewayTypeorm implements EstacionamentoGatewayInterface{

    constructor(
        @InjectRepository(EstacionamentosModel)
        private estacionamentosModel: Repository<EstacionamentosModel>,
        private estabelecimentosService: EstabelecimentosService,
        private veiculosService: VeiculosService,
    ){}    

    async findOneByOrFail(where?: FindOptionsWhere<EstacionamentosModel>){
        try{
            return await this.estacionamentosModel.findOneByOrFail(where)
        }catch(error){
            throw new NotFoundException("evento estacionamento not found");
        }
      }

    async create(params: any, estacionamento: Estacionamento): Promise<Estacionamento> {
        
        await this.veiculosService.findOne(params.veiculo_id);
        const estabelecimento = await this.estabelecimentosService.findOne(params.estabelecimento_id)

        const vagas_preenchidas = await this.estacionamentosModel.findAndCount({where: {estabelecimento_id: params.estabelecimento_id, tipo: params.tipo}})

        console.log(Number(vagas_preenchidas[1]), Number(estabelecimento[`vagas_${params.tipo}s`]))

        if(Number(vagas_preenchidas[1]) >= Number(estabelecimento[`vagas_${params.tipo}s`])){
            throw new BadRequestException(`Full ${params.tipo} spaces`, { cause: new Error(), description: `The maximum number of seats is ${vagas_preenchidas[1]}` });
        }
        
        const new_estacionamento = this.estacionamentosModel.create(estacionamento)
        return await this.estacionamentosModel.save(estacionamento);
    }

    async update(params: any, estacionamento: Estacionamento): Promise<Estacionamento> {

        await this.veiculosService.findOne(params.veiculo_id);
        await this.estabelecimentosService.findOne(params.estabelecimento_id)

        const v = await this.findOneByOrFail({id: params.id})

        for(let k in estacionamento){
            if(typeof estacionamento[k] !== "undefined"){
                v[k] = estacionamento[k];
            }
        }

        if(typeof estacionamento.saida === "undefined" || estacionamento.saida === null ){
            throw new NotFoundException("saida not register");
        }

        if(new Date(estacionamento.saida).getTime() <= new Date(v.entrada).getTime()){
            throw new BadRequestException("Invalid dates", { cause: new Error(), description: 'entrada date is less than the saida date' });
        }

        return await this.estacionamentosModel.save(v);
        
    }

    async delete(id: number): Promise<null> {
        await this.findOneByOrFail({id: id})
        this.estacionamentosModel.delete({id:id});
        return
    }

    async findAll(): Promise<Estacionamento[]> {
        return await this.estacionamentosModel.find()
    }

    async findOne(where: {}): Promise<Estacionamento> {
        return await this.findOneByOrFail(where)
    }

    async entranceExit():Promise<{}>{
        const [quantities] = await this.estacionamentosModel.findAndCount({
            select: ['entrada', 'saida'],
            where: [
                { entrada: Not(IsNull()) },
                { saida: Not(IsNull()) }
            ]
        })

        const qtd_entrada = quantities.filter(item => item.entrada !== null).length;
        const qtd_saida = quantities.filter(item => item.saida !== null).length;

        return {
            qtd_entrada,
            qtd_saida
        };
    }

    async entranceExitByHour():Promise<{}>{
        const entrada = await this.estacionamentosModel
            .createQueryBuilder('evento')
            .select('DATE_FORMAT(evento.entrada, "%Y-%m-%d %H:00:00")', 'hora')
            .addSelect('COUNT(CASE WHEN evento.entrada IS NOT NULL THEN 1 END)', 'qtd_entrada')
            .groupBy('hora')
            .having('hora IS NOT NULL')
            .getRawMany();

        const saida = await this.estacionamentosModel
            .createQueryBuilder('evento')
            .select('DATE_FORMAT(evento.saida, "%Y-%m-%d %H:00:00")', 'hora')
            .addSelect('COUNT(CASE WHEN evento.entrada IS NOT NULL THEN 1 END)', 'qtd_saida')
            .groupBy('hora')
            .having('hora IS NOT NULL')
            .getRawMany();

          return {entrada: entrada, saida: saida}
    }
}