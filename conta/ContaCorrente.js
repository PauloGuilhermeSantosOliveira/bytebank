import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0; //static serve para querer somar todas as contas correntes e não um caso isolado por exemplo cada pessoa quer ter só uma conta mas eu quero visualizar a quantia de conta que tem ao todo do programa.
    
    constructor(cliente, agencia){
        super(0, cliente, agencia);
       ContaCorrente.numeroDeContas += 1;
    }

        //sobreescrevendo o comportamento de sacar (use o exemplo do css inline que sobreescreve oq está no css de fora.)
    sacar(valor) {
        let taxa = 1.1
       return super._sacar(valor, taxa);
        
    }

}

