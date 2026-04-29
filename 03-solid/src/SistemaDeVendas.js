class ValidadorPedido {
  validar(pedido) {
    if (!pedido.itens || pedido.itens.length === 0) {
      throw new Error("Pedido sem itens");
    }
  }
}

class CalculadoraTotal {
  calcular(itens) {
    return itens.reduce((total, item) => {
      return total + item.preco * item.quantidade;
    }, 0);
  }
}

class CalculadoraDesconto {
  aplicar(total) {
    if (total > 1000) {
      return total * 0.9;
    }

    return total;
  }
}

class RepositorioPedidos {
  salvar(pedido) {
    console.log(`Salvando pedido ${pedido.id}...`);
  }
}

class ServicoEmail {
  enviar(email) {
    console.log(`Enviando e-mail para ${email}...`);
  }
}

class SistemaDeVendas {
  constructor(
    validadorPedido = new ValidadorPedido(),
    calculadoraTotal = new CalculadoraTotal(),
    calculadoraDesconto = new CalculadoraDesconto(),
    repositorioPedidos = new RepositorioPedidos(),
    servicoEmail = new ServicoEmail()
  ) {
    this.validadorPedido = validadorPedido;
    this.calculadoraTotal = calculadoraTotal;
    this.calculadoraDesconto = calculadoraDesconto;
    this.repositorioPedidos = repositorioPedidos;
    this.servicoEmail = servicoEmail;
  }

  async processarVenda(pedido) {
    this.validadorPedido.validar(pedido);

    const totalBruto = this.calculadoraTotal.calcular(pedido.itens);
    const total = this.calculadoraDesconto.aplicar(totalBruto);

    this.repositorioPedidos.salvar(pedido);
    this.servicoEmail.enviar(pedido.clienteEmail);

    return {
      ...pedido,
      total,
      status: "pago"
    };
  }
}

module.exports = SistemaDeVendas;
