function add(num1: number, num2: number = 10): number {
  if (num2) return num1 + num2;
  else return num1;
}

add(5, 10);
