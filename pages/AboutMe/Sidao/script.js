

const Paragrafo = document.querySelector('p')
const BotaoEditarParagrafo = document.querySelector('#BotaoEditarParagrafo')

let Contador = 0

window.localStorage.getItem('Contador') != undefined && (Paragrafo.textContent = window.localStorage.getItem('ParagrafoText'))

BotaoEditarParagrafo.addEventListener('click', (e) => {
    console.log("Cu")
    Contador++
    const NovoParagrafo = String(prompt('Digite o novo paragrafo'))

    Paragrafo.textContent = NovoParagrafo
    window.localStorage.setItem('ParagrafoText',Paragrafo.textContent)
    window.localStorage.setItem('Contador', Contador)
})
