export class Veiculo{
    id: number;
    marca: string;
    modelo: string;
    cor: string;
    placa: string;
    tipo: string;
    createdAt: string;
    updatedAt: string;
    
    constructor(marca: string, modelo: string, cor: string, placa: string, tipo: string, createdAt?: string, updatedAt?: string, id?: number){

        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
        this.tipo = tipo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

    }
}