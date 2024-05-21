// ******-settimeout-*******

console.log("Before settimeout")

setTimeout(() => {
    console.log("inside settimeout")
}, 5000);

console.log("After settimeout")


// ******-setinterval-*******

setInterval(() => {
    console.log("inside set interval")
}, 5000);


// ******-ivent loop-********

console.log("Before")

setTimeout(() => {
    console.log("settimeout")
}, 10000);

console.log("After")