export const commaPositionRegex = /\B(?=(\d{3})+(?!\d))/g

export const roundNumber = (value: string | number, digit: number = 2): string =>
  (Math.round(Number(value) * 10 ** digit) / 10 ** digit).toString()

export function insertThousandSeparator(number: string | number): string {
  const numString = String(number)
  if (numString.includes('.')) {
    const [integer, decimal] = numString.split('.')
    return `${integer.replace(commaPositionRegex, ',')}.${decimal}`
  }
  return numString.replace(commaPositionRegex, ',')
}

export const numberFormatters: Record<number, Intl.NumberFormat> = {}
