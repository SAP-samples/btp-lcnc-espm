
export default function Customers_Image(clientAPI) {
	var CustImagePath = '/ESPM/Images/cf';
	CustImagePath = String(CustImagePath) + String(clientAPI.evaluateTargetPath("#Property:CustomerId") % 12 + 1);
	CustImagePath = String(CustImagePath) + String('.png');
	console.log("Path->" + CustImagePath); 
	return CustImagePath;
}
