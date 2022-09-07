import { useAppDispatch } from '../../Store'
import { removeFromCart } from '../../Store/features/cartListSlice'
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
              dispatch(removeFromCart(id))
            }}
          >
            -
          </button>
          <div>
            <p>{quantity}</p>
          </div>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
