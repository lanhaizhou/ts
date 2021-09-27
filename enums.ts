// 枚举enum
enum Direction {
  Up,
  Dowm,
  Left,
  Right,
}

console.log(Direction.Up) // 0
console.log(Direction[0]) // Up

// 常量枚举
const enum Direction1 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

const value = 'UP'
if (value === Direction1.Up) {
  console.log('相等') // 相等
}
