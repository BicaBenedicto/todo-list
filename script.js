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

function changeBackgroundItem(evento) {
  const itemList = document.querySelectorAll('.itemList');
  if (itemList) {
    for (let index = 0; index < itemList.length; index += 1) {
      itemList[index].classList.remove('selected');
    }
    evento.target.classList.add('selected');
  }
}

list.addEventListener('click', changeBackgroundItem);

function changeForCompleted(evento) {
  const itemList = document.querySelectorAll('.itemList');
  if (itemList) {
    if (evento.target.classList.contains('completed')) {
      evento.target.classList.remove('completed');
    } else {
      evento.target.classList.add('completed');
    }
  }
}

list.addEventListener('dblclick', changeForCompleted);

function removeList() {
  const itemList = document.querySelectorAll('.itemList');
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].remove();
  }
}

const buttonRemoveList = document.getElementById('apaga-tudo');
buttonRemoveList.addEventListener('click', removeList);

function removeFinalizados() {
  const itemListFinalizado = document.querySelectorAll('.completed');
  for (let index = 0; index < itemListFinalizado.length; index += 1) {
    itemListFinalizado[index].remove();
  }
}

const buttonRemoveFinalizado = document.getElementById('remover-finalizados');
buttonRemoveFinalizado.addEventListener('click', removeFinalizados);
