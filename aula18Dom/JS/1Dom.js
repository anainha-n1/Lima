const corpo = document.body;

const container = document.querySelector('.container')
const titulo = document.getElementById('titulo')
const paragrafo = document.querySelector('[data-info="intro]')

corpo.style.backgroundColor = "#0066ffff"
container.style.border = '2px solid black'
titulo.style.fontFmily = 'arial'
titulo.style.fontSize = '48px'
titulo.style.color = 'white'
titulo.textContent += 'Dom'
paragrafo.textcontent += 'Dom'
paragrafo.style.color = '#17a3fbff'