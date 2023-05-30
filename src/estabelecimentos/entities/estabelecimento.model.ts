import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "estabelecimentos"})
export class EstabelecimentosModel {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    cnpj: string;

    @Column()
    endereco: string;

    @Column()
    telefone: string;

    @Column()
    vagas_carros: number;

    @Column()
    vagas_motos: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: string;
}