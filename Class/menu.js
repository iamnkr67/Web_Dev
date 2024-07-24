const categories = [{
    id: "C1",
    categoryName: "Platters",
    superCategory: {
        superCategoryName: "South Indian",
        id: "SC1"
    }
}];

const menu = [{
    id: "item1",
    itemName: "Butter Roti",
    rate: 20,
    taxes: [
        {
            name: "Service Charge",
            rate: 10,
            isInPercent: false
        },
        {
            name: "GST",
            rate: 5,
            isInPercent: true
        }
    ],
    category: {
        categoryId: "C2"
    }
}];

const bill = {
    id: "B1",
    billNumber: 1,
    opentime: "06 Nov 2020 14:19",
    customerName: "CodeQuotient",
    billItems: [
        {
            id: "item2",
            quantity: 3,
            discount: {
                rate: 10,
                isInPercent: true
            }
        },
        {
            id: "item3",
            quantity: 5,
            discount: {
                rate: 10,
                isInPercent: false
            }
        }
    ]
};

module.exports = {
    categories,
    menu,
    bill
};
