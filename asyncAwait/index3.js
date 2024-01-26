console.log('Person1: Shows ticket');
console.log('Person2: Shows ticket');

const preMovie = async ()=>{
    const wifeBringsTickets = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("ticket")
        },3000);
    });

    const getPopcorn = new Promise((resolve,reject)=>{
        resolve("Popcorn");
    })
    const getButter = new Promise((resolve,reject)=>{
        resolve("Butter");
    })
    const getColdDrink = new Promise((resolve,reject)=>{
        resolve("Cold-drink");
    });

    let ticket = await wifeBringsTickets;
console.log(`Wife: I have the ${ticket}`);
console.log("Husband:We should go in");
    console.log("Wife:No,I am hungry");
    let popcorn = await getPopcorn;
    console.log(`Husband:I got some ${popcorn}`);
    console.log("Husband:We should go in");
    console.log("Wife:No,I want cold-drink");
    let coldDrink = await getColdDrink;
    console.log(`Husband:I got some ${coldDrink}`);
    console.log("Husband:Anything else");
    console.log("Wife: lets go we are getting late");

    return ticket;
};
preMovie()
.then((t)=>console.log(`Person3: Shows ${t}`));
console.log('Person4: Shows ticket');
console.log('Person5: Shows ticket');