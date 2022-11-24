    
const ImageCarousel = document.querySelector('#PhotoCarousel')
const NameCarousel = document.querySelector('h1')
const LinksCarousel = document.querySelector('#LinkImage')

const Sidao = '../../assets/Persons/Sidao.jpg'
const Joao = '../../assets/Persons/Joao.png'
const Zizau = '../../assets/Persons/Zizau.jpg'
const Gabriel = '../../assets/Persons/Gabriel.png'

const JoaoPage = ''
const SidaoPage = ''

const ZizauPage = '../../pages/AboutMe/Zizau/zizau.html'
const GabrielPage = '../../pages/AboutMe/Gabriel/GabrielSantana.html'

const LeftArrow = document.querySelector('.LeftArrow')
const RightArrow = document.querySelector('.RightArrow')

const ImagesList = [Joao, Sidao, Zizau, Gabriel]
const NamesList = ['João', 'Sidao', 'Zizau', 'Gabriel']
const LinksList = [JoaoPage, SidaoPage, ZizauPage, GabrielPage]

let Counter = 0


RightArrow.addEventListener('click', (e) => {
    Counter++
    Counter > 3 && (Counter = 0)

    if(Counter <= 3 ){
        ImageCarousel.src = ImagesList[Counter]
        NameCarousel.textContent = NamesList[Counter]
        LinksCarousel.href = LinksList[Counter]
    }    
    
})

LeftArrow.addEventListener('click', (e) => {
    Counter == 0 ? (Counter = 3) : Counter--
    ImageCarousel.src = ImagesList[Counter]
    NameCarousel.textContent = NamesList[Counter]
    LinksCarousel.href = LinksList[Counter]
})