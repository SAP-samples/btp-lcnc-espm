export default class {
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
}