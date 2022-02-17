import React, { PureComponent } from "react";
import ProductCard from "./ProductCard.component";
import { connect } from "react-redux";
import { setItemInCart } from "../../redux/Cart/test.reducer";
import { addItem, CartDispatcher } from "../../redux/Cart";

class ProductCardContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            price: [],
            isHovering: false
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = (product) => {
        this.props.setItemInCart(this.props.product);
    };
    
    handleMouseOver() {
        this.setState (() => ({
            isHovering: true
        }));
    }

    handleMouseOut() {
        this.setState (() => ({
            isHovering: false
        }));
    }

    componentDidMount() {
        this.getPrice();
    }

    getPrice() {
        const { prices } = this.props.product;

        switch (document.getElementById("Currency-Label").innerText) {
            case "£":
                this.setState({price: prices[1].amount})
                console.log(this.state.price);
                break;
                
            default:
                this.setState({price: prices[0].amount})
        }
    }

    render(){

        return(
            <ProductCard
                { ...this.props }
                { ...this.state }
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                onClick={this.handleClick}
            />
        );
    }
}

//const mapStateToProps = state => ({
    //cart: state.CartReducer.cart 
//});

//const mapDispatchToProps = dispatch => ({
  //  addItem: (product) => dispatch({
    //    type: "ADD_PRODUCT",
      //  product
    //})
//});

const mapStateToProps = state => ({
    itemsInCart: state.cart.itemsInCart
});

const mapDispatchToProps = { setItemInCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardContainer);
