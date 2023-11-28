import { FC } from 'react'
import { FaXmark, FaListUl } from "react-icons/fa6";

import styles from './Comments.module.css'
import { Link } from 'react-router-dom';

const Comments: FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.window}>
        <div className={styles.windowHeader}>
          <div className={styles.headerTitle}>
            <h2>Comments</h2>
            <span className={styles.titleInline}>in list <span className={styles.inline}>Backlist</span></span>
          </div>
          <div className={styles.headerClose}>
            <Link to='/board'><FaXmark /></Link>
          </div>
        </div>
        <div className={styles.windowMain}>
          <div className={styles.mainDesription}></div>
          <div className={styles.mainActivity}>
            <div className={styles.activityHeader}>
              <div className={styles.activityIcon}>
                <FaListUl />
              </div>
              <div className={styles.activityTitle}>
                <h3>Activity</h3>
              </div>
            </div>
            <div className={styles.activityMain}>
              <div className={styles.newComment}>
                <div className={styles.member}>
                  <div className={styles.memberAvatar}>
                    <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="your Avatar" />
                  </div>
                  <div className={styles.memberWrite}>
                    <input type="text" placeholder='Write a comment' />
                  </div>
                </div>
              </div>
              <div className={styles.comments}>
                <div className={styles.commentsComm}>
                  <div className={styles.commAvatar}>
                    <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="your Avatar" />
                  </div>
                  <div className={styles.commMain}>
                    <div className={styles.commHeader}>
                      <span className={styles.commTitle}>PogosPogosyan</span>
                      <span className={styles.commDate}>
                        6 minutes ago
                      </span>
                    </div>
                    <div className={styles.commContent}>
                      <p>test</p>
                    </div>
                    <div className={styles.commReactions}>
                      <span className={styles.reply}>Reply</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Comments;