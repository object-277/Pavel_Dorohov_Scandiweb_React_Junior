import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsInCart: localStorage.getItem("cartItems") 
        ? JSON.parse(localStorage.getItem("cartItems")) 
        : [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0
    },
    reducers: {
        setItemInCart: (state, action) => {
            const itemIndex = state.itemsInCart.findIndex(
                (product) => product.id === action.payload.id
            ); 
            if(itemIndex >= 0) {
                state.itemsInCart[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.itemsInCart.push(tempProduct);
            }
            
            localStorage.setItem("cartItems", JSON.stringify(state.itemsInCart));
        },
        removeItemInCart: (state, action) => {
            const stillInCart = state.itemsInCart.filter(
                (productInCart) => productInCart.id !== action.payload.id
            );
            state.itemsInCart = stillInCart;
            localStorage.setItem("cartItems", JSON.stringify(state.itemsInCart));
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.itemsInCart.findIndex(
                productInCart => productInCart.id === action.payload.id
            )
            if(state.itemsInCart[itemIndex].cartQuantity > 1) {
                state.itemsInCart[itemIndex].cartQuantity -= 1
            } else if(state.itemsInCart[itemIndex].cartQuantity === 1) {
                const stillInCart = state.itemsInCart.filter(
                    (productInCart) => productInCart.id !== action.payload.id
                );
                state.itemsInCart = stillInCart;
            }    
            localStorage.setItem("cartItems", JSON.stringify(state.itemsInCart));
        }
    }
});

export const { setItemInCart, removeItemInCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;