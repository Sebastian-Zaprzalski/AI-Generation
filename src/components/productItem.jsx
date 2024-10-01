import React from 'react';

export const ProductItem = ({ sku, name, description, url }) => {
    return <div className="product-item">
               <h2 className="product-name">
                   <a href={url}>{name}</a>
               </h2>
               <p className="product-sku">SKU: {sku}</p>
               <p>{description}</p>
           </div>;
};