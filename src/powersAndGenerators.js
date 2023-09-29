export function powers(base, limit, consumer) {
  for (let total = 1; total <= limit; total *= base) consumer(total)
}

export function* powersGenerator(base, limit) {
  for (let total = 1; total <= limit; total *= base) yield total
}

export default { powers, powersGenerator }
