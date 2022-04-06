'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let Decimal = num.split("");
  let sumatoria = 0;
  for (let i = 0; i < Decimal.length; i++) {
    sumatoria = sumatoria + Decimal[i] * 2 ** (Decimal.length - 1 - i);
  }
  return sumatoria


}

function DecimalABinario(num) {
  // tu codigo aca
  let Binario =[];
  while(num > 0){
    Binario.unshift(num%2);
    num = Math.floor(num/2);
  }

    return Binario.join("")
  }




module.exports = {
  BinarioADecimal,
  DecimalABinario,
}