import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinColumn } from "typeorm";
import { Produto } from "src/produto/produto.entity";
import { Pedido } from "src/pedido/pedido.entity";

@Entity ({ name : 'itemPedido' })
export class ItemPedido{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Produto, produto => produto.itemPedido)
    @JoinColumn({ name: "produto_id"})
    produtos: Produto[];

    @ManyToOne(type => Pedido, pedido => pedido.itensPedido, { cascade: true })
    @JoinColumn({ name: "pedido_id"})
    pedido: Pedido;

    @Column({ name: 'quantitidade', type: 'integer' })
    quantidade: number;

    @Column({ name: "valorTotal", type: "decimal"})
    valorTotal: number

}