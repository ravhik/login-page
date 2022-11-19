import { emailInput } from "./dom.js";
import { EMAIL_INVALID_PATTERN, EMAIL_REQUIRED } from "./validation-messages.js";
import { isEmailValid, isRequired } from "./validation-utils.js";

export const validateEmail = () => {
	const email = emailInput.value.trim();

	if (!isRequired(email)) {
		return {
			isValid: false,
			message: EMAIL_REQUIRED,
		};
	}
	if (!isEmailValid(email)) {
		return {
			isValid: false,
			message: EMAIL_INVALID_PATTERN,
		};
	}
	return {
		isValid: true,
	};
};