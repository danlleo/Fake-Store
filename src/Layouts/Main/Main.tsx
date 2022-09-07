import Product from '../../Components/Product/Product'
import Footer from '../Footer/Footer'
import CartButton from '../../Components/CartButton/CartButton'
import { useAppDispatch, useAppSelector } from '../../Store'
import { getAll, getByCategory } from '../../Store/features/itemsSlice'
import { BarLoader } from 'react-spinners'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './Main.css'

interface Rating {
  rate: number
  count: number
}

interface ProductItem {
  id: number
  title: string
  price: number
  quantity: number
  description: string
  category: string
  image: string
  rating: Rating
}

interface Props {
  category: string
}

const Main = ({ category }: Props) => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector((state) => state.products.loading)
  const cartList = useAppSelector((state) => state.cartList.entities)
  const entities: ProductItem[] = useAppSelector(
    (state) => state.products.entities
  )

  const loadData = () => {
    if (!category) {
      dispatch(getAll())
      return
    }
    dispatch(getByCategory(category))
  }

  useEffect(() => {
    loadData()
  }, [])

  return loading ? (
    <BarLoader style={{ width: '100%' }} />
  ) : (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main className='mw-1340'>
        <div className='main__info'>
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
              id={product.id}
              key={product.id}
            />
          ))}
        </div>
        {cartList.length && <CartButton />}
      </main>
      <Footer />
    </motion.div>
  )
}

export default Main
