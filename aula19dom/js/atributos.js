const imagem = document.getElementById('bolo')

const input = document.querySelector('.campotexto')

imagem.setAttribute('src', '../images/bolo.jpg');
imagem.setAttribute('alt', 'imagem de bolo');

alert(imagem.getAttribute('src'))

input.setAttribute('placeholder', 'digite seu nome')

imagem.classList.add('esconder')