import libCommon from '../Library/CommonLibrary'

export default function PurchaseOrders_DataOnValueChange(clientAPI) {
    //Remove validation message
    clientAPI.setValidationProperty('ValidationViewIsHidden', true);
    clientAPI.redraw();

	const productPkr = clientAPI.evaluateTargetPathForAPI('#Page:PurchaseOrders_CreateItem/#Control:productPkr');
	const productId = productPkr.getValue()[0].ReturnValue;

  let qtyPkr = clientAPI.evaluateTargetPathForAPI("#Page:PurchaseOrders_CreateItem/#Control:quantityPkr");
	let qty = qtyPkr.getValue()[0].ReturnValue;
	
	return libCommon.retrieveProduct(clientAPI, productId).then(function(data) {
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
