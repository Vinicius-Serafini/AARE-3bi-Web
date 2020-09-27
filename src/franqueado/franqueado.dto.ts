import { IsString, Length } from 'class-validator';

export class FranqueadoDto {

    @IsString({message: 'O nome não é uma string válida'})
    @Length(10, 30, {message: 'O nome deve conter entre 10 e 30 caracteres '})
    nome: string;

    @IsString({message: 'O cnpj não é uma string válida'})
    @Length(18, 18, {message: "O cnpj deve ser escrito no formato xxx.xxx.xxx/xxxx-xx"})
    cnpj: string;

    @IsString({message: 'O campo inscricaoEstadual não é uma string válida'})
    @Length(15, 15, {message: "O inscricaoEstadual deve ser escrito no formato xxx.xxx.xxx.xxx"})
    inscricaoEstadual: string;

    @IsString({message: 'O campo endereco não é uma string válida'})
    @Length(10, 50, {message: 'O endereco deve conter entre 10 e 50 caracteres'})
    endereco: string;

    @IsString({message: 'O campo bairro não é uma string válida'})
    @Length(5, 20, {message: 'O bairro deve conter entre 5 e 20 caracteres'}) 
    bairro: string;

    @IsString({message: 'O campo cidade não é uma string válida'})
    @Length(5, 20, {message: 'A cidade deve conter entre 5 e 20 caracteres'})
    cidade: string;

    @IsString({message: 'O campo cep não é uma string válida'})
    @Length(9, 9, {message: "O cep deve ser escrito no formato xxxxx-xxx"})
    cep: string;

}