/**
 * * Javascript prototype
 */


const animal = {
  run: true
}

const dog = {
  bark: "WOOF!"
}

const husky = {
  name: "Cafe",
  __proto__: dog
}

Object.setPrototypeOf(dog, animal)
console.log(Object.getPrototypeOf(dog))
console.log(dog.run)
console.log(dog.__proto__)
console.log(husky.name)
console.log(husky.bark)
console.log(husky.run)

const house = {
  doors: 10, 
  type: "Villa",

  get houseType() {
    return this.type
  },

  set houseType(newType) {
    this.type = newType
  }
}

console.log(house)
let myHouse = {}
Object.setPrototypeOf(myHouse, house)
console.log(myHouse.doors)
myHouse.type = "Mansion"
console.log(myHouse.valueOf())
Object.keys(myHouse).forEach(key => console.log(key))
for(let key in myHouse) console.log(key)

function Car(brands){
  this.brand = brands
  this.minSpeed = "100km/h"
}

Car.prototype.mileage = function () {
  return  `My ${this.brand} has 2000km`
}

const MyCar = new Car("Toyota")
console.log(MyCar.brand)
console.log(MyCar.mileage())
console.log(MyCar.__proto__)
console.error(MyCar.__proto__ === Car.prototype)