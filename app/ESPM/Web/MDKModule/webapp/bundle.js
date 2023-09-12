(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/ESPM/i18n/i18n.properties":
/*!*****************************************************!*\
  !*** ./build.definitions/ESPM/i18n/i18n.properties ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "create_purchase_order=Create Purchase Order\ncreate_purchase_order_item=Create Purchase Order Item\ncreate_sales_order=Create Sales Order\ncreate_sales_order_item=Create Sales Order Item\ncustomers=Customers\ncustomer_details=Customer Details\nno_customer=No Customer Found\nno_product=No Product Found\nno_order=No Order Found\nno_supplier=No Supplier Found\nmy_customers=My Customers\nmy_suppliers=My Suppliers\norders=Orders\nproduct_catalog=Product Catalog\nproducts=Products\nproduct_details=Product Details\npurchase_orders=Purchase Orders\npurchase_order_details=Purchase Order Details\nsales_orders=Sales Orders\nsales_orders_details=Sales Order Details\nsearch=Search\nsee_all_customers=All Customers\nsee_all_products=All Products\nsee_all_suppliers=All Suppliers\ntitle=ESPM\nupdate_product=Update Product\n"

/***/ }),

/***/ "./build.definitions/ESPM/Rules/Customers/Customers_Count.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Customers/Customers_Count.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customers_Count)
/* harmony export */ });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function Customers_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "Customers";
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetCount(clientAPI, serviceName, entitySet, ' ');                         
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Customers/Customers_Image.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Customers/Customers_Image.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customers_Image)
/* harmony export */ });

function Customers_Image(clientAPI) {
	var CustImagePath = '/ESPM/Images/cf';
	CustImagePath = String(CustImagePath) + String(clientAPI.evaluateTargetPath("#Property:CustomerId") % 12 + 1);
	CustImagePath = String(CustImagePath) + String('.png');
	console.log("Path->" + CustImagePath); 
	return CustImagePath;
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js":
/*!***************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Library/CommonLibrary.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
	static retrieveProduct(context, productId) {
		let serviceName = "/ESPM/Services/ESPM.service";
		let entitySet = "Products('" + productId + "')"
		let properties = [];
		
		return context.read(serviceName, entitySet, properties).then((result) => {
			let length = result.length;
			console.log(`Query Result length @ ${length}`)
			if (result && result.length) {
				return result.getItem(length - 1);
			}
			else {
				return 0;
			}
		 });
	}
	
	static retrievePOHeader(context, purchaseOrderId){
		let serviceName = "/ESPM/Services/ESPM.service";
		let entitySet = "PurchaseOrderHeaders('" + purchaseOrderId + "')"
		let properties = [];
		return context.read(serviceName, entitySet, properties).then((result) => {
			let length = result.length;
			console.log(`Query Result length @ ${length}`)
			if (result && result.length) {
				return result.getItem(length - 1);
			}
			else {
				return 0;
			}
		 });
	}
	
	static getEntitySetData(context, serviceName, entitySet, colProperties, queryOptions) {
		return context.read(serviceName, entitySet, colProperties, queryOptions).then((result) => {
			return result;
		}).catch(err => {
			console.log(err);
			return null;
		});
	}
	
	static getEntitySetCount(context, serviceName, entitySet, queryOptions){
		return context.count(serviceName, entitySet, queryOptions).then((result) => {
			return result;
		}).catch(err => {
			console.log(err);
			return 0;
		});
	}
});

/***/ }),

/***/ "./build.definitions/ESPM/Rules/OnWillUpdate.js":
/*!******************************************************!*\
  !*** ./build.definitions/ESPM/Rules/OnWillUpdate.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
function OnWillUpdate(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	return dialogs.confirm("Update now?").then((result) => {
		console.log("Update now? " + result);
		if (result === true) {
			return Promise.resolve();
		} else {
			return Promise.reject('User Deferred');
		}
	});
}

/***/ }),

/***/ "./build.definitions/ESPM/Rules/Overview/Overview_DaysLeftInQuarter.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Overview/Overview_DaysLeftInQuarter.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Overview_DaysLeftInQuarter)
/* harmony export */ });

var clientAPI;

/**
 * Describe this function...
 */
function Overview_DaysLeftInQuarter(clientAPI) {
  var d = new Date();
  var qEnd = new Date(d);
  qEnd.setMonth(qEnd.getMonth() + 3 - qEnd.getMonth() % 3, 0);
  var qNum = Math.floor((qEnd - d) / 8.64e7);
  let returnStr = String(qNum + " Days Left");
  return returnStr;
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Overview/Overview_GetCurrentQuarter.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Overview/Overview_GetCurrentQuarter.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Overview_GetCurrentQuarter)
/* harmony export */ });

var clientAPI;

/**
 * Describe this function...
 */
function Overview_GetCurrentQuarter(clientAPI) {
  var d = new Date();
  var q = [1,2,3,4];
  var qNum = q[Math.floor(d.getMonth() / 3)];
  
  return String("Q" + qNum);
  
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Products/ProductEdit_GetSupplier.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Products/ProductEdit_GetSupplier.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductEdit_GetSupplier)
/* harmony export */ });
function ProductEdit_GetSupplier(clientAPI) {
  const supplierPkr = clientAPI.evaluateTargetPathForAPI('#Page:Products_Edit/#Control:productSupplierID');
  let value = supplierPkr.getValue();
  if (value && value.length > 0) {
    return supplierPkr.getValue()[0].ReturnValue;
  } else {
    return null;
  }
}

/***/ }),

/***/ "./build.definitions/ESPM/Rules/Products/Products_Count.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Products/Products_Count.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Products_Count)
/* harmony export */ });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function Products_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "Products";
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetCount(clientAPI, serviceName, entitySet, ' ');                         
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrderCreate_OnValueChange.js":
/*!******************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrderCreate_OnValueChange.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseOrderCreate_OnValueChange)
/* harmony export */ });

var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function PurchaseOrderCreate_OnValueChange(clientAPI) {
    clientAPI.setValidationProperty('ValidationViewIsHidden', true);
    clientAPI.redraw();
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrderCreate_RequiredFields.js":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrderCreate_RequiredFields.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseOrderCreate_RequiredFields)
/* harmony export */ });

var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function PurchaseOrderCreate_RequiredFields(clientAPI) {

    let pageProxy = clientAPI.getPageProxy();
    let missingRequiredFields = pageProxy.getMissingRequiredControls();

     for (let control of missingRequiredFields) {
        control.setValidationProperty('ValidationViewIsHidden', false);
    }
    pageProxy.getControl('FormCellContainer').redraw();
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_Count.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_Count.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseOrders_Count)
/* harmony export */ });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function PurchaseOrders_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "PurchaseOrderHeaders";
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetCount(clientAPI, serviceName, entitySet, ' ');                         
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseOrders_DataOnValueChange)
/* harmony export */ });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function PurchaseOrders_DataOnValueChange(clientAPI) {
    //Remove validation message
    clientAPI.setValidationProperty('ValidationViewIsHidden', true);
    clientAPI.redraw();

	const productPkr = clientAPI.evaluateTargetPathForAPI('#Page:PurchaseOrders_CreateItem/#Control:productPkr');
	const productId = productPkr.getValue()[0].ReturnValue;

  let qtyPkr = clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:quantityPkr");
	let qty = qtyPkr.getValue()[0].ReturnValue;
	
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveProduct(clientAPI, productId).then(function(data) {
		let price = data.Price
		let netAmount = qty * price;
		let tax = netAmount * 0.05;
		let grossAmount = netAmount+tax;
		let formatOptions = {minimumFractionDigits: 2,useGrouping: false};
		clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:quantityUnit").setValue(data.QuantityUnit);
		clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:currencyPrp").setValue(data.CurrencyCode);
		clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:netAmtPrp").setValue(clientAPI.formatNumber(netAmount,'',formatOptions));
		clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:taxPrp").setValue(clientAPI.formatNumber(tax,'',formatOptions));
		clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:grossAmtPrp").setValue(clientAPI.formatNumber(grossAmount,'',formatOptions)); 
	},function(error){
		console.log("Error "+error);
	})	
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOId.js":
/*!****************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOId.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseOrders_GenerateNextPOId)
/* harmony export */ });
function PurchaseOrders_GenerateNextPOId(clientAPI) {
	return clientAPI.read('/ESPM/Services/ESPM.service', 'PurchaseOrderHeaders', ['PurchaseOrderId']).then((POList) => {
    let length = POList.length;
    console.log(`Calculating POList length @ ${length}`)
    let nextId = Math.max.apply(Math, POList.map(function(item) { return item.PurchaseOrderId;}));
    nextId++;
    console.log(`Calculating next PurchaseOrderId @ ${nextId}`)
    return nextId.toString();
  });
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_UpdateHeaderAmounts.js":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_UpdateHeaderAmounts.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseOrders_UpdateHeaderAmounts)
/* harmony export */ });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function PurchaseOrders_UpdateHeaderAmounts(clientAPI) {
	var netAmt = 0;
	var taxAmt = 0;
	var grossAmt = 0;
	try {
		var purchaseOrderId = clientAPI.evaluateTargetPath('#Property:PurchaseOrderId');
		const serviceName = "/ESPM/Services/ESPM.service";
		const entitySet = "PurchaseOrderItems";
		const properties = [];
		let queryOptions = encodeURI("$filter=Header_PurchaseOrderId eq '" + purchaseOrderId + "'");
		let POItemList = _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetData(clientAPI, serviceName, entitySet, properties, queryOptions);
		
		POItemList.then(function(list){
			list.forEach(function(item){
				netAmt += parseFloat(item.NetAmount);
				taxAmt += parseFloat(item.TaxAmount);
				grossAmt += parseFloat(item.GrossAmount);
			});
			
			grossAmt  = Number(Number.parseFloat(grossAmt).toFixed(2));
			taxAmt = Number(Number.parseFloat(taxAmt).toFixed(2));
			netAmt = Number(Number.parseFloat(netAmt).toFixed(2));
            
			clientAPI.setActionBinding({"purchaseOrderId": purchaseOrderId, "grossAmt": grossAmt, "netAmt": netAmt, "taxAmt": taxAmt});
			return clientAPI.executeAction("/ESPM/Actions/PurchaseOrders/PurchaseOrders_UpdateAmount.action");
		},function(err){});
	}
	catch(error) {
		console.log(error);
	}
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/ResetAppSettingsAndLogout.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/ResetAppSettingsAndLogout.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
function ResetAppSettingsAndLogout(context) {
	let logger = context.getLogger();
	let platform = context.nativescript.platformModule;
	let appSettings = context.nativescript.appSettingsModule;
	var appId;
	if (platform && (platform.isIOS || platform.isAndroid)) {
			appId = context.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
	} else {
			appId = 'WindowsClient';
	}
	try {
			// Remove any other app specific settings
			appSettings.getAllKeys().forEach(key => {
					if (key.substring(0, appId.length) === appId) {
							appSettings.remove(key);
					}
			});
	} catch (err) {
			logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
	} finally {
			// Logout 
			return context.getPageProxy().executeAction('/ESPM/Actions/Logout.action');
	}
}

/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrderCreate_CheckRequired.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrderCreate_CheckRequired.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SalesOrderCreate_CheckRequired)
/* harmony export */ });

