import React, { FC } from 'react'
import Boards from '../../../features/Boards';
import { BoardsProps } from '../../../features/Boards/Boards.interface';


const BoardsPage: FC<BoardsProps> = ({ user, handleSignOut }) => {
  return (
    <div><Boards user={user} handleSignOut={handleSignOut} /></div>
  )
}

export default BoardsPage;