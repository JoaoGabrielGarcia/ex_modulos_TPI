export class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
  }
  getDddMaiusculo() {
    return this.ddd.toUpperCase();
  }
  getDddMinusculo() {
    return this.ddd.toLowerCase();
  }
  getNumeroMaiusculo() {
    return this.numero.toString().toUpperCase();
  }
  getNumeroMinusculo() {
    return this.numero.toString().toLowerCase();
  }
} 