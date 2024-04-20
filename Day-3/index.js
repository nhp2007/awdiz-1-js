
//          // chart //
//   //1.redeclare and reassign
//  //       redeclare            reassign

// //var  >   possible             possible
// //let  >   not possible         possible
// //const >  not possible         not possible



// //2. scope
// var - global scope
// let and const - block scope

// //3. hoisting

// var - hoisting applicable
// let and const - hoisting not applicable

// //scope//

// console.log("hii")

// console.log("hii 2")

// function Greeting() {
//     return "Welcome"
// }

// console.log(Greeting())

// var number = 20;
// {
//     console.log(number)
// }

// let number = 18;
// {
//     console.log(number);
// }

//console.log(number)

// const number = 18;
// {
//     console.log(number);
// }

var firstnumber = 18;
var secondnumber = 7;
var thirdnumber = 20;

{
    console.log(firstnumber)
    {
        {
            console.log(thirdnumber)
            console.log(firstnumber)
        }
        console.log(secondnumber)
    }
}
console.log(thirdnumber)

