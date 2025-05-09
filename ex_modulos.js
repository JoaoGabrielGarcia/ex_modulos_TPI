import { Empresa } from './Empresa.js';
import { Cliente } from './Cliente.js';
import { Endereco } from './Endereco.js';
import { Telefone } from './Telefone.js';

const enderecoEmpresa = new Endereco('RJ', 'Rio de Janeiro', 'Rua das Laranjeiras', 100);

const empresa = new Empresa('Tech Solutions LTDA', 'TechSol', '12345678000199', enderecoEmpresa);

function criarCliente(nome, cpf, estado, cidade, rua, numero, telefones) {
  const endereco = new Endereco(estado, cidade, rua, numero);
  const cliente = new Cliente(nome, cpf, endereco);
  telefones.forEach(tel => cliente.adicionarTelefone(tel));
  return cliente;
}

const telefonesClientes = [
  [new Telefone('21', '99887766'), new Telefone('21', '99776655')],
  [new Telefone('11', '91234567'), new Telefone('11', '93456789')],
  [new Telefone('31', '98877665'), new Telefone('31', '98765432')],
  [new Telefone('41', '97654321'), new Telefone('41', '96543210')],
  [new Telefone('51', '99889988'), new Telefone('51', '99779977')],
];

const clientes = [
  criarCliente('Lucas', '11122233344', 'RJ', 'Rio de Janeiro', 'Av. Atlântica', 200, telefonesClientes[0]),
  criarCliente('Marina', '22233344455', 'SP', 'São Paulo', 'Rua Augusta', 150, telefonesClientes[1]),
  criarCliente('Carlos', '33344455566', 'MG', 'Belo Horizonte', 'Av. Afonso Pena', 300, telefonesClientes[2]),
  criarCliente('Fernanda', '44455566677', 'PR', 'Curitiba', 'Rua XV de Novembro', 400, telefonesClientes[3]),
  criarCliente('Rafael', '55566677788', 'RS', 'Porto Alegre', 'Av. Ipiranga', 500, telefonesClientes[4]),
];

clientes.forEach(cliente => empresa.adicionarCliente(cliente));

console.log(empresa.detalhe()); 