const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value

   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")/* valor em real*/
   const currencyValueToConverted = document.querySelector(".currency-value")/* todas outras moedas*/

   console.log(currencySelect.value)
   const euroToday = 6.3
   const dollarToday = 5.2
   const libraToday = 7.10

   if (currencySelect.value == "dollar") {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dollarToday)
   }


   if (currencySelect.value == "euro") {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("ed-ED", {
         style: "currency", currency: "EUR"

      }).format(inputCurrencyValue / euroToday)
   }

   if (currencySelect.value == "libra") {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-UK", {
         style: "currency",
         currency: "GBP"
      }).format(inputCurrencyValue / libraToday)
   }

   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)




   function changeCurrency() {

      const currencyName = document.getElementById("currency-name")
      const currencyimage = document.querySelector(".currency-img")

      if (currencySelect.value == "dollar") {
         currencyName.innerHTML = " Dolar Americano"
         currencyimage. src="./assets/estados-unidos .png" 
      }

      if (currencySelect.value == "euro") {
         currencyName.innerHTML = " Euro"
         currencyimage.src = "./assets/euro.png"
      }

      if (currencySelect.value == "libra") {
         currencyName.innerHTML = " Libra"
         currencyimage. src="./assets/libra2.png" 
      }
      convertValues()

   }


   currencySelect.addEventListener("change", changeCurrency)


}
convertButton.addEventListener("click", convertValues)