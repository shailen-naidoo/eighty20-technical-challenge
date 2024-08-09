import axios from 'axios'

class HTTPService {
  static post = (url, data) => {
    return axios.post(url, data)
  }
}

export { HTTPService }