import React, { Suspense, lazy, useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.scss'
import Header from "../features/Header";
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { auth } from "../firebase.config";
import SignIn from "../features/SignIn";

const BoardPage = lazy(() => import('../pages/BoardPage'))
const ProfilePage = lazy(() => import('../pages/ProfilePage'))
const BoardsPage = lazy(() => import('../pages/BoardsPage'))

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
                    </div>
                ) : (
                    <SignIn />
                )
            }
            <Suspense fallback="Loading...">
                <Routes>
                    <Route path="/board" element={<BoardPage />} />
                    <Route path="/profile" element={<ProfilePage user={user} />} />
                    <Route path="/boards" element={<BoardsPage user={user} handleSignOut={handleSingOut} />} />
                </Routes>
            </Suspense>
        </div>
            
        </BrowserRouter>
    )
}

export default App;
