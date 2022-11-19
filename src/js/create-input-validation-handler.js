export const inputValidationHandler = (inputElement, validationResult) => {
	const validationMessage = validationResult.message ?? "";
	const className = validationResult.isValid ? "valid" : "invalid";

	const parentElement = inputElement.parentElement;
	const labelElement = parentElement.querySelector("label");
	const validationMessageElement = parentElement.querySelector(
		".validation-message"
	);

	inputElement.className = className;
	validationMessageElement.textContent = validationMessage;
	labelElement.className = className;
};
