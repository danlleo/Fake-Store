import { open } from '../../Store/features/cartSlice'
import { useAppSelector, useAppDispatch } from '../../Store'
import './CartButton.css'

const CartButton = () => {
  const dispatch = useAppDispatch()
  const price = useAppSelector((state) => state.cartList.price)
  const entities = useAppSelector((state) => state.cartList.entities)

  return (
    <div className='cartButton-container'>
      <div className='cartButton' onClick={() => dispatch(open())}>
        <p>Cart ({entities.length})</p>
        <p>{price} $</p>
      </div>
    </div>
  )
}

export default CartButton
