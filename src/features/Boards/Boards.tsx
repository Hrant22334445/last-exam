import React, { FC, useState } from 'react'
import { BoardsProps } from './Boards.interface';
import SignIn from '../SignIn';
import styles from './Boards.module.css'
import { Link } from 'react-router-dom';
import Board from '../Board/Board';

const Boards: FC<BoardsProps> = ({ user }) => {
    const [board, setBoard] = useState<boolean>(false)

    const showBoards = () => {
        return setBoard(!board)
    }

  return (
    <div className={styles.allBoards}>
        <div className={styles.allDisplay}>
        {
                user ? (
                  <>
                  {
                    user.photoURL ? (
                      <div className={styles.displayName}>
                        <img
                      src={user.photoURL}
                      alt="user name"
                      className={styles.photo}
                    />
                        <h2>{user.displayName}</h2>
                      </div>
                    ) : <div>{user.displayName}</div>
                  }
                  </>
                ) : (
                  <SignIn />
                )
              }
        </div>

        <br />

        <div className={styles.myBoards}>
            {
                board ? (
                    <>
                    <Board />
                    <Link className="display: none;" to='/board'>My Board</Link>
                    </>
                ) : (
                    <Link className={styles.linkToBoard} to='/board'>My Board</Link>
                )
            }
        </div>
    </div>
  )
}

export default Boards;
