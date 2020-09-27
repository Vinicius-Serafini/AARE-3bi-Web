import { Controller, Body, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { ProdutoDto } from "./produto.dto";
import { Produto } from "./produto.entity"
import { plainToClass } from "class-transformer";

@Controller("/produtos")
export class ProdutoController {

    constructor(private readonly service: ProdutoService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) { 
        return this.service.findById(id);
    }

    @Post()
    create(@Body() produtoDto: ProdutoDto) {
        const produto = plainToClass(Produto, produtoDto);
        return this.service.create(produto);
    }

    @Delete()
    delete(@Body() produto){
        const { id } = produto;

        return this.service.delete(id);
    }

    @Put()
    update(@Body() produto){
        return this.service.update(produto);
    }
}