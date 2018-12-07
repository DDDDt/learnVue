var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue'
    }
})

var data = {a : 1}
var vm = new Vue({
    data: data
})

// 使用前缀 $ , 以便与用户定义的属性区分开来
console.log(vm.$data === data)
console.log(vm.$el === document.getElementById('app'))


// 获得这个实例上的属性
// 返回源数据中对应的字段a
console.log(vm.a == data.a)

// 设置属性值也会影响到原始数据
vm.a = 2
console.log(data.a)

// 添加新属性不会响应
vm.b = 'hi'

// 使用 Object.freeze() 会组织修改现有的属性
var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})

console.log(obj.foo)
