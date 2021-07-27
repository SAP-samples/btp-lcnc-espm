import libCommon from '../Library/CommonLibrary'

export default function SalesOrders_UpdateHeaderAmounts(clientAPI) {
	var netAmt = 0;
	var taxAmt = 0;
	var grossAmt = 0;

	try {
		var salesOrderId = clientAPI.evaluateTargetPath('#Property:SalesOrderId');
		const serviceName = "/ESPM/Services/ESPM.service";
		const entitySet = "SalesOrderItems";
		const properties = [];
		let queryOptions = encodeURI("$filter=Header_SalesOrderId eq '" + salesOrderId + "'");
		let SOItemList = libCommon.getEntitySetData(clientAPI, serviceName, entitySet, properties, queryOptions);
		
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
