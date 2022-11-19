import { createLoginFormSubmitHandler } from "./create-login-form-submit-handler.js";
import { inputValidationHandler } from "./create-input-validation-handler.js";
import { emailInput, loginForm, passwordInput } from "./dom.js";
import { validateEmail } from "./validate-email.js";
import { validatePassword } from "./validate-password.js";

const validationTriggers = ["focusout", "input"];

export const createLoginFormEventListners = () => {
	validationTriggers.forEach((event) => {
		emailInput.addEventListener(event, () => {
			inputValidationHandler(emailInput, validateEmail());
		});
		passwordInput.addEventListener(event, () => {
			inputValidationHandler(passwordInput, validatePassword());
		});
	});

	loginForm.addEventListener("submit", createLoginFormSubmitHandler);
};
