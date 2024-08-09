import { useNavigate } from "react-router-dom"
import { AuthService } from "../services/AuthService"
import { useEffect, useState } from "react"

function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  useEffect(() => {
    AuthService.isAuthenticated()
      .then((res) => setUser(res.data.user))
      .catch(() => navigate('/login'))

  }, [navigate])

  function logout() {
    return AuthService.logout()
      .then(() => navigate('/login'))
  }

  return (
    <>
      <h1>Eighty20 Technical Challenge Home page</h1>
      <p>Logged in user username: <b>{user.username}</b></p>
      <p>Logged in user favorite pokemon: <b>{user.favorite_pokemon}</b></p>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export { Home }