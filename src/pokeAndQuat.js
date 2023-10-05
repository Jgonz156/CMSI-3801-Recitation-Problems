export async function pokemonInfo(pokemon) {
  let uri = encodeURIComponent(pokemon)
  let url = `https://pokeapi.co/api/v2/pokemon/${uri}`
  let pokeResponse = await fetch(url)
  if (pokeResponse.status < 200 || pokeResponse.status > 299) {
    return {
      error: `No information for ${decodeURIComponent(uri)}`,
    }
  } else {
    let pokeObj = await pokeResponse.json()
    return { id: pokeObj.id, name: pokeObj.name, weight: pokeObj.weight }
  }
}

export class Quaternion {
  #a
  #b
  #c
  #d
  constructor(a, b, c, d) {
    this.#a = a
    this.#b = b
    this.#c = c
    this.#d = d
  }
  plus(other) {
    return new Quaternion(
      this.#a + other.#a,
      this.#b + other.#b,
      this.#c + other.#c,
      this.#d + other.#d
    )
  }
  times(other) {
    return new Quaternion(
      other.#a * this.#a -
        other.#b * this.#b -
        other.#c * this.#c -
        other.#d * this.#d,
      other.#a * this.#b +
        other.#b * this.#a -
        other.#c * this.#d +
        other.#d * this.#c,
      other.#a * this.#c +
        other.#b * this.#d +
        other.#c * this.#a -
        other.#d * this.#b,
      other.#a * this.#d -
        other.#b * this.#c +
        other.#c * this.#b +
        other.#d * this.#a
    )
  }
  coefficients() {
    return [this.#a, this.#b, this.#c, this.#d]
  }
}

export default { pokemonInfo, Quaternion }
