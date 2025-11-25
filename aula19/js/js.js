const titulo = Document.querySelector('.titulo')
const Primeiro_paragrafo = document.getElementById('primeiro paragrafo')
const segundo_paragrafo = document.getElementById('segundo paragrafo')
const terceiro_paragrafo = document.getElementById('terceiro paragrafo')
const img = document.querySelector('.img')

titulo.textContent = 'dom'
Primeiro_paragrafo.textContent = 'fulano'
segundo_paragrafo.textContent = 'ciclano'
terceiro_paragrafo.textContent = 'beltrano'

const imagem = '<img src="../images/settings_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="">'
img.innerHTML = imagem
