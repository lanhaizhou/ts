// 原始数据类型 boolean number string undefined null
let isDone: boolean = false

let age: number = 20
let binaryNumber: number = 0b1111 // 二进制

let firstName: string = 'Derry'
let message: string = `Hello，${firstName}，age is ${age}`

let u: undefined = undefined
let n: null = null

// undefined null 是所有类型的子类型，都不会报错
let num: number = undefined
let nul: string = null

// any 都不会报错
let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true
notSure.myName
notSure.getName()

// 联合类型 |
let numberOrString: number | string = 234
numberOrString = 'abc'

// 数组 Array
let arrOfNumber: number[] = [1, 2, 3, 4]
let arrOfNumber1: Array<number> = [1, 2, 3, 4] // 另一种写法，泛型
arrOfNumber.push(5)
// arrOfNumber.push('9') // 会报错

// 元组 tuple 指定每一项的数据类型
let user: [string, number] = ['Derry', 1]
// user = ['hua', 1, true] // 报错，因为多了一项


