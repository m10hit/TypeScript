# TypeScript Features

- Typed Superset of JS which transpiles to plain JS.
- We can use data types to write our code (optional)

# Why learn TypeScript

- JS is Dynamically typed, which means JS doesn't know the type of a variable unless it is instantiated at runtime, which is too late
- JS is unable to identify errors during development
- JS can't identify if the scope of the variable exists or not
- Sometimes, we assign string to an integer variable, which was declared with the purpose of having only integer values
- We may call functions with mismatch parameters
- TypeScript adds type support to JS
- TypeScript gives an error right away when we write our code i.e. during compilation and prevents us from doing common mistakes
- IDE support - intellisense support, ability to refactor code easily and red line when we have error.
- TypeScript is an official language used in Angular 2 and is also used in React and Vue.

## Type Inference

```ts
var x = 10;
```

- TypeScript is going to infer that x is a number when we initialize a variable during declaration
- We can't assign a string to x now as TypeScript inferred that data type of x is going to be a number
- This helps us in identifying mistakes when we write our code

## Explicitly Specifying the Type of a variable using annotations

```ts
var x: number = 10;
```

- initialization is not compulsory

```ts
var y: string;
```

- It is better to use type annotations rather than type inference to declare variables because type inference take place when initializing variable. It won't work when we just declare a variable and define it after.

```ts
var n1 = 10;
var n2 = n1 + 10;
```

- Here, n2 infers to number

```ts
var n2 = n1 + '10';
```

- Here, n2 infers to string

## Use of having Types

- Static type checking - if we assign boolean to a string variable, we get an error right away.
- This is unlike plain JS which do not prevent us from making mistakes and may get unnoticed during development
- Accurate Intellisense - If we have a string type, intellisense provides methods and properties applicable to string type

## Type Any

- There is no compile-time checking when we use any type
- It is the base type for all the primitive types
- It can hold all the data types
- It is exactly what we have in JS
- When we use any type, we can call it, or access any value using dot even if it not an object and it won't give us an error. To tackle this issue, TS introduced a new type called 'unknown'

```ts
var bat: any;
bat();
bat.a = 10;
bat.toUpperCase();
```

## Unknown Type

- Any value is asignable to unknown, but we can't access any property of unknown type, nor we can call or construct them. We get errors when we try to do that
- To be able to get rid of the errors, we use type assetion to tell the type system that we are using a particular type. It is similar to type casting

```ts
var bat: unknown;
(bat as string).toUpperCase();
```

## Enum types

- Used to give friendly names to numeric values and create a type for a variable

```ts
enum EyeColor {
  Brown,
  Black,
  Blue,
}
```

- It will by default assign numeric value of 0,1,2 to Brown, Black, and Blue respectively
- We can assign the values manually as well

```ts
enum EyeColor {
  Brown = 1,
  Black = 5,
  Blue = 10,
}
```

- Here, Brown is a user-friendly name for the value 1

## Note

- null and undefined are considered as sub-types of all other types
- It means, we can assign a value of null or undefined to string, boolean, or a number

```ts
let person: boolean = null;
let person2: string = undefined;
```

## Array and Tuples

- Declaration is different for arrays and tuples in TS
- There are two ways to declare arrays in TS

```ts
let strArr: string[] = ['hey', 'will'];
let strArr2: Array<string> = ['hey', 'will']; //Generic Syntax
```

- If we have an array of type any, it can hold any value

```ts
let anyArr: any[] = ['hello', 20, false];
```

- Tuples - Special arrays that let us specify types an array can contain
- In tuples, number of elements are fixed and the order of values must match the order of types

```ts
let tup: [string, number] = ['hello', 100];
```

- Tuples are used to declare arrays when we want particular type of data to be stored and it need not be of single type

## interface

- Flexible way to describe types in TS. It is possible to specify an object as type in TS
- The type information is erased in TS program when we compile it, we don't have to worry about runtime overhead when using it

```ts
interface Person {
  fName: string;
  lName: string;
  age: number;
}
```

- When creating a variable with type Person, we must provide all the three properties in the Person interface
- The only purpose of interface in TS is to describe a particular type
- What if we are not sure of any one property?
- We can make a property in an interface optional by adding a '?' before a property

```ts
interface Person {
  fName: string;
  lName: string;
  age?: number;
}
```

## Union

```ts
let multiType: number | boolean;
multiType = 200;
multiType = true;
```

- Here, the use case is when the value is not in our control, like when we fetch data from an API

## why to use union instead of any type?

- Union type restricts to the specified types, whereas the any type has no restrictions
- Intellisense support - when we have any type, it has no intellisense support

## Functions

- We can add types to function parameters

```ts
function add(num1: number, num2: number) {
  return num1 + num2;
}

add(5, 10);
```

- Here, we can't call add with a string as we have static type checking in TS
- We also get intellisense support while calling a function, which tell us the type of parameter it accepts and also the return type of the function
- We can also specify the return type of a function explicitly after the function parameters like below

```ts
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(5, 10);
```

- In TS, every parameter is assumed to be required by the function. If we call a function without parameters when it expects a paramter, we get an error.
- In JS, it is possible to call a function without any parameters, and paramters recevies the value of undefined in that case
- We can make parameter as optional in TS by adding a `?` like below in the function defintion
- We can have any number of optional parameters and optional parameters must always be after the required parameters

```ts
function add(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}

add(5);
```

## Default Parameters

- Default paramters are like optional parameters with a set value instead of undefined

```ts
function add(num1: number, num2: number = 10): number {
  if (num2) return num1 + num2;
  else return num1;
}

add(5, 10);
```

## Using interface with functions when passing object as parameter

```ts
function fullName(person: { fName: string; lName: string }) {
  console.log(`${person.fName} ${person.lName}`);
}

let p = {
  fName: 'Bruce',
  lName: 'Wayne',
};

fullName(p);
```

- Here, we won't face any issues as our object has only 2 properties
- What if it has lot of properties, nested properties, or have so many functions that uses same object as parameters
- Code maintainenace is difficult in such cases
- We can use interfaces in TS to resolve the issue. We can create interface of the person object and use that interface as a type for the function parameter.

```ts
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
```

- The same interface can be used as type in multiple functions and any changes in Person type happens in one place
- It is also possible to define a property as optional in interface using '?'
- Use case of optional property is Forms.
