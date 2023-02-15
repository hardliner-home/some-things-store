// src
import jwt_decode from 'jwt-decode'

const getJWTBearerToken = async (value: string) => {
  const token = value.split(' ')[1]
  try {
    await localStorage.setItem('JWT_BEARER_TOKEN', token)
  } catch (error) {
    console.log('AsyncStorage.setItem error: ', error)
  }
}

const setJWTBearerToken = async () => {
  let token = null

  try {
    token = await localStorage.getItem('JWT_BEARER_TOKEN')
  } catch (error) {
    console.log('AsyncStorage.setItem error: ', error)
  }

  return token
}

const removeJWTBearerToken = async () => {
  try {
    await localStorage.removeItem('JWT_BEARER_TOKEN')
  } catch (error) {
    console.log('AsyncStorage.removeItem error: ', error)
  }
}

const decodeJWTBearerToken = async () => {
  try {
    const token = await localStorage.getItem('JWT_BEARER_TOKEN')
    if (token) return jwt_decode(token)
  } catch (error) {
    console.log('AsyncStorage.removeItem error: ', error)
  }
}

export { getJWTBearerToken, setJWTBearerToken, removeJWTBearerToken, decodeJWTBearerToken }
