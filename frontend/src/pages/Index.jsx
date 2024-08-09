import { useNavigate } from "react-router-dom"
import { AuthService } from "../services/AuthService"

function Home() {
  const navigate = useNavigate()

  function logout() {
    return AuthService.logout()
      .then(() => navigate('/login'))
  }

  return (
    <>
      <h1>Eighty20 Technical Challenge Home page</h1>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export { Home }