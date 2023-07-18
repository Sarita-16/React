// Arrow Function

const obj = {
  fn1: function () {
    console.log(this);
  },

  fn2: () => {
    console.log(this);
  },
};

obj.fn1(); // fn1

obj.fn2(); // window (parent)

// Example

// create 1st object
const person1 = {
  name: "BTS",
  age: 7,
};

// create 2nd object
const person2 = {
  name: "Sarita",
  age: 22,
};

// create a function

function x() {
  console.log(this);
}

// call the function
x();

// call the function with arguments(person1 object)
x.call(person1);

//
const person = {
  name: "Tania",
  print: function () {
    console.log(this);
  },
};

// Call apply & bind functions
person.print();
person.print.call();
person.print.call(this);
person.print.call(person2);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

Function.prototype.call(this);

person.print.call(person);

//**************************************************/

const object = {
  firstName: "India",
  printName: () => {
    console.log(this.firstName);
  },
};

object.printName();

/*********************************************************/
