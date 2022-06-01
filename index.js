class Cliente {
  nome
  cpf
}

class ContaCorrente {
  agencia
  /* #saldo = 0 */
  _saldo = 0

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor
      return this._saldo
    } else {
      console.log('Você não tem saldo suficiente')
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor
    }
  }

  transfere(valor, conta) {
    if (valor > 0) {
      conta.depositar(valor)
    }
  }
}

const cliente1 = new Cliente()

cliente1.nome = 'Marcos'
cliente1.cpf = '11122233309'

const cliente2 = new Cliente()
cliente2.nome = 'Ricardo'
cliente2.cpf = '22233311109'

const contaCorrenteMarcos = new ContaCorrente()
contaCorrenteMarcos.agencia = 1001

contaCorrenteMarcos.depositar(100)
const saque = contaCorrenteMarcos.sacar(50)
console.log(contaCorrenteMarcos)

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.transfere(saque, contaCorrenteRicardo)
console.log(contaCorrenteRicardo)

console.log(saque)
