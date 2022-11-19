const EMAIL_PATTERN =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const isRequired = value => value === '' ? false : true;
export const isPatternValid = (value, pattern) => pattern.test(value)
export const isEmailValid = email => isPatternValid(email, EMAIL_PATTERN);