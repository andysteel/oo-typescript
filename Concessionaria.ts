import Carro from './Carro'
import { ConcessionariaInterface } from './ConcessionariaInterface'

export class Concessionaria implements ConcessionariaInterface {

    private endereco: string = ''
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecedorEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }

    fornecerHorarioDeFuncionamento(): string {
        return 'De segunda a sexta de 08:00 as 18:00'
    }
}