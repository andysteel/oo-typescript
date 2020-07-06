import  Carro  from './Carro'
import { Pessoa } from './Pessoa'
import { Concessionaria } from './Concessionaria'

let carroA = new Carro('Palio', 2)
let carroB = new Carro('Uno', 2)
let carroC = new Carro('Mobi', 4)

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Estrada Ademar Ferreira Torres', listaDeCarros)

let cliente = new Pessoa('Anderson Dias', 'Palio')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())