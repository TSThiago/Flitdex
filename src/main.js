const textButton = document.getElementById('button')
const changedText = document.getElementById('text')

if (window.localStorage.length === 0) {
    function changeText(e) {
        changedText.textContent = window.localStorage.getItem("NewText")
    }

    function inputNewText(e) {
        e.target.value = prompt("Insira o novo texto:")
        window.localStorage.setItem("NewText", e.target.value)
        changeText(e)
    }

    textButton.addEventListener('click', inputNewText)

} else {
    
    changedText.textContent = window.localStorage.getItem("NewText")
    function changeText(e) {
        changedText.textContent = window.localStorage.getItem("NewText")
    }

    function inputNewText(e) {
        e.target.value = prompt("insira o novo texto:")
        window.localStorage.setItem("NewText", e.target.value)
        changeText(e)
    }

    textButton.addEventListener('click', inputNewText)

}