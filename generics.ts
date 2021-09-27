// 泛型
// 传入什么类型，返回什么类型
function echo<T>(arg: T): T {
  return arg
}

const strE: string = 'str'
const resultE1 = echo(str) // result类型是string
// 或者，直接传入'str'。类型推断会帮助解决返回什么类型
const resultE2 = echo('str')
const resultE3 = echo(123)
const resultE4 = echo(true)

// 利用元组，类型反转
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result4 = swap(['456', 123]) // 结果类型是 number string

// 约束泛型
function echoWithArrErros<T>(arg: T): T {
  //   console.log(arg.length) // 会报错，因为不确定传入的是什么类型，不一定拥有length属性
  return arg
}
// 修改后的写法，执行传入的是数组，但是只能传入数组，string的也有length属性，不完美
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
// 继续修改，约束泛型
interface IWithLength {
  length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length) // 拥有length属性的都可传入
  return arg
}
const strL = echoWithLength('str1')
const objL = echoWithLength({ length: 1, width: 10 })
const arrL = echoWithLength([])
// const numL = echoWithLength(123) // 报错，因为没有length属性

//
// 推入什么类型，则弹出什么类型
class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>() // 定义了只能推入number
queue.push(1)
// queue.push('123') // 报错

const queue2 = new Queue<string>() // 定义了只能推入string
// queue2.push(1) // 报错
queue2.push('123')

// interface 也可以接受泛型
interface KeyPair<T, U> {
  key: T
  value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: 'str' }
let arrI: Array<number | string> = [1, 'str']

// interface 描述函数类型
interface IPlus {
  (a: number, b: number): number
}
function plus(a: number, b: number) {
  return a + b
}
const a: IPlus = plus

// interface 使用泛型
interface TPlusT<T> {
  (a: T, b: T): T
}

const aT: TPlusT<number> = plus // 传入number，对应函数的类型

function connect(a: string, b: string) {
  return a + b
}

const connectT: TPlusT<string> = connect // 传入string，对应函数类型
