// function getData (){
//     const response = fetch("https://fakestoreapi.com/products")
//     console.log(response,"response")
// }

// getData()

// async function getData (){
//     const response = await fetch("https://fakestoreapi.com/products")
//     const finalresponse = await response.json()
//     console.log(finalresponse,"response")
// }

// getData()

// try catch

// async function getData() {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const finalresponse = await response.json();
//     console.log(finalresponse, "response");
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData();


async function getData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const finalresponse = await response.json();
      console.log(finalresponse, "response");
    //   throw new error ("my personal error")
    } catch (error) {
      console.log(error);
    }
  }
  
  getData();
  

// const myfunction = async()=>{}

// try {

// }catch(error)
