import Cart from './Layouts/Cart/Cart'
import Header from './Layouts/Header/Header'
import AnimatedRoutes from './Utils/AnimatedRoutes'
import { useAppSelector } from './Store'

const App = () => {
  const isOpen = useAppSelector((state) => state.cart.isOpen)

  return (
    <>
      {isOpen && <Cart />}
      <Header />
      <AnimatedRoutes />
    </>
  )
}

export default App
