import { HTTPService } from "../HTTPservice"

class AuthService {
  static login = ({ username, password }) => {
    return HTTPService.post('http://127.0.0.1:8000/api/v1/auth/login/', {
      username,
      password,
    })
  }

  static logout = () => {
    return HTTPService.get('http://127.0.0.1:8000/api/v1/auth/logout')
  }

  static isAuthenticated = () => {
    return HTTPService.get('http://127.0.0.1:8000/api/v1/auth/is-authenticated')
  }
}

export { AuthService }