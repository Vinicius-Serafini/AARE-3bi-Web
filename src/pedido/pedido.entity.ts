import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Franqueado } from "src/franqueado/franqueado.entity";
import { ItemPedido } from "src/itemPedido/itemPedido.entity";


@Entity ({ name : 'Pedidos' })
export class Pedido{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'codigo', type: 'varchar', length: 100 })
    codigo: string;

    @Column({ name: 'data', type: 'date' })
    data: string;

    @Column({ name: 'dataEntrega', type: 'date'})
    dataEntrega: string;

    @Column({ name: 'transportadora', type: 'varchar', length: 50})
    transportadora: string;
    
    @Column({ name: 'valorTotal', type: 'decimal', })
    valorTotal: number;

    @Column({ name: 'valorProdutos', type: 'decimal', })
    valorProdutos: number;

    @Column({ name: 'valorDesconto', type: 'decimal'})
    valorDesconto: number;

    @ManyToOne(type => Franqueado, franqueado => franqueado.pedidos)
    @JoinColumn({ name: 'franqueado_id'})
    franqueado: Franqueado

    @Column({ name: 'enderecoEntrega', type: 'varchar', length: 100})
    enderecoEntrega: string;

    @OneToMany(type => ItemPedido, itensPedido => itensPedido.pedido)
    itensPedido: ItemPedido[];
}