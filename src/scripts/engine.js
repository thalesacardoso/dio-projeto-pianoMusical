/*
DESENVOLVEDOR: Thales Cardoso
GITHUB: https://github.com/thalesacardoso
LINKEDIN: https://www.linkedin.com/in/thalesacardoso/
DATA: 
*/
let audio = new Audio("./src/audios/a.wav")

const teclas = document.querySelectorAll('.piano-keys .keys')
let mapedKeys = []

const tocarSom = (key) => {
   audio.src = `./src/audios/${key}.wav`
   audio.play();
   audio.volume = 0.9


}

teclas.forEach((keys) => {
   keys.addEventListener('click', () => {
      mapedKeys.push(keys.dataset.key)
      console.log(mapedKeys)
      tocarSom(keys.textContent)

   })

})


document.addEventListener("keydown", (e) => {
   const tecla = document.querySelector(`[data-key="${e.key}"]`)
   tocarSom(e.key)

   tecla.classList.add('click')

   setTimeout(() => {
      tecla.classList.remove('click')
   }, 150)
})

console.log(mapedKeys)