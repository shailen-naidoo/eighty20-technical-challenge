import axios from 'axios'

axios.defaults.withCredentials = true

class HTTPService {
  static post = (url, data) => {
    return axios.post(url, data)
  }

  static get = (url) => {
    return axios.get(url)
  } 
}

export { HTTPService }