export class Estabelecimento{
    id: number;
    nome: string;
    cnpj: string;
    endereco: string;
    telefone: string;
    vagas_carros: number;
    vagas_motos: number;
    createdAt: string;
    updatedAt: string;
    
    constructor(
        nome: string,
        cnpj: string,
        endereco: string,
        telefone: string,
        vagas_carros: number,
        vagas_motos: number,
        createdAt?: string,
        updatedAt?: string,
        id?: number
        ){

            this.id = id;
            this.nome = nome;
            this.cnpj = cnpj;
            this.endereco = endereco;
            this.telefone = telefone;
            this.vagas_carros = vagas_carros;
            this.vagas_motos = vagas_motos;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;

    }
}