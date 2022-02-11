import React, { PureComponent } from "react";
import "./PDP.style.scss";

class PDP extends PureComponent {

    componentDidMount() {
        console.log(this.props.product);
    }
    
    renderAttributeItems(item, i) {
        const { value } = item;

        return (
            <div className="AttributeItem" key={ i }>
                <p className="ItemText">{ value }</p> 
            </div>
        );
    }

    renderAttributes(attribute, i) {
        const { id } = attribute;
        const { items } = attribute;

        return (
            <div className="Attributes" key={ i }>
                <div className="AttributeName">
                    { id }
                </div>
                <div className="AttributeItems">
                   { items.map((item, i) => this.renderAttributeItems(item, i)) } 
                </div>
                
            </div>
        );    
    }

    renderPDP() {
        const { brand, name, description, gallery, attributes } = this.props.product.product;

        return (
            <div className="PDP-Content">
                 <img className="PDP-MainImage" src={ gallery[0] } alt="Product" />
                 <div className="PDP-SideSection">
                    <p id="PDP-Brand">{ brand }</p>
                    <p id="PDP-Name">{ name }</p>
                    { attributes.map((attribute, i) => this.renderAttributes(attribute, i)) }
                    <p id="PDP-Description">{ description }</p>
                 </div>
                 
            </div>  
        ); 
    }
    
    render() {
        return (
            <div className="PDP">
                { this.renderPDP() }
            </div>
        );
    }

}

export default PDP;