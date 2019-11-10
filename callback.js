// setTimeout function takes two arguments. 
// First argument is a function  and 2nd is the time in ms
// the First argument is what is called as callback function

setTimeout(() => {
    // i am inside a callback function
}, 2000)


// Note: in the above example we are sending a single callback function
// we can pass more depending on the need

// A callback function is a function which is called later on within another function. Thats  it. Period
// Callbacks doesnt have to be used in a async function, it can be passed in sync function too.


// For example filter() function is not async
const val = [10, 20, 30]
const val_fil = val.filter((v) => {
    return v > 10
})


// http functions can have multiple callbacks for resolve,reject



// This custom function accept a function as 2nd argument which is a callback function..whoosh awesome
// here we are simulating async function using timeout
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitiude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)

}

// see how we are passing a callback function which gets the value
geocode("Luckow", (data) => {
    console.log(data)
})