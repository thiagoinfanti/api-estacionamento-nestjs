import { Estacionamento } from "../entities/estacionamento.entity";

export interface EstacionamentoGatewayInterface{
    create(params: {}, estacionamento: Estacionamento):Promise<Estacionamento>;
    update(params: {}, estacionamento: Estacionamento):Promise<Estacionamento>;
    findAll():Promise<Estacionamento[]>;
    findOne(where: {}):Promise<Estacionamento>;
    delete(id: number):Promise<null>;
    entranceExit():Promise<{}>;
    entranceExitByHour():Promise<{}>;
}