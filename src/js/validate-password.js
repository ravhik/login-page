import { passwordInput } from "./dom.js";
import { PASSWORD_REQUIRED } from "./validation-messages.js";
import { isRequired } from "./validation-utils.js";

export const validatePassword = () => {
	const password = passwordInput.value.trim();

	if (!isRequired(password)) {
		return {
			isValid: false,
			message: PASSWORD_REQUIRED,
		};
	}
	return {
		isValid: true,
	};
};
