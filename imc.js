const frm = document.querySelector("form")
const resp1 = document.querySelector("#imcText1")
const resp2 = document.querySelector("#imcText2")

frm.addEventListener("submit", (e) => {
    
    let alturaUsuario = Number(frm.altura.value)
    const pesoUsuario = Number(frm.peso.value)
    if (alturaUsuario > 3) {
        alturaUsuario = alturaUsuario / 100
    }
    const imc = pesoUsuario / Math.pow(alturaUsuario, 2)
    resp1.innerText = `Seu IMC é de ${imc.toFixed(1)}.`
    if (imc < 18,5) {
        resp2.innerText = "Seu grau de obesidade é 0, seu IMC está classificado como magreza."
    } else if (imc < 25) {
        resp2.innerText = "Seu grau de obesidade é 0, seu IMC está classificado como normal."
    } else if (imc < 30) {
        resp2.innerText = "Seu grau de obesidade é I, seu IMC está classificado como sobrepeso."
    } else if (imc < 40) {
        resp2.innerText = "Seu grau de obesidade é II, seu IMC está classificado como obesidade."
    } else {
        resp2.innerText = "Seu grau de obesidade é III, seu IMC está classificado como obesidade grave."
    }
    e.preventDefault()
})

frm.addEventListener("reset", () => {
    resp1.innerText = ""
    resp2.innerText = ""
})