import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.types) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.product)
            }
            default:
                return state;
    }
}

export default cartReducer;