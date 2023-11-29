import React, { ReactNode } from 'react'
import Board from '../features/Board'

const MainLayout = ({ children }: { children: ReactNode }) => {

  return (
    <>
        <Board />
        <div className='container'>
            { children }
        </div>
    </>
  )
}

export default MainLayout