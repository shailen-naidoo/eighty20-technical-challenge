import { useNavigate } from "react-router-dom"
import { AuthService } from "../services/AuthService"
import { useEffect, useState } from "react"
import { ROUTES } from "../router"

function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  useEffect(() => {
    AuthService.isAuthenticated()
      .catch(() => navigate(ROUTES.LOGIN))
      .then((res) => setUser(res.data.user))

  }, [navigate])

  function logout() {
    return AuthService.logout()
      .catch(() => alert('Logout was not successful! Please try again!'))
      .then(() => navigate(ROUTES.LOGIN))
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