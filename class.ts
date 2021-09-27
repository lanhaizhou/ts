// 类 Class：定义了一切事物的抽象特点
// 对象 Object：类的实例
// 面向对象 OOP 三大特性：封装、继承、多态

// 修饰符 public——公有属性 private——私有属性 protected——只在父子可用 readonly——只读，不可重新赋值
// 静态属性 static
class Animal {
  protected name: string // 若改为private，则子类调用报错，只能在当前类使用
  static categoies: string[] = ['mamal', 'bird']
  static isAnimal(a) {
    // 静态方法
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
console.log(snake.run())

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}
const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

class Cat extends Animal {
  constructor(name: string) {
    super(name)
    console.log(this.name)
  }
  run() {
    return `Meow，${super.run()}`
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run())

// 类和接口  implements

// 把特性抽取出来，Car、Cellphone类不写switchRadio方法则会报错
interface IRadio {
  switchRadio(): void
}

interface IBattery {
  checkBatteryStatus()
}
// 把前两个接口整合
interface IRadioWithBattery extends IRadio {
  checkBatteryStatus()
}

class Car implements IRadio {
  switchRadio() {}
}

class Cellphone implements IRadio, IBattery {
  switchRadio() {}
  checkBatteryStatus() {}
}
// 效果同上一样
class Cellphone1 implements IRadioWithBattery {
  switchRadio() {}
  checkBatteryStatus() {}
}
