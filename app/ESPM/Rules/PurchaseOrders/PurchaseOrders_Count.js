import libCommon from '../Library/CommonLibrary'

export default function PurchaseOrders_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "PurchaseOrderHeaders";
	return libCommon.getEntitySetCount(clientAPI, serviceName, entitySet, ' ');                         
}
