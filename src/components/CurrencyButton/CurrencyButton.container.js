import React, {PureComponent} from "react";
import CurrencyButton from "./CurrencyButton.component";
import { connect } from "react-redux";

class CurrencyButtonContainer extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isClicked: false,
            isHovering: false,
            isSelected: this.props.currency
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.getStateFromChild = this.getStateFromChild.bind(this);
        this.currencySwitcherUnmounts = this.currencySwitcherUnmounts.bind(this);
    }

    currencySwitcherUnmounts() {
        this.setState(() => ({
            isHovering: false
        }));
    }   

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));
    }

    handleMouseOver() {
        this.setState(() => ({
            isHovering: true
        }));
    }

    handleMouseOut() {
        this.setState(() => ({
            isHovering: false
        }));
    }

    getStateFromChild(value) {
        if (value !== undefined) {
            this.setState(() => ({
                isHovering: value
            }));
        } else {
            return null;
        }
    }

    render() {
        const { isClicked } = this.state;

        return ( 
            <CurrencyButton
                {...this.state}
                { ...this.props }
                currencySwitcherUnmounts={ this.currencySwitcherUnmounts }
                onClick={ this.handleClick }
                handleMouseOver = { this.handleMouseOver }
                handleMouseOut = { this.handleMouseOut }
                sendState = { this.getStateFromChild } 
            />
        );
    }
}

const mapStateToProps = state => ({
    currency: state.cart.currency
});

export default connect(mapStateToProps)(CurrencyButtonContainer);