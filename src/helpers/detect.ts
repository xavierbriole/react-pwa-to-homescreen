export const isIphone = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()

  return /iphone/.test(userAgent)
}
