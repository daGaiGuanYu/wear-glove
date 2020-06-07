// 本案例展示“使用glove修改参数值和返回值”
const wear = require('../src/index')

function fn(num){ // 执行任务的函数
  console.log('num 是: ' + num)
  return num > 0
}
console.log(fn(1))

console.log('----------------') // 分割线

function glove(fn, num){ // 这是一个手套，fn 是执行任务的函数
  console.log('之前做一些事情')
  let result = fn(num-1)
  console.log(result)
  console.log('之后做一些事情')
  return true
}

fn = wear([glove], fn) // 给 fn 戴手套
console.log(fn(1))