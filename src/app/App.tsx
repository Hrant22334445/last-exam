import React, { Suspense, lazy, useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.scss'
import Header from "../features/Header";
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { auth } from '../firebase'
import SignIn from "../features/SignIn";
import Board from "../features/Board";
import Boards from "../features/Boards";

const BoardPage = lazy(() => import('../pages/BoardPage/ui/BoardPage'))
const ProfilePage = lazy(() => import('../pages/ProfilePage/ui/ProfilePage'))

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    })

    return unsubscribe;
  }, [])

  const handleSingOut = () => {
    signOut(auth).catch(error => console.log(error))
  }

    return (
        <BrowserRouter>
        <div className='app'>
            {
                user ? (
                    <div>
                      <Header handleSignOut={handleSingOut} user={user} />
                    <Board />
                    </div>
                ) : (
                    <SignIn />
                )
            }
            <Suspense fallback="Loading...">
                <Routes>
                    <Route path="/board" element={<BoardPage />} />
                    <Route path="/profile" element={<ProfilePage user={user} />} />
                </Routes>
            </Suspense>
        </div>
            
        </BrowserRouter>
    )
}

export default App;
