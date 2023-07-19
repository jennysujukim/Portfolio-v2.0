import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// styles
import styles from './Header.module.scss'

// components
import MobileClose from '../MobileClose'
import MobileMenu from '../MobileMenu'


export default function Header() {

  const [ mobileMenu, setMobileMenu ] = useState(false)
  const navigate = useNavigate()

  const openMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  const closeMenu = () => {
    setMobileMenu(false)
  }

  // mobile version nav menu
  const handleLink = async (path) => {
    await closeMenu()
    navigate(path)
  } 

  return (
    <header className={mobileMenu ? styles.wrapper__mobile : styles.wrapper}>
      <div className={styles.container}>
        <Link 
          className={styles.logo}
          to="/"
          onClick={() => handleLink('/')}
        >
          JENKIM
        </Link>
        <div 
          className={styles.navButton}
          onClick={openMenu}>
          {mobileMenu ? <MobileClose /> : <MobileMenu /> }
        </div>
        <nav className={styles.navButton__desktop}>
          <ul>
            <li>
              <Link 
                to="/about" 
                onClick={() => handleLink('/about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/work/all"
                onClick={() => handleLink('/work/all')}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/terminal" 
                onClick={() => handleLink('/terminal')}
              >
                Terminal
              </Link>
            </li>
          </ul>
        </nav>
        { mobileMenu &&
          <nav className={styles.navContainer__mobile}>
            <ul>
              <li>
                <Link 
                  to="/" 
                  onClick={() => handleLink('/')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  onClick={() => handleLink('/about')}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/work/all" 
                  onClick={() => handleLink('/work/all')}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/terminal" 
                  onClick={() => handleLink('/terminal')}
                >
                  Terminal
                </Link>
              </li>
            </ul>
          </nav>
        }
      </div>
    </header>
  )
}
