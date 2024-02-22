import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../model/Cart";
import { Product } from "../../model/Product";
import { ProductCart } from "../../model/ProductCart";

interface CartState {
    value: Cart;
}

const initialState : CartState =  {
    value: {
        products : []
    } as Cart
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (cart, action : PayloadAction<{
            amount: number,
            product: Product
        }>) => {
            const isAlreadyInserted = cart.value.products.filter(p => p.product.id === action.payload.product.id).length > 0;
            if(isAlreadyInserted) {
                for(const cartProduct of cart.value.products) {
                    if(action.payload.product.id === cartProduct.product.id) {
                        cartProduct.amount+=action.payload.amount;
                    }
                    
                }
            } else {
                cart.value.products.push({
                    amount: action.payload.amount,
                    product: action.payload.product
                } as ProductCart) 
            }
        },
    },
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;