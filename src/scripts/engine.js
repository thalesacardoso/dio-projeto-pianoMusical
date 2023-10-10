/*
DESENVOLVEDOR: Thales Cardoso
GITHUB: https://github.com/thalesacardoso
LINKEDIN: https://www.linkedin.com/in/thalesacardoso/
DATA: 
*/

// Vetor com as teclas do teclado musical
let mapedKeys = [
   'a', 'w', 's', 'e', 'd',
   'f', 't', 'g', 'y', 'h',
   'u', 'j', 'k', 'o', 'l',
   'p', ';'
]

// Cria o objeto Audio
let audio = new Audio("./src/audios/a.wav")

// Pega todas as teclas do HTML
let teclas = document.querySelectorAll('.piano-keys .keys')

// Pega a tecla do volume no HTML
const volumePiano = document.querySelector('.volume-slider input')

// Pega o checkbox do HTML
const checkTeclas = document.querySelector('.keys-check input')

// Pega todos os Span do HTML
const spanTeclas = document.querySelectorAll('.piano-keys .keys span')


// Evento de click
teclas.forEach((keys) => {
   // Dispara o evento quando o mouse é pressionado
   keys.addEventListener('click', () => {
      tocarSom(keys.dataset.key)
   })
})

// Função resonsável por tocar o som
const tocarSom = (key) => {
   audio.src = `./src/audios/${key}.wav`
   audio.play();
}

// Dispara o evento quando o teclado é pressionado
document.addEventListener("keydown", (e) => {
   const tecla = document.querySelector(`[data-key="${e.key}"]`)

   // verifica se existe a tecla pessionada dentro do array
   if (mapedKeys.includes(e.key)) {
      // Função que toca o som da tecla
      tocarSom(e.key)

      // Adiciona efeito nas teclas quando toca
      tecla.classList.add('click')

      // Remove efeito das teclas após 150 milisegundos
      setTimeout(() => {
         tecla.classList.remove('click')
      }, 150)
   }

})

// Altera o volume do som dinamicamente
volumePiano.addEventListener('input', (e) => {
   audio.volume = e.target.value
})

// Esconde ou mostra as teclas do teclado
checkTeclas.addEventListener('click', () => {
   spanTeclas.forEach((e) => {
      e.classList.toggle('hide')
   })
})