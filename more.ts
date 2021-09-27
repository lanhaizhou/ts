// 类型别名和类型断言
// type aliases 类型别名
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
  return x + y
}

const sum2: PlusType = sum

// 类型别名用在联合类型较多
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// type assertion 类型断言
function getLength1(input: string | number): number {
  let len
  //   len = input.length // 报错，因为number类型没有length属性
  return len
}
// 修改
function getLength2(input: string | number): number {
  // 只能断言成联合类型的其中一种

  // 写法1 用as 断言
  //   const str = input as String
  //   const strN = input as number
  //   if (str.length > 0) {
  //     // 可直接使用length了
  //     return str.length
  //   } else {
  //     return strN.toString().length
  //   }

  // 写法2 更简洁
  if ((<string>input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  }
}


