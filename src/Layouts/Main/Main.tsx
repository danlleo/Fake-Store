import Product from '../../Components/Product/Product'
import { useAppDispatch, useAppSelector } from '../../Store'
import { getAll, getByCategory } from '../../Store/features/itemsSlice'
import { BarLoader } from 'react-spinners'
import { useState, useEffect } from 'react'
import './Main.css'

interface Rating {
  rate: number
  count: number
}

interface ProductItem {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

const Main = () => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector((state) => state.products.loading)
  const entities: ProductItem[] = useAppSelector(
    (state) => state.products.entities
  )

  useEffect(() => {
    dispatch(getAll())
  }, [])

  return loading ? (
    <BarLoader style={{ width: '100%' }} />
  ) : (
    <main className='mw-1340'>
      <div className='main__info' onClick={() => console.log(entities[0]?.id)}>
        <p>Незабаром запрацює нова українськомовна версія сайту.</p>
      </div>
      <div className='main__banner'>
        <p>We are now open in NY and LA. Come pay us a visit!</p>
      </div>
      <div className='main__content'>
        {entities.map((product) => (
          <Product
            rating={product.rating.rate}
            image={product.image}
            description={product.description}
            price={product.price}
            title={product.title}
            key={product.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Main
