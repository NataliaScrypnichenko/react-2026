// Модель одного продукту.
// Вона описує структуру об'єкта,
// який ми отримуємо від API DummyJSON.
export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Reviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
};

// Dimensions описує розміри продукту.
// Це вкладений об'єкт усередині IProduct.
export interface Dimensions {
    width: number;
    height: number;
    depth: number;
};

// Reviews описує один відгук про продукт.
// Оскільки відгуків може бути декілька,
// у IProduct використовується Reviews[].
export interface Reviews {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
};

// Meta описує додаткову службову інформацію
// про створення та оновлення продукту.
export interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
};
