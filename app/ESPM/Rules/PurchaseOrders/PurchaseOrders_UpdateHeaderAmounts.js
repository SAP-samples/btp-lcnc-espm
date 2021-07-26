import libCommon from '../Library/CommonLibrary'

export default function PurchaseOrders_UpdateHeaderAmounts(clientAPI) {
	var netAmt = 0;
	var taxAmt = 0;
	var grossAmt = 0;
	try {
		var purchaseOrderId = clientAPI.evaluateTargetPath('#Property:PurchaseOrderId');
		const serviceName = "/ESPM/Services/ESPM.service";
		const entitySet = "PurchaseOrderItems";
		const properties = [];
		let queryOptions = encodeURI("$filter=Header_PurchaseOrderId eq '" + purchaseOrderId + "'");
		let POItemList = libCommon.getEntitySetData(clientAPI, serviceName, entitySet, properties, queryOptions);
		
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
