import libCommon from '../Library/CommonLibrary'

export default function SalesOrders_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "SalesOrderHeaders";
	return libCommon.getEntitySetCount(clientAPI, serviceName, entitySet, ' ');   
}
