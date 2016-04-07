/**
* @fileoverview House contains information about a house, such as its * address.
* @author bolinfest@gmail.com (Michael Bolin)
*/
goog.provide('example.House');
/**
* Creates a new House.
* @param {string} address Address of this house.
* @param {number=} numberOfBathrooms Defaults to 1. * @param {Array.<Object>=} itemsInTheGarage
* @constructor
*/
example.House = function(address, numberOfBathrooms, itemsInTheGarage) { /**
* @type {string} * @private
*/
this.address_ = address;
if (goog.isDef(numberOfBathrooms)) {
this.numberOfBathrooms_ = numberOfBathrooms; }
/**
* @type {Array.<Object>} * @protected
*/
this.itemsInTheGarage = goog.isDef(itemsInTheGarage) ? itemsInTheGarage : [];
};
  
/**
* @type {number} * @private
*/
example.House.prototype.numberOfBathrooms_ = 1;
/**
* @type {boolean} * @private
*/
example.House.prototype.needsPaintJob_ = false;
/** @return {string} */ 

example.House.prototype.getAddress = function() {
	return this.address_; 
};
/** @return {number} */ example.House.prototype.getNumberOfBathrooms = function() {
return this.numberOfBathrooms_; };
/** @return {boolean} */ example.House.prototype.isNeedsPaintJob = function() {
return this.needsPaintJob_; };
/** @param {boolean} needsPaintJob */ example.House.prototype.setNeedsPaintJob = function(needsPaintJob) {
this.needsPaintJob_ = needsPaintJob; };
/** @param {string} color */ example.House.prototype.paint = function(color) {
/* some implementation */ };
/** @return {number} */ example.House.prototype.getNumberOfItemsInTheGarage = function() {
return this.itemsInTheGarage.length; };

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('example.House', example.House);