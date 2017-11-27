interface generictable {
  [key: string]: number
}

const color:generictable = {
  red: 0xff0000,
  green: 0x00ff00,
  blue: 0x0000ff,
}

const white = color["red"] | color["green"] | color["blue"]
const black = 0

console.log(white)
const key = "xx"
console.log(color[key])
