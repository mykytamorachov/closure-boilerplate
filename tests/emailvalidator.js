goog.provide('example.emailValidator');
/**
* @param {?string} emailAddress
* @return {boolean} whether emailAddress is a valid email address */
example.emailValidator.isValid = function(emailAddress) {
	if (!emailAddress) {
		return false; 
	}
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('example.emailValidator', example.emailValidator);