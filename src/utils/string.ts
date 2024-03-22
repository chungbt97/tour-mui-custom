import { featureCheck } from './common'

export const UNDERSCORE = '_'

export const stringRepeat = (charToRepeat: string, count: number): string => {
  if (featureCheck.stringRepeat) {
    return charToRepeat.repeat(count)
  }

  if (count < 0 || count === Infinity) {
    throw RangeError(`Repeat count must be between 0 and Infinity`)
  }

  let result = ''

  for (let index = 0; index < count; index++) {
    result += charToRepeat
  }

  return result
}

export const padStart = (oriString: string, maxLength: number, fillString = ' '): string => {
  if (featureCheck.stringPadStart) {
    return oriString.padStart(maxLength, fillString)
  }

  const requiredPadding = maxLength - oriString.length

  if (requiredPadding <= 0) {
    return oriString
  }

  return stringRepeat(fillString, requiredPadding) + oriString
}

export const padEnd = (oriString: string, maxLength: number, fillString = ' '): string => {
  if (featureCheck.stringPadEnd) {
    return oriString.padEnd(maxLength, fillString)
  }

  const requiredPadding = maxLength - oriString.length

  if (requiredPadding <= 0) {
    return oriString
  }

  return oriString + stringRepeat(fillString, requiredPadding)
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export const replaceAll = (oriString: string, searchValue: string, replaceValue: string) =>
  oriString.replace(new RegExp(escapeRegExp(searchValue), 'g'), replaceValue)

export const replaceSpace = (str: string, replaceCharacter?: string): string =>
  str.replace(/\s/g, replaceCharacter || UNDERSCORE)
