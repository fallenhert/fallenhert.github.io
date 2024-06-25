let obj = { value: "a" };

// 在赋值之前打印对象
console.log(obj); // 这将显示对象的引用

// 打印当前的value属性值
console.log(obj.value); // 打印'a'

// 更改属性值
obj.value = "b";

// 稍后再次检查console，obj的输出显示为{ value: 'b' }，即便是在更改之前就已经执行了console.log(obj)
