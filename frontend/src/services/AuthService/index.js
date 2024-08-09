import { HTTPService } from "../HTTPservice"

class AuthService {
  static login = ({ username, password }) => {
    return HTTPService.post('http://localhost:8000/api/v1/auth/login/', {
      username,
      password,
    }, { withCredentials: true })
  }
}

export { AuthService }