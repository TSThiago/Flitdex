
const ImageCarousel = document.querySelector('#PhotoCarousel')
const NameCarousel = document.querySelector('h1')
const LinksCarousel = document.querySelector('a')

const Sidao = '../../assets/Persons/Sidao.jpg'
const Joao = '../../assets/Persons/Joao.png'
const Zizau = '../../assets/Persons/Zizau.jpg'

const JoaoPage = '../AboutMe/GabrielSantana.html'
const SidaoPage = '../AboutMe/GabrielSantana.html'
const ZizauPage = '../AboutMe/GabrielSantana.html'

const LeftArrow = document.querySelector('.LeftArrow')
const RightArrow = document.querySelector('.RightArrow')

const ImagesList = [Joao, Sidao, Zizau]
const NamesList = ['João', 'Sidao', 'Zizau']
const LinksList = [JoaoPage]

let Counter = 0
ImageCarousel.src = ImagesList[Counter]

RightArrow.addEventListener('click', (e) => {
    Counter++
    Counter > 2 && (Counter = 0)

    if(Counter <= 2 ){
        ImageCarousel.src = ImagesList[Counter]
        NameCarousel.textContent = NamesList[Counter]
    }    
    
})

LeftArrow.addEventListener('click', (e) => {
    Counter == 0 ? (Counter = 2) : Counter--
    ImageCarousel.src = ImagesList[Counter]
    NameCarousel.textContent = NamesList[Counter]
})