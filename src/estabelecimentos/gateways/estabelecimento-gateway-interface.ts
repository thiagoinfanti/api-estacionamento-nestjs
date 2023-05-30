import { Estabelecimento } from "../entities/estabelecimento.entity";

export interface EstabelecimentoGatewayInterface{
    create(estabelecimento: Estabelecimento):Promise<Estabelecimento>;
    update(id: number, estabelecimento: Estabelecimento):Promise<Estabelecimento>;
    findAll():Promise<Estabelecimento[]>;
    findOne(where: {}):Promise<Estabelecimento>;
    delete(id: number):Promise<null>;
}