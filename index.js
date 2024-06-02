const inputField = document.getElementById("inputField")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")
const submitBtn = document.getElementById("submitBtn")

let temp 

submitBtn.addEventListener("click", function() {

    temp = Number(inputField.value)
    let formula
    
    if(inputField.value === "" && toFahrenheit.checked) {
        result.textContent = "Please enter a Number"
    }
    else if (inputField.value === "" && toCelsius.checked) {
        result.textContent = "Please enter a Number"
    }
    else {
        if(toFahrenheit.checked) {
            formula = ( ( temp * 9 / 5 ) + 32 )
            result.textContent = `${temp}°C = ${formula.toFixed(2)}°F`
        }
        else if(toCelsius.checked) {
            formula = ( ( temp - 32 ) * (5 / 9) )
            result.textContent = `${temp}°F = ${formula.toFixed(2)}°C`
        }
        else{
            result.textContent = "Please enter a Number"
        }
    }

    clearInputField()
})

function clearInputField() {
    inputField.value = ""
}