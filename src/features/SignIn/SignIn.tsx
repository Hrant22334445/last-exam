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
    <div>
        <button onClick={signIn} className={styles.signin}>
      Sign In With Google
    </button>
    <button onClick={GitHub}>
        Sign In With GitHub
    </button>
    </div>
  )
}

export default SignIn