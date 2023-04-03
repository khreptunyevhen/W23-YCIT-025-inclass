const obj = {
  name: "Yevnen",
  age: "29",
};
console.log(obj);

const obj3 = {
  name: "Yevnen",
  age: "29",
};

const obj2 = obj;
obj2.isMarried = true;

console.log("obj", obj);
console.log("obj2", obj2);
console.log("obj == obj2", obj == obj2);
console.log("obj == obj3", obj == obj3);
console.log("obj.name == obj3.name", obj.name == obj3.name);

const obj4 = { ...obj };
obj4.street = "Rue Basile Rutier";

const obj7 = Object.assign({}, obj);
const obj8 = Object.assign(obj);
console.log("obj == obj7", obj == obj7);
console.log("obj == obj8", obj == obj8);

console.log(obj4);
console.log(obj == obj4);
console.log(obj.name == obj4.name);
console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj4);

console.log("======================================");

const obj5 = {
  name: "Yevnen",
  age: "29",
  wife: {
    name: "Diana",
    age: "27",
    pet: {
      name: "Jazz",
      age: 5,
    },
  },
};

const copyObj5 = { ...obj5 };

console.log(copyObj5.wife.pet.name);

console.log("=================Inheritance=====================");

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vvrooom!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck);
console.log(vehicle);
console.log(vehicle == truck);
console.log(vehicle.wheels == truck.wheels);

console.log("======================================");

const obj9 = {
  name: "Yevnen",
  age: "29",
  wife: {
    name: "Diana",
    age: "27",
    pet: {
      name: "Jazz",
      age: 5,
    },
  },
};

const obj10 = { ...obj9 };

obj10.wife.pet.age = 6;
obj10.age = 30;

console.log(obj9);
