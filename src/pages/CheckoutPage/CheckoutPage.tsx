import { useSelector } from "react-redux";
import "./CheckoutPage.css";
import { RootState } from "../../store/store";
function CheckoutPage() {

    const cart = useSelector((state: RootState) => state.cart.value);
    return (<>
        {cart.products.map((p) => {
            return (
                <div key={p.product.id}>
                    <p>Product: {p.product.name}</p>
                    <p>Price: $ {p.product.price}</p>
                    <p>Amount: {p.amount}</p>
                </div>
            )
        })}
    </>)
}

export default CheckoutPage;