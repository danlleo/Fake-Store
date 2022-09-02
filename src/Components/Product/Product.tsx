import './Product.css'

interface IProduct {
  rating: number
  image: string
  description: string
  price: number
  title: string
}

const Product = ({ rating, image, description, price, title }: IProduct) => {
  return (
    <div className='product'>
      <div className='product__rating'>
        <p>
          <span>★</span> {rating}
        </p>
      </div>
      <img src={image} alt='shop' />
      <p className='product__title'>{title}</p>
      <h3 className='product__price'>$ {price}</h3>
    </div>
  )
}

export default Product
