const LOGIN_FORM = "login-form";
const EMAIL = "email";
const PASSWORD = "password";
const KEEP_ME_SIGNED_IN = "keepMeSignedIn";
const EMAIL_PATTERN =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const loginForm = document.getElementById(LOGIN_FORM);
const emailInput = document.getElementById(EMAIL);
const passwordInput = document.getElementById(PASSWORD);

const validationMessages = {
	email: {
		required: "Email field is missing",
		pattern: "Email doesn't match the pattern",
	},
	password: {
		required: " Password is required",
	},
};

const inputValidationEvents = ["focusout", "input"];

const validateEmail = () => {
	const email = emailInput.value.trim();

	if (email.length === 0) {
		return {
			isValid: false,
			rule: validationMessages.email.required,
		};
	}
	if (!EMAIL_PATTERN.test(email)) {
		return {
			isValid: false,
			rule: validationMessages.email.pattern,
		};
	}
	return {
		isValid: true,
	};
};

const validatePassword = () => {
	const password = passwordInput.value.trim();

	if (password.length === 0) {
		return {
			isValid: false,
			message: validationMessages.password.required,
		};
	}
	return {
		isValid: true,
	};
};

const inputValidationHandler = (inputElement, validationFunction) => {
	validationResult = validationFunction();
	const validationMessage = validationResult.message ?? "";
	const className = validationResult.isValid ? "valid" : "invalid";

	parentElement = inputElement.parentElement;
	labelElement = parentElement.querySelector("label");
	validationMessageElement = parentElement.querySelector(".validation-message");

	inputElement.className = className;
	validationMessageElement.textContent = validationMessage;
	labelElement.className = className;
};

inputValidationEvents.forEach((event) => {
	emailInput.addEventListener(event, () => {
		inputValidationHandler(emailInput, validateEmail);
	});
	passwordInput.addEventListener(event, () => {
		inputValidationHandler(passwordInput, validatePassword);
	});
});

const createLoginRequestJson = () => {
	const formData = new FormData(loginForm);

	return {
		email: formData.get(EMAIL),
		password: formData.get(PASSWORD),
		keepMeSignedIn: formData.get(KEEP_ME_SIGNED_IN),
	};
};

const loginFormSubmitHandler = (event) => {
	event.preventDefault();
	if (validateEmail().isValid && validatePassword().isValid) {
		console.log(createLoginRequestJson());
	} else {
		setValidationMessage(emailInput, validateEmail);
		setValidationMessage(passwordInput, validatePassword);
	}
};

loginForm.addEventListener("submit", loginFormSubmitHandler);
