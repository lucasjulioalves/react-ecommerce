import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../model/Product";
import ProductService from "../../service/Product.service";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addToCart } from "../../store/cart/cartSlice";

function ProductDetailPage() {

    const [product, setProduct] = useState({} as Product)
    const dispatch = useDispatch<AppDispatch>();
    
    const params = useParams<{
        productId : string
    }>();
    
    useEffect(() => {
        const service = new ProductService();
        const productId = params.productId as string;
        service.findById(parseInt(productId)).then(res => setProduct(res[0]))
    },[params.productId])

    const addCart = (product: Product) => {
        dispatch(addToCart({
            product,
            amount: 1
        }));
        alert("added to cart")
    }
    return(<>
        <p>{product.id}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <img src={product.imgPath}/>
        <div>
            <button onClick={() => addCart(product)}>Add to Cart</button>
        </div>
        
    </>)
}

export default ProductDetailPage;