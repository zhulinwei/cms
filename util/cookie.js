export function parse (cookieString) {
  let cookieArray = []
  if (cookieString) {
    cookieArray = cookieString.split(';')
  }
  let cookie = {}
  for (let v of cookieArray) {
    let temArray = v.split('=')
    cookie[temArray[0].trim()] = temArray[1]
  }
  return cookie
}