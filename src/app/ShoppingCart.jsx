import PropTypes from 'prop-types'
import { useContext } from 'react'
import Image from 'next/image.js'
import { CartContext } from './Cart.jsx'

export default function Cart ({showModal, toggle}) {

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


  return (
    showModal && (
      <div className=" overflow-y-auto fixed  inset-0 pt-[150px] flex justify-center items-center bg-black/50 z-50 max-h-full">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Cart</h1>
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={toggle}
            >
              Close
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-4 rounded shadow-sm">
                <div className="flex flex-col">
                  <Image src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover rounded-md" width={50} height={50} />
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{item.price}</p>
                </div>
                <div className="flex gap-4">
                  <button
                    className="px-2 py-1 bg-gray-800 text-white text-xs font-bold rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="px-2 py-1 bg-gray-800 text-white text-xs font-bold rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => removeFromCart(item)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
            {cartItems.length > 0 ? (
              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">Total: ${getCartTotal()}</h2>
                <div className="flex gap-4">
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                  <button
                    className="px-4 py-2 bg-red-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      alert('Checkout Successful!')
                      clearCart()
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            ) : (
              <h2 className="text-lg font-semibold">Your cart is empty</h2>
            )}
          </div>
        </div>
      </div>
  )
)

}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
}