const spanID = document.querySelector(".id")
const adviceContent = document.querySelector("p")
const btn = document.querySelector(".bottom")
btn.addEventListener("click" , function(){
    advice()
})
async function advice() {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json() 
    const newId = data.slip.id 
    const newAdvice = data.slip.advice
    spanID.textContent = newId
    adviceContent.textContent = newAdvice
}