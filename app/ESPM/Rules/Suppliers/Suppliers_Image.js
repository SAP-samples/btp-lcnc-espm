
export default function SupplierImage(clientAPI) {
	var ImagePath = '/ESPM/Images/sf';
	ImagePath = String(ImagePath) + String(clientAPI.evaluateTargetPath("#Property:SupplierId") % 12 + 1);
	ImagePath = String(ImagePath) + String('.png');
	console.log("Path->" + ImagePath); 
	return ImagePath;
}
