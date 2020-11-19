import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({id,title,image,pricing,rating}) {
 const [{basket},dispatch] = useStateValue();
 console.log("this is the basket", basket)
    const addToBasket=() => {
       dispatch({
           type: 'ADD_TO_BASKET',
           item: {
               id: id,
               title: title,
               image: image,
               price: pricing,
               rating: rating,
           },
       });
    };
    
    return (
        <div className="product">
            <div className="product__info">
    <p>{title}</p>
                <p className='product__price'>
                    <small>Rs.</small>
                    <strong>{pricing}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>
                <img src={image} />

                <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product
