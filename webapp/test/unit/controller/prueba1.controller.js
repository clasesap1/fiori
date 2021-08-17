/*global QUnit*/

sap.ui.define([
	"clasesap/invoices/controller/prueba1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("prueba1 Controller");

	QUnit.test("I should test the prueba1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
