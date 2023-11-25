import React, { FC } from 'react'
import ProfileProps from './Profile.interface';
import styles from './Profile.module.css';
import SignIn from '../SignIn';

const Profile: FC<ProfileProps> = ({ user }) => {
  return (
    <div className={styles.allProfile}>
        <h1 className={styles.about}>About Me:</h1>
        <div>
        {
                user ? (
                  <>
                  {
                    user.photoURL ? (
                      <div className={styles.details}>
                        <img
                      src={user.photoURL}
                      alt="user name"
                      className={styles.photoUrl}
                    />
                        <h2 className={styles.nameSurname}>{user.displayName}</h2>
                      </div>
                    ) : <div>{user.displayName}</div>
                  }
                  </>
                ) : (
                  <SignIn />
                )
              }
        </div>
        <div>
            <input className={styles.bio} type='text' placeholder='bio' />
        </div>
    </div>
  )
}

export default Profile;