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

- TypeScript is going to infer that x is a number
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

- It is better to use type annotations rather than type inference to declare variables

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

```ts
var bat: any;
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

```ts
let tup: [string, number] = ['hello', 100];
```

- Tuples are used to declare arrays when we want particular type of data to be stored and it need not be of single type

## interface

- Flexible way to describe types in TS
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
