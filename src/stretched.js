export function stretched(unicodeSafeString) {
  return [...unicodeSafeString.replaceAll(" ", "")]
    .map((us, i) => us.repeat(i + 1))
    .join("")
}

export default stretched
