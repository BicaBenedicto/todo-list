const list = document.getElementById('lista-tarefas');

function addTarefa() {
  const item = document.createElement('li');
  const input = document.getElementById('texto-tarefa');

  item.innerText = input.value;
  item.className = 'itemList';
  list.appendChild(item);
  input.value = '';
}

const buttonAddTarefa = document.getElementById('criar-tarefa');
buttonAddTarefa.addEventListener('click', addTarefa);
