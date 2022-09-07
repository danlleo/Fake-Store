import { useState } from 'react'
import { useAppDispatch } from '../../Store'
import {
  increase,
  decrease,
  removeFromCart,
} from '../../Store/features/cartListSlice'
import './CartItem.css'

interface ICartItem {
  title: string
  image: string
  price: number
  quantity: number
  id: number
}

const CartItem = ({ title, image, price, quantity, id }: ICartItem) => {
  const dispatch = useAppDispatch()

  const handleDecrease = () => {
    if (quantity === 1) {
      dispatch(removeFromCart(id))
      return
    }

    dispatch(decrease({ id, quantity: quantity - 1 }))
  }

  const handleIncrease = () => {
    dispatch(increase({ id, quantity: quantity + 1 }))
  }

  return (
    <div className='cartItem'>
      <div className='cartItem__header'>
        <img src={image} alt={title} />
        <div className='cartItem__description'>
          <h3>{title}</h3>
        </div>
      </div>
      <div className='cartItem__footer'>
        <h3>{price} $</h3>
        <div className='cartItem__footer__counter'>
          <button
            onClick={() => {
              handleDecrease()
            }}
          >
            -
          </button>
          <div>
            <p>{quantity}</p>
          </div>
          <button onClick={() => handleIncrease()}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
