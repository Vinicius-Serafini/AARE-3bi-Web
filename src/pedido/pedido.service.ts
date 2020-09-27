import { Injectable } from "@nestjs/common";
import { Pedido } from "./pedido.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemPedido } from "src/itemPedido/itemPedido.entity";


@Injectable()
export class PedidoService {

    constructor(
        @InjectRepository(ItemPedido)
        private repository: Repository<ItemPedido>) { }

    async create(itemPedido: Array<Pedido>) {
        return (this.repository.save(itemPedido));
    }

    async delete(id: number) {
        return this.repository.delete(id);
     }

    async findById(id: number) {
        return this.repository.findOne(id, { relations: ["franqueado", "itemPedido"] });
    }

    async findAll() {
        return this.repository.find({ relations: ["franqueado", "itemPedido"] })
    }

    async update(pedido: Pedido){
        return this.repository.update(pedido.id, pedido);
    }
}