import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='header__content mw-1340'>
        <div className='header__content__logo'>
          <h3>Fake Store</h3>
        </div>
        <ul>
          <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's clothing</li>
          <li>Women's clothing</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
