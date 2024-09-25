const convertButton = document.querySelector(".convert-button")//mapeando o button
const selectCurrency = document.querySelector(".select-currency")//mapeando o select para converter
const currencySelect = document.querySelector(".currency-select")//mapeando o select do convertido


function convertValueSelectCurrency() {
    const currencyNameToConvert = document.querySelector(".currency-name-to-convert")
    const currencyImageToConvert = document.querySelector(".currency-img-to-convert")

    if (selectCurrency.value == "real") {
        currencyNameToConvert.innerHTML = "Real Brasileiro"
        currencyImageToConvert.src = "./assets/Brasil.png"
    }

    if (selectCurrency.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dólar americano"
        currencyImageToConvert.src = "./assets/usa.png"
    }

    if (selectCurrency.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyImageToConvert.src = "./assets/euro.png"
    }

    if (selectCurrency.value == "bitcoin") {
        currencyNameToConvert.innerHTML = "Bitcoin"
        currencyImageToConvert.src = "./assets/bitcoin.png"
    }
}
function convertValues() {



    const inputCurrencyvalue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor para converter
    const currencyValueToConverted = document.querySelector(".currency-value")//valor convertido


    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 343331.64

    if (currencySelect.value == "dolar") {// Se (if) o select estiver selecionado o valor de dolar, entra aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyvalue / dolarToday)
    }

    if (currencySelect.value == "euro") {// Se (if) o select estiver selecionado o valor de euro, entra aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyvalue / euroToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 4,
            maximumFractionDigits: 6
        }).format(inputCurrencyvalue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyvalue)



}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/usa.png"
    } else if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    } else if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    } else {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/Brasil.png"
    }

    convertValues()
}

selectCurrency.addEventListener("change", convertValueSelectCurrency)
currencySelect.addEventListener("change", changeCurrency)//addEventListener é um ouvinte. Toda vez que trocar "change" a escolha ele faz a funcion changeCurrency
convertButton.addEventListener("click", convertValues, convertValueSelectCurrency)//ouvinte do "click" do button