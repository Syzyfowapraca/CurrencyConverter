
{
    const welcome = () => {
        console.log("Cześć")
    }
    welcome();

    const calculate = (amount, currency) => {

        const rateEUR = 4.1872;
        const rateUSD = 4.0548;
        const rateGBP = 5.0312;

        switch (currency) {

            case "€":
                courseElement.innerText = `1€ = 4.1872 zł`
                return amount / rateEUR;

            case "$":
                courseElement.innerText = `1$ = 4.0548 zł`
                return amount / rateUSD;

            case "£":
                courseElement.innerText = `1£ = 5.0312 zł`
                return amount / rateGBP;
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencytElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencytElement.value;

        const result = calculate(amount, currency);
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;

    }

}
    const resultElement = document.querySelector(".js-result");
    const courseElement = document.querySelector(".js-course");

    const resetField = () => {

        resultElement.innerText = "";
        courseElement.innerText = "";
    }


    const init = () => {

        const resetElement = document.querySelector(".js-reset");
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
        resetElement.addEventListener("click", resetField);
        amountElement.focus();
    }
    init();

}