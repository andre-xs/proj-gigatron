var adicionarContato = document.getElementById("adicionarContato");
adicionarContato.onclick = function() {
  var nome = prompt("Digite um nome");
  var celular = prompt("Digite um número de celular");
  contatos[contatos.length] = new add(nome, celular);
  atualizarLista();
}

function add(nome, celular) {
    this.nome = nome;
    this.celular = celular;
}

var contatos = [];

function listar() {
  for (var i = 0; i < contatos.length; i++) {
    imprimir(contatos[i]);
  }
}

function imprimir(pessoa) {
  var contatos = document.getElementById('contatos');
  contatos.innerHTML += "<div class='itemLista'>Nome: " + pessoa.nome + " " + "<br>Celular: " + pessoa.celular + "</div>";
}

function atualizarLista() {
  document.getElementById('contatos').innerHTML = '';
  listar(contatos.length);
}

var removerContato = document.getElementById("removerContato");
removerContato.onclick = function() {
  var removerNome = prompt("Digite o primeiro nome do contato que deseja remover");
  for (var i = 0; i < contatos.length; i++) {
    if (removerNome === contatos[i].nome) {
      contatos.splice(contatos[i], 1);
    }
  }
  atualizarLista();
}