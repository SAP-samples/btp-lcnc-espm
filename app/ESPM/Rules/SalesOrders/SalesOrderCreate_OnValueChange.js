
var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SalesOrderCreate_OnValueChange(clientAPI) {
    clientAPI.setValidationProperty('ValidationViewIsHidden', true);
    clientAPI.redraw();
}