var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SalesOrderCreate_CheckRequired(clientAPI) {
    let pageProxy = clientAPI.getPageProxy();
    let missingRequiredFields = pageProxy.getMissingRequiredControls();

     for (let control of missingRequiredFields) {
        control.setValidationProperty('ValidationViewIsHidden', false);
    }
    pageProxy.getControl('FormCellContainer').redraw();
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrderCreate_OnValueChange.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrderCreate_OnValueChange.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SalesOrderCreate_OnValueChange)
/* harmony export */ });

var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SalesOrderCreate_OnValueChange(clientAPI) {
    clientAPI.setValidationProperty('ValidationViewIsHidden', true);
    clientAPI.redraw();
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_Count.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_Count.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SalesOrders_Count)
/* harmony export */ });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function SalesOrders_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "SalesOrderHeaders";
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetCount(clientAPI, serviceName, entitySet, ' ');   
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SalesOrders_DataOnValueChange)
/* harmony export */ });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function SalesOrders_DataOnValueChange(clientAPI) {
	//Remove validation message
	clientAPI.setValidationProperty('ValidationViewIsHidden', true);
	clientAPI.redraw();
    
	const productPkr = clientAPI.evaluateTargetPathForAPI('#Page:SalesOrders_CreateItem/#Control:productPkr');
	const productId = productPkr.getValue()[0].ReturnValue;

	let qtyPkr = clientAPI.evaluateTargetPathForAPI("#Page:SalesOrders_CreateItem/#Control:quantityPkr");
	let qty = qtyPkr.getValue()[0].ReturnValue;

	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveProduct(clientAPI, productId).then(function(data) {
		
		let price = data.Price
		let netAmount = qty * price;
		let tax = netAmount * 0.07;
		let grossAmount = netAmount + tax;
        let formatOptions = {minimumFractionDigits: 2, useGrouping: false};
        clientAPI.evaluateTargetPathForAPI('#Page:SalesOrders_CreateItem/#Control:quantityUnit').setValue(data.QuantityUnit);
		clientAPI.evaluateTargetPathForAPI('#Page:SalesOrders_CreateItem/#Control:pricePrp').setValue(clientAPI.formatNumber(price,'',formatOptions));
		clientAPI.evaluateTargetPathForAPI("#Page:SalesOrders_CreateItem/#Control:currencyPrp").setValue(data.CurrencyCode);
		clientAPI.evaluateTargetPathForAPI("#Page:SalesOrders_CreateItem/#Control:netAmtPrp").setValue(clientAPI.formatNumber(netAmount,'',formatOptions));
		clientAPI.evaluateTargetPathForAPI("#Page:SalesOrders_CreateItem/#Control:taxPrp").setValue(clientAPI.formatNumber(tax,'',formatOptions));
		clientAPI.evaluateTargetPathForAPI("#Page:SalesOrders_CreateItem/#Control:grossAmtPrp").setValue(clientAPI.formatNumber(grossAmount,'',formatOptions));
	},function(error){
		console.log("Error "+error);
	})	
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateDeliveryDate.js":
/*!**************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateDeliveryDate.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SalesOrders_GenerateDeliveryDate)
/* harmony export */ });

var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SalesOrders_GenerateDeliveryDate(clientAPI) {
    //Delivery Date is 30 days from order placed.
    let deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 30);
    return deliveryDate;
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOId.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOId.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenerateNextSOId)
/* harmony export */ });
function GenerateNextSOId(clientAPI) {
	return clientAPI.read('/ESPM/Services/ESPM.service', 'SalesOrderHeaders', ['SalesOrderId']).then((SOList) => {
    let length = SOList.length;
    console.log(`Calculating SOList length @ ${length}`)
    let nextId = Math.max.apply(Math, SOList.map(function(item) { return item.SalesOrderId;}));
    nextId++;
    console.log(`Calculating next SalesOrderId @ ${nextId}`)
    return nextId.toString();
  });
}

/***/ }),

/***/ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_UpdateHeaderAmounts.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_UpdateHeaderAmounts.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SalesOrders_UpdateHeaderAmounts)
/* harmony export */ });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function SalesOrders_UpdateHeaderAmounts(clientAPI) {
	var netAmt = 0;
	var taxAmt = 0;
	var grossAmt = 0;

	try {
		var salesOrderId = clientAPI.evaluateTargetPath('#Property:SalesOrderId');
		const serviceName = "/ESPM/Services/ESPM.service";
		const entitySet = "SalesOrderItems";
		const properties = [];
		let queryOptions = encodeURI("$filter=Header_SalesOrderId eq '" + salesOrderId + "'");
		let SOItemList = _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetData(clientAPI, serviceName, entitySet, properties, queryOptions);
		
		SOItemList.then(function(list) {
			list.forEach(function(item){
				netAmt += parseFloat(item.NetAmount);
				taxAmt += parseFloat(item.TaxAmount);
				grossAmt += parseFloat(item.GrossAmount);
			});

			grossAmt  = Number(Number.parseFloat(grossAmt).toFixed(2));
			taxAmt = Number(Number.parseFloat(taxAmt).toFixed(2));
			netAmt = Number(Number.parseFloat(netAmt).toFixed(2));
			
			clientAPI.setActionBinding({"salesOrderId": salesOrderId, "grossAmt": grossAmt, "netAmt": netAmt, "taxAmt": taxAmt});
			
			return clientAPI.executeAction("/ESPM/Actions/SalesOrders/SalesOrders_UpdateAmount.action");
		},function(err){});
	}
	catch(error) {
		console.log(error);
	}
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Service/InitializeSuccess.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Service/InitializeSuccess.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InitializeSuccess)
/* harmony export */ });
function InitializeSuccess(context) {
  var sectionedTable = context.getPageProxy().getControl('SectionedTable');
  if (sectionedTable) {
    sectionedTable.getSections().forEach((section) => {
      if (section.getName() === "OverviewSimplePropertyCollection") {
        section.redraw();
      }
    });
  }
}

/***/ }),

/***/ "./build.definitions/ESPM/Rules/Suppliers/Suppliers_Count.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Suppliers/Suppliers_Count.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Suppliers_Count)
/* harmony export */ });
/* harmony import */ var _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Library/CommonLibrary */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js");


function Suppliers_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "Suppliers";
	return _Library_CommonLibrary__WEBPACK_IMPORTED_MODULE_0__["default"].getEntitySetCount(clientAPI, serviceName, entitySet, ' ');                         
}


/***/ }),

/***/ "./build.definitions/ESPM/Rules/Suppliers/Suppliers_Image.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/ESPM/Rules/Suppliers/Suppliers_Image.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SupplierImage)
/* harmony export */ });

function SupplierImage(clientAPI) {
	var ImagePath = '/ESPM/Images/sf';
	ImagePath = String(ImagePath) + String(clientAPI.evaluateTargetPath("#Property:SupplierId") % 12 + 1);
	ImagePath = String(ImagePath) + String('.png');
	console.log("Path->" + ImagePath); 
	return ImagePath;
}


