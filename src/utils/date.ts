import addMinutes from 'date-fns/addMinutes'
import dateFnsFormat from 'date-fns/format'
import isSameDay from 'date-fns/isSameDay'
import isSameMonth from 'date-fns/isSameMonth'
import { isDefined } from './type-guard'

/**
 * Date constants and types
 */
export type DateFormatType = 'dateOnly' | 'dateAndTime' | 'monthOnly'
export const FORMAT_DATE = {
  dayOnly: 'd MMM yyyy',
  dayAndTime: 'd MMM yyyy, h:mm a',
  timeOnly: 'h:mm a',
  monthOnly: 'MMM yyyy'
} as const

/**
 * small abstraction over `date-fns/format` function
 *
 * If the provided `date` is not a valid date, this function return it without modifying.
 *
 * @param date date value to be formatted
 * @param options
 * @param options.formatType convenient shorthand to specify the format, can be 'dateAndTime' or 'dateOnly'. Use to provide default for options.format
 * @param options.format format string that will be passed to second parameter of `date-fns/format`
 */
export const formatDate = (
  date: string | Date,
  {
    formatType = 'dateAndTime',
    format = formatType === 'dateAndTime' ? FORMAT_DATE.dayAndTime : FORMAT_DATE.dayOnly
  }: {
    formatType?: DateFormatType
    format?: string
  } = {}
): string => {
  if (formatType === 'monthOnly') {
    format = FORMAT_DATE.monthOnly
  }
  const dateObj = typeof date === 'string' ? new Date(date) : date

  return isNaN(dateObj.getTime()) ? (date as string) : dateFnsFormat(dateObj, format)
}

/**
 * format a month range.
 *
 * @param from the earlier month. can be undefined.
 * @param to the later month. can be undefined or same as from.
 */
export const formatMonthRange = (from: Date | undefined, to: Date | undefined): string => {
  if (isDefined(from) && isDefined(to)) {
    if (isSameMonth(from, to)) {
      const fromTime = dateFnsFormat(from, FORMAT_DATE.monthOnly)
      const toTime = dateFnsFormat(to, FORMAT_DATE.monthOnly)

      if (fromTime === toTime) {
        return fromTime
      }
    }
  }

  return [from, to]
    .filter(isDefined)
    .map(d => dateFnsFormat(d, FORMAT_DATE.monthOnly))
    .join(' - ')
}

/**
 * format a date range.
 *
 * @param from the earlier date. can be undefined.
 * @param to the later date. can be undefined or same as from.
 * @param dayOnly whether we only cares about date without considering time.
 */
export const formatDateRange = (from: Date | undefined, to: Date | undefined, dayOnly?: boolean): string => {
  if (isDefined(from) && isDefined(to)) {
    if (isSameDay(from, to)) {
      const dayOnlyDisplay = formatDate(from, { formatType: 'dateOnly' })

      if (dayOnly) {
        return dayOnlyDisplay
      }
      const fromTime = dateFnsFormat(from, FORMAT_DATE.timeOnly)
      const toTime = dateFnsFormat(to, FORMAT_DATE.timeOnly)

      if (fromTime === toTime) {
        return formatDate(from, { formatType: 'dateAndTime' })
      }

      return `${dayOnlyDisplay}, ${fromTime} - ${toTime}`
    }
  }
  return [from, to]
    .filter(isDefined)
    .map(d => formatDate(d, { formatType: dayOnly ? 'dateOnly' : 'dateAndTime' }))
    .join(' - ')
}

/**
 * format a date to UTC date format, e.g. `'2021-02-03T16:00:00.000Z'`.
 *
 * Confession: TBH I don't really understand those date formats, I just copy from https://github.com/date-fns/date-fns/issues/1401#issuecomment-578580199.
 *
 * @param date the date that you want to format
 */
export const formatDateUtc = (date: string | Date): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return dateFnsFormat(addMinutes(d, d.getTimezoneOffset()), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
}

export const getTimezone = () => {
  try {
    const offset = new Date().getTimezoneOffset() * -1
    // eslint-disable-next-line radix
    const hour = parseInt(`${offset / 60}`)
    const minutes = offset % 60
    return `${hour > 9 ? hour : `0${hour}`}:${minutes === 0 ? '00' : '30'}`
  } catch {
    return '00:00'
  }
}
