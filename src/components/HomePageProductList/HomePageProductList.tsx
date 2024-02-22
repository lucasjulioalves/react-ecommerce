import "./HomePageProductList.css";
import { Product } from "../../model/Product";
import ProductService from "../../service/Product.service";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePageProductList() {

    const [products, setProducts] = useState([] as Array<Product>);
    
    useEffect(() => {
        const getData = () => {
            if(products.length === 0) {
                const productService: ProductService = new ProductService();
                productService.findAll().then(res => setProducts(res)); 
            }
        }
        getData();
    },[])
    

    return (
        <div className="product-container">
            {products.map((product) => {
                return <Link to={`product/${product.id}`} key={product.id}>
                    <div className="product-item" >
                    <div className="product-item-img">
                        <img src={product.imgPath} />
                    </div>
                    <p className="product-item-title">{product.name}</p>
                    <p className="product-item-price">{product.price}</p>
                </div>
            </Link>
            })}
        </div>
    )
}

export default HomePageProductList;