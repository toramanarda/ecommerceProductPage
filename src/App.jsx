import React, { useState } from 'react';
import './ecommerceProductPage.css';
import logo from '/src/img/logo.svg';
import shoppingCarGray from '/src/img/shoppingCarGray.svg';
import member from '/src/img/member.svg';
import shoes from '/src/img/shoes.svg';
import minus from '/src/img/minus.png';
import plus from '/src/img/plus.png';
import shoppingCarWhite from '/src/img/shoppingCarWhite.svg';
import trash from '/src/img/trash.svg';
import shoes2 from '/src/img/shoes2.svg';
import shoes3 from '/src/img/shoes3.png';
import shoes4 from '/src/img/shoes4.png';
import shoes5 from '/src/img/shoes5.png';
import shoesDesktop from '/src/img/shoesDesktop.png';

function App() {
  // State for slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartItem, setCartItem] = useState(null);

  const images = [shoes, shoes, shoes]; // Image paths

  // Function to change slide
  const changeSlide = (step) => {
    let newIndex = currentIndex + step;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    setCurrentIndex(newIndex);
  };

  // Function to handle Add to Cart
  const handleAddToCart = () => {
    if (quantity > 0) {
      setCartItem({
        image: shoes,
        title: 'Fall Limited Edition Sneakers',
        price: 125,
        quantity: quantity,
        total: 125 * quantity
      });
      setShowCartModal(true);
    }
  };

  return (
    <div className="container">
      {/* Header Start */}
      <div className="header">
        <div className="header-content">
          <div className="menu-toggle" id='menu-toggle' onClick={() => {
            document.querySelector('#menu-toggle').classList.toggle('active');
            document.querySelector('#side-menu').classList.toggle('active');
            document.querySelector('#overlay').classList.toggle('active');
          }}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="close-btn" id='close-btn' onClick={() => {
              document.querySelector('#menu-toggle').classList.remove('active');
              document.querySelector('#side-menu').classList.remove('active');
              document.querySelector('#overlay').classList.remove('active');
            }}>&times;</div>
          </div>
          <div className="logo">
            <img src={logo} alt="sneakersLogo" />
          </div>
        </div>
        <div className="otherItem">
          <a href="#"><img src={shoppingCarGray} alt="shoppingCarGray" onClick={() => setShowCartModal(true)} /></a>
          <a href="#"><img src={member} alt="member" /></a>
        </div>
        {/* Hamburger Menu Start */}
        <nav className='side-menu' id='side-menu'>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        {/* Hamburger Menu End */}
      </div>

      {/* Header Navbar Start */}

      <div className="headerNav">
        <div className="nav">
          <img src={logo} alt="logo" />
          <div className="navbar">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="shoppingBag">
          <a href="#"><img src={shoppingCarGray} alt="shoppingCarGray" onClick={() => setShowCartModal(true)} /></a>
          <img className='member' src={member} alt="member" />
        </div>
      </div>

      {/* Header Navbar End */}

      {/* Header End */}

      {/* Hero Start */}

      {/* Hero Area */}

      <div className="heroArea">

        {/* Slider Start */}
        <div className="slider">
          <button className='prev' onClick={() => changeSlide(-1)}>&#10094;</button>
          <img id='slideImage' src={images[currentIndex]} alt="Slider Image" />
          <button className='next' onClick={() => changeSlide(1)}>&#10095;</button>
        </div>
        {/* Slider End */}

        {/* Product İmage */}
        <div className="product">
          <img className='shoes' src={shoesDesktop} alt="shoes" />
          <div className="productImages">
            <img src={shoes5} alt="shoes5" />
            <img src={shoes2} alt="shoes2" />
            <img src={shoes3} alt="shoes3" />
            <img src={shoes4} alt="shoes4" />
          </div>
        </div>
        {/* Product End */}

        {/* Hero Content Area */}
        <div className="heroContentArea">

          {/* Hero Content Start */}
          <div className="heroContent">
            <h3>Sneaker Company</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
              they’ll withstand everything the weather can offer.</p>
          </div>
          {/* Hero Content End */}

          {/* Price Start */}
          <div className="price">
            <div className="priceSale">
              <strong>$125.00</strong>
              <p>50%</p>
            </div>
            <h4>$250.00</h4>
          </div>
          {/* Price End */}

          {/* Piece & Add to card Start */}

          <div className="pieceAdd">
            {/* Piece Start */}
            <div className="piece">
              <button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
                <img src={minus} alt="minus" />
              </button>
              <h2>{quantity}</h2>
              <button onClick={() => setQuantity(quantity + 1)}>
                <img src={plus} alt="plus" />
              </button>
            </div>
            {/* Piece End */}

            {/* Add To Cart Start */}
            <div className="addToCart">
              <button onClick={handleAddToCart}>
                <div className="addContent">
                  <img src={shoppingCarWhite} alt="shoppingCarWhite" />
                  <h2>Add to cart</h2>
                </div>
              </button>
            </div>
          </div>
          {/* Add To Cart End */}

          {/* Piece & Add to card End */}

          {/* Hero End */}
        </div>
        {/* Hero Content Area */}

        {/* Overlay Start */}
        <div className={`overlay ${showCartModal ? 'active' : ''}`} id='overlay' onClick={() => setShowCartModal(false)}></div>
        {/* Overlay End */}

        {/* Cart Modal Start */}
        {showCartModal && cartItem && (
          <div className="cart-modal" id='cart-modal'>
            <h2 className='cart'>Cart</h2>
            <div className="cart-modal-content">
              <hr />
              <div className="cart-item">
                <img className='modal-image' id='modal-image' src={cartItem.image} alt="Product Image" />
                <div className="cart-details">
                  <h2 id='modal-title'>{cartItem.title}</h2>
                  <p className='modal-price' id='modal-price'>
                    {cartItem.price.toFixed(2)} x <span id='modal-quantity'>{cartItem.quantity}</span>
                    <h3 id='modal-total'>${cartItem.total.toFixed(2)}</h3>
                    <button className='remove-item' id='remove-item' onClick={() => {
                      setQuantity(0);
                      setCartItem(null);
                      setShowCartModal(false);
                    }}> <img src={trash} alt="trash" /> </button>
                  </p>
                </div>
              </div>
              <button className="close-modal" id='close-modal' onClick={() => setShowCartModal(false)}>Checkout</button>
            </div>
          </div>
        )}
        {/* Cart Modal End */}
      </div>
    </div>
  );
}

export default App;
