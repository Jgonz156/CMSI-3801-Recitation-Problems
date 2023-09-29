import { deepEqual, throws } from "assert/strict"
import say from "../src/sayAndCrypto.js"

describe("The world-famous say function", () => {
  it("works when there are no words", () => {
    deepEqual(say(), "")
  })

  it("works when there are words", () => {
    deepEqual(say("hi")(), "hi")
    deepEqual(say("hi")("there")(), "hi there")
    deepEqual(
      say("hello")("my")("name")("is")("Colette")(),
      "hello my name is Colette"
    )
  })

  it("handles spaces and empty words", () => {
    deepEqual(say("h i")(), "h i")
    deepEqual(say("hi ")("   there")(), "hi     there")
    deepEqual(say("")("")("dog")("")("go")(), "  dog  go")
  })

  it("handles emojis", () => {
    deepEqual(say("😄🤗")("💀👊🏾")(), "😄🤗 💀👊🏾")
  })
})
