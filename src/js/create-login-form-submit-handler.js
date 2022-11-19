import { validateEmail } from "./validate-email.js";
import { validatePassword } from "./validate-password.js";
import { emailInput, passwordInput } from "./dom.js";
import { inputValidationHandler } from "./create-input-validation-handler.js";

const createLoginRequestJson = () => {
	return {
		email: emailInput.value,
		password: passwordInput.value,
		keepMeSignedIn: keepMeSignedIn.checked,
	};
};

const sendLoginRequest = () => {
	console.log(createLoginRequestJson());
};

export const createLoginFormSubmitHandler = (event) => {
	event.preventDefault();
	const isFormValid = validateEmail().isValid && validatePassword().isValid;
	if (isFormValid) {
		sendLoginRequest();
	} else {
		inputValidationHandler(emailInput, validateEmail());
		inputValidationHandler(passwordInput, validatePassword());
	}
};
