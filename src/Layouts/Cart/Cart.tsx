import { close } from '../../Store/features/cartSlice'
import { useAppDispatch } from '../../Store'
import './Cart.css'

const Cart = () => {
  const dispatch = useAppDispatch()

  return (
    <div style={{ zIndex: '1000', position: 'relative' }}>
      <div className='cart'>
        <div
          className='cart__background'
          onClick={() => dispatch(close())}
        ></div>
        <div className='cart__container'>
          <div
            className='cart__container-area'
            onClick={() => dispatch(close())}
          >
            <button className='cart__container-close'>
              <svg viewBox='0 0 24 24' fill='none'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z'
                  fill='#fff'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
