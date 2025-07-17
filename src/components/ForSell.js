import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ForSell = () => {
  const equipmentList = [
    {
      name: 'Treadmill',
      price: 'Rs 70,000',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXa2mhENBf2I0eNYZW02cdWMR8kImEqRE9g&s",
    },
    {
      name: 'Dumbbell set',
      price: 'Rs 8,500',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7siat0k3EFpeGILoj4m3mJF4JaYbwo7jjmA&s',
    },
    {
      name: 'Bench press',
      price: 'Rs 20,000',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfabXCyOQqSPtCj_ngnpjMuLSy0VMxoWcMw&s",
    },
    {
      name: 'Kettlebell',
      price: 'Rs 3,500',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3A37qqJNu1Vcs5X-Vzwi6WcxY11K2jMnbdA&s",
    },
    {
      name: 'Leg press machine',
      price: 'Rs 50,000',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-c2jWk-QbHS_33tS-V-ajTVDLaaldZaRFYw&s",
    },
  ];

  // Like state: { [equipmentName]: { liked: bool, count: number } }
  const [likes, setLikes] = useState({});

  // Cart state
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [cartAlert, setCartAlert] = useState('');

  // Handle checkbox change for a single item
  const handleSelectItem = (idx) => {
    setSelectedItems(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.map((_, idx) => idx));
    }
  };

  // Remove selected items
  const removeSelected = () => {
    setCart(prevCart => {
      const newCart = prevCart.filter((_, idx) => !selectedItems.includes(idx));
      if (newCart.length === 0) setShowCart(false);
      return newCart;
    });
    setSelectedItems([]);
  };

  // Buy selected items
  const buySelected = () => {
    const itemsToBuy = cart.filter((_, idx) => selectedItems.includes(idx));
    alert('Buying: ' + itemsToBuy.map(item => item.name).join(', '));
    // Optionally clear selected/bought items
    setSelectedItems([]);
  };

  // Add item to cart
  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
    setCartAlert(`Your ${item.name} product has been added to the cart!`);
    setTimeout(() => setCartAlert(''), 5000);
  };


  // Remove item from cart
  const removeFromCart = (index) => {
    setCart(prevCart => {
      const newCart = prevCart.filter((_, i) => i !== index);
      if (newCart.length === 0) setShowCart(false);
      return newCart;
    });
  };


  // Toggle cart modal
  const toggleCart = () => setShowCart(prev => !prev);

  // Load likes from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('equipmentLikes');
    if (stored) setLikes(JSON.parse(stored));
  }, []);

  // Save likes to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('equipmentLikes', JSON.stringify(likes));
  }, [likes]);

  const toggleLike = (name) => {
    setLikes(prev => {
      const prevEntry = prev[name] || { liked: false, count: 0 };
      if (prevEntry.liked) {
        // Unlike
        return { ...prev, [name]: { liked: false, count: Math.max(0, prevEntry.count - 1) } };
      } else {
        // Like
        return { ...prev, [name]: { liked: true, count: prevEntry.count + 1 } };
      }
    });
  };

  return (
    <div id="equipments" className="py-0 px-0 bg-inherit text-inherit text-center caret-transparent relative">
      {cartAlert && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-light-blue-500 text-white px-12 py-4 rounded shadow-lg z-50 transition-opacity duration-500">
          {cartAlert}
        </div>
      )}
      <nav className='w-full bg-inherit fixed border border-gray-400'>
      <ul className="flex justify-end items-center space-x-8  relative">
  <li>
    <NavLink to="/new" className="hover:text-red-500 hover:bold hover:underline">New</NavLink>
  </li>
  <li className="relative ">
    <button onClick={toggleCart} className="relative mr-12 py-2">
      <span role="img" aria-label="cart" className="text-2xl">🛒</span>
      {cart.length > 0 && (
        <span className="absolute -top-0 -right-0.5 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full">
          {cart.length}
        </span>
      )}
    </button>
  </li>
</ul>

      {/* Cart Alert */}
      
      {/* Cart Icon at top right */}
      <div className="absolute right-8 top-8 z-20 mb-12">
        
        {/* Cart Dropdown/Modal */}
        {showCart && (
          <div className="absolute right-0 mt-2 w-72 bg-gray-200 border border-gray-700 shadow-lg rounded-lg p-4 z-30 text-left">
            <h3 className="font-bold text-black mb-2">Cart Items</h3>
            {cart.length === 0 ? (
              <p className="text-gray-700">Your cart is empty.</p>
            ) : (
              <>
                <div className="flex items-center text-gray-800 font-bold mb-2">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === cart.length && cart.length > 0}
                    onChange={handleSelectAll}
                    className="mr-2"
                  />
                  <span className="text-sm">Select All</span>
                </div>
                <ul>
                  {cart.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 justify-between mb-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(idx)}
                          onChange={() => handleSelectItem(idx)}
                          className="mr-2"
                        />
                        <span>{item.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* Total Products and Total Price - only show when items are selected */}
                {selectedItems.length > 0 && (
                  <div className="border-t text-gray-900 border-gray-200 mt-4 pt-2 flex flex-col gap-1">
                    <span className="text-sm font-semibold">Total Products: {selectedItems.length}</span>
                    <span className="text-sm font-semibold">
                      Total Price: Rs {selectedItems.reduce((sum, idx) => {
                        const item = cart[idx];
                        const num = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
                        return sum + (isNaN(num) ? 0 : num);
                      }, 0).toLocaleString()}
                    </span>
                  </div>
                )}
                {selectedItems.length > 0 && (
                  <div className="flex gap-2 mt-4">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full flex-1"
                      onClick={buySelected}
                    >
                      Buy
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full flex-1"
                      onClick={removeSelected}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
      </nav>
<section className='py-16 px-6'>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-8">
        {equipmentList.map((item, index) => {
          const like = likes[item.name] || { liked: false, count: 0 };
          return (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-xl transition-all">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 text-left">{item.name}</h3>
              <p className="text-red-600 font-semibold mb-2 text-left">{item.price}</p>
              <div className="flex items-center justify-between mb-2 gap-2">
                <div >
                <button className="bg-red-500 hover:bg-red-600 text-white mr-1 px-5 py-2 rounded-full">
                  Buy
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    aria-label={like.liked ? 'Unlike' : 'Like'}
                    onClick={() => toggleLike(item.name)}
                    className="focus:outline-none"
                  >
                    {like.liked ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#ef4444" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ef4444" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.435 6.582a5.373 5.373 0 00-7.606 0l-.829.828-.828-.828a5.373 5.373 0 00-7.607 7.606l.828.829 7.607 7.607 7.606-7.607.829-.829a5.373 5.373 0 000-7.606z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ef4444" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.435 6.582a5.373 5.373 0 00-7.606 0l-.829.828-.828-.828a5.373 5.373 0 00-7.607 7.606l.828.829 7.607 7.607 7.606-7.607.829-.829a5.373 5.373 0 000-7.606z" />
                      </svg>
                    )}
                  </button>
                  <span className="text-gray-700 font-medium">{like.count}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default ForSell;
