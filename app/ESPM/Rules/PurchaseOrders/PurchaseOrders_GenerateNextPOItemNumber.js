export default function PurchaseOrders_GenerateNextPOItemNumber(clientAPI) {
	let purchaseOrderId = clientAPI.evaluateTargetPath('#Property:PurchaseOrderId');
	let queryOptions = encodeURI("$filter=PurchaseOrderId eq '"+purchaseOrderId+"'");
	
	return clientAPI.read('/ESPM/Services/ESPM.service', 'PurchaseOrderItems', [],queryOptions).then((POItemList) => {
    let length = POItemList.length;
    console.log(`Calculating POItemList length @ ${length}`)
		let nextItem = length;
    nextItem++;
    let nextId = nextItem * 10
		console.log(`Calculating next POItem Number @ ${nextId}`)
    return nextId.toString();
  });
}