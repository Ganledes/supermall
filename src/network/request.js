import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000',
    timeout: 5000
  })

  instance.interceptors.response.use(value => {
    return value.data
  }, error => {
    console.log(error);
  })

  return instance(config)
}
