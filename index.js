import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente ("Ricardo", 5000, 1237895601);
gerente.cadastrarSenha("123")

const cliente = new Cliente ("Lais", 78945612379, "456777777777");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4567");
console.log(gerenteEstaLogado, diretorEstaLogado);
console.log(clienteEstaLogado);