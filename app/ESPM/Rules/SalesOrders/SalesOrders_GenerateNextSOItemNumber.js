export default function SalesOrders_GenerateNextSOItemNumber(clientAPI) {
	let salesOrderId = clientAPI.evaluateTargetPath('#Property:SalesOrderId');
	let queryOptions = encodeURI("$filter=SalesOrderId eq '" + salesOrderId + "'");
	return clientAPI.read('/ESPM/Services/ESPM.service', 'SalesOrderItems', [],queryOptions).then((SOItemList) => {
    	let length = SOItemList.length;
    	console.log(`Calculating SOItemList length @ ${length}`)
		let nextItem = length;
    	nextItem++;
    	let nextId = nextItem * 10
		console.log(`Calculating next SOItem Number @ ${nextId}`)
    	return nextId.toString();
  });
}
