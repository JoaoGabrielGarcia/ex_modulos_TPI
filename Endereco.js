export class Endereco {
  constructor(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
  }
  getEstadoMaiusculo() {
    return this.estado.toUpperCase();
  }
  getEstadoMinusculo() {
    return this.estado.toLowerCase();
  }
  getCidadeMaiusculo() {
    return this.cidade.toUpperCase();
  }
  getCidadeMinusculo() {
    return this.cidade.toLowerCase();
  }
  getRuaMaiusculo() {
    return this.rua.toUpperCase();
  }
  getRuaMinusculo() {
    return this.rua.toLowerCase();
  }
} 