export const PREFIX = 'NIC'

type ExtendedValue = {
  dataType: string
  value: [unknown, unknown][]
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const createStorage = (PREFIX: string) => {
  function replacer(key: string, value: unknown) {
    if (value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries())
      }
    } else {
      return value
    }
  }

  function reviver(key: string, value: unknown) {
    if (typeof value === 'object' && value !== null) {
      if ((value as ExtendedValue).dataType === 'Map') {
        return new Map((value as ExtendedValue).value)
      }
    }
    return value
  }

  function save(key: string, value: any, prefix = PREFIX): string | null {
    try {
      const savedValue = JSON.stringify(value, replacer)
      window.localStorage.setItem(`${prefix}${key}`, savedValue)
      return savedValue
    } catch (e) {
      console.error('Error in storage.save', e)
      return null
    }
  }

  function load<T>(key: string, parse = true, prefix = PREFIX): T | null {
    try {
      const value = window.localStorage.getItem(`${prefix}${key}`)
      return value && parse ? JSON.parse(value, reviver) : value
    } catch (e) {
      console.error('Error in storage.load', e)
      return null
    }
  }

  function clear(key: string, prefix = PREFIX): void {
    try {
      return window.localStorage.removeItem(`${prefix}${key}`)
    } catch (e) {
      console.error('Error in storage.clear', e)
    }
  }

  return {
    save,
    load,
    clear
  }
}

const createTemporaryStorage = (PREFIX: string) => {
  function save(key: string, value: any, prefix = PREFIX): string | null {
    try {
      const savedValue = JSON.stringify(value)
      window.sessionStorage.setItem(`${prefix}${key}`, savedValue)
      return savedValue
    } catch (e) {
      console.error('Error in storage.save', e)
      return null
    }
  }

  function load<T>(key: string, parse = true, prefix = PREFIX): T | null {
    try {
      const value = window.sessionStorage.getItem(`${prefix}${key}`)
      return value && parse ? JSON.parse(value) : value
    } catch (e) {
      console.error('Error in storage.load', e)
      return null
    }
  }

  function clear(key: string, prefix = PREFIX): void {
    try {
      return window.sessionStorage.removeItem(`${prefix}${key}`)
    } catch (e) {
      console.error('Error in storage.clear', e)
    }
  }

  return {
    save,
    load,
    clear
  }
}

export const storage = createStorage(PREFIX)
export const temporaryStorage = createTemporaryStorage(PREFIX)
