import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FranqueadoController } from './franqueado/franqueado.controller';
import { FranqueadoService } from './franqueado/franqueado.service';
import { Franqueado } from './franqueado/franqueado.entity';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoService } from './produto/produto.service';
import { Produto } from './produto/produto.entity';
import { PedidoController } from './pedido/pedido.controller';
import { PedidoService } from './pedido/pedido.service';
import { Pedido } from './pedido/pedido.entity';
import { ItemPedido } from './itemPedido/itemPedido.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Vini123',
        database: 'aare-web-3bi',
        entities: [
          Franqueado,
          Produto,
          Pedido,
          ItemPedido
        ],
        synchronize: true,
        logging: true,
      }),
      TypeOrmModule.forFeature([
        Franqueado,
        Produto,
        Pedido,
        ItemPedido
      ])
  ],
  controllers: [
      FranqueadoController,
      ProdutoController,
      PedidoController,
  ],
  providers: [
      FranqueadoService,
      ProdutoService,
      PedidoService
  ],
})
export class AppModule {}
