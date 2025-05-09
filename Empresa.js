export class Empresa {
  #cnpj;
  constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
    this.endereco = endereco;
    this.nomeFantasia = nomeFantasia;
    this.razaoSocial = razaoSocial;
    this.#cnpj = cnpj;
    this.clientes = new Set();
    this.telefones = new Set();
  }
  get cnpj() {
    return this.#cnpj;
  }
  getNomeFantasiaMaiusculo() {
    return this.nomeFantasia.toUpperCase();
  }
  getNomeFantasiaMinusculo() {
    return this.nomeFantasia.toLowerCase();
  }
  getRazaoSocialMaiusculo() {
    return this.razaoSocial.toUpperCase();
  }
  getRazaoSocialMinusculo() {
    return this.razaoSocial.toLowerCase();
  }
  adicionarCliente(cliente) {
    this.clientes.add(cliente);
  }
  adicionarTelefone(telefone) {
    this.telefones.add(telefone);
  }
  detalhe() {
    let output = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n--------------------\n`;
    for (const cliente of this.clientes) {
      output += `Nome: ${cliente.nome}\n`;
      output += `Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`;
      for (const tel of cliente.telefones) {
        output += `ddd: ${tel.ddd} numero: ${tel.numero}\n`;
      }
      output += `\n`;
    }
    return output;
  }
} 