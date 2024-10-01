const arr: number[] = [2, 4, 12, 9, 7, 19, 8, 13];

function quickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }
  const numPiv: number = array[0];

  const arrNewLeft = array.filter((p) => p < numPiv);
  const arrNewRight = array.filter((p) => p > numPiv);

  return [...quickSort(arrNewLeft), numPiv, ...quickSort(arrNewRight)];
}
console.log(quickSort(arr));
