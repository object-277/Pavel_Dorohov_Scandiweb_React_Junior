import React, { PureComponent } from "react";
import "../CurrencyButton/CurrencyButton.style.scss";
import vector from "../CurrencyButton/Vector.svg";
import CurrencySwitcherContainer from "../CurrencySwitcher";

class CurrencyButton extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            currencySymbol: '$'
        };
        this.getSymbol = this.getSymbol.bind(this);
    }

    getSymbol(symbol) {
        this.setState(({currencySymbol: symbol}));
    }

    render() {
        const { onClick, isClicked } = this.props;
        
        return (
            <div>
                <div id="Currency-Label" >
                <p className="CurrencyButton-Symbol">{ this.state.currencySymbol }</p>
                </div>
                <img className="CurrencyButton" src={vector} alt="Select currency" onClick={ onClick } /> 
                { isClicked && <CurrencySwitcherContainer chosenCur={ this.getSymbol }/> }
            </div>
             
        );
    }

}

export default CurrencyButton;