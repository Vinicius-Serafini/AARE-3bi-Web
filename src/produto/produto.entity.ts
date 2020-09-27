import { ItemPedido } from "src/itemPedido/itemPedido.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";

@Entity ({ name : 'produtos' })
export class Produto{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nome', type: 'varchar', length: 25 })
    nome: string;

    @Column({ name: 'descricao', type: 'varchar', length: 100 })
    descricao: string;
    
    @Column({ name: 'preco', type: 'decimal' })
    preco: number;

    @Column({ name: 'estoque', type: 'decimal'})
    estoque: number;

    @Column({ name: 'dataValidade', type: 'date'})
    dataValidade: Date;

    @Column({ name: 'unidadeMedida', type: 'varchar', length: 2 })
    unidadeMedida: string;

    @ManyToMany(type => ItemPedido, itemPedido => itemPedido.produtos)
    itemPedido: ItemPedido[];
}