import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart,
  toggleCartPopup,
} from '../contexts/cart';

const CartPreview = () => {
  const { items, isCartOpen } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  const history = useRouter();
  const [cards, setCards] = useState();
  useEffect(() => {
    setCards(items);
  }, [items]);

  const handleRemove = (productId) => {
    return removeFromCart(dispatch, productId);
  };

  const handleProceedCheckout = () => {
    toggleCartPopup(dispatch);
    history.push('/checkout');
  };
  return (
    <div className={isCartOpen ? 'active cart-preview' : 'cart-preview'}>
      <ul className="cart-items">
        {cards?.map((product) => {
          return (
            <li className="cart-item" key={product.name}>
              <img className="product-image" src={product.image} />
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
              <div className="product-total">
                <p className="quantity">
                  {`${product.quantity} ${
                    product.quantity > 1 ? 'Nos.' : 'No.'
                  }`}
                </p>
                <p className="amount">{product.quantity * product.price}</p>
              </div>
              <button
                className="product-remove"
                onClick={() => handleRemove(product.id)}
              >
                ×
              </button>
            </li>
          );
        })}
      </ul>
      <div className="action-block">
        <button
          type="button"
          className={items.length === 0 ? 'disabled' : ''}
          onClick={handleProceedCheckout}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPreview;
