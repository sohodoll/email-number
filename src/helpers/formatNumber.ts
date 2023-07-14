export const formatNumber = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '')
  const groups = cleanedValue.match(/.{1,2}/g)
  const formattedValue = groups ? groups.join('-') : ''

  return formattedValue
}
