'use strict'

// Sorting Algorithms: Bubble Sort
// Complexity: Avg: О(n^2) / Worst Case: О(n^2)

module.exports = {
  /**
   * selectionSort implementation
   *
   * @param  {array} arr - unsorted array
   * @return {array} sorted array
   */
  selectionSort: (arr) => {
    const sorted = arr;
    let posFromRight = 1;
    let largestNumber = sorted[0];
    let largestNumberPos = 0;
    let iterations = 0;

    while(posFromRight < sorted.length) {
      for(let x = 0; x <= sorted.length - posFromRight; x++) {
        // find the largest number
        if (sorted[x] > largestNumber) {
          largestNumber = sorted[x];
          largestNumberPos = x;
        }

        iterations++;
      }

      // Copy the last element to the largest element position
      sorted[largestNumberPos] = sorted[sorted.length - posFromRight];
      sorted[sorted.length - posFromRight] = largestNumber;
      posFromRight++;

      // Reset the largest number to the first
      largestNumber = arr[0];
      largestNumberPos = 0;
    }

    return console.log(
        `========
        Selection Sort
        Sorted Array: ${sorted}
        Iterations Number: ${iterations}`
      );
  }
}