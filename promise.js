// Node JS has no ES6 Support so no imports as you do in Angular, using require the old way
const util = require("util")


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
// a fucking function that returns a promise and sara backchod logic should be written within that promise block

function resolveIfNumber(val) {
    return new Promise((resolve, reject) => {
        // sara randi rona yahan pe likho
        // resolve means then and reject means catch 
        // send the value passed into this function as is it after few seconds
        setTimeout(() => {
            if (util.isNumber(val))
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
const num = resolveIfNumber("20").then(data => doubleTheNumber(data)).then(data => tripleTheNumber(data));

num.then(data => console.log(data)).catch(err => {
    console.log(err)
})