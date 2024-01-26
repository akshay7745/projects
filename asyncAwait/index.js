const wifeBringsTickets = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket");
    },3000)
})










console.log("Person1: shows the ticket")
console.log("Person2: two shows the ticket")


const getPopcorn = wifeBringsTickets
.then((data)=>{
    console.log("Wife:I have the tickets");
    console.log("Husband:We should go in");
    console.log("Wife:No,I am hungry");
    return new Promise((resolve,reject)=>{
        resolve(`${data} popcorn`);
    })
});

const getButter=getPopcorn
.then((data)=>{
    console.log("Husband:I got some popcorn");
    console.log("Husband:We should go in");
console.log("Wife: No, I want butter");
return new Promise((resolve,reject)=>{
    resolve(`${data} butter`);
})
})

const getColdDrink = getButter
.then((data)=>{
    console.log("Husband:I got butter");
    console.log("Husband:We should go in");
    console.log("Wife: No, I want cold drink");
    return new Promise((resolve,reject)=>{
        resolve(`${data} cold drink`);
})
})

getColdDrink.then((data)=>console.log(data));

console.log("Person4: shows the ticket")
console.log("Person5: shows the ticket")