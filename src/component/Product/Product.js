import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, img, seller, stock } = props.product;
    return (
        <div className='productss' >
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>Total Product:{name}</h2>
                <p><small>by:{seller}</small></p>
                <p>Price ${price}</p>
                <p>only {stock} left in stock-order soon.</p>
                <button onClick={() => props.btnHandel(props.product)}
                    className='product-btn'>add to cart</button>
            </div>
        </div>
    );
};

export default Product;