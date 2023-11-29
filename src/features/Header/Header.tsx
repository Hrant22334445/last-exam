import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../SignIn/SignIn'
import styles from './Header.module.css'
import { HeaderProps } from './Header.interface'

const Header: React.FC<HeaderProps> = ({ user, handleSignOut }) => {
    const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false)
    const toggleUserMenu = (): void => {
        setUserMenuOpen(!isUserMenuOpen)
    }

    return (
        <header className={styles.header}>
          <nav className={styles.menu}>
            <ul className={styles.mainMenu}>
              <li>
                <Link to='/'>Workspaces</Link>
              </li>
              <li>
                <Link to='/boards'>Boards</Link>
              </li>
              <li>
                <Link to='/contact'>Started boards</Link>
              </li>
              <li>
                <Link to='/template'>Templates</Link>
              </li>
            </ul>
    
            <div className={styles.userContainer}>
              {
                user ? (
                  <>
                  {
                    user.photoURL ? (
                      <div>
                        <p>{user.displayName}</p>
                        <img
                      src={user.photoURL}
                      alt="user name"
                      className={styles.userImage}
                      onClick={toggleUserMenu}
                    />
                      </div>
                    ) : <div>{user.displayName}</div>
                  }
    
                    {
                      isUserMenuOpen ? (
                        <div className={styles.userMenu}>
                          <ul>
                            <li>
                              <Link to='/profile'>Profile</Link>
                            </li>
                            <li>
                              <button onClick={handleSignOut}>Sign Out</button>
                            </li>
                          </ul>
                        </div>
                      ) : null
                    }
                  </>
                ) : (
                  <SignIn />
                )
              }
            </div>
          </nav>
        </header>
      )
}

export default Header;