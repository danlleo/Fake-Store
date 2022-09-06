import { open } from '../../Store/features/cartSlice'
import { useAppDispatch } from '../../Store'
import './CartButton.css'

const CartButton = () => {
  const dispatch = useAppDispatch()

  return (
    <div className='cartButton-container'>
      <div className='cartButton' onClick={() => dispatch(open())}>
        <p>Cart (3)</p>
        <p>89.99 $</p>
      </div>
    </div>
  )
}

export default CartButton
