const dataToEvaluate = '(1 + ( (2 + 3) * (4 * 5) ) )';

// Multiplication and summation only
function evaluateWithTwoStacks(expressionStr) {
  const operators = [];
  const values = [];
  let index = 0;

  console.log('show running')

  while (index < expressionStr.length - 1) {
    console.log('iteration', values);

    index++;

    if (expressionStr[index] === '(') continue;
    else if (expressionStr[index] === ' ') continue;
    else if (expressionStr[index] === '+') operators.push(expressionStr[index]);
    else if (expressionStr[index] === '*') operators.push(expressionStr[index]);
    else if (expressionStr[index] === ')') {
      const operator = operators.pop();

      if (operator === '+') values.push(values.pop() + values.pop());
      if (operator === '*') values.push(values.pop() * values.pop());
    }
    else values.push(Number(expressionStr[index]));

  }

  console.log(values);
}

evaluateWithTwoStacks(dataToEvaluate);

