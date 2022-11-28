const text = document.querySelector("p")
const botomText = document.querySelector("#editText")

let count = 0

window.localStorage.getItem("count") != undefined && (text.textContent = window.localStorage.getItem("text"))

botomText.addEventListener("click", (e) => {    
    count++
    const newText = String(prompt("Digite o novo paragrafo: "))

    text.textContent = newText
    window.localStorage.setItem("text", text.textContent)
    window.localStorage.setItem("count", count)
})


