import { Injectable } from "@nestjs/common";
import { EstabelecimentoGatewayInterface } from "./estabelecimento-gateway-interface";
import { Estabelecimento } from "../entities/estabelecimento.entity";

//@Injectable()
export class EstabelecimentoGatewayInMemory implements EstabelecimentoGatewayInterface{
    
    items: Estabelecimento[] = []

    async findAll(): Promise<Estabelecimento[]> {
        return this.items;
    }
    async findOne(where: any): Promise<Estabelecimento> {
        const estabelecimento = this.items.find((item) => item.id == where.id)
        if(!estabelecimento){
            throw new Error("Estabelecimento not found")
        }
        return estabelecimento;
    }
    async delete(id: number): Promise<null> {
        for(let k in this.items){
            if(this.items[k].id == id){
                delete(this.items[k]);
                break
            }
        }
        return
    }

    async create(estabelecimento: Estabelecimento): Promise<Estabelecimento> {
        estabelecimento.id = this.items.length + 1;
        this.items.push(estabelecimento);
        return estabelecimento;      
    }

    async update(id: number, estabelecimento: Estabelecimento): Promise<Estabelecimento> {

        const item = this.items.find((item) => item.id == id)

        for(let k in this.items){
            if(this.items[k].id == id){
                for(let k2 in estabelecimento){
                    if(typeof estabelecimento[k2] !== "undefined"){
                        item[k2] = estabelecimento[k2];
                    }
                }
                this.items[k] = item;
                break
            }
        }
        
        return item;
    }
}