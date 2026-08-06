import type { FC } from "react";
import type { ProductModel } from "../../models/ProductModel";
import "./ProductComponent.css";

type ProductType = {
    product: ProductModel;
};

const ProductComponent: FC<ProductType> = ({ product }) => {
    return (
        <div className="product">
            <div className="product-main">
                <h2>{product.title}</h2>
                <p>ID: {product.id}</p>
            </div>
            <div className="product-image">
                <img src={product.thumbnail} alt={product.title} width={200}/>
            </div>
            <div className="product-info">
                <p><b>Description:</b> {product.description}</p>
                <p><b>Category:</b> {product.category}</p>
                <p><b>Brand:</b> {product.brand}</p>
                <p><b>SKU:</b> {product.sku}</p>
            </div>
            <div className="product-price">
                <p><b>Price:</b> ${product.price}</p>
                <p><b>Discount:</b> {product.discountPercentage}%</p>
                <p><b>Rating:</b> {product.rating}</p>
                <p><b>Stock:</b> {product.stock}</p>
            </div>
            <div className="product-dimensions">
                <h3>Dimensions</h3>
                <ul>
                    <li>Width: {product.dimensions.width}</li>
                    <li>Height: {product.dimensions.height}</li>
                    <li>Depth: {product.dimensions.depth}</li>
                </ul>
            </div>
            <div className="product-tags">
                <h3>Tags</h3>
                <ul>{product.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>))}
                </ul>
            </div>
            <div className="product-reviews">
                <h3>Reviews</h3>
                {product.reviews.map((review, index) => (
                    <div key={index}>
                        <p><b>Name:</b> {review.reviewerName}</p>
                        <p><b>Rating:</b> {review.rating}</p>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
            <div className="product-shipping">
                <p><b>Shipping:</b> {product.shippingInformation}</p>
                <p><b>Warranty:</b> {product.warrantyInformation}</p>
                <p><b>Return policy:</b> {product.returnPolicy}</p>
                <p><b>Minimum order:</b> {product.minimumOrderQuantity}</p>
            </div>

        </div>
    );
};

export default ProductComponent;
