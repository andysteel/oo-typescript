import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {

    nomeTabela: string = '';    
    
    inserir(object: T): boolean {
       console.log('logica do insert')
       return true
    }
    atualizar(object: T): boolean {
        console.log('logica do update')
        return true
    }
    remover(id: number): T{
        console.log('logica do delete')
        return Object()
    }
    selecionar(id: number): T {
        console.log('logica do select')
        return Object()
    }
    selecionarTodos(): T[] {
        console.log('logica do select all')
        return [Object()]
    }
}