

const Paragraph = document.querySelector('p')
const EditParagraphButton = document.querySelector('#EditParagraphButton')

let Counter = 0

window.localStorage.getItem('Counter') != undefined && (Paragraph.textContent = window.localStorage.getItem('ParagraphValue'))

EditParagraphButton.addEventListener('click', (e) => {
    Counter++
    const NewEditParagraphButton = String(prompt('Digite o novo paragrafo'))

    Paragraph.textContent = NewEditParagraphButton
    window.localStorage.setItem('ParagraphValue', Paragraph.textContent)
    window.localStorage.setItem('Counter', Counter)
})
