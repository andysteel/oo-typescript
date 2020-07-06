import { DaoInterface } from './DaoInterface'
import { Pessoa } from './Pessoa'

export class PessoaDAO implements DaoInterface {
    nomeTabela: string = 'tb_pessoa';    
    
    inserir(object: Pessoa): boolean {
       console.log('logica do insert')
       return true
    }
    atualizar(object: Pessoa): boolean {
        console.log('logica do update')
        return true
    }
    remover(id: number): Pessoa {
        console.log('logica do delete')
        return new Pessoa('','')
    }
    selecionar(id: number): Pessoa {
        console.log('logica do select')
        return new Pessoa('','')
    }
    selecionarTodos(): Pessoa[] {
        console.log('logica do select all')
        return [new Pessoa('','')]
    }

}