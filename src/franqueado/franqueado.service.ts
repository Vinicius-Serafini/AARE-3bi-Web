import { Injectable } from "@nestjs/common";
import { Franqueado } from "./franqueado.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class FranqueadoService {

    constructor (
        @InjectRepository(Franqueado)
        private repository: Repository<Franqueado>) {}

    async save(franqueado: Franqueado) {
        return this.repository.save(franqueado);
    }
    async delete(id: number) {
        return this.repository.delete(id);
     }

    async findById(id: number) {
        return this.repository.findOne(id);
    }

    async findAll() {
        return this.repository.find();
    }

    async update(franqueado: Franqueado) {
        return this.repository.update(franqueado.id, franqueado);
    }
    
}