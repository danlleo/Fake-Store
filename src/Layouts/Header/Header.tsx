import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='header__content mw-1340'>
        <div className='header__content__logo'>
          <Link to='/'>
            <h3>Fake Store</h3>
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/'>All</Link>
          </li>
          <li>
            <Link to='/electronics'>Electronics</Link>
          </li>
          <li>
            <Link to='jewelery'>Jewelery</Link>
          </li>
          <li>
            <Link to='mens'>Men's clothing</Link>
          </li>
          <li>
            <Link to='womens'>Women's clothing</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
