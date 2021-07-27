
var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SalesOrders_GenerateDeliveryDate(clientAPI) {
    //Delivery Date is 30 days from order placed.
    let deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 30);
    return deliveryDate;
}
