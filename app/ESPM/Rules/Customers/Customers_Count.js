import libCommon from '../Library/CommonLibrary'

export default function Customers_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "Customers";
	return libCommon.getEntitySetCount(clientAPI, serviceName, entitySet, ' ');                         
}
