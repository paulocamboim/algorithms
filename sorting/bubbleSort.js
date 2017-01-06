'use strict'

// Sorting Algorithms: Bubble Sort
// Complexity: Avg: О(n^2) / Worst Case: О(n^2)

module.exports = {
  /**
   * Regular implementation of Bubble Sort
   *
   * @param  {array} arr - unsorted array
   * @return {array} sorted array
   */
  bubbleSort: (arr) => {
    const sorted = arr;
    let hasSwapped = true;
    let iterations = 0;

    while(hasSwapped) {
      hasSwapped = false;

      for(let x = 1; x < sorted.length; x++) {
          const prevElement = sorted[x - 1];
          const element = sorted[x];

          // swap elements?
          if(prevElement > element) {
            sorted[x] = prevElement;
            sorted[x - 1] = element;
            hasSwapped = true;
          }

          iterations++;
      }
    }

    return console.log(
        `========
        Regular BubbleSort Sorting
        Sorted Array: ${sorted}
        Iterations Number: ${iterations}`
      );
  },

  /**
   * Optimized implementation of Bubble Sort
   *
   * @param  {array} arr - unsorted array
   * @return {array} sorted array
   */
  bubbleSortOpt: (arr) => {
    const sorted = arr;
    let hasSwapped = true;
    let iterations = 0;

    while(hasSwapped) {
      hasSwapped = false;

      for(let x = 1; x < sorted.length - x; x++) {
          const prevElement = sorted[x - 1];
          const element = sorted[x];

          // swap elements?
          if(prevElement > element) {
            sorted[x] = prevElement;
            sorted[x - 1] = element;
            hasSwapped = true;
          }

          iterations++;
      }
    }

    return console.log(
        `========
        Optimized BubbleSort Sorting
        Sorted Array: ${sorted}
        Iterations Number: ${iterations}`
      );
  }
};