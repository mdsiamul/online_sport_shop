import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const Shipping = 15;
    let tax = (total + Shipping) / 10;
    let grandTotal = total + Shipping + tax;

    return (
        <div>
            <h3>Order summary</h3>
            <h5>Items orderd:{cart.length}</h5>
            <p>Total:{total.toFixed(2)}</p>
            <p>Shipping:{Shipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>Grand Total:{grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;