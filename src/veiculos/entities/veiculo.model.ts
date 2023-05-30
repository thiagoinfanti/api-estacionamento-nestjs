import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "veiculos"})
export class VeiculosModel {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column()
    cor: string;

    @Column()
    placa: string;

    @Column()
    tipo: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: string;
}