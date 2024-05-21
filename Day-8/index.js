console.log("Print 30-35 reverse order")
for (var i = 55; i >= 30; i--) {
  console.log(i);
}




// Q. Print number in given order and also in reverse from given array, use for loop .


var array = [2 ,1 ,9 ,15 ,33 ,18 , 26 ,65];
console.log("Print in given order of array")

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("Print in reverse order from array")
for (var i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}




// Q .  find addition of odd numbers from array


console.log("Print addition of odd numbers from array")
var array1 = [23, 21, 14, 34, 4, 72, 9, 2, 3];

var count = 0; // 1
for (var i = 0; i < array1.length; i++) {
  if (array1[i] % 2 === 1) {
    count += array1[i];
  }
}
console.log("Count", count);



// Q. Print "hii" 6 times.


console.log("Print `hii` 6 times")
for (var i = 1; i <= 6; i++) {
    console.log("hii");
}

// Q. Given an array find name of student whose lenght is more than 5.


console.log("Print name of student whose lenght is more than 5")
var students = ["rahul", "ravindra", "virat", "rishabh","mohit"];

for (var i = 0; i < students.length; i++) {
  if (students[i].length > 5) {
    console.log(students[i]);
  }
}