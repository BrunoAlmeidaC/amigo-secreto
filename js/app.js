let listaDeAmigos = [];

function adicionar() {
    let nomeDoAmigoInput = document.getElementById("nome-amigo");
    let nomeDoAmigo = nomeDoAmigoInput.value.trim(); // Armazena o nome original e sem espaços
    if (nomeDoAmigo === "") { // Verifica se o input está vazio 
        alert("Por favor, digite um nome.");
        return; // Sai da função sem adicionar o nome
    }
    // Converte o nome para minúsculo APENAS para a comparação
    if (listaDeAmigos.some(amigo => amigo.toLowerCase() === nomeDoAmigo.toLowerCase())) {
        alert("Nome ja adicionado");
        return;
    }
    listaDeAmigos.push(nomeDoAmigo); // Adiciona o nome ORIGINAL à lista

    nomeDoAmigoInput.value = '';
    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    if(listaDeAmigos.length < 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(listaDeAmigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaDeAmigos.length; i++) {
        if (i == listaDeAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigos[i] +' --> ' +listaDeAmigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigos[i] +' --> ' +listaDeAmigos[i + 1] + '<br/>';
        }
    }
}

function excluirAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaDeAmigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    listaDeAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}