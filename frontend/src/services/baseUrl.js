const isProd = process.env.NODE_ENV === 'production'
const LOCALHOST = 'http://localhost:1337'
const PRODUCTION = 'https://hackjunctionapi.herokuapp.com'

const BASE_URL = isProd ? PRODUCTION : LOCALHOST

export default BASE_URL