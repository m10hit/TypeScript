interface Person {
  fName: string;
  lName: string;
  age?: number;
}

let employee1: Person = {
  fName: 'Joey',
  lName: 'Tribbiani',
  age: 30,
};

let employee2: Person = {
  fName: 'Ross',
  lName: 'Gellar',
};

// Interface, Function and Objects

interface Person {
  fName: string;
  lName: string;
}

function fullName(person: Person) {
  console.log(`${person.fName} ${person.lName}`);
}

let p = {
  fName: 'Bruce',
  lName: 'Wayne',
};

fullName(p);
