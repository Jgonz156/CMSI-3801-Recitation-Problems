import { deepEqual, throws } from "assert/strict"
import topTenScorers from "../src/topTenScorers.js"

describe("The topTenScorers function", () => {
  it("handles an empty object", () => {
    deepEqual(topTenScorers({}), [])
  })
  it("handles a small data set", () => {
    let input = { T1: [["A", 3, 300]] }
    let expected = []
    deepEqual(topTenScorers(input), expected)
    input = { T1: [["A", 30, 300]] }
    expected = [{ name: "A", ppg: 10, team: "T1" }]
    deepEqual(topTenScorers(input), expected)
  })
  it("handles a larger data set", () => {
    let input = {
      ATL: [
        ["Betnijah Laney", 16, 263],
        ["Courtney Williams", 14, 193],
      ],
      CHI: [
        ["Kahleah Copper", 17, 267],
        ["Allie Quigley", 17, 260],
        ["Courtney Vandersloot", 17, 225],
      ],
      CONN: [
        ["DeWanna Bonner", 16, 285],
        ["Alyssa Thomas", 16, 241],
      ],
      DAL: [
        ["Arike Ogunbowale", 16, 352],
        ["Satou Sabally", 12, 153],
      ],
      IND: [
        ["Kelsey Mitchell", 16, 280],
        ["Tiffany Mitchell", 13, 172],
        ["Candice Dupree", 16, 202],
      ],
      LA: [
        ["Nneka Ogwumike", 14, 172],
        ["Chelsea Gray", 16, 224],
        ["Candace Parker", 16, 211],
      ],
      LV: [
        ["A’ja Wilson", 15, 304],
        ["Dearica Hamby", 15, 188],
        ["Angel McCoughtry", 15, 220],
      ],
      MIN: [
        ["Napheesa Collier", 16, 262],
        ["Crystal Dangerfield", 16, 254],
      ],
      NY: [["Layshia Clarendon", 15, 188]],
      PHX: [
        ["Diana Taurasi", 13, 236],
        ["Brittney Griner", 12, 212],
        ["Skylar Diggins-Smith", 16, 261],
        ["Bria Hartley", 13, 190],
      ],
      SEA: [
        ["Breanna Stewart", 16, 317],
        ["Jewell Loyd", 16, 223],
      ],
      WSH: [
        ["Emma Meesseman", 13, 158],
        ["Ariel Atkins", 15, 212],
        ["Myisha Hines-Allen", 15, 236],
      ],
    }
    let expected = [
      { name: "Arike Ogunbowale", ppg: 22, team: "DAL" },
      { name: "A’ja Wilson", ppg: 20.266666666666666, team: "LV" },
      { name: "Breanna Stewart", ppg: 19.8125, team: "SEA" },
      { name: "DeWanna Bonner", ppg: 17.8125, team: "CONN" },
      { name: "Kelsey Mitchell", ppg: 17.5, team: "IND" },
      { name: "Betnijah Laney", ppg: 16.4375, team: "ATL" },
      { name: "Napheesa Collier", ppg: 16.375, team: "MIN" },
      { name: "Skylar Diggins-Smith", ppg: 16.3125, team: "PHX" },
      { name: "Crystal Dangerfield", ppg: 15.875, team: "MIN" },
      { name: "Myisha Hines-Allen", ppg: 15.733333333333333, team: "WSH" },
    ]
    deepEqual(topTenScorers(input), expected)
  })
})
