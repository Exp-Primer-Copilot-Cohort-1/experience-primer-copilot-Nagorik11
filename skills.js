//create two bit adder

function adder(a, b) {
  let sum = a ^ b;
  let carry = a & b;
  return [sum, carry];
}