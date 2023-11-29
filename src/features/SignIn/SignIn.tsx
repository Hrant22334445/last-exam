import { FC } from 'react'
import { auth } from '../../firebase.config'
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth'

import styles from './SignIn.module.css'
import { Link } from 'react-router-dom'

const SignIn: FC = () => {

  const signIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  }

  const GitHub = async () => {
    const provider = new GithubAuthProvider()

    try {
        await signInWithPopup(auth, provider)
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <div className={styles.allSign}>
        <div className={styles.allTags}>
        <h1 className={styles.chief}>Wellcome To Trello</h1>
        <h1>Sign In</h1>
        <input className={styles.input} type='text' placeholder='email' />
        <input className={styles.input} type='password' placeholder='password' />
        <button className={styles.onlySign}>
            Sign In
        </button>
        <Link to={'/boards'}>
        <button onClick={signIn} className={styles.signin}>
      Sign In With Google
    </button>
        </Link>
    <Link to={'/boards'}>
    <button onClick={GitHub} className={styles.GitHub}>
        Sign In With GitHub
    </button>
    </Link>
        </div>
    </div>
  )
}

export default SignIn