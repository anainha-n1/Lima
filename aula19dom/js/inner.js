const container = document.querySelector('.container')
container.style.backgroundColor = "#ee2b2bff"

const titulo = document.getElementById('titulo');
titulo.style.fontSize = '28px';
titulo.style.color = '#fff';
titulo.textContent = 'manipulando o HTML vai javascript';

const paragrafo = '<p> adicionar alementos via java </p>';

container.innerHTML += paragrafo;


titulo.innerText += "\nExemplo"