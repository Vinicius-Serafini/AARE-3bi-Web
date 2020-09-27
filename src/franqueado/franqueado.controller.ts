  
import { Controller, Body, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { FranqueadoService } from "./franqueado.service";
import { FranqueadoDto } from "./franqueado.dto";
import { Franqueado } from "./franqueado.entity"
import { plainToClass } from "class-transformer";

@Controller("/franqueado")
export class FranqueadoController {

    constructor(private readonly service: FranqueadoService) {}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param('id') id: number) { 
        return this.service.findById(id);
    }

    @Post()
    save(@Body() franqueadoDto: FranqueadoDto) {
        const franqueado = plainToClass(Franqueado, franqueadoDto);
        return this.service.save(franqueado);
    }

    @Delete()
    delete(@Body() franqueado){
        const { id } = franqueado;
        
        return this.service.delete(id);
    }

    @Put()
    update(@Body() franqueado){
            return this.service.update(franqueado)
    }
}