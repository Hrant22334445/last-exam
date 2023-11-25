import { FC } from 'react'
import { auth } from '../../firebase'
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth'

import styles from './SignIn.module.css'

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
        <button onClick={signIn} className={styles.signin}>
      Sign In With Google
    </button>
    <button onClick={GitHub} className={styles.GitHub}>
        Sign In With GitHub
    </button>
        </div>
    </div>
  )
}

export default SignIn