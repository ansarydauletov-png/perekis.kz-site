export function roundToStep(value, step) {
  if (step >= 1) {
    return Math.round(value)
  }
  const precision = Math.round(1 / step)
  return Math.round(value * precision) / precision
}

export function formatMeterValue(value) {
  const rounded = roundToStep(value, 0.1)
  if (Number.isInteger(rounded)) {
    return String(rounded)
  }
  return rounded.toFixed(1).replace('.', ',')
}

export function formatMeterLimit(value) {
  return `${Math.round(Number(value))} м`
}
