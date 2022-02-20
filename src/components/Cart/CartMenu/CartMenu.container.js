import React, { PureComponent } from "react";
import CartMenu from "./CartMenu.component";
import { connect } from "react-redux";
import { setItemInCart, decreaseQuantity } from "../../../redux/Cart/test.reducer";

class CartMenuContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.handleDecrease = this.handleDecrease.bind(this);
    };

    handleDecrease = (productInCart) => {
        this.props.decreaseQuantity(productInCart);
    };
    
    handleIncrease = (productInCart) => {
        this.props.setItemInCart(productInCart);
    };

    render() {
        return (
            <CartMenu
                { ...this.state }
                { ...this.props }
                decreaseAmount={ this.handleDecrease }
                increaseAmount ={ this.handleIncrease }
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        itemsInCart: state.cart.itemsInCart
    }
}

const mapDispatchToProps = { setItemInCart, decreaseQuantity };

export default connect(mapStateToProps, mapDispatchToProps)(CartMenuContainer);