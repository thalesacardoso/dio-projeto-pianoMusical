/*
DESENVOLVEDOR: Thales Cardoso
GITHUB: https://github.com/thalesacardoso
LINKEDIN: https://www.linkedin.com/in/thalesacardoso/
DATA: 
*/

let mapedKeys = [
   'a', 'w', 's', 'e', 'd',
   'f', 't', 'g', 'y', 'h',
   'u', 'j', 'k', 'o', 'l',
   'p', ';'
]

let audio = new Audio("./src/audios/a.wav")

// Pega todas as teclas do HTML
let teclas = document.querySelectorAll('.piano-keys .keys')


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
   audio.volume = 0.9
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

