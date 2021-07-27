namespace sap.ui.espm;

entity PurchaseOrderItems
{
    key Id : UUID
        @Core.Computed;
    CurrencyCode : String(5);
    GrossAmount : Decimal(15,3);
    NetAmount : Decimal(15,3);
    Quantity : Decimal(13,3);
    QuantityUnit : String(3);
    TaxAmount : Decimal(15,3);
    ProductDetails : Association to one Products;
    Header : Association to one PurchaseOrderHeaders;
}

entity SalesOrderItems
{
    key Id : UUID
        @Core.Computed;
    CurrencyCode : String(5);
    DeliveryDate : DateTime;
    GrossAmount : Decimal(15,3);
    NetAmount : Decimal(15,3);
    Quantity : Decimal(15,3);
    QuantityUnit : String(3);
    TaxAmount : Decimal(15,3);
    ProductDetails : Association to one Products;
    Header : Association to one SalesOrderHeaders;
}

entity Products
{
    Category : String(40);
    CategoryName : String(40);
    CurrencyCode : String(5);
    DimensionDepth : Decimal(13,4);
    DimensionHeight : Decimal(13,4);
    DimensionUnit : String(3);
    DimensionWidth : Decimal(13,4);
    LongDescription : String(255);
    Name : String;
    PictureUrl : String(255);
    Price : Decimal(23,3);
    key ProductId : String(10);
    QuantityUnit : String(3);
    ShortDescription : String(255);
    UpdatedTimestamp : DateTime;
    Weight : Decimal(13,3);
    WeightUnit : String(3);
    Picture : LargeBinary
        @Core.MediaType : 'image/jpeg';
    SupplierDetails : Association to one Suppliers;
}

entity PurchaseOrderHeaders
{
    CurrencyCode : String(5);
    GrossAmount : Decimal(15,3);
    NetAmount : Decimal(15,3);
    key PurchaseOrderId : String(10);
    TaxAmount : Decimal(15,3);
    SupplierDetails : Association to one Suppliers;
    Items : Association to many PurchaseOrderItems on Items.Header = $self;
}

entity ProductCategories
{
    key Category : String(40);
    CategoryName : String(40);
    MainCategory : String(40);
    MainCategoryName : String(40);
    NumberOfProducts : Integer64;
    UpdatedTimestamp : DateTime;
}

entity SalesOrderHeaders
{
    CreatedAt : DateTime;
    CurrencyCode : String(5);
    GrossAmount : Decimal(15,3);
    LifeCycleStatus : String(1) not null;
    LifeCycleStatusName : String(255) not null;
    NetAmount : Decimal(15,3);
    key SalesOrderId : String(10);
    TaxAmount : Decimal(15,3);
    CustomerDetails : Association to one Customers;
    Items : Association to many SalesOrderItems on Items.Header = $self;
}

entity ProductTexts
{
    key Id : Integer64;
    Language : String(2);
    LongDescription : String(255);
    Name : String;
    ProductId : String(10);
    ShortDescription : String(255);
}

entity Customers
{
    City : String(40);
    Country : String(3);
    key CustomerId : String(10);
    DateOfBirth : DateTime;
    EmailAddress : String(255);
    FirstName : String(40);
    HouseNumber : String(10);
    LastName : String(40);
    PhoneNumber : String(30);
    PostalCode : String(10);
    Street : String(60);
    UpdatedTimestamp : DateTime;
    SalesOrders : Association to many SalesOrderHeaders on SalesOrders.CustomerDetails = $self;
}

entity Stock
{
    LotSize : Decimal(13,3);
    MinStock : Decimal(13,3);
    key ProductId : String(255);
    Quantity : Decimal(13,3);
    QuantityLessMin : Boolean;
    UpdatedTimestamp : DateTime;
}

entity Suppliers
{
    City : String(40);
    Country : String(3);
    EmailAddress : String(255);
    HouseNumber : String(10);
    PhoneNumber : String(30);
    PostalCode : String(10);
    Street : String(60);
    key SupplierId : String(10);
    SupplierName : String(80);
    UpdatedTimestamp : DateTime;
    Products : Association to many Products on Products.SupplierDetails = $self;
}
