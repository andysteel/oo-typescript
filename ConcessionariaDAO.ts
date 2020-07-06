import { DaoInterface } from './DaoInterface'
import { Concessionaria } from './Concessionaria'

export class ConcessionariaDAO implements DaoInterface {
    nomeTabela: string = 'tb_concessionaria';    
    
    inserir(object: Concessionaria): boolean {
       console.log('logica do insert')
       return true
    }
    atualizar(object: Concessionaria): boolean {
        console.log('logica do update')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('logica do delete')
        return new Concessionaria('',[])
    }
    selecionar(id: number): Concessionaria {
        console.log('logica do select')
        return new Concessionaria('',[])
    }
    selecionarTodos(): Concessionaria[] {
        console.log('logica do select all')
        return [new Concessionaria('',[])]
    }

}