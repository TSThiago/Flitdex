const textButton = document.getElementById('editButton')
const changedText = document.getElementById('text')

function changeText(e) {
    e.target.value = 
}

function inputNewText(e) {
    e.target.value = prompt("insira o novo texto:")
    console.log(e.target.value)
}



textButton.addEventListener('click', changeText)