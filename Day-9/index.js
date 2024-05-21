// var array = [1, 2, 3, 4, 5, 6];
// var count = 0;

// for (var i = 0; i < array.length; i++) {
//   for (var j = i + 1; j < array.length; j++) {
//     count++;
//     console.log(array[i], "+", array[j], "=", array[i] + array[j]);
//   }
// }
// console.log("Total Count  ", count);






var array = [1, 2, 3, 4, 5, 6];
var count = 7;

for (var i = 0; i < array.length; i++) {
  for (var j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] == 7) {
      console.log(array[i], array[j]);
    }
  }
}
