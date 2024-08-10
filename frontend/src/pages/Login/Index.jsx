import { useEffect, useMemo, useState } from "react"
import { AuthService } from "../../services/AuthService"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../router"

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const disableLoginButton = useMemo(() => !(username && password), [username, password])

  useEffect(() => {
    AuthService.isAuthenticated()
      .then(() => navigate(ROUTES.HOME))
  }, [navigate])

  function login() {
    return AuthService.login({ username, password })
      .then(() => navigate(ROUTES.HOME))
      .catch(() => alert('Your credentials are not valid'))
  }

  return (
    <>
      <h1>Eighty20 Technical Challenge Login page</h1>
      <label htmlFor="">Username</label>
      <input name="Username" type="text" value={username} onInput={({ target: t }) => setUsername(t.value)} />
      <label htmlFor="">Password</label>
      <input name="Password" type="password" value={password} onInput={({ target: t }) => setPassword(t.value)}/>
      <button onClick={login} disabled={disableLoginButton}>Login</button>
    </>
  )
}

export { Login }
