// Interface 接口
// 对对象的形状（shape）进行描述，对类（class进行抽象）、Duck Typing（鸭子类型）

interface IPerson {
  readonly id: number // 只读属性，只在创建的时候被赋值，修改值会报错（类似const）
  name: string
  age: number
  weight?: 50 // ? 可选属性，可以有可以没有，不会报错
}

let derry: IPerson = {
  id: 1,
  name: 'derry',
  age: 20,
}
// derry.id = 123 // 会报错，因为是只读属性
