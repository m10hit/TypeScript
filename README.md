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

var x = 10;

- TypeScript is going to infer that x is a number
- We can't assign a string to x now as TypeScript inferred that data type of x is going to be a number
- This helps us in identifying mistakes when we write our code

## Explicitly Specifying the Type of a variable using annotations

var x:number = 10;

- initialization is not compulsory
  var y : string;

- It is better to use type annotations rather than type inference to declare variables
  var n1 = 10;
  var n2 = n1 + 10;

  - Here, n2 infers to number

  var n2 = n1 + "10";

  - Here, n2 infers to string
