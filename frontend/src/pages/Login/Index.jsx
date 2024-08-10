import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginViewModel } from "./vm"

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const disableLoginButton = useMemo(() => !(username && password), [username, password])

  useEffect(() => {
    LoginViewModel.methods.isAuthenticated({ navigate })
  }, [navigate])

  function login() {
    return LoginViewModel.methods.login({ username, password, navigate })
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
