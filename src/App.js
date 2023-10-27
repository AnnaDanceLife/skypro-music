import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppRoutes } from './routes'
import { UserProvider } from './context/UserProvider'

export const App = () => {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  // const [loading, setLoading] = useState(false)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   async function handleGetTracks() {
  //     try {
  //       // setLoading(true)
  //       // setTrackListError(null)
  //       await getTracks().then((data) => {
  //         dispatch(addTracks(data))
  //       })
  //     } catch (error) {
  //       // setTrackListError(error.message)
  //     } finally {
  //       // setLoading(false)
  //     }
  //   }

  //   handleGetTracks()
  // }, [])

  const handleLogin = () => setUser(localStorage.setItem('user', 'token'))
  const handleLogout = () => {
    setUser(localStorage.clear())
    navigate('/login', { replace: true })
  }

  return (
    <UserProvider>
      <AppRoutes
        user={user}
        onAuthButtonClick={user ? handleLogout : handleLogin}
      />
    </UserProvider>
  )
}
