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


   const data = await Promise.all([wifeBringsTickets,getPopcorn,getButter,getColdDrink])
   return data;
};
preMovie()
.then((t)=>console.log(t));
console.log('Person4: Shows ticket');
console.log('Person5: Shows ticket');