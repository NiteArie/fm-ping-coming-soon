const app = (() => {
    const _emailForm = document.querySelector(".js-email-form");
    const _emailInput = document.querySelector(".js-email-input");
    const _emailErrorMessage = document.querySelector(".js-email-error");

    const _emailRegex = /^\S+@\S+\.\S+$/;

    _emailForm.addEventListener("submit", (event) => {
        event.preventDefault();

        resetForm();

        let formValidState = true;

        let email = _emailInput.value;

        if (!validEmailInputFormat(email)) {
            updateEmailInputErrorMessage("Please provide a valid email address");
            showEmailErrorMessage();
            showEmailInputError();

            formValidState = false;
        }

        if (!validEmailInputEmptyness(email)) {
            updateEmailInputErrorMessage("Whoops! It looks like you forgot to add your email");
            showEmailErrorMessage();
            showEmailInputError();

            formValidState = false;
        }

        if (formValidState) {

        } else {

        }
    })

    function resetForm() {
        hideEmailInputError();
        hideEmailErrorMessage();
    }

    function validEmailInputEmptyness(email) {
        return email !== "";
    }

    function validEmailInputFormat(email) {
        return _emailRegex.test(email);
    }

    function showEmailErrorMessage() {
        _emailErrorMessage.classList.remove("welcome__email-error--hidden");
    }

    function hideEmailErrorMessage() {
        _emailErrorMessage.classList.add("welcome__email-error--hidden");
    }

    function showEmailInputError() {
        _emailInput.classList.add("welcome__input--error");
    }

    function hideEmailInputError() {
        _emailInput.classList.remove("welcome__input--error");
    }

    function updateEmailInputErrorMessage(message) {
        _emailErrorMessage.textContent = message
    }

})();