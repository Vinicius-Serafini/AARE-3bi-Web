import { Pedido } from "src/pedido/pedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity ({name: "franqueados"})
export class Franqueado {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nome', type: 'varchar', length: 30 })
    nome: string;

    @Column({ name: 'cnpj', type: 'varchar', length: 18 })
    cnpj: string;

    @Column({ name: 'inscricaoEstadual', type: 'varchar', length: 15 })
    inscricaoEstadual: string;

    @Column({ name: 'endereco', type: 'varchar', length: 200 })
    endereco: string;

    @Column({ name: 'bairro', type: 'varchar', length: 100 })
    bairro: string;

    @Column({ name: 'cidade', type: 'varchar', length: 100 })
    cidade: string;

    @Column({ name: 'cep', type: 'varchar', length: 10 })
    cep: string;

    @OneToMany(type => Pedido, pedido => pedido.franqueado)
    pedidos: Pedido[];
}