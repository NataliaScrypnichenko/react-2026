import type {FC} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";

type ProductType = {
    product: ProductModel;
}

const ProductComponent:FC<ProductType> =  ({product}) => {


    return (
        <div>
              <div>
                  <div>
                      <h1>{product.id} {' '} {product.title}</h1>
                      <p>description: {product.description}</p>
                      <ul>
                          {product.category}
                          <li></li>
                          <li></li>
                          <li></li>
                      </ul>

                  </div>

                  <div>

                  </div>











              </div>
        </div>
    );
};

export default ProductComponent;
