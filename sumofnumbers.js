// Write four functions that return the sum of the numbers in a given list using a for-loop,
// a while-loop, recursion, and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.

const test = [1, 2, 3, 4, 5, 6];

function sumFor(numList) {
  let sum = 0;

  for (let i = 0; i < numList.length; i++) {
    sum += numList[i];
  }

  return sum;
}

console.log(`sumFor: ${sumFor(test)}`);

function sumWhile(numList) {
  let sum = 0;
  let i = 0;

  while (i < numList.length) {
    sum += numList[i];
    i++;
  }

  return sum;
}

console.log(`sumWhile: ${sumWhile(test)}`);

function sumRecursionHelper(numList, counter) {
  if (counter === 0) {
    return numList[0];
  }

  return numList[counter] + sumRecursionHelper(numList, counter - 1);
}

function sumRecursion(numList) {
  return sumRecursionHelper(numList, numList.length - 1);
}

console.log(`sumRecursion: ${sumRecursion(test)}`);

function sumTheSimpleWay(numList) {
  return _.reduce(numList, (memo, num) => memo += num);
}

console.log(`sumTheEasyWay: ${sumTheSimpleWay(test)}`);
