import { ROUTES } from "../../router"
import { AuthService } from "../../services/AuthService"

class LoginViewModel {
  static methods = {
    async isAuthenticated(ctx) {
      return AuthService.isAuthenticated()
        .then(() => ctx.navigate(ROUTES.HOME))
    },
    async login(ctx) {
      return AuthService.login({
        username: ctx.username,
        password: ctx.password
      })
      .then(() => ctx.navigate(ROUTES.HOME))
      .catch(() => alert('Your credentials are not valid'))
    }
  }
}

export { LoginViewModel }