import { Controller, Body, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { PedidoService } from "./pedido.service";
import { Pedido } from "./pedido.entity";
import { ItemPedido } from "src/itemPedido/itemPedido.entity";


@Controller("/pedidos")
export class PedidoController {

    constructor(private readonly service: PedidoService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) { 
        return this.service.findById(id);
    }

    @Post()
    create(@Body() pedidoBody) {
        const {codigo, data, dataEntrega, transportadora, valorDesconto, enderecoEntrega, franqueado, pedidoItem } = pedidoBody;

        let  totalProdutos = pedidoItem.reduce((totalValue, initPedidoItem) => {
            return totalValue + initPedidoItem.valorTotal 
         }, 0);
     
         const pedido = new Pedido();
         pedido.codigo = codigo;
         pedido.data = data;
         pedido.dataEntrega = dataEntrega;
         pedido.transportadora = transportadora;
         pedido.valorDesconto = valorDesconto;
         pedido.enderecoEntrega = enderecoEntrega;
         pedido.franqueado = franqueado;
         pedido.valorProdutos = totalProdutos;
         pedido.valorTotal = pedido.valorProdutos - pedido.valorDesconto;
         
         const arrpedidoItems = pedidoItem.map((index) => {
             let pedidoItem = new ItemPedido();
             pedidoItem.pedido = pedido;
             pedidoItem.produtos = index.produto;
             pedidoItem.quantidade = index.quantidade;
             pedidoItem.valorTotal = index.valorTotal;
 
             return pedidoItem;
         })
 
         return this.service.create(arrpedidoItems);
        
    }

    @Delete()
    delete(@Body() pedido){
        const { id } = pedido;
        
        return this.service.delete(id);
    }

    @Put()
    update(@Body() pedido){
        return this.service.update(pedido);
    }
}