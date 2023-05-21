export default function convertNumber(number) {
  const suffixes = ["", "K", "M", "B", "T"]
  let suffixIndex = 0

  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000
    suffixIndex++
  }

  return number.toFixed(2) + suffixes[suffixIndex]
}
