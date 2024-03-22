// no point adding big mapping if we

import { featureCheck } from '../common'
import { insertThousandSeparator, numberFormatters } from '../number'
import { isDefined, isString } from '../type-guard'

// only support MYR now
const currencyMap: Record<string, string> = {
  USD: 'USD'
}

export interface FormatMoneyOptions {
  currency?: string
  decimalPlaces?: number
}

export const formatMoney = (
  value: string | number | undefined,
  currencyOrOptions: string | FormatMoneyOptions = ''
): string => {
  if (!isDefined(value)) {
    return ''
  }

  const numValue = Number(value)
  const decimalPlaces =
    !isString(currencyOrOptions) && isDefined(currencyOrOptions.decimalPlaces) ? currencyOrOptions.decimalPlaces : 2

  let displayValue = ''

  if (isNaN(numValue)) {
    return value as string
  }

  if (featureCheck.intlNumberFormat) {
    if (!numberFormatters[decimalPlaces]) {
      numberFormatters[decimalPlaces] = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces
      })
    }

    displayValue = numberFormatters[decimalPlaces].format(numValue)
  } else {
    displayValue = insertThousandSeparator(numValue.toFixed(decimalPlaces))
  }

  const currency = isString(currencyOrOptions) ? currencyOrOptions : currencyOrOptions.currency || ''
  const currencyDisplay = currencyMap[currency] || currency

  return currencyDisplay ? `${currencyDisplay} ${displayValue}` : displayValue
}
