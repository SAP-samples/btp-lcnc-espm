using { sap.ui.espm as my } from '../db/schema';

@path: '/service/ESPM'
service ESPMService {
    entity PurchaseOrderItems as projection on my.PurchaseOrderItems;
    entity SalesOrderItems as projection on my.SalesOrderItems;
    entity Products as projection on my.Products;
    entity PurchaseOrderHeaders as projection on my.PurchaseOrderHeaders;
    entity ProductCategories as projection on my.ProductCategories;
    entity SalesOrderHeaders as projection on my.SalesOrderHeaders;
    entity ProductTexts as projection on my.ProductTexts;
    entity Customers as projection on my.Customers;
    entity Stock as projection on my.Stock;
    entity Suppliers as projection on my.Suppliers;
}
