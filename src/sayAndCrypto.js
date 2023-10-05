import { createCipheriv, createDecipheriv } from "node:crypto"

export function say(partialSentence) {
  if (partialSentence === undefined) return ""
  return (newWord) => {
    if (newWord === undefined) return partialSentence
    else return say(`${partialSentence} ${newWord}`)
  }
}

export function makeCryptoFunctions({
  forKey: key,
  using: algorithm,
  withIV: iv,
}) {
  return [
    (dataToEncrypt) => {
      const cipher = createCipheriv(algorithm, key, iv)
      return cipher.update(dataToEncrypt, "utf-8", "hex") + cipher.final("hex")
    },
    (dataToDecrypt) => {
      const decipher = createDecipheriv(algorithm, key, iv)
      return (
        decipher.update(dataToDecrypt, "hex", "utf-8") + decipher.final("utf-8")
      )
    },
  ]
}

export default { say, makeCryptoFunctions }
