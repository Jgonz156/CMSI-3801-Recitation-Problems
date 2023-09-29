export function say(partialSentence) {
  if (partialSentence === undefined) return ""
  return (newWord) => {
    if (newWord === undefined) return partialSentence
    else return say(`${partialSentence} ${newWord}`)
  }
}

export default say