/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let espm_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./ESPM/Actions/CloseModalPage_Cancel.action */ "./build.definitions/ESPM/Actions/CloseModalPage_Cancel.action")
let espm_actions_closemodalpage_complete_action = __webpack_require__(/*! ./ESPM/Actions/CloseModalPage_Complete.action */ "./build.definitions/ESPM/Actions/CloseModalPage_Complete.action")
let espm_actions_closepage_action = __webpack_require__(/*! ./ESPM/Actions/ClosePage.action */ "./build.definitions/ESPM/Actions/ClosePage.action")
let espm_actions_createentityfailuremessage_action = __webpack_require__(/*! ./ESPM/Actions/CreateEntityFailureMessage.action */ "./build.definitions/ESPM/Actions/CreateEntityFailureMessage.action")
let espm_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./ESPM/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/ESPM/Actions/CreateEntitySuccessMessage.action")
let espm_actions_customers_navtocustomers_detail_action = __webpack_require__(/*! ./ESPM/Actions/Customers/NavToCustomers_Detail.action */ "./build.definitions/ESPM/Actions/Customers/NavToCustomers_Detail.action")
let espm_actions_customers_navtocustomers_list_action = __webpack_require__(/*! ./ESPM/Actions/Customers/NavToCustomers_List.action */ "./build.definitions/ESPM/Actions/Customers/NavToCustomers_List.action")
let espm_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./ESPM/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/ESPM/Actions/DeleteEntityFailureMessage.action")
let espm_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./ESPM/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/ESPM/Actions/DeleteEntitySuccessMessage.action")
let espm_actions_logout_action = __webpack_require__(/*! ./ESPM/Actions/Logout.action */ "./build.definitions/ESPM/Actions/Logout.action")
let espm_actions_logoutmessage_action = __webpack_require__(/*! ./ESPM/Actions/LogoutMessage.action */ "./build.definitions/ESPM/Actions/LogoutMessage.action")
let espm_actions_products_navtoproducts_detail_action = __webpack_require__(/*! ./ESPM/Actions/Products/NavToProducts_Detail.action */ "./build.definitions/ESPM/Actions/Products/NavToProducts_Detail.action")
let espm_actions_products_navtoproducts_edit_action = __webpack_require__(/*! ./ESPM/Actions/Products/NavToProducts_Edit.action */ "./build.definitions/ESPM/Actions/Products/NavToProducts_Edit.action")
let espm_actions_products_navtoproducts_list_action = __webpack_require__(/*! ./ESPM/Actions/Products/NavToProducts_List.action */ "./build.definitions/ESPM/Actions/Products/NavToProducts_List.action")
let espm_actions_products_products_updateentity_action = __webpack_require__(/*! ./ESPM/Actions/Products/Products_UpdateEntity.action */ "./build.definitions/ESPM/Actions/Products/Products_UpdateEntity.action")
let espm_actions_purchaseorders_navtopurchaseorders_create_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Create.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Create.action")
let espm_actions_purchaseorders_navtopurchaseorders_createitem_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_CreateItem.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_CreateItem.action")
let espm_actions_purchaseorders_navtopurchaseorders_detail_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action")
let espm_actions_purchaseorders_navtopurchaseorders_list_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_List.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_List.action")
let espm_actions_purchaseorders_purchaseordercreate_checkrequiredfields_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/PurchaseOrderCreate_CheckRequiredFields.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrderCreate_CheckRequiredFields.action")
let espm_actions_purchaseorders_purchaseorderitemcreate_checkrequiredfields_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/PurchaseOrderItemCreate_CheckRequiredFields.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrderItemCreate_CheckRequiredFields.action")
let espm_actions_purchaseorders_purchaseorders_createentity_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateEntity.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateEntity.action")
let espm_actions_purchaseorders_purchaseorders_createitementity_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateItemEntity.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateItemEntity.action")
let espm_actions_purchaseorders_purchaseorders_updateamount_action = __webpack_require__(/*! ./ESPM/Actions/PurchaseOrders/PurchaseOrders_UpdateAmount.action */ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_UpdateAmount.action")
let espm_actions_salesorders_navtosalesorders_create_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/NavToSalesOrders_Create.action */ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Create.action")
let espm_actions_salesorders_navtosalesorders_createitem_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/NavToSalesOrders_CreateItem.action */ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_CreateItem.action")
let espm_actions_salesorders_navtosalesorders_detail_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action */ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action")
let espm_actions_salesorders_navtosalesorders_list_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/NavToSalesOrders_List.action */ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_List.action")
let espm_actions_salesorders_salesordercreate_checkrequiredfields_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/SalesOrderCreate_CheckRequiredFields.action */ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrderCreate_CheckRequiredFields.action")
let espm_actions_salesorders_salesorderitemcreate_checkrequiredfields_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/SalesOrderItemCreate_CheckRequiredFields.action */ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrderItemCreate_CheckRequiredFields.action")
let espm_actions_salesorders_salesorders_createentity_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/SalesOrders_CreateEntity.action */ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateEntity.action")
let espm_actions_salesorders_salesorders_createitementity_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/SalesOrders_CreateItemEntity.action */ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateItemEntity.action")
let espm_actions_salesorders_salesorders_updateamount_action = __webpack_require__(/*! ./ESPM/Actions/SalesOrders/SalesOrders_UpdateAmount.action */ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_UpdateAmount.action")
let espm_actions_service_initialize_action = __webpack_require__(/*! ./ESPM/Actions/Service/Initialize.action */ "./build.definitions/ESPM/Actions/Service/Initialize.action")
let espm_actions_service_initializefailuremessage_action = __webpack_require__(/*! ./ESPM/Actions/Service/InitializeFailureMessage.action */ "./build.definitions/ESPM/Actions/Service/InitializeFailureMessage.action")
let espm_actions_service_initializesuccessmessage_action = __webpack_require__(/*! ./ESPM/Actions/Service/InitializeSuccessMessage.action */ "./build.definitions/ESPM/Actions/Service/InitializeSuccessMessage.action")
let espm_actions_suppliers_navtosuppliers_detail_action = __webpack_require__(/*! ./ESPM/Actions/Suppliers/NavToSuppliers_Detail.action */ "./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_Detail.action")
let espm_actions_suppliers_navtosuppliers_list_action = __webpack_require__(/*! ./ESPM/Actions/Suppliers/NavToSuppliers_List.action */ "./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_List.action")
let espm_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./ESPM/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/ESPM/Actions/UpdateEntityFailureMessage.action")
let espm_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./ESPM/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/ESPM/Actions/UpdateEntitySuccessMessage.action")
let espm_globals_appdefinition_version_global = __webpack_require__(/*! ./ESPM/Globals/AppDefinition_Version.global */ "./build.definitions/ESPM/Globals/AppDefinition_Version.global")
let espm_i18n_i18n_properties = __webpack_require__(/*! ./ESPM/i18n/i18n.properties */ "./build.definitions/ESPM/i18n/i18n.properties")
let espm_jsconfig_json = __webpack_require__(/*! ./ESPM/jsconfig.json */ "./build.definitions/ESPM/jsconfig.json")
let espm_pages_customers_customers_detail_page = __webpack_require__(/*! ./ESPM/Pages/Customers/Customers_Detail.page */ "./build.definitions/ESPM/Pages/Customers/Customers_Detail.page")
let espm_pages_customers_customers_list_page = __webpack_require__(/*! ./ESPM/Pages/Customers/Customers_List.page */ "./build.definitions/ESPM/Pages/Customers/Customers_List.page")
let espm_pages_overview_page = __webpack_require__(/*! ./ESPM/Pages/Overview.page */ "./build.definitions/ESPM/Pages/Overview.page")
let espm_pages_products_products_detail_page = __webpack_require__(/*! ./ESPM/Pages/Products/Products_Detail.page */ "./build.definitions/ESPM/Pages/Products/Products_Detail.page")
let espm_pages_products_products_edit_page = __webpack_require__(/*! ./ESPM/Pages/Products/Products_Edit.page */ "./build.definitions/ESPM/Pages/Products/Products_Edit.page")
let espm_pages_products_products_list_page = __webpack_require__(/*! ./ESPM/Pages/Products/Products_List.page */ "./build.definitions/ESPM/Pages/Products/Products_List.page")
let espm_pages_purchaseorders_purchaseorders_create_page = __webpack_require__(/*! ./ESPM/Pages/PurchaseOrders/PurchaseOrders_Create.page */ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Create.page")
let espm_pages_purchaseorders_purchaseorders_createitem_page = __webpack_require__(/*! ./ESPM/Pages/PurchaseOrders/PurchaseOrders_CreateItem.page */ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_CreateItem.page")
let espm_pages_purchaseorders_purchaseorders_detail_page = __webpack_require__(/*! ./ESPM/Pages/PurchaseOrders/PurchaseOrders_Detail.page */ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Detail.page")
let espm_pages_purchaseorders_purchaseorders_list_page = __webpack_require__(/*! ./ESPM/Pages/PurchaseOrders/PurchaseOrders_List.page */ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_List.page")
let espm_pages_salesorders_salesorders_create_page = __webpack_require__(/*! ./ESPM/Pages/SalesOrders/SalesOrders_Create.page */ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Create.page")
let espm_pages_salesorders_salesorders_createitem_page = __webpack_require__(/*! ./ESPM/Pages/SalesOrders/SalesOrders_CreateItem.page */ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_CreateItem.page")
let espm_pages_salesorders_salesorders_detail_page = __webpack_require__(/*! ./ESPM/Pages/SalesOrders/SalesOrders_Detail.page */ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Detail.page")
let espm_pages_salesorders_salesorders_list_page = __webpack_require__(/*! ./ESPM/Pages/SalesOrders/SalesOrders_List.page */ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_List.page")
let espm_pages_suppliers_suppliers_detail_page = __webpack_require__(/*! ./ESPM/Pages/Suppliers/Suppliers_Detail.page */ "./build.definitions/ESPM/Pages/Suppliers/Suppliers_Detail.page")
let espm_pages_suppliers_suppliers_list_page = __webpack_require__(/*! ./ESPM/Pages/Suppliers/Suppliers_List.page */ "./build.definitions/ESPM/Pages/Suppliers/Suppliers_List.page")
let espm_rules_customers_customers_count_js = __webpack_require__(/*! ./ESPM/Rules/Customers/Customers_Count.js */ "./build.definitions/ESPM/Rules/Customers/Customers_Count.js")
let espm_rules_customers_customers_image_js = __webpack_require__(/*! ./ESPM/Rules/Customers/Customers_Image.js */ "./build.definitions/ESPM/Rules/Customers/Customers_Image.js")
let espm_rules_library_commonlibrary_js = __webpack_require__(/*! ./ESPM/Rules/Library/CommonLibrary.js */ "./build.definitions/ESPM/Rules/Library/CommonLibrary.js")
let espm_rules_onwillupdate_js = __webpack_require__(/*! ./ESPM/Rules/OnWillUpdate.js */ "./build.definitions/ESPM/Rules/OnWillUpdate.js")
let espm_rules_overview_overview_daysleftinquarter_js = __webpack_require__(/*! ./ESPM/Rules/Overview/Overview_DaysLeftInQuarter.js */ "./build.definitions/ESPM/Rules/Overview/Overview_DaysLeftInQuarter.js")
let espm_rules_overview_overview_getcurrentquarter_js = __webpack_require__(/*! ./ESPM/Rules/Overview/Overview_GetCurrentQuarter.js */ "./build.definitions/ESPM/Rules/Overview/Overview_GetCurrentQuarter.js")
let espm_rules_products_productedit_getsupplier_js = __webpack_require__(/*! ./ESPM/Rules/Products/ProductEdit_GetSupplier.js */ "./build.definitions/ESPM/Rules/Products/ProductEdit_GetSupplier.js")
let espm_rules_products_products_count_js = __webpack_require__(/*! ./ESPM/Rules/Products/Products_Count.js */ "./build.definitions/ESPM/Rules/Products/Products_Count.js")
let espm_rules_purchaseorders_purchaseordercreate_onvaluechange_js = __webpack_require__(/*! ./ESPM/Rules/PurchaseOrders/PurchaseOrderCreate_OnValueChange.js */ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrderCreate_OnValueChange.js")
let espm_rules_purchaseorders_purchaseordercreate_requiredfields_js = __webpack_require__(/*! ./ESPM/Rules/PurchaseOrders/PurchaseOrderCreate_RequiredFields.js */ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrderCreate_RequiredFields.js")
let espm_rules_purchaseorders_purchaseorders_count_js = __webpack_require__(/*! ./ESPM/Rules/PurchaseOrders/PurchaseOrders_Count.js */ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_Count.js")
let espm_rules_purchaseorders_purchaseorders_dataonvaluechange_js = __webpack_require__(/*! ./ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js */ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js")
let espm_rules_purchaseorders_purchaseorders_generatenextpoid_js = __webpack_require__(/*! ./ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOId.js */ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOId.js")
let espm_rules_purchaseorders_purchaseorders_updateheaderamounts_js = __webpack_require__(/*! ./ESPM/Rules/PurchaseOrders/PurchaseOrders_UpdateHeaderAmounts.js */ "./build.definitions/ESPM/Rules/PurchaseOrders/PurchaseOrders_UpdateHeaderAmounts.js")
let espm_rules_resetappsettingsandlogout_js = __webpack_require__(/*! ./ESPM/Rules/ResetAppSettingsAndLogout.js */ "./build.definitions/ESPM/Rules/ResetAppSettingsAndLogout.js")
let espm_rules_salesorders_salesordercreate_checkrequired_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrderCreate_CheckRequired.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrderCreate_CheckRequired.js")
let espm_rules_salesorders_salesordercreate_onvaluechange_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrderCreate_OnValueChange.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrderCreate_OnValueChange.js")
let espm_rules_salesorders_salesorders_count_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrders_Count.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_Count.js")
let espm_rules_salesorders_salesorders_dataonvaluechange_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js")
let espm_rules_salesorders_salesorders_generatedeliverydate_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrders_GenerateDeliveryDate.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateDeliveryDate.js")
let espm_rules_salesorders_salesorders_generatenextsoid_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOId.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOId.js")
let espm_rules_salesorders_salesorders_updateheaderamounts_js = __webpack_require__(/*! ./ESPM/Rules/SalesOrders/SalesOrders_UpdateHeaderAmounts.js */ "./build.definitions/ESPM/Rules/SalesOrders/SalesOrders_UpdateHeaderAmounts.js")
let espm_rules_service_initializesuccess_js = __webpack_require__(/*! ./ESPM/Rules/Service/InitializeSuccess.js */ "./build.definitions/ESPM/Rules/Service/InitializeSuccess.js")
let espm_rules_suppliers_suppliers_count_js = __webpack_require__(/*! ./ESPM/Rules/Suppliers/Suppliers_Count.js */ "./build.definitions/ESPM/Rules/Suppliers/Suppliers_Count.js")
let espm_rules_suppliers_suppliers_image_js = __webpack_require__(/*! ./ESPM/Rules/Suppliers/Suppliers_Image.js */ "./build.definitions/ESPM/Rules/Suppliers/Suppliers_Image.js")
let espm_services_espm_service = __webpack_require__(/*! ./ESPM/Services/ESPM.service */ "./build.definitions/ESPM/Services/ESPM.service")
let espm_styles_styles_css = __webpack_require__(/*! ./ESPM/Styles/Styles.css */ "./build.definitions/ESPM/Styles/Styles.css")
let espm_styles_styles_json = __webpack_require__(/*! ./ESPM/Styles/Styles.json */ "./build.definitions/ESPM/Styles/Styles.json")
let espm_styles_styles_less = __webpack_require__(/*! ./ESPM/Styles/Styles.less */ "./build.definitions/ESPM/Styles/Styles.less")
let espm_styles_styles_nss = __webpack_require__(/*! ./ESPM/Styles/Styles.nss */ "./build.definitions/ESPM/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	espm_actions_closemodalpage_cancel_action : espm_actions_closemodalpage_cancel_action,
	espm_actions_closemodalpage_complete_action : espm_actions_closemodalpage_complete_action,
	espm_actions_closepage_action : espm_actions_closepage_action,
	espm_actions_createentityfailuremessage_action : espm_actions_createentityfailuremessage_action,
	espm_actions_createentitysuccessmessage_action : espm_actions_createentitysuccessmessage_action,
	espm_actions_customers_navtocustomers_detail_action : espm_actions_customers_navtocustomers_detail_action,
	espm_actions_customers_navtocustomers_list_action : espm_actions_customers_navtocustomers_list_action,
	espm_actions_deleteentityfailuremessage_action : espm_actions_deleteentityfailuremessage_action,
	espm_actions_deleteentitysuccessmessage_action : espm_actions_deleteentitysuccessmessage_action,
	espm_actions_logout_action : espm_actions_logout_action,
	espm_actions_logoutmessage_action : espm_actions_logoutmessage_action,
	espm_actions_products_navtoproducts_detail_action : espm_actions_products_navtoproducts_detail_action,
	espm_actions_products_navtoproducts_edit_action : espm_actions_products_navtoproducts_edit_action,
	espm_actions_products_navtoproducts_list_action : espm_actions_products_navtoproducts_list_action,
	espm_actions_products_products_updateentity_action : espm_actions_products_products_updateentity_action,
	espm_actions_purchaseorders_navtopurchaseorders_create_action : espm_actions_purchaseorders_navtopurchaseorders_create_action,
	espm_actions_purchaseorders_navtopurchaseorders_createitem_action : espm_actions_purchaseorders_navtopurchaseorders_createitem_action,
	espm_actions_purchaseorders_navtopurchaseorders_detail_action : espm_actions_purchaseorders_navtopurchaseorders_detail_action,
	espm_actions_purchaseorders_navtopurchaseorders_list_action : espm_actions_purchaseorders_navtopurchaseorders_list_action,
	espm_actions_purchaseorders_purchaseordercreate_checkrequiredfields_action : espm_actions_purchaseorders_purchaseordercreate_checkrequiredfields_action,
	espm_actions_purchaseorders_purchaseorderitemcreate_checkrequiredfields_action : espm_actions_purchaseorders_purchaseorderitemcreate_checkrequiredfields_action,
	espm_actions_purchaseorders_purchaseorders_createentity_action : espm_actions_purchaseorders_purchaseorders_createentity_action,
	espm_actions_purchaseorders_purchaseorders_createitementity_action : espm_actions_purchaseorders_purchaseorders_createitementity_action,
	espm_actions_purchaseorders_purchaseorders_updateamount_action : espm_actions_purchaseorders_purchaseorders_updateamount_action,
	espm_actions_salesorders_navtosalesorders_create_action : espm_actions_salesorders_navtosalesorders_create_action,
	espm_actions_salesorders_navtosalesorders_createitem_action : espm_actions_salesorders_navtosalesorders_createitem_action,
	espm_actions_salesorders_navtosalesorders_detail_action : espm_actions_salesorders_navtosalesorders_detail_action,
	espm_actions_salesorders_navtosalesorders_list_action : espm_actions_salesorders_navtosalesorders_list_action,
	espm_actions_salesorders_salesordercreate_checkrequiredfields_action : espm_actions_salesorders_salesordercreate_checkrequiredfields_action,
	espm_actions_salesorders_salesorderitemcreate_checkrequiredfields_action : espm_actions_salesorders_salesorderitemcreate_checkrequiredfields_action,
	espm_actions_salesorders_salesorders_createentity_action : espm_actions_salesorders_salesorders_createentity_action,
	espm_actions_salesorders_salesorders_createitementity_action : espm_actions_salesorders_salesorders_createitementity_action,
	espm_actions_salesorders_salesorders_updateamount_action : espm_actions_salesorders_salesorders_updateamount_action,
	espm_actions_service_initialize_action : espm_actions_service_initialize_action,
	espm_actions_service_initializefailuremessage_action : espm_actions_service_initializefailuremessage_action,
	espm_actions_service_initializesuccessmessage_action : espm_actions_service_initializesuccessmessage_action,
	espm_actions_suppliers_navtosuppliers_detail_action : espm_actions_suppliers_navtosuppliers_detail_action,
	espm_actions_suppliers_navtosuppliers_list_action : espm_actions_suppliers_navtosuppliers_list_action,
	espm_actions_updateentityfailuremessage_action : espm_actions_updateentityfailuremessage_action,
	espm_actions_updateentitysuccessmessage_action : espm_actions_updateentitysuccessmessage_action,
	espm_globals_appdefinition_version_global : espm_globals_appdefinition_version_global,
	espm_i18n_i18n_properties : espm_i18n_i18n_properties,
	espm_jsconfig_json : espm_jsconfig_json,
	espm_pages_customers_customers_detail_page : espm_pages_customers_customers_detail_page,
	espm_pages_customers_customers_list_page : espm_pages_customers_customers_list_page,
	espm_pages_overview_page : espm_pages_overview_page,
	espm_pages_products_products_detail_page : espm_pages_products_products_detail_page,
	espm_pages_products_products_edit_page : espm_pages_products_products_edit_page,
	espm_pages_products_products_list_page : espm_pages_products_products_list_page,
	espm_pages_purchaseorders_purchaseorders_create_page : espm_pages_purchaseorders_purchaseorders_create_page,
	espm_pages_purchaseorders_purchaseorders_createitem_page : espm_pages_purchaseorders_purchaseorders_createitem_page,
	espm_pages_purchaseorders_purchaseorders_detail_page : espm_pages_purchaseorders_purchaseorders_detail_page,
	espm_pages_purchaseorders_purchaseorders_list_page : espm_pages_purchaseorders_purchaseorders_list_page,
	espm_pages_salesorders_salesorders_create_page : espm_pages_salesorders_salesorders_create_page,
	espm_pages_salesorders_salesorders_createitem_page : espm_pages_salesorders_salesorders_createitem_page,
	espm_pages_salesorders_salesorders_detail_page : espm_pages_salesorders_salesorders_detail_page,
	espm_pages_salesorders_salesorders_list_page : espm_pages_salesorders_salesorders_list_page,
	espm_pages_suppliers_suppliers_detail_page : espm_pages_suppliers_suppliers_detail_page,
	espm_pages_suppliers_suppliers_list_page : espm_pages_suppliers_suppliers_list_page,
	espm_rules_customers_customers_count_js : espm_rules_customers_customers_count_js,
	espm_rules_customers_customers_image_js : espm_rules_customers_customers_image_js,
	espm_rules_library_commonlibrary_js : espm_rules_library_commonlibrary_js,
	espm_rules_onwillupdate_js : espm_rules_onwillupdate_js,
	espm_rules_overview_overview_daysleftinquarter_js : espm_rules_overview_overview_daysleftinquarter_js,
	espm_rules_overview_overview_getcurrentquarter_js : espm_rules_overview_overview_getcurrentquarter_js,
	espm_rules_products_productedit_getsupplier_js : espm_rules_products_productedit_getsupplier_js,
	espm_rules_products_products_count_js : espm_rules_products_products_count_js,
	espm_rules_purchaseorders_purchaseordercreate_onvaluechange_js : espm_rules_purchaseorders_purchaseordercreate_onvaluechange_js,
	espm_rules_purchaseorders_purchaseordercreate_requiredfields_js : espm_rules_purchaseorders_purchaseordercreate_requiredfields_js,
	espm_rules_purchaseorders_purchaseorders_count_js : espm_rules_purchaseorders_purchaseorders_count_js,
	espm_rules_purchaseorders_purchaseorders_dataonvaluechange_js : espm_rules_purchaseorders_purchaseorders_dataonvaluechange_js,
	espm_rules_purchaseorders_purchaseorders_generatenextpoid_js : espm_rules_purchaseorders_purchaseorders_generatenextpoid_js,
	espm_rules_purchaseorders_purchaseorders_updateheaderamounts_js : espm_rules_purchaseorders_purchaseorders_updateheaderamounts_js,
	espm_rules_resetappsettingsandlogout_js : espm_rules_resetappsettingsandlogout_js,
	espm_rules_salesorders_salesordercreate_checkrequired_js : espm_rules_salesorders_salesordercreate_checkrequired_js,
	espm_rules_salesorders_salesordercreate_onvaluechange_js : espm_rules_salesorders_salesordercreate_onvaluechange_js,
	espm_rules_salesorders_salesorders_count_js : espm_rules_salesorders_salesorders_count_js,
	espm_rules_salesorders_salesorders_dataonvaluechange_js : espm_rules_salesorders_salesorders_dataonvaluechange_js,
	espm_rules_salesorders_salesorders_generatedeliverydate_js : espm_rules_salesorders_salesorders_generatedeliverydate_js,
	espm_rules_salesorders_salesorders_generatenextsoid_js : espm_rules_salesorders_salesorders_generatenextsoid_js,
	espm_rules_salesorders_salesorders_updateheaderamounts_js : espm_rules_salesorders_salesorders_updateheaderamounts_js,
	espm_rules_service_initializesuccess_js : espm_rules_service_initializesuccess_js,
	espm_rules_suppliers_suppliers_count_js : espm_rules_suppliers_suppliers_count_js,
	espm_rules_suppliers_suppliers_image_js : espm_rules_suppliers_suppliers_image_js,
	espm_services_espm_service : espm_services_espm_service,
	espm_styles_styles_css : espm_styles_styles_css,
	espm_styles_styles_json : espm_styles_styles_json,
	espm_styles_styles_less : espm_styles_styles_less,
	espm_styles_styles_nss : espm_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/ESPM/Styles/Styles.css":
/*!**************************************************!*\
  !*** ./build.definitions/ESPM/Styles/Styles.css ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
.read-only {
  color: #8f8f8f;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/ESPM/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD;EACE,cAAc;AAChB","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n.read-only {\n  color: #8f8f8f;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/ESPM/Styles/Styles.less":
/*!***************************************************!*\
  !*** ./build.definitions/ESPM/Styles/Styles.less ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/

.read-only {
  color: #8f8f8f;
}`, "",{"version":3,"sources":["webpack://./build.definitions/ESPM/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;;AAED;EACE,cAAc;AAChB","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n\n.read-only {\n  color: #8f8f8f;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/ESPM/Styles/Styles.nss":
/*!**************************************************!*\
  !*** ./build.definitions/ESPM/Styles/Styles.nss ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `read-only {
	font-color: #8f8f8f;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/ESPM/Styles/Styles.nss"],"names":[],"mappings":"AAAA;CACC,mBAAmB;AACpB","sourcesContent":["read-only {\n\tfont-color: #8f8f8f;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Customers/Customers_Detail.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Customers/Customers_Detail.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,'customer_details')","Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"/ESPM/Rules/Customers/Customers_Image.js","DetailImageIsCircular":true,"HeadlineText":"{LastName}","Subhead":"{FirstName}","Tags":[],"BodyText":"","Footnote":"{CustomerId}","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Address","Value":"{Street}"},{"KeyName":"City","Value":"{City}"},{"KeyName":"Postal Code","Value":"{PostalCode}"},{"KeyName":"Country","Value":"{Country}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Type":"Section.Type.KeyValue"},{"EmptySection":{"Caption":"$(L,'no_order')"},"Header":{"Grid":{"Items":[{"NumberOfLines":1,"Text":"Order ID"},{"NumberOfLines":1,"Text":"Created At"},{"NumberOfLines":1,"Text":"Gross Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Taxes","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Currency"}]},"UseTopPadding":true},"Row":{"AccessoryType":"none","Items":[{"NumberOfLines":1,"Text":"{SalesOrderId}"},{"NumberOfLines":1,"Text":"$(D,{CreatedAt})"},{"NumberOfLines":1,"Text":"$(C,{GrossAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"$(C,{TaxAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"{CurrencyCode}"}],"Layout":{"ColumnWidthPercentage":[0.2,-1,0.15,0.15,0.15]},"OnPress":"/ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action"},"Target":{"EntitySet":"SalesOrderHeaders","QueryOptions":"$filter=CustomerDetails_CustomerId eq '{CustomerId}'&$expand=CustomerDetails,Items","Service":"/ESPM/Services/ESPM.service"},"_Type":"Section.Type.GridTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Customers_Detail"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Customers/Customers_List.page":
/*!********************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Customers/Customers_List.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"UseTopPadding":false},"_Type":"Section.Type.ContactCell","Target":{"Service":"/ESPM/Services/ESPM.service","EntitySet":"Customers"},"_Name":"SectionContactCellTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"DetailImage":"/ESPM/Rules/Customers/Customers_Image.js","Headline":"{FirstName} {LastName}","Subheadline":"{City}, {Country}","OnPress":"/ESPM/Actions/Customers/NavToCustomers_Detail.action","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"{PhoneNumber}"},{"ActivityType":"Email","ActivityValue":"{EmailAddress}"}],"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true}},"Search":{"Enabled":true,"Placeholder":"Customer Search","MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50}}]}],"Target":"","_Type":"Page","_Name":"Customers_List","Caption":"$(L,'customers')"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Overview.page":
/*!****************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Overview.page ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Subhead":"Enterprise Sales Procurement Model (ESPM) Application","Description":"Sample Application utliizing sample data models, services to illustrates the various building blocks of creating a multi-channel application","StatusText":"v1.0.0","DetailImage":"/ESPM/Images/mdk_logo.png","DetailImageIsCircular":false,"HeadlineText":"SAP BTP Multi-channel Application","Tags":["/ESPM/Rules/Overview/Overview_DaysLeftInQuarter.js","/ESPM/Rules/Overview/Overview_GetCurrentQuarter.js"],"Target":""},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Header":{"UseTopPadding":false,"Caption":"My Sales"},"Footer":{"Target":"","_Name":"SectionFooter3","Caption":"View all Sales Orders","AttributeLabel":"/ESPM/Rules/SalesOrders/SalesOrders_Count.js","AccessoryType":"disclosureIndicator","FooterStyle":"attribute","Visible":true,"OnPress":"/ESPM/Actions/SalesOrders/NavToSalesOrders_List.action","UseBottomPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/ESPM/Services/ESPM.service","EntitySet":"SalesOrderHeaders","QueryOptions":"$top=3&$expand=CustomerDetails,Items"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"DetailImage":"sap-icon://sales-order","Title":"{SalesOrderId}","Subhead":"{CustomerDetails/FirstName}, {CustomerDetails/LastName}","Footnote":"{CurrencyCode}","Description":"Gross Amt: $(N,{GrossAmount},'',{minimumFractionDigits:2, maximumFractionDigits:2, useGrouping:true})","StatusText":"$(N,{NetAmount},'',{minimumFractionDigits:2, maximumFractionDigits:2, useGrouping:true})","SubstatusText":"$(N,{TaxAmount},'',{minimumFractionDigits:2, maximumFractionDigits:2, useGrouping:true})","DetailImageIsCircular":false,"PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","OnPress":"/ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}},{"Header":{"UseTopPadding":true,"Caption":"My Procurements"},"Footer":{"Target":"","_Name":"SectionFooter4","Caption":"View all Procurements","AttributeLabel":"/ESPM/Rules/PurchaseOrders/PurchaseOrders_Count.js","AccessoryType":"disclosureIndicator","FooterStyle":"attribute","Visible":true,"OnPress":"/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_List.action","UseBottomPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/ESPM/Services/ESPM.service","EntitySet":"PurchaseOrderHeaders","QueryOptions":"$top=3&$expand=SupplierDetails,Items"},"_Name":"SectionObjectTable1","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"DetailImage":"sap-icon://customer-and-supplier","Title":"{PurchaseOrderId}","Subhead":"{SupplierDetails/SupplierName}","Footnote":"{CurrencyCode}","Description":"Gross Amt: $(N,{GrossAmount},'',{minimumIntegerDigits:1,minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:true})","StatusText":"$(N,{NetAmount},'',{minimumIntegerDigits:1,minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:true})","SubstatusText":"$(N,{TaxAmount},'',{minimumIntegerDigits:1,minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:true})","DetailImageIsCircular":false,"PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","OnPress":"/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}},{"_Type":"Section.Type.ImageCollection","Target":{"Service":"/ESPM/Services/ESPM.service","EntitySet":"Products","QueryOptions":"$top=15"},"_Name":"SectionImageCollection0","Header":{"UseTopPadding":false,"Caption":"$(L,'product_catalog')"},"Footer":{"Target":"","_Name":"SectionFooter2","Caption":"$(L,'see_all_products')","AttributeLabel":"/ESPM/Rules/Products/Products_Count.js","AccessoryType":"disclosureIndicator","FooterStyle":"attribute","OnPress":"/ESPM/Actions/Products/NavToProducts_List.action","UseBottomPadding":true},"Visible":true,"EmptySection":{"FooterVisible":false},"ImageCell":{"Title":"{Name}","Subtitle":"{Category}","Image":"{PictureUrl}","ImageIsCircular":false,"OnPress":"/ESPM/Actions/Products/NavToProducts_Detail.action"},"Layout":{"LayoutType":"HorizontalScroll"}},{"Footer":{"Target":"","_Name":"SectionFooter0","Caption":"$(L,'see_all_customers')","AttributeLabel":"/ESPM/Rules/Customers/Customers_Count.js","AccessoryType":"disclosureIndicator","FooterStyle":"attribute","OnPress":"/ESPM/Actions/Customers/NavToCustomers_List.action","UseBottomPadding":true},"Header":{"UseTopPadding":false,"Caption":"$(L,'my_customers')"},"_Type":"Section.Type.ObjectCollection","Target":{"EntitySet":"Customers","Service":"/ESPM/Services/ESPM.service"},"_Name":"SectionObjectCollection0","EmptySection":{"Caption":"$(L,'no_customer')","FooterVisible":true},"ObjectCell":{"Title":"{LastName}","Subhead":"{FirstName}","DetailImage":"/ESPM/Rules/Customers/Customers_Image.js","DetailImageIsCircular":true,"AccessoryType":"none","OnPress":"/ESPM/Actions/Customers/NavToCustomers_Detail.action"},"MaxItemCount":4,"Layout":{"NumberOfColumns":2}},{"Footer":{"Target":"","_Name":"SectionFooter1","Caption":"$(L,'see_all_suppliers')","AttributeLabel":"/ESPM/Rules/Suppliers/Suppliers_Count.js","AccessoryType":"disclosureIndicator","FooterStyle":"attribute","OnPress":"/ESPM/Actions/Suppliers/NavToSuppliers_List.action","UseBottomPadding":true},"Header":{"UseTopPadding":false,"Caption":"$(L,'my_suppliers')"},"_Type":"Section.Type.ObjectCollection","Target":{"EntitySet":"Suppliers","Service":"/ESPM/Services/ESPM.service"},"_Name":"SectionObjectCollection1","EmptySection":{"Caption":"$(L,'no_supplier') ","FooterVisible":true},"ObjectCell":{"Title":"{SupplierName}","Subhead":"{SupplierId}","DetailImage":"/ESPM/Rules/Suppliers/Suppliers_Image.js","DetailImageIsCircular":true,"AccessoryType":"none","OnPress":"/ESPM/Actions/Suppliers/NavToSuppliers_Detail.action"},"MaxItemCount":4,"Layout":{"NumberOfColumns":2}}]}],"Target":"","_Type":"Page","_Name":"Overview","Caption":"$(L,'title')","ToolBar":{"Items":[{"_Name":"LogoutToolbarItem","_Type":"Control.Type.ToolbarItem","Caption":"Logout","OnPress":"/ESPM/Actions/LogoutMessage.action"}]}}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Products/Products_Detail.page":
/*!********************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Products/Products_Detail.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,'product_details')","ActionBar":{"Items":[{"OnPress":"/ESPM/Actions/Products/NavToProducts_Edit.action","Position":"right","SystemItem":"Edit"}]},"Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"{PictureUrl}","HeadlineText":"","Subhead":"{Category}","Tags":[],"BodyText":"{Name}","Footnote":"{DimensionHeight} x {DimensionWidth} x {DimensionDepth} {DimensionUnit}","Description":"{ShortDescription}","StatusText":"{Price}","StatusImage":"","SubstatusImage":"","SubstatusText":"{CurrencyCode}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Description","Value":"{ShortDescription}"}],"Layout":{"NumberOfColumns":1},"MaxItemCount":1,"_Type":"Section.Type.KeyValue"},{"Header":{"UseTopPadding":true},"KeyAndValues":[{"KeyName":"Category","Value":"{CategoryName}"},{"KeyName":"Quantity Unit","Value":"{QuantityUnit}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Dimensions","UseTopPadding":true},"Layout":{"NumberOfColumns":2},"SimplePropertyCells":[{"SimplePropertyCell":{"AccessoryType":"none","KeyName":"Height","Value":"{DimensionHeight} {DimensionUnit}"}},{"SimplePropertyCell":{"AccessoryType":"none","KeyName":"Width","Value":"{DimensionWidth} {DimensionUnit}"}},{"SimplePropertyCell":{"AccessoryType":"none","KeyName":"Depth","Value":"{DimensionDepth} {DimensionUnit}"}},{"SimplePropertyCell":{"AccessoryType":"none","KeyName":"Weight","Value":"{Weight} {WeightUnit}"}}],"_Type":"Section.Type.SimplePropertyCollection"},{"EmptySection":{"Caption":"$(L,'no_supplier')"},"Header":{"Caption":"Supplier Details","UseTopPadding":false},"ObjectCell":{"AccessoryType":"none","DetailImageIsCircular":true,"DetailImage":"/ESPM/Rules/Suppliers/Suppliers_Image.js","Footnote":"{EmailAddress}","PreserveIconStackSpacing":true,"Subhead":"{Street}, {City}, {Country}","Title":"{SupplierName}"},"Target":{"EntitySet":"Suppliers","Service":"/ESPM/Services/ESPM.service","QueryOptions":"$filter=SupplierId eq '{SupplierDetails_SupplierId}'"},"_Type":"Section.Type.ObjectTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_Detail"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Products/Products_Edit.page":
/*!******************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Products/Products_Edit.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer","Sections":[{"Controls":[{"Target":"","Value":"{ProductId}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ProductID","IsEditable":false,"IsVisible":true,"Styles":{"Value":"read-only"},"Caption":"ID","PlaceHolder":"value"},{"Target":"","Value":"{Name}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ProductName","IsEditable":true,"IsVisible":true,"Caption":"Name","PlaceHolder":"value"},{"Caption":"Description","Target":"","Value":"{ShortDescription}","_Type":"Control.Type.FormCell.Note","_Name":"ProductDescription","IsEditable":true,"IsVisible":true,"PlaceHolder":"Description"},{"IsBarcodeScanEnabled":true,"IsSearchEnabled":false,"Target":"","Value":"{Category}","_Type":"Control.Type.FormCell.ListPicker","_Name":"ProductCategory","IsEditable":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Category","PickerPrompt":"Please select a category","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"Search":{"Enabled":true,"Placeholder":"Category Search"},"PickerItems":{"DisplayValue":"{CategoryName}","ReturnValue":"{Category}","Target":{"EntitySet":"ProductCategories","Service":"/ESPM/Services/ESPM.service"}}},{"Target":"","Value":"{Price}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ProductPrice","IsEditable":true,"Caption":"Price"},{"Target":"","Value":"{CurrencyCode}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ProductCurrencyCode","IsEditable":false,"Caption":"Currency","Styles":{"Value":"read-only"}}],"Target":"","Caption":"Product","Visible":true},{"Controls":[{"Target":"","Value":"{DimensionHeight}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ProductHeight","IsEditable":true,"IsVisible":true,"Caption":"Height","PlaceHolder":"value"},{"Target":"","Value":"{DimensionWidth}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ProductWidth","IsEditable":true,"IsVisible":true,"Caption":"Width","PlaceHolder":"value"},{"Target":"","Value":"{DimensionDepth}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ProductDepth","IsEditable":true,"IsVisible":true,"Caption":"Depth"},{"Target":"","Value":"{DimensionUnit}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ProductDimensionUnit","IsEditable":true,"IsVisible":true,"Caption":"Unit","PlaceHolder":"value"}],"Target":"","Caption":"Dimensions","Visible":true},{"Controls":[{"Target":"","Value":"{Weight}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ProductWeight","IsEditable":true,"IsVisible":true,"Caption":"Weight","PlaceHolder":"value"},{"Target":"","Value":"{WeightUnit}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"ProductWeightUnit","IsEditable":true,"IsVisible":true,"Caption":"Unit","PlaceHolder":"value"}],"Target":"","Caption":"Weight","Visible":true},{"Controls":[{"Target":"","Value":"{SupplierDetails_SupplierId}","_Type":"Control.Type.FormCell.ListPicker","_Name":"productSupplierID","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Supplier","PickerPrompt":"Choose Supplier","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"Search":{"Enabled":true,"BarcodeScanner":true,"MinimumCharacterThreshold":3},"PickerItems":{"DisplayValue":"{SupplierId} - {SupplierName}","ReturnValue":"{SupplierId}","Target":{"EntitySet":"Suppliers","Service":"/ESPM/Services/ESPM.service"}}}],"Target":"","Caption":"Supplier","Visible":true}]}],"Target":"","_Type":"Page","_Name":"Products_Edit","Caption":"$(L,'update_product')","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"OnPress":"/ESPM/Actions/CloseModalPage_Cancel.action","Text":""},{"Target":"","_Name":"ActionBarItem1","SystemItem":"Save","Position":"right","IsIconCircular":false,"OnPress":"/ESPM/Actions/Products/Products_UpdateEntity.action","Text":""}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Products/Products_List.page":
/*!******************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Products/Products_List.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"$(L,'products')","Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{ShortDescription}","DetailImage":"{PictureUrl}","DetailImageIsCircular":false,"Icons":[],"OnPress":"/ESPM/Actions/Products/NavToProducts_Detail.action","StatusImage":"","Title":"{Name}","Footnote":"{CategoryName}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{ProductId}","SubstatusText":""},"Search":{"Enabled":true,"Placeholder":"$(L,'search')","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"Target":{"EntitySet":"Products","Service":"/ESPM/Services/ESPM.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_List"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Create.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Create.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer","Sections":[{"Controls":[{"Value":"/ESPM/Rules/PurchaseOrders/PurchaseOrders_GenerateNextPOId.js","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"poIdPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"PurchaseOrder ID","PlaceHolder":"value"},{"validationProperties":{"ValidationMessage":"Supplier cannot be empty","ValidationMessageColor":"d1722e","SeparatorBackgroundColor":"000000","SeparatorIsHidden":false,"ValidationViewBackgroundColor":"0000ffff","ValidationViewIsHidden":true},"_Type":"Control.Type.FormCell.ListPicker","_Name":"supplierPkr","AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Supplier","PickerPrompt":"Choose Supplier from","OnValueChange":"/ESPM/Rules/PurchaseOrders/PurchaseOrderCreate_OnValueChange.js","IsPickerDismissedOnSelection":true,"PickerItems":{"DisplayValue":"{SupplierId} - {SupplierName}","ReturnValue":"{SupplierId}","Target":{"EntitySet":"Suppliers","Service":"/ESPM/Services/ESPM.service","UniqueIdType":"Integer"}}}],"Target":"","Visible":true}]}],"Target":"","_Type":"Page","_Name":"PurchaseOrders_Create","Caption":"$(L,'create_purchase_order')","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"OnPress":"/ESPM/Actions/CloseModalPage_Cancel.action","Text":""},{"Target":"","_Name":"ActionBarItem1","SystemItem":"Save","Position":"right","IsIconCircular":false,"OnPress":"/ESPM/Actions/PurchaseOrders/PurchaseOrderCreate_CheckRequiredFields.action","Text":""}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_CreateItem.page":
/*!************************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_CreateItem.page ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer","Sections":[{"Controls":[{"Target":"","Value":"{PurchaseOrderId}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"poIdPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"PurchaseOrder ID","PlaceHolder":"value"},{"Target":"","validationProperties":{"ValidationMessage":"Select a Product from list","ValidationMessageColor":"d1722e","SeparatorBackgroundColor":"000000","SeparatorIsHidden":false,"ValidationViewBackgroundColor":"0000ffff","ValidationViewIsHidden":true},"_Type":"Control.Type.FormCell.ListPicker","_Name":"productPkr","AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Product","PickerPrompt":"Select Product","OnValueChange":"/ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"PickerItems":{"DisplayValue":"{ProductId} - {Name}","ReturnValue":"{ProductId}","Target":{"EntitySet":"Products","Service":"/ESPM/Services/ESPM.service","UniqueIdType":"Integer"}}},{"Target":"","Value":["1"],"_Type":"Control.Type.FormCell.ListPicker","_Name":"quantityPkr","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Quantity","PickerPrompt":"Pick Quantity","OnValueChange":"/ESPM/Rules/PurchaseOrders/PurchaseOrders_DataOnValueChange.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"PickerItems":["1","2","3","4","5","6","7","8","9","10"]},{"_Type":"Control.Type.FormCell.SimpleProperty","Target":"","_Name":"quantityUnit","IsEditable":false,"IsVisible":true,"Styles":{"Value":"read-only"},"Caption":"Quantity Unit"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"currencyPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"Currency Code"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"netAmtPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"Net Amount"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"taxPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"Tax"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"grossAmtPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"Gross Amount"}],"Target":"","Visible":true}]}],"Target":"","_Type":"Page","_Name":"PurchaseOrders_CreateItem","Caption":"$(L,'create_purchase_order_item')","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"OnPress":"/ESPM/Actions/CloseModalPage_Cancel.action","Text":"Item"},{"Target":"","_Name":"ActionBarItem1","SystemItem":"Save","Position":"right","IsIconCircular":false,"OnPress":"/ESPM/Actions/PurchaseOrders/PurchaseOrderItemCreate_CheckRequiredFields.action","Text":"Item"}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Detail.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_Detail.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"DetailImage":"sap-icon://customer-and-supplier","Subhead":"{SupplierDetails/SupplierName}","StatusText":"Gross Amt: $(N,{GrossAmount},'',{minimumIntegerDigits:1,minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:true})","SubstatusText":"{CurrencyCode}","HeadlineText":"{PurchaseOrderId}","Tags":[],"Target":""},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0"},{"Row":{"Items":[{"Target":"","NumberOfLines":1,"Text":"{ProductDetails_ProductId}"},{"Target":"","NumberOfLines":1,"Text":"{Quantity} {QuantityUnit}"},{"Target":"","NumberOfLines":1,"Text":"$(C,{NetAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"$(C,{TaxAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"{CurrencyCode}"}],"Layout":{"ColumnWidthPercentage":[0.2,-1,0.15,0.15,0.15,0.15]},"AccessoryType":"none"},"_Type":"Section.Type.GridTable","DataSubscriptions":["PurchaseOrderItems"],"Target":{"EntitySet":"PurchaseOrderItems","QueryOptions":"$filter=Header_PurchaseOrderId eq '{PurchaseOrderId}'","Service":"/ESPM/Services/ESPM.service"},"_Name":"SectionGridTable0","Header":{"Caption":"Items","Grid":{"Items":[{"Target":"","NumberOfLines":1,"Text":"Product ID"},{"Target":"","NumberOfLines":1,"Text":"Quantity"},{"Target":"","NumberOfLines":1,"Text":"Net Amt","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"Tax Amt","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"Gross Amt","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"Currency"}]},"UseTopPadding":true},"EmptySection":{"Caption":"$(L,'no_order')","FooterVisible":false}}]}],"Target":"","_Type":"Page","_Name":"PurchaseOrders_Detail","Caption":"$(L,'purchase_order_details')","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","Position":"right","IsIconCircular":false,"OnPress":"/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_CreateItem.action","Text":"Add Item"}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_List.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/PurchaseOrders/PurchaseOrders_List.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/ESPM/Services/ESPM.service","EntitySet":"PurchaseOrderHeaders","QueryOptions":"$expand=SupplierDetails,Items"},"_Name":"SectionObjectTable0","EmptySection":{"FooterVisible":false},"ObjectCell":{"DetailImage":"sap-icon://customer-and-supplier","Title":"{PurchaseOrderId}","Subhead":"{SupplierDetails/SupplierName}","Footnote":"{CurrencyCode}","Description":"Gross Amt: $(N,{GrossAmount},'',{minimumIntegerDigits:1,minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:true})","StatusText":"$(N,{NetAmount},'',{minimumIntegerDigits:1,minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:true})","SubstatusText":"$(N,{TaxAmount},'',{minimumIntegerDigits:1,minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:true})","DetailImageIsCircular":false,"PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","OnPress":"/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action"},"Search":{"Enabled":true,"Placeholder":"$(L,'search')","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3}}]}],"Target":"","_Type":"Page","_Name":"PurchaseOrders_List","Caption":"$(L,'purchase_orders')","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","SystemItem":"Add","Position":"right","IsIconCircular":false,"OnPress":"/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Create.action","Text":""}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Create.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Create.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer","Sections":[{"Controls":[{"Value":"/ESPM/Rules/SalesOrders/SalesOrders_GenerateNextSOId.js","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"SOIdPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"SalesOrder Id","PlaceHolder":"value"},{"validationProperties":{"ValidationMessage":"Customer cannot be empty","ValidationMessageColor":"d1722e","SeparatorBackgroundColor":"000000","SeparatorIsHidden":false,"ValidationViewBackgroundColor":"0000ffff","ValidationViewIsHidden":true},"_Type":"Control.Type.FormCell.ListPicker","_Name":"customerPkr","AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Customer","PickerPrompt":"Choose Customer from","OnValueChange":"/ESPM/Rules/SalesOrders/SalesOrderCreate_OnValueChange.js","IsPickerDismissedOnSelection":true,"PickerItems":{"DisplayValue":"{FirstName}, {LastName}","ReturnValue":"{CustomerId}","Target":{"EntitySet":"Customers","Service":"/ESPM/Services/ESPM.service","UniqueIdType":"Integer"}}}],"Target":"","Visible":true}]}],"Target":"","_Type":"Page","_Name":"SalesOrders_Create","Caption":"$(L,'create_sales_order')","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"OnPress":"/ESPM/Actions/CloseModalPage_Cancel.action","Text":""},{"Target":"","_Name":"ActionBarItem1","SystemItem":"Save","Position":"right","IsIconCircular":false,"OnPress":"/ESPM/Actions/SalesOrders/SalesOrderCreate_CheckRequiredFields.action","Text":""}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_CreateItem.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_CreateItem.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer","Sections":[{"Controls":[{"Target":"","Value":"{SalesOrderId}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"SOIdPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"SalesOrder Id","PlaceHolder":"value"},{"Target":"","validationProperties":{"ValidationMessage":"Select a Product from list","ValidationMessageColor":"d1722e","SeparatorBackgroundColor":"000000","SeparatorIsHidden":false,"ValidationViewBackgroundColor":"0000ffff","ValidationViewIsHidden":true},"_Type":"Control.Type.FormCell.ListPicker","_Name":"productPkr","AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Product","PickerPrompt":"Select Product","OnValueChange":"/ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js","IsPickerDismissedOnSelection":true,"PickerItems":{"DisplayValue":"{ProductId} - {Name}","ReturnValue":"{ProductId}","Target":{"EntitySet":"Products","Service":"/ESPM/Services/ESPM.service","UniqueIdType":"Integer"}}},{"Target":"","Value":["1"],"_Type":"Control.Type.FormCell.ListPicker","_Name":"quantityPkr","IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Quantity","PickerPrompt":"Pick Quantity","OnValueChange":"/ESPM/Rules/SalesOrders/SalesOrders_DataOnValueChange.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"PickerItems":["1","2","3","4","5","6","7","8","9","10"]},{"_Type":"Control.Type.FormCell.SimpleProperty","Target":"","_Name":"quantityUnit","IsEditable":false,"IsVisible":true,"Styles":{"Value":"read-only"},"Caption":"Quantity Unit"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"pricePrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"Unit Price"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"currencyPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"Currency Code"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"netAmtPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"Net Amount"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"taxPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"Tax"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"grossAmtPrp","IsEditable":false,"Styles":{"Value":"read-only"},"Caption":"Gross Amount"}],"Target":"","Visible":true}]}],"Target":"","_Type":"Page","_Name":"SalesOrders_CreateItem","Caption":"Create Sales Order Item","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"OnPress":"/ESPM/Actions/CloseModalPage_Cancel.action","Text":"Item"},{"Target":"","_Name":"ActionBarItem1","SystemItem":"Save","Position":"right","IsIconCircular":false,"OnPress":"/ESPM/Actions/SalesOrders/SalesOrderItemCreate_CheckRequiredFields.action","Text":"Item"}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Detail.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_Detail.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"DetailImage":"sap-icon://sales-order","Subhead":"{CustomerDetails/FirstName}, {CustomerDetails/LastName}","StatusText":"$(C,{NetAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","SubstatusText":"$(C,{TaxAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","HeadlineText":"{SalesOrderId}","Tags":[],"Target":""},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0"},{"Row":{"Items":[{"Target":"","NumberOfLines":1,"Text":"{ProductDetails_ProductId}"},{"Target":"","NumberOfLines":1,"Text":"{Quantity} {QuantityUnit}"},{"Target":"","NumberOfLines":1,"Text":"$(C,{NetAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"$(C,{TaxAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"$(D,{DeliveryDate},'','',{format:'medium'})"}],"Layout":{"ColumnWidthPercentage":[0.2,0.15,0.15,0.15,0.15,0.2]},"AccessoryType":"none"},"_Type":"Section.Type.GridTable","DataSubscriptions":["SalesOrderItems"],"Target":{"EntitySet":"SalesOrderItems","Service":"/ESPM/Services/ESPM.service","QueryOptions":"$filter=Header_SalesOrderId eq '{SalesOrderId}'"},"_Name":"SectionGridTable0","Header":{"Grid":{"Items":[{"Target":"","NumberOfLines":1,"Text":"Product ID"},{"Target":"","NumberOfLines":1,"Text":"Quantity"},{"Target":"","NumberOfLines":1,"Text":"Net Amt","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"Tax Amt","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"Gross Amt","TextAlignment":"right"},{"Target":"","NumberOfLines":1,"Text":"Delivery Date"}]},"UseTopPadding":true},"EmptySection":{"Caption":"$(L,'no_order')","FooterVisible":false}}]}],"Target":"","_Type":"Page","_Name":"SalesOrders_Detail","Caption":"$(L,'sales_orders_details')","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","Position":"right","IsIconCircular":false,"OnPress":"/ESPM/Actions/SalesOrders/NavToSalesOrders_CreateItem.action","Text":"Add Item"}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_List.page":
/*!************************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/SalesOrders/SalesOrders_List.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/ESPM/Services/ESPM.service","EntitySet":"SalesOrderHeaders","QueryOptions":"$expand=CustomerDetails,Items"},"_Name":"SectionObjectTable0","EmptySection":{"FooterVisible":false},"ObjectCell":{"DetailImage":"sap-icon://sales-order","Title":"{SalesOrderId}","Subhead":"{CustomerDetails/FirstName}, {CustomerDetails/LastName}","Footnote":"{CurrencyCode}","Description":"Gross Amt: $(N,{GrossAmount},'',{minimumFractionDigits:2, maximumFractionDigits:2, useGrouping:true})","StatusText":"$(N,{NetAmount},'',{minimumFractionDigits:2, maximumFractionDigits:2, useGrouping:true})","SubstatusText":"$(N,{TaxAmount},'',{minimumFractionDigits:2, maximumFractionDigits:2, useGrouping:true})","DetailImageIsCircular":false,"PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","OnPress":"/ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action"},"Search":{"Enabled":true,"Placeholder":"$(L,'search')","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3}}]}],"Target":"","_Type":"Page","_Name":"SalesOrders_List","Caption":"$(L,'sales_orders')","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","SystemItem":"Add","Position":"right","IsIconCircular":false,"OnPress":"/ESPM/Actions/SalesOrders/NavToSalesOrders_Create.action","Text":""}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Suppliers/Suppliers_Detail.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Suppliers/Suppliers_Detail.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Supplier Details","Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"/ESPM/Rules/Suppliers/Suppliers_Image.js","DetailImageIsCircular":true,"HeadlineText":"{SupplierName}","Subhead":"{SupplierId}","Tags":[],"BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Address","Value":"{Street}"},{"KeyName":"City","Value":"{City}"},{"KeyName":"Postal Code","Value":"{PostalCode}"},{"KeyName":"Country","Value":"{Country}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Type":"Section.Type.KeyValue"},{"EmptySection":{"Caption":"$(L,'no_order')"},"Header":{"Grid":{"Items":[{"NumberOfLines":1,"Text":"PurchaseOrder ID"},{"NumberOfLines":1,"Text":"Net Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Taxes","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Gross Amt","TextAlignment":"right"},{"NumberOfLines":1,"Text":"Currency"}]},"UseTopPadding":true},"Row":{"AccessoryType":"none","Items":[{"NumberOfLines":1,"Text":"{PurchaseOrderId}"},{"NumberOfLines":1,"Text":"$(C,{NetAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"$(C,{TaxAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"$(C,{GrossAmount},{CurrencyCode},'',{minimumFractionDigits:2,useGrouping:true})","TextAlignment":"right"},{"NumberOfLines":1,"Text":"{CurrencyCode}"}],"Layout":{"ColumnWidthPercentage":[0.25,0.15,0.15,0.15,0.15]},"OnPress":"/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action"},"Target":{"EntitySet":"PurchaseOrderHeaders","QueryOptions":"$filter=SupplierDetails_SupplierId eq '{SupplierId}'","Service":"/ESPM/Services/ESPM.service"},"_Name":"SectionGridTable","_Type":"Section.Type.GridTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Suppliers_Detail"}

/***/ }),

/***/ "./build.definitions/ESPM/Pages/Suppliers/Suppliers_List.page":
/*!********************************************************************!*\
  !*** ./build.definitions/ESPM/Pages/Suppliers/Suppliers_List.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Suppliers","Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"","DetailImage":"/ESPM/Rules/Suppliers/Suppliers_Image.js","DetailImageIsCircular":true,"Icons":[],"OnPress":"/ESPM/Actions/Suppliers/NavToSuppliers_Detail.action","StatusImage":"","Title":"{SupplierName}","Footnote":"{#Property:City}, {#Property:Country} - {#Property:PostalCode}","PreserveIconStackSpacing":true,"StatusText":"{PhoneNumber}","Subhead":"{SupplierId}","SubstatusText":"{EmailAddress}"},"Search":{"Enabled":true,"Placeholder":"$(L,'search')","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"Target":{"EntitySet":"Suppliers","Service":"/ESPM/Services/ESPM.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Suppliers_List"}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"ESPM","Version":"/ESPM/Globals/AppDefinition_Version.global","MainPage":"/ESPM/Pages/Overview.page","OnLaunch":["/ESPM/Actions/Service/Initialize.action"],"OnWillUpdate":"/ESPM/Rules/OnWillUpdate.js","OnDidUpdate":"/ESPM/Actions/Service/Initialize.action","Styles":"/ESPM/Styles/Styles.less","Localization":"/ESPM/i18n/i18n.properties","StyleSheets":{"Styles":{"css":"/ESPM/Styles/Styles.css","ios":"/ESPM/Styles/Styles.nss","android":"/ESPM/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/CloseModalPage_Cancel.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/CloseModalPage_Cancel.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/CloseModalPage_Complete.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/CloseModalPage_Complete.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/ClosePage.action":
/*!*********************************************************!*\
  !*** ./build.definitions/ESPM/Actions/ClosePage.action ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/CreateEntityFailureMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/CreateEntityFailureMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/CreateEntitySuccessMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/CreateEntitySuccessMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/ESPM/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Customers/NavToCustomers_Detail.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Customers/NavToCustomers_Detail.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Customers/Customers_Detail.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Customers/NavToCustomers_List.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Customers/NavToCustomers_List.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Customers/Customers_List.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/DeleteEntityFailureMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/DeleteEntityFailureMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/DeleteEntitySuccessMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/DeleteEntitySuccessMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/ESPM/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Logout.action":
/*!******************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Logout.action ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/LogoutMessage.action":
/*!*************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/LogoutMessage.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"CancelCaption":"No","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","OKCaption":"Yes","OnOK":"/ESPM/Rules/ResetAppSettingsAndLogout.js","Title":"Logout","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Products/NavToProducts_Detail.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Products/NavToProducts_Detail.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Products/Products_Detail.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Products/NavToProducts_Edit.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Products/NavToProducts_Edit.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ESPM/Pages/Products/Products_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Products/NavToProducts_List.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Products/NavToProducts_List.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Products/Products_List.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Products/Products_UpdateEntity.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Products/Products_UpdateEntity.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Products","Service":"/ESPM/Services/ESPM.service","ReadLink":"{@odata.readLink}"},"Properties":{"Category":"#Control:ProductCategory/#SelectedValue","CategoryName":"#Control:ProductCategory/#SelectedValue","CurrencyCode":"#Control:ProductCurrencyCode/#Value","DimensionDepth":"#Control:ProductDepth/#Value","DimensionHeight":"#Control:ProductHeight/#Value","DimensionUnit":"#Control:ProductDimensionUnit/#Value","DimensionWidth":"#Control:ProductWidth/#Value","Name":"#Control:ProductName/#Value","Price":"#Control:ProductPrice/#Value","ShortDescription":"#Control:ProductDescription/#Value","Weight":"#Control:ProductWeight/#Value","WeightUnit":"#Control:ProductWeightUnit/#Value","SupplierDetails_SupplierId":"/ESPM/Rules/Products/ProductEdit_GetSupplier.js"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"ShowActivityIndicator":true,"OnSuccess":"/ESPM/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/ESPM/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Create.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Create.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ESPM/Pages/PurchaseOrders/PurchaseOrders_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_CreateItem.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_CreateItem.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ESPM/Pages/PurchaseOrders/PurchaseOrders_CreateItem.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_Detail.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/PurchaseOrders/PurchaseOrders_Detail.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_List.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/NavToPurchaseOrders_List.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/PurchaseOrders/PurchaseOrders_List.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrderCreate_CheckRequiredFields.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrderCreate_CheckRequiredFields.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.CheckRequiredFields","OnFailure":"/ESPM/Rules/PurchaseOrders/PurchaseOrderCreate_RequiredFields.js","OnSuccess":"/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateEntity.action","RequiredFields":["supplierPkr"]}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrderItemCreate_CheckRequiredFields.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrderItemCreate_CheckRequiredFields.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.CheckRequiredFields","OnFailure":"/ESPM/Rules/PurchaseOrders/PurchaseOrderCreate_RequiredFields.js","OnSuccess":"/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateItemEntity.action","RequiredFields":["productPkr"]}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateEntity.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateEntity.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/ESPM/Actions/CreateEntityFailureMessage.action","OnSuccess":"/ESPM/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"EUR","PurchaseOrderId":"#Control:poIdPrp/#Value","SupplierDetails_SupplierId":"#Control:supplierPkr/#SelectedValue"},"Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/ESPM/Services/ESPM.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateItemEntity.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_CreateItemEntity.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateRelatedEntity","ActionResult":{"_Name":"create"},"OnFailure":"/ESPM/Actions/CreateEntityFailureMessage.action","OnSuccess":"/ESPM/Rules/PurchaseOrders/PurchaseOrders_UpdateHeaderAmounts.js","Target":{"EntitySet":"PurchaseOrderItems","Service":"/ESPM/Services/ESPM.service"},"ParentLink":{"Property":"Items","Target":{"EntitySet":"PurchaseOrderHeaders","ReadLink":"{@odata.readLink}"}},"Properties":{"CurrencyCode":"#Control:currencyPrp/#Value","GrossAmount":"#Control:grossAmtPrp/#Value","NetAmount":"#Control:netAmtPrp/#Value","ProductDetails_ProductId":"#Control:productPkr/#SelectedValue","Header_PurchaseOrderId":"#Control:poIdPrp/#Value","Quantity":"#Control:quantityPkr/#SelectedValue","QuantityUnit":"#Control:quantityUnit/#Value","TaxAmount":"#Control:taxPrp/#Value"}}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_UpdateAmount.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/PurchaseOrders/PurchaseOrders_UpdateAmount.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PurchaseOrderHeaders","ReadLink":"PurchaseOrderHeaders('{purchaseOrderId}')","Service":"/ESPM/Services/ESPM.service"},"Properties":{"GrossAmount":"{grossAmt}","NetAmount":"{netAmt}","TaxAmount":"{taxAmt}"},"ActionResult":{"_Name":"update"},"ShowActivityIndicator":true,"OnFailure":"/ESPM/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/ESPM/Actions/UpdateEntitySuccessMessage.action"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Create.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Create.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ESPM/Pages/SalesOrders/SalesOrders_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_CreateItem.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_CreateItem.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/ESPM/Pages/SalesOrders/SalesOrders_CreateItem.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_Detail.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/SalesOrders/SalesOrders_Detail.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_List.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/NavToSalesOrders_List.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/SalesOrders/SalesOrders_List.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrderCreate_CheckRequiredFields.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/SalesOrderCreate_CheckRequiredFields.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.CheckRequiredFields","OnFailure":"/ESPM/Rules/SalesOrders/SalesOrderCreate_CheckRequired.js","OnSuccess":"/ESPM/Actions/SalesOrders/SalesOrders_CreateEntity.action","RequiredFields":["customerPkr"]}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrderItemCreate_CheckRequiredFields.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/SalesOrderItemCreate_CheckRequiredFields.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.CheckRequiredFields","OnFailure":"/ESPM/Rules/SalesOrders/SalesOrderCreate_CheckRequired.js","OnSuccess":"/ESPM/Actions/SalesOrders/SalesOrders_CreateItemEntity.action","RequiredFields":["productPkr"]}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateEntity.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateEntity.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/ESPM/Actions/CreateEntityFailureMessage.action","OnSuccess":"/ESPM/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"EUR","SalesOrderId":"#Control:SOIdPrp/#Value","CustomerDetails_CustomerId":"#Control:customerPkr/#SelectedValue","LifeCycleStatus":"N","LifeCycleStatusName":"New"},"Target":{"EntitySet":"SalesOrderHeaders","Service":"/ESPM/Services/ESPM.service"},"ActionResult":{"_Name":"create"},"ShowActivityIndicator":true,"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateItemEntity.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_CreateItemEntity.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateRelatedEntity","ActionResult":{"_Name":"create"},"OnFailure":"/ESPM/Actions/CreateEntityFailureMessage.action","OnSuccess":"/ESPM/Rules/SalesOrders/SalesOrders_UpdateHeaderAmounts.js","ShowActivityIndicator":true,"Target":{"EntitySet":"SalesOrderItems","Service":"/ESPM/Services/ESPM.service"},"ParentLink":{"Property":"Items","Target":{"EntitySet":"SalesOrderHeaders","ReadLink":"{@odata.readLink}"}},"Properties":{"CurrencyCode":"#Control:currencyPrp/#Value","DeliveryDate":"/ESPM/Rules/SalesOrders/SalesOrders_GenerateDeliveryDate.js","GrossAmount":"#Control:grossAmtPrp/#Value","Header_SalesOrderId":"#Control:SOIdPrp/#Value","NetAmount":"#Control:netAmtPrp/#Value","ProductDetails_ProductId":"#Control:productPkr/#SelectedValue","Quantity":"#Control:quantityPkr/#SelectedValue","QuantityUnit":"#Control:quantityUnit/#Value","TaxAmount":"#Control:taxPrp/#Value"}}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_UpdateAmount.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/SalesOrders/SalesOrders_UpdateAmount.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"SalesOrderHeaders","ReadLink":"SalesOrderHeaders('{salesOrderId}')","Service":"/ESPM/Services/ESPM.service"},"Properties":{"GrossAmount":"{grossAmt}","NetAmount":"{netAmt}","TaxAmount":"{taxAmt}"},"ActionResult":{"_Name":"update"},"ShowActivityIndicator":true,"OnFailure":"/ESPM/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/ESPM/Actions/UpdateEntitySuccessMessage.action"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Service/Initialize.action":
/*!******************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Service/Initialize.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/ESPM/Services/ESPM.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/ESPM/Rules/Service/InitializeSuccess.js","OnFailure":"/ESPM/Actions/Service/InitializeFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Service/InitializeFailureMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Service/InitializeFailureMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Service/InitializeSuccessMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Service/InitializeSuccessMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_Detail.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_Detail.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Suppliers/Suppliers_Detail.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_List.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/Suppliers/NavToSuppliers_List.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/ESPM/Pages/Suppliers/Suppliers_List.page"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/UpdateEntityFailureMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/UpdateEntityFailureMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Actions/UpdateEntitySuccessMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/ESPM/Actions/UpdateEntitySuccessMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/ESPM/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/ESPM/Globals/AppDefinition_Version.global":
/*!*********************************************************************!*\
  !*** ./build.definitions/ESPM/Globals/AppDefinition_Version.global ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/ESPM/Services/ESPM.service":
/*!******************************************************!*\
  !*** ./build.definitions/ESPM/Services/ESPM.service ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"../service/ESPM","OfflineEnabled":false,"LanguageURLParam":"sap-language","PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/ESPM/Styles/Styles.json":
/*!***************************************************!*\
  !*** ./build.definitions/ESPM/Styles/Styles.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"read-only":{"font-color":"#8f8f8f"}}');

/***/ }),

/***/ "./build.definitions/ESPM/jsconfig.json":
/*!**********************************************!*\
  !*** ./build.definitions/ESPM/jsconfig.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map