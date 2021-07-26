export default function GenerateNextSOId(clientAPI) {
	return clientAPI.read('/ESPM/Services/ESPM.service', 'SalesOrderHeaders', ['SalesOrderId']).then((SOList) => {
    let length = SOList.length;
    console.log(`Calculating SOList length @ ${length}`)
    let nextId = Math.max.apply(Math, SOList.map(function(item) { return item.SalesOrderId;}));
    nextId++;
    console.log(`Calculating next SalesOrderId @ ${nextId}`)
    return nextId.toString();
  });
}