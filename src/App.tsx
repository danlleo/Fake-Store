import Cart from './Layouts/Cart/Cart'
import Header from './Layouts/Header/Header'
import AnimatedRoutes from './Utils/AnimatedRoutes'
import { useAppSelector, useAppDispatch } from './Store'
import { useEffect } from 'react'
import { getTotalPrice } from './Store/features/cartListSlice'

const App = () => {
  const isOpen = useAppSelector((state) => state.cart.isOpen)
  const cartList = useAppSelector((state) => state.cartList.entities)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTotalPrice())
  }, [cartList])

  return (
    <>
      {isOpen && <Cart />}
      <Header />
      <AnimatedRoutes />
    </>
  )
}

export default App
