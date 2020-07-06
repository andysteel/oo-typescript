//import { ConcessionariaDAO } from './ConcessionariaDAO'
import { Concessionaria } from './Concessionaria'
//import { PessoaDAO } from './PessoaDAO'
import { Pessoa } from './Pessoa'
import { Dao } from './Dao'

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Pessoa> = new Dao<Pessoa>()

//let dao: ConcessionariaDAO = new  ConcessionariaDAO()
dao3.inserir(new Concessionaria('', []))

//let dao2: PessoaDAO = new PessoaDAO()
dao4.atualizar(new Pessoa('',''))