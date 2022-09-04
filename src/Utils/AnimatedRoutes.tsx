import Electronics from '../Pages/Electronics'
import Home from '../Pages/Home'
import Jewelery from '../Pages/Jewelery'
import Mens from '../Pages/Mens'
import Womens from '../Pages/Womens'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/jewelery' element={<Jewelery />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/womens' element={<Womens />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
