import { CURRENCY_DATA } from './constants'

export const convertCurrencyDataToObject = () => {
  const objCurreny = {} as any
  CURRENCY_DATA.forEach(c => (objCurreny[c.code] = c))
  return objCurreny
}

export const getNameCurrency = (code: any) => {
  const objCurrency = convertCurrencyDataToObject()
  return objCurrency[code].name
}

export const getSymbolCurrency = (currency: any) => {
  const objCurrency = convertCurrencyDataToObject()
  if (objCurrency[currency]) {
    return objCurrency[currency].symbol
  }
  const defaultPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(0)
  return defaultPrice.split(/[0.,]/)[0]
}
