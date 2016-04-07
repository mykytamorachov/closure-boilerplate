goog.require('example.emailValidator');
goog.require('goog.testing.jsunit');

goog.provide('myTestNamespace');
/**
 * @param {?string} emailAddress
 * @return {boolean} whether emailAddress is a valid email address */
var testEmpty = function() {
	assertFalse('should reject null', example.emailValidator.isValid(null));
	assertFalse('should reject empty string', example.emailValidator.isValid(''));
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('myTestNamespace', testEmpty);
