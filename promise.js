// Node JS has no ES6 Support so no imports as you do in Angular, using require the old way
var promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({
            data: "Hi you got the data"
        })
    }, 5000)

})


promise1.then(data => {
    // console.log(data)
})



// ---------------------------------the above example is useless for commercial purpose, just grab the concept.
// Probably it was useful if we were fetching something from api
// a fucking function that returns a promise and sara backchod logic should be written within that promise block

// To make above function useful we pass a paramter. For that we just modify the above code a little.
var promise1=(param) => new Promise((resolve, reject) => {

    setTimeout(() => {
        if(typeof param=="number")
        resolve({
            data: "Hi your data is "+ param
        })
        else
        reject({
            data: "String detected "+ param

        })
    }, 5000)

})


promise1('100').then(data => {
    // console.log(data)
},err=>{
    // console.log(err)
})

// Voila! now we have something useful.





function resolveIfNumber(val) {
    return new Promise((resolve, reject) => {
        // sara randi rona yahan pe likho
        // resolve means then and reject means catch 
        // send the value passed into this function as is it after few seconds
        setTimeout(() => {
            if ((typeof val) === 'number')
                resolve(val)
            else
                reject("Not a number")
        }, 2000)
    })
}


function doubleTheNumber(val) {
    return new Promise((resolve, reject) => {
        // sara randi rona yahan pe likho
        // resolve means then and reject means catch 
        // send the value passed into this function as is it after few seconds
        setTimeout(() => {
            resolve(val * 2)
        }, 2000)
    })
}

function tripleTheNumber(val) {
    return new Promise((resolve, reject) => {
        // sara randi rona yahan pe likho
        // resolve means then and reject means catch 
        // send the value passed into this function as is it after few seconds
        setTimeout(() => {
            resolve(val * 3)
        }, 2000)
    })
}


// bc function toh likh liya ab kya?
// 2 tarike hain ... ya toh async await implement karo ya toh promise chaining karo

// using Promise Chaining 
// TYPE1
// resolveIfNumber(2).then(doubleTheNumber).then(tripleTheNumber).then(data => console.log(data)).catch(err => {
//     console.log(err)
// })


// TYPE 2
// This method can be used when we want to pass additional parameters in between, below we are just passing the recieved data
// resolveIfNumber(20).then(data => doubleTheNumber(data)).then(data => tripleTheNumber(data)).then(data => console.log(data)).catch(err => {
//     console.log(err)
// })



// TYPE 3
// Another way to use it
// Another way to write it
// const num = resolveIfNumber("20").then(data => doubleTheNumber(data)).then(data => tripleTheNumber(data));

// num.then(data => console.log(data)).catch(err => {
//     console.log(err)
// })

// this is not a function
var waiterStatic= new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({
            data: "Hi you got the data from static"
        })
    }, 3000)

})

// this is a function
var waiterDynamic =(timeout) => new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({
            data: "Hi you got the data from dynamic"
        })
    }, timeout)

})

const wait5sec = async () => {
  console.log("static wait executed");
  const a =   await waiterStatic;
  console.log(a.data)
  console.log("dynamic wait executed")
  const b =   await waiterDynamic('5000');
  console.log(b.data)
}

waiterStatic.then(data=>{
    console.log(data)
})

waiterDynamic(5000).then(data=>{
    console.log(data);
})

// wait5sec();

// Making a normal function a async function which is returning a promise as you can see below.
// this will serve no realtime purpose but is great for learning how async await works.
let c = async () =>{
 let cd = await 1 + 1;
 return cd + "making a sync async "
}

c().then(d=>{
    console.log(d)
})


// Making a sleep function

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(fn, ...args) {
    await timeout(3000);
    return fn(...args);
}


  const a =   Promise.all([
        waiterDynamic(3000),
        waiterDynamic(4000).then(data=>{console.log("I will be undefined somwhere")}),
        timeout(5000)
    ]);

    a.then(data=>{
        console.log(data)
    })

    
    // other code
  

