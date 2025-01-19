console.log("Cześć")

let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencytElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let courseElement = document.querySelector(".js-course");
let resetElement = document.querySelector(".js-reset");

amountElement.focus();

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let rateEUR = 4.3466;
    let rateUSD = 3.9679;
    let rateGBP = 5.0093;

    let amount = +amountElement.value;
    let currency = currencytElement.value;
    let result;

    switch (currency) {
        case "€":
            result = amount / rateEUR;
            courseElement.innerText = `1€ = 4.3466 zł`
            break;
        case "$":
            result = amount / rateUSD;
            courseElement.innerText = `1$ = 3.9679 zł`
            break;
        case "£":
            result = amount / rateGBP;
            courseElement.innerText = `1£ = 5.0093 zł`
            break;
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;

});

resetElement.addEventListener("click", () => {
    resultElement.innerText = "";
    courseElement.innerText = "";
});