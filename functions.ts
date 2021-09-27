// 函数声明
// 入参的可选参数，只能放在最后，例如y是可选z是确定的值，则会报错
function add(x: number, y: number = 10, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

let result = add(2, 3)
let result1 = add(2, 3, 4)

// 函数表达式
const add1 = function add(x: number, y: number = 10, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

const add2: (x: number, y: number, z?: number) => number = add

// 类型推断
let str = 'str' // 自动推断是string类型
// str = 123 // 报错，因此不能赋予number类型的值
