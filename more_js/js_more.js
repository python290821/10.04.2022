
console.clear()

function c(msg) 
{
   console.log(msg)
}

// let, const
// 1 -- const!
// 2 -- let
// 3 -- var

let x = 3
c(x) // 3

if (true)  {
    let x = 4 // scoped to the if
    c(x) // 4
  }
c(x) // 3

for(let x = 0; x < 5; x++) {
  c(x) // 0,1,2,3,4
}
c(x) // 3
const y = 12
// y = 10// error

// destructuring
function foo( {name , car, color} ) {
  c(name)
  c(color)
  // c(arguments[0])
}
foo( { color:"yellow", name:"itay" , computer : "lenovo"} )

function printNameAge( { age = 12, name}) {
  c(age)
  c(name)
}
const p = { name : "danny", age : 18, car : "toyota"}
printNameAge( p )
printNameAge( { name : "shimi" })
const list = [1,2,3]
let [a, , b] = list
c(a)
c(b)
let [a, b] = [b, a]






