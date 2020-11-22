export const setCookie = (name: string, value: string, days: number): void => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()

  document.cookie =
    name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/'
}

export const getCookie = (name: string): string | null => {
  return document.cookie.split('; ').reduce((r: string | null, v: string) => {
    const parts = v.split('=')

    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, null)
}
