import { useSearchParams } from "react-router-dom";
import { ProductList } from "components/ProductList";
import { SearchBox } from "components/SearchBox";
import { getProducts } from "../productsApi";

const Products = () => {
    const products = getProducts();
    const [searchParams, setSearchParams] = useSearchParams();
    const productName = searchParams.get("name") ?? "";

    const visibleProducts = products.filter(product => {
        return product.name.toLowerCase().includes(productName.toLowerCase());
    }
    );

    const handleSearchChange = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    }

    return (
        <main>
            <h1>Products</h1>
            <SearchBox value={productName} onChange={handleSearchChange} />
            <ProductList products={visibleProducts} />
        </main>
    );
}

export default Products;
    