import Product from '../../Components/Product/Product'
import axios from 'axios'
import { BarLoader } from 'react-spinners'
import { useState, useEffect } from 'react'
import './Main.css'

const Main = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any[]>([])

  const loadData = async () => {
    await axios
      .get('https://fakestoreapi.com/products')
      .then((data: any) => {
        setData(data.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    loadData()
  }, [])

  return loading ? (
    <BarLoader style={{ width: '100%' }} />
  ) : (
    <main className='mw-1340'>
      <div className='main__info'>
        <p>Незабаром запрацює нова українськомовна версія сайту.</p>
      </div>
      <div className='main__banner'>
        <p>We are now open in NY and LA. Come pay us a visit!</p>
      </div>
      <div className='main__content'>
        {data.map((product) => (
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
