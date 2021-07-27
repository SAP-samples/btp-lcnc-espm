import libCommon from '../Library/CommonLibrary'

export default function SalesOrders_DataOnValueChange(clientAPI) {
	//Remove validation message
	clientAPI.setValidationProperty('ValidationViewIsHidden', true);
	clientAPI.redraw();
    
	const productPkr = clientAPI.evaluateTargetPathForAPI('#Page:SalesOrders_CreateItem/#Control:productPkr');
	const productId = productPkr.getValue()[0].ReturnValue;

	let qtyPkr = clientAPI.evaluateTargetPathForAPI("#Page:SalesOrders_CreateItem/#Control:quantityPkr");
	let qty = qtyPkr.getValue()[0].ReturnValue;

	return libCommon.retrieveProduct(clientAPI, productId).then(function(data) {
		
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
