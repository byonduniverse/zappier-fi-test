export const formatNumber = (num: number, delimiter = ',') => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter)
}
