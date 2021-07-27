export default function ProductEdit_GetSupplier(clientAPI) {
  const supplierPkr = clientAPI.evaluateTargetPathForAPI('#Page:Products_Edit/#Control:productSupplierID');
  let value = supplierPkr.getValue();
  if (value && value.length > 0) {
    return supplierPkr.getValue()[0].ReturnValue;
  } else {
    return null;
  }
}