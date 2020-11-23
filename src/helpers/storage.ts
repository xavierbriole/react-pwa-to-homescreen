export default class Storage {
  static get(key: string): string | null {
    try {
      return window.localStorage.getItem(key)
    } catch (error) {
      console.error(`Error while getting data from localStorage`, error)
      return null
    }
  }

  static set(key: string, value: string): void {
    try {
      window.localStorage.setItem(key, value)
    } catch (error) {
      console.error(`Error while setting data from localStorage`, error)
    }
  }
}
