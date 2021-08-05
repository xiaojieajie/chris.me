export const localClear = () => localStorage.clear()
export const sessionClear = () => sessionStorage.clear()
export const storageClear = () => {
  localClear()
  sessionClear()
}

const storage = localStorage
const getItem = (key: string) => storage.getItem(key)
const setItem = (key: string, data: any) => storage.setItem(key, data)
const removeItem = (key: string) => storage.removeItem(key)

export const getToken = () => getItem('ACCESS_TOKEN')
export const setToken = (token: string) => setItem('ACCESS_TOKEN', token)
export const removeToken = () => removeItem('ACCESS_TOKEN')

export const getUserInfo = () => {
  const userInfo = getItem('USER_INFO')
  return userInfo ? JSON.parse(userInfo) : {}
}
export const setUserInfo = (userInfo: object) =>
  setItem('USER_INFO', JSON.stringify(userInfo))
export const removeUserInfo = () => removeItem('USER_INFO')
