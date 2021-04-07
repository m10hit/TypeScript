# TypeScript Features

- Typed Superset of JS which compiles to plain JS.
- We can use data types to write our code (optional)

# Why learn TypeScript

- JS is unable to identify errors during development
- JS can't identify if the scope of the variable exists or not
- Sometimes, we assign string to an integer variable, which was declared with the purpose of having only integer values
- We may call functions with mismatch parameters
- TypeScript gives an error right away when we write our code and prevents us from doing common mistakes
- TypeScript is an official language used in Angular 2.

## Type Inference

```
var x = 10;
```

- TypeScript is going to infer that x is a number
- We can't assign a string to x now as TypeScript inferred that data type of x is going to be a number
- This helps us in identifying mistakes when we write our code

## Explicitly Specifying the Type of a variable using annotations

```
var x:number = 10;
```

- initialization is not compulsory

```
  var y : string;
```

- It is better to use type annotations rather than type inference to declare variables

```
  var n1 = 10;
  var n2 = n1 + 10;
```

- Here, n2 infers to number

```
  var n2 = n1 + "10";
```

- Here, n2 infers to string

## Type Any

- There is no compile-time checking when we use any type
- It is the base type for all the primitive types
- It can hold all the data types
- It is exactly what we have in JS

var bat : any;

## Enum types

- Used to give friendly names to numeric values and create a type for a variable

```
enum EyeColor {
  Brown,
  Black,
  Blue,
}
```

- It will by default assign numeric value of 0,1,2 to Brown, Black, and Blue respectively
- We can assign the values manually as well

```
enum EyeColor {
  Brown=1,
  Black=5,
  Blue=10,
}
```

- Here, Brown is a user-friendly name for the value 1

## Array and Tuples

- Declaration is different for arrays and tuples in TS
- There are two ways to declare arrays in TS

```
let strArr : string[] = ["hey","will"]
let strArr2 : Array<string> = ["hey","will"]  //Generic Syntax
```

- If we have an array of type any, it can hold any value

```
let anyArr: any[] = ['hello', 20, false];
```

- Tuples - Special arrays that let us specify types an array can contain

```
let tup: [string, number] = ['hello', 100];
```

- Tuples are used to declare arrays when we want particular type of data to be stored and it need not be of single type

## interface

- Flexible way to describe types in TS
- The type information is erased in TS program when we compile it, we don't have to worry about runtime overhead when using it

```
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

```
interface Person {
  fName: string;
  lName: string;
  age?: number;
}
```
