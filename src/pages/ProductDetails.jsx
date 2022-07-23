import { useParams, useLocation, Link } from "react-router-dom";
import { getProductById } from "productsApi";

const ProductDetails = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/products";
    return (
        <main>
            <Link to={backLinkHref}>Back</Link>
            <h1>Product Details: {product.name}</h1>
        </main>
    );
}

export default ProductDetails;