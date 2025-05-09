export class Cliente {
  #cpf;
  constructor(nome, cpf, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefones = new Set();
    this.#cpf = cpf;
  }
  get cpf() {
    return this.#cpf;
  }
  getNomeMaiusculo() {
    return this.nome.toUpperCase();
  }
  getNomeMinusculo() {
    return this.nome.toLowerCase();
  }
  adicionarTelefone(telefone) {
    this.telefones.add(telefone);
  }
} 