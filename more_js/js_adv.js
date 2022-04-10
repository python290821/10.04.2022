
console.clear()

function c(msg) 
{
   console.log(msg)
}

c(addNoFat(4, 0))

// fat arrow
// 1 - nice , shorter, more readable
function addNoFat(x,y) { return x + y }


//c(addFat_(4, 5))

const addFat_ = function(x,y) { x + y; }
const addFat = (x,y) => x + y
c(addNoFat(4, 0))
c(addFat(4, 5))

const numbers = [1, 2, 3]
const my_power2 = numbers.map(x => x * x)
c(my_power2)
const persons = [{name : 'danny', age: 18}, {name : 'ofir', age : 22}]
const names = persons.map(p => p.name)
c(names)

// lexical this
const team1 = {
  members: ['Jane','Bill'],
	teamName : 'Super squad',
  teamSummary()   {
    /*
    const self = this
  	const result = this.members.map(function(member) {
      c(this)
      return member + ' is on team ... ' + self.teamName
      //return `${member} is on team ${this.teamName}`
    }//.bind(this)
		)
    return result
    */
    
  	const result = this.members.map((member) => {
      return member + ' is on team ... ' + this.teamName
    })
    return result

	}
}

c( team1.teamSummary() )

const cars = [ {model: "Honda", price: 50000 }, {model: "Toyota", price: 100000}, {model: "Ferrari", price: 2000000}]
const prices = cars.map( car => { return car.price})
c(prices)
const onlyCheap = cars.filter( car => car.price < 100000 )
c(onlyCheap)
const firstPriceyCar = cars.find( car => car.price > 50000 ) // find first
c(firstPriceyCar)
const areAllCarsAbove50000 = cars.every( car => car.price > 50000 )
c(areAllCarsAbove50000)
const areSomeCarsAbove50000 = cars.some( car => car.price > 50000 )
c(areSomeCarsAbove50000)

const array1 = [1, 2, 3, 4];
const reducer = (sum, currentValue) => sum + currentValue ;
console.log(array1.reduce(reducer));// 1 + 2 + 3 + 4
// expected output: 10
console.log(array1.reduce(reducer, 5)); // 5 + 1 + 2 + 3 + 4
// expected output: 15

const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
c(average) // 39.37

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);
c(flat) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// The Set object lets you store unique values of any type, whether primitive values or object 
const set1 = new Set([1, 2, 3, 4, 4, 5]); // 4 will be stored only once
c(set1)
set1.add(5)
set1.add(3)
console.log(set1.has(1));
// expected output: true
console.log(set1.has(5));
// expected output: true
console.log(set1.has(6));
// expected output: false

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');
c(`key 1 : value = ${question.get(1)}`)
c(`key true : value = ${question.get(true)}`)
console.log(question.get('question'));
console.log(question.size);
if(question.has(4)) {
    question.delete(4);
    console.log('Answer 4 was removed')
}
question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));


class CarE6 {
  constructor( { model } ) {
  	this.model = model
	}
  drive() {
    return 'vroooooooom'
  }
}

const my_car = new CarE6( { model : "Honda"})
c(my_car.drive())

class Toyota extends CarE6 {
  constructor({ color }) {
    super({ model : "Toyota" })
    this.color = color
  }
  print() {
    c(`Toyota ${this.color}`)
  }
}

const my_toyota = new Toyota({ color : "red" })
my_toyota.print()
c(model2)

// properties
class Rectangle {
    constructor (width, height) {
        this._width  = width
        this._height = height
    }
    set width  (width)  { this._width = width               }
    get width  ()       { return this._width                }
    set height (height) { this._height = height             }
    get height ()       { return this._height               }
    get area   ()       { return this._width * this._height }
}
var r = new Rectangle(50, 20)
c(r.area) // 1000
r.width = 200
c(r.area) // 4000
