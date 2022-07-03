import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const btnHandel = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='product-container'>
            <div className="product">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    btnHandel={btnHandel}
                ></Product>)}
            </div>
            <div className="cart">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;