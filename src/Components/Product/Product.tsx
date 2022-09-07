import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../Store'
import { addToCart, getTotalPrice } from '../../Store/features/cartListSlice'
import './Product.css'

interface IProduct {
  rating: number
  image: string
  description: string
  price: number
  title: string
  id: number
}

const Product = ({
  rating,
  image,
  description,
  price,
  title,
  id,
}: IProduct) => {
  const [isOpen, setIsOpen] = useState(false)

  const cartList = useAppSelector((state) => state.cartList.entities)
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ title, image, price, id, quantity: 1 }))
    dispatch(getTotalPrice())
  }

  return (
    <>
      {isOpen && (
        <div className='product__modal'>
          <div
            className='product__modal__background'
            onClick={() => setIsOpen(false)}
          ></div>
          <div className='product__modal__container'>
            <button
              className='product__modal__close'
              onClick={() => setIsOpen(false)}
            >
              <svg viewBox='0 0 24 24' fill='none'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z'
                  fill='#fff'
                ></path>
              </svg>
            </button>
            <div className='product__modal__container__image'>
              <img src={image} alt={title} />
            </div>
            <div className='product__modal__container__content'>
              <div>
                <h3 className='product__modal__container__content__title'>
                  {title}
                </h3>
                <p className='product__modal__container__content__description'>
                  {description}
                </p>
                <h3 className='product__modal__container__content__price'>
                  $ {price}
                </h3>
              </div>
              <button onClick={() => handleAddToCart()}>ADD TO CART</button>
            </div>
          </div>
        </div>
      )}
      <div className='product' onClick={() => setIsOpen(true)}>
        <div className='product__rating'>
          <p>
            <span>★</span> {rating}
          </p>
        </div>
        <img src={image} alt='shop' />
        <p className='product__title'>{title}</p>
        <h3 className='product__price'>$ {price}</h3>
      </div>
    </>
  )
}

export default Product
