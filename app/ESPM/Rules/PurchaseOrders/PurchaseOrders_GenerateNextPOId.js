export default function PurchaseOrders_GenerateNextPOId(clientAPI) {
	return clientAPI.read('/ESPM/Services/ESPM.service', 'PurchaseOrderHeaders', ['PurchaseOrderId']).then((POList) => {
    let length = POList.length;
    console.log(`Calculating POList length @ ${length}`)
    let nextId = Math.max.apply(Math, POList.map(function(item) { return item.PurchaseOrderId;}));
    nextId++;
    console.log(`Calculating next PurchaseOrderId @ ${nextId}`)
    return nextId.toString();
  });
}
