import React, { PureComponent } from "react";
import "./CurrencySwitcher.style.scss";

class CurrencySwitcher extends PureComponent {
 
    renderCurrencyItem(currency, i) {
        const { symbol, label } = currency;
        const { setCurrency } = this.props;
        
        return (
            <div id="item" className="CurrencySwitcher-Item" key={ i } onClick={ () => setCurrency(symbol) }>
                <p className="CurrencySwitcher-Item-Symbol">{ symbol }</p>
                <p className="CurrencySwitcher-Item-Label">{ label }</p>
            </div>
        );
    }

    renderCurrencySwithcer() {
        const { currencies, handleMouseOver, handleMouseOut } = this.props;

        return (
            <div className="CurrencySwitcher-Menu" >
                { currencies && currencies.map((currency, i) => this.renderCurrencyItem(currency, i))}
            </div>
        );
    }

    render() {
        const { handleMouseOver, handleMouseOut } = this.props; 
 
        return (
            <div className="CurrencySwitcher" onMouseEnter={ handleMouseOver } onMouseLeave={ handleMouseOut } >
                { this.renderCurrencySwithcer() }
            </div>
        );
    }
}

export default CurrencySwitcher;