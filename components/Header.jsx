import React, { useContext, useEffect, useState } from 'react';
import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup,
} from '../contexts/cart';
import { CommonDispatchContext, setSearchKeyword } from '../contexts/common';
import CartPreview from '../components/CartPreview';
import Link from 'next/link';

const Header = (props) => {
  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
  const cartDispatch = useContext(CartDispatchContext);
  const [cartQuantity, setCartQuantity] = useState();
  const [cartTotal, setCartTotal] = useState();
  useEffect(() => {
    setCartQuantity(cartItems?.length);
    setCartTotal(
      cartItems
        .map((item) => item.price * item.quantity)
        .reduce((prev, current) => prev + current, 0),
    );
  }, [cartItems]);
  const handleSearchInput = (event) => {
    return setSearchKeyword(commonDispatch, event.target.value);
  };

  const handleCartButton = (event) => {
    event.preventDefault();
    return toggleCartPopup(cartDispatch);
  };

  return (
    <header>
      <div className="container">
        <div className="brand">
          <Link href="/">
            <a>
              <img
                className="logo"
                src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png"
                alt="Veggy Brand Logo"
              />
            </a>
          </Link>
        </div>

        <div className="search">
          <Link href="#">
            <a
              className="mobile-search"
              // onClick={this.handleMobileSearch.bind(this)}
            >
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
                alt="search"
              />
            </a>
          </Link>
          <form action="#" method="get" className="search-form">
            <Link href="#">
              <a
                className="back-button"
                // onClick={this.handleSearchNav.bind(this)}
              >
                <img
                  src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                  alt="back"
                />
              </a>
            </Link>
            <input
              type="search"
              placeholder="Search for Vegetables and Fruits"
              className="search-keyword"
              onChange={handleSearchInput}
            />
            <button
              className="search-button"
              type="submit"
              // onClick={this.handleSubmit.bind(this)}
            />
          </form>
        </div>

        <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{cartItems && cartQuantity}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>{cartItems && cartTotal}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link href="#">
            <a className="cart-icon" onClick={handleCartButton}>
              <img
                className={props.cartBounce ? 'tada' : ' '}
                src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                alt="Cart"
              />
              {cartQuantity ? (
                <span className="cart-count">{cartQuantity}</span>
              ) : (
                ''
              )}
            </a>
          </Link>
          <CartPreview />
        </div>
      </div>
    </header>
  );
};

export default Header;
