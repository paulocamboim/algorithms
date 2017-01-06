'use strict'

module.exports = {
/**
 * Create a array with N elements from 1..max
 * @param  {[int]}
 * @return {[array]}
 */
  randomArray: (n, max = 100000) => {
    return Array(n).fill(0).map(
        () => Math.floor(Math.random() * max) + 1
      );
  }
};