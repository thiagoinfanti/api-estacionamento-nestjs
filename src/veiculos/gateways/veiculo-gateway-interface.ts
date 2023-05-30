import { Veiculo } from "../entities/veiculo.entity";

export interface VeiculoGatewayInterface{
    create(veiculo: Veiculo):Promise<Veiculo>;
    update(id: number, veiculo: Veiculo):Promise<Veiculo>;
    findAll():Promise<Veiculo[]>;
    findOne(where: {}):Promise<Veiculo>;
    delete(id: number):Promise<null>;
}