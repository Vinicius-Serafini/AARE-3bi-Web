import { IsString, Length, IsNumber, IsInt, IsPositive, IsDate } from 'class-validator'

export class ProdutoDto {

    @IsString({ message: 'O nome não é uma string valida'})
    @Length(5, 25, {message: 'O nome deve conter entre 5 e 25 caracteres'})
    nome: string; 

    @IsString({ message: 'A descricao não é uma string valida'})
    @Length(5, 100, {message: 'A descricao deve conter ao menos 5 caracteres'})
    descricao: string;

    @IsNumber( {}, { message: 'O preco deve ser um numero positivo'})
    @IsPositive({ message: 'O preco deve ser um numero positivo '})
    preco: number;

    @IsInt({ message: 'O estoque deve ser um numero inteiro' })
    @IsPositive({ message: 'O estoque deve ser um inteiro positivo' })
    estoque: number;

    @IsString({ message: 'A dataValidade deve ser uma string válida'})
    @Length(10, 10, {message: 'A dataValidade deve estar escrita no formato dd-mm-yyyy'})
    dataValidade: string;

    @IsString({ message: 'A unidadeMedida não é uma string valida'})
    @Length(2, 2, {message: 'A unidadeMedida deve estar escrita no formato de sigla XX'}) 
    unidadeMedida: string;

}