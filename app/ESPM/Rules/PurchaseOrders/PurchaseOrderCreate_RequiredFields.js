
var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function PurchaseOrderCreate_RequiredFields(clientAPI) {

    let pageProxy = clientAPI.getPageProxy();
    let missingRequiredFields = pageProxy.getMissingRequiredControls();

     for (let control of missingRequiredFields) {
        control.setValidationProperty('ValidationViewIsHidden', false);
    }
    pageProxy.getControl('FormCellContainer').redraw();
}
