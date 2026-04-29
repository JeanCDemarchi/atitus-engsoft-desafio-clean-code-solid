const regrasDesconto = [
  {
    tipo: 'premium',
    condicao: (cliente, valor) => valor > 1000 && cliente.anosCadastro > 5,
    desconto: 0.20
  },
  {
    tipo: 'premium',
    condicao: (cliente, valor) => valor > 1000,
    desconto: 0.15
  },
  {
    tipo: 'premium',
    condicao: (cliente, valor) => valor > 500,
    desconto: 0.10
  },
  {
    tipo: 'premium',
    condicao: () => true,
    desconto: 0.05
  },
  {
    tipo: 'gold',
    condicao: (cliente, valor) => valor > 1000,
    desconto: 0.10
  },
  {
    tipo: 'gold',
    condicao: () => true,
    desconto: 0.02
  }
];

function calcularDesconto(cliente, valor) {
  const regra = regrasDesconto.find(
    regra => regra.tipo === cliente.tipo && regra.condicao(cliente, valor)
  );

  return regra ? valor * regra.desconto : 0;
}

module.exports = calcularDesconto;
