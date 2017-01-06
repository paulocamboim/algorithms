'use strict'

const helper = require('./helpers.js');
const bubbleSort = require('./sorting/bubbleSort');
const selectionSort = require('./sorting/selectionSort');

// Generate the array
const a = helper.randomArray(10, 99);
console.log('Unsorted Array: ', a)

// BubleSort
bubbleSort.bubbleSort(a);
bubbleSort.bubbleSortOpt(a);

// Selection Sort
selectionSort.selectionSort(a);