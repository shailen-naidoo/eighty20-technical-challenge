import axios from 'axios'

axios.defaults.withCredentials = true

class HTTPService {
  static post = (url, data, config) => {
    return axios.post(url, data, config)
  }

  static get = (url, config) => {
    return axios.get(url, config)
  } 
}

export { HTTPService }