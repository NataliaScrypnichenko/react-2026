import ProductsComponent from "../component/product/ProductsComponent.tsx";

const AuthResourcesPage = () => {

    return (
        <div>
            {/* ProductsComponent отримує авторизовані продукти.
                Перед запитом accessToken додається
                через axios interceptor. */}
            <ProductsComponent/>
        </div>
    );
};

export default AuthResourcesPage;
