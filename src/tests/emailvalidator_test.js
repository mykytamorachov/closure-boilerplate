goog.require('example.emailValidator');
goog.require('goog.testing.jsunit');

var testEmpty = function() {
	assertFalse('should reject null', example.emailValidator.isValid(null));
	assertFalse('should reject empty string', example.emailValidator.isValid('')); 
};