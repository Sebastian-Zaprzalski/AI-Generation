import React from 'react';

export const CartItem = ({ sku, name, url, quantity }) => {
    return <div className="cart-item">
               <h2 className="cart-name">
                   <a href={url}>{name}</a>
               </h2>
               <p className="cart-sku">SKU: {sku}</p>
               <p className="cart-quantity">Quantity: {quantity}</p>
           </div>;
}