export function formatToCurrencyPtBR(valor: string): string {
  valor = valor.replace(/[^\d,]/g, "");

  const somenteDigitos = valor.replace(",", "");

  const digitos = somenteDigitos.padStart(3, "0");

  const parteInteira = digitos.slice(0, -2);
  const parteDecimal = digitos.slice(-2);

  const numeroInteiro = parseInt(parteInteira, 10);

  const parteInteiraFormatada = numeroInteiro.toLocaleString("pt-BR");

  return `${parteInteiraFormatada},${parteDecimal}`;
}

export function stringCurrencyPtBRToNumber(value: string): number {
  if (!value) return 0;
  const normalized = value.replace(/\./g, "").replace(",", ".");
  return parseFloat(normalized);
}
