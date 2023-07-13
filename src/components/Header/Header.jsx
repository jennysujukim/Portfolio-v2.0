import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// styles
import styles from './Header.module.scss'

// icons
import DragHandleIcon from '@mui/icons-material/DragHandle'
import CloseIcon from '@mui/icons-material/Close'


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
          to="/home"
          alt="Homepage of Jen Kim's portfolio"
          onClick={() => handleLink('/')}>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 349 73">
            <g>
              <g>
                <path d="M22,73C4.8,73,0,61.4,0,49.1v-3.3H11.3v3.3c0,8,1.4,13.7,10.4,13.7s10.5-5.7,10.5-13.7V0h11.8V49.1c0,12.3-4.8,23.9-22,23.9Z"/>
                <path d="M102.2,29.5v10.2h-34.9v21.7h40.8v10.1H55.4V0h51.7V10.1h-39.8V29.5h34.9Z"/>
                <path d="M117.8,0h13.3l32.2,53.7h.2V0h11.9V71.5h-13.2l-32.3-53.5h-.2v53.5h-11.9V0Z"/>
                <path d="M199.5,0V35.3L231.9,0h14.2l-27.8,30.3,29.5,41.2h-13.9l-23.4-32.9-11,11.8v21.1h-11.9V0h11.9Z"/>
                <path d="M265.8,0V71.5h-11.9V0h11.9Z"/>
                <path d="M278.1,0h15.4l20,55h.2L333.6,0h15.4V71.5h-11.6V17.3h-.2l-18.9,54.2h-9.5l-18.9-54.2h-.2v54.2h-11.6V0Z"/>
              </g>
            </g>
          </svg>
        </Link>
        <div 
          className={styles.navButton}
          onClick={openMenu}>
          {mobileMenu ? <CloseIcon /> : <DragHandleIcon /> }
        </div>

        <nav className={styles.navButton__desktop}>
          <ul>
            <li>
              <Link to="/about" onClick={() => handleLink('/about')}>About</Link>
            </li>
            <li>
              <Link to="/work/all" onClick={() => handleLink('/work/all')}>Projects</Link>
            </li>
            <li>
              <Link to="/terminal" onClick={() => handleLink('/terminal')}>Terminal</Link>
            </li>
          </ul>
        </nav>

        { mobileMenu &&
        <nav className={styles.navContainer__mobile}>
          <ul>
            <li>
              <Link to="/" onClick={() => handleLink('/')}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => handleLink('/about')}>About</Link>
            </li>
            <li>
              <Link to="/work/all" onClick={() => handleLink('/work/all')}>Projects</Link>
            </li>
            <li>
              <Link to="/terminal" onClick={() => handleLink('/terminal')}>Terminal</Link>
            </li>
          </ul>
        </nav>
        }
      </div>

    </header>
  )
}
