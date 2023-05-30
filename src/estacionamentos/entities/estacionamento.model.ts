import { EstabelecimentosModel } from "src/estabelecimentos/entities/estabelecimento.model";
import { VeiculosModel } from "src/veiculos/entities/veiculo.model";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "eventos_estacionamentos"})
export class EstacionamentosModel {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => EstabelecimentosModel, estabelecimento => estabelecimento.id, {onDelete: "CASCADE", eager: true})
    @JoinColumn({ name: 'estabelecimento_id' })
    estabelecimento_id: EstacionamentosModel

    
    @ManyToOne(() => VeiculosModel, veiculo => veiculo.id, {onDelete: "CASCADE", eager: true})
    @JoinColumn({ name: 'veiculo_id' })
    veiculo_id: VeiculosModel

    @Column()
    tipo: string;

    @Column()
    entrada: Date;

    @Column({ default: null })
    saida: Date;

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: string;
}