import libCommon from '../Library/CommonLibrary'

export default function Products_Count(clientAPI) {
	let serviceName = "/ESPM/Services/ESPM.service";
	let entitySet = "Products";
	return libCommon.getEntitySetCount(clientAPI, serviceName, entitySet, ' ');                         
}
