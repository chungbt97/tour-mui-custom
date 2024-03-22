export const featureCheck = {
  stringRepeat: !!String.prototype.repeat,
  stringPadStart: !!String.prototype.padStart,
  stringPadEnd: !!String.prototype.padEnd,
  get matchMedia() {
    return typeof window !== 'undefined' && !!window.matchMedia
  },
  get otpCredential() {
    return typeof window !== 'undefined' && 'OTPCredential' in window
  },
  intlNumberFormat: !!(Intl && typeof Intl === 'object' && typeof Intl.NumberFormat === 'function'),
  get intersectionObserver() {
    return typeof window !== 'undefined' && 'IntersectionObserver' in window
  }
}

export function noop() {}
