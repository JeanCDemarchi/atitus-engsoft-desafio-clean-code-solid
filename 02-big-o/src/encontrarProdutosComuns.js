/**
 * ❌ OTIMIZAÇÃO O(n²) para O(n)
 */
function encontrarProdutosComuns(listaA, listaB) {
  const itensListaB = new Set(listaB);

  return listaA.filter(item => itensListaB.has(item));
}

module.exports = encontrarProdutosComuns;
