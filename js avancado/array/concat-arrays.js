const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// concatenar 
const array3 = array1.concat(array2, [7, 8, 9], 'Str1', 'Str2');
console.log(array3);

// concatenar utilizando spread (...)
const ar3 = [...array1, ...array2, ...[7, 8, 9], 'Str1', 'Str2'];
console.log(ar3);